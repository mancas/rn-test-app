export enum ACTIONS {
  SET_USER = 'SET_USER',
  SET_INITIALIZED = 'SET_INITIALIZED',
  LOGOUT = 'LOGOUT',
}

export type AuthState = {
  isInitialized: boolean
  isLogged: boolean
  user?: {} | null
}

type Action = {
  type: ACTIONS
  payload?: Partial<AuthState>
}

export const initialState: AuthState = {
  isInitialized: false,
  isLogged: false,
  user: null,
}

export const reducer = (
  prevState: AuthState,
  { type, payload }: Action,
): AuthState => {
  switch (type) {
    case ACTIONS.SET_INITIALIZED:
      return {
        ...prevState,
        isInitialized: payload?.isInitialized ?? false,
      }

    case ACTIONS.SET_USER:
      return {
        ...prevState,
        user: payload?.user ?? {},
        isLogged: !!payload?.user,
      }

    case ACTIONS.LOGOUT:
      return {
        ...initialState,
      }

    default:
      return prevState
  }
}
