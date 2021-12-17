import { CameraPermissionStatus } from 'react-native-vision-camera'

export enum ACTIONS {
  SET_CAMERA_PERMISSIONS = 'SET_CAMERA_PERMISSIONS',
}

export type PermissionsState = {
  cameraPermissionStatus: CameraPermissionStatus
}

export const initialState: PermissionsState = {
  cameraPermissionStatus: 'not-determined',
}

type Action = {
  type: ACTIONS
  payload?: Partial<PermissionsState>
}

export const reducer = (
  prevState: PermissionsState,
  { type, payload }: Action,
): PermissionsState => {
  switch (type) {
    case ACTIONS.SET_CAMERA_PERMISSIONS:
      return {
        ...prevState,
        cameraPermissionStatus:
          payload?.cameraPermissionStatus ?? 'not-determined',
      }

    default:
      return prevState
  }
}
