import React, { useCallback, useContext, useEffect, useReducer } from 'react'
import { Camera } from 'react-native-vision-camera'
import { ACTIONS, initialState, PermissionsState, reducer } from './reducer'

const PermissionsContext = React.createContext([initialState, {}])

export type PermissionsProviderProps = {
  children: React.ReactNode
}

export type PermissionsFunctions = {
  requestCamera?: () => Promise<void>
}

export const PermissionsProvider = ({ children }: PermissionsProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // TODO update permission when app comes from background

  const requestCamera = useCallback(async () => {
    const newCameraPermission = await Camera.requestCameraPermission()
    dispatch({
      type: ACTIONS.SET_CAMERA_PERMISSIONS,
      payload: { cameraPermissionStatus: newCameraPermission },
    })
  }, [])

  useEffect(() => {
    const getCameraPermissionStatus = async () => {
      const newCameraPermission = await Camera.getCameraPermissionStatus()
      dispatch({
        type: ACTIONS.SET_CAMERA_PERMISSIONS,
        payload: { cameraPermissionStatus: newCameraPermission },
      })
    }

    getCameraPermissionStatus()
  }, [])

  return (
    <PermissionsContext.Provider value={[state, { requestCamera }]}>
      {children}
    </PermissionsContext.Provider>
  )
}

export const usePermissions = (): [PermissionsState, PermissionsFunctions] => {
  const ctx = useContext(PermissionsContext)
  if (!ctx) {
    throw Error(
      'The `usePermissions` hook must be called from a descendent of the `PermissionsProvider`.',
    )
  }
  return ctx as [PermissionsState, PermissionsFunctions]
}
