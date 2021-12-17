import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react'
import { ACTIONS, AuthState, initialState, reducer } from './reducer'
import auth from '@react-native-firebase/auth'

const AuthContext = React.createContext([initialState, {}])

export type AuthProviderProps = {
  children: ReactNode
}

export type AuthFunctions = {
  login?: ({
    email,
    password,
  }: {
    email: string
    password: string
  }) => Promise<void>
  logout?: () => void
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const login = useCallback(async ({ email, password }) => {
    return auth().signInWithEmailAndPassword(email, password)
  }, [])

  const logout = useCallback(() => {
    dispatch({ type: ACTIONS.LOGOUT })
  }, [])

  const handleAuthStateChanged = useCallback(async firebaseUser => {
    if (!firebaseUser) {
      dispatch({
        type: ACTIONS.SET_INITIALIZED,
        payload: { isInitialized: true },
      })
      return
    }

    const token = await firebaseUser.getIdToken(true)
    console.info(token)
    // TODO perform login

    dispatch({ type: ACTIONS.SET_USER, payload: { user: firebaseUser } })
  }, [])

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleAuthStateChanged)
    return subscriber
  }, [handleAuthStateChanged])

  return (
    <AuthContext.Provider value={[state, { login, logout }]}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = (): [AuthState, AuthFunctions] => {
  const ctx = useContext(AuthContext)
  if (!ctx) {
    throw Error(
      'The `useAuth` hook must be called from a descendent of the `AuthProvider`.',
    )
  }
  return ctx as [AuthState, AuthFunctions]
}
