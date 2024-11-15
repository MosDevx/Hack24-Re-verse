// src/stores/App-store.ts
import { useActionState } from 'react'
import { createStore } from 'zustand/vanilla'

export type AppState = {
  count: number,
  userName:string

}

export type AppActions = {

  setUserName:(username:string)=> void

  decrementCount: () => void
  incrementCount: () => void
}

export type AppStore = AppState & AppActions

export const defaultInitState: AppState = {
  count: 0,
  userName:"dan"
 
}

export const createAppStore = (
  initState: AppState = defaultInitState,
) => {
  return createStore<AppStore>()((set) => ({
    ...initState,
    setUserName:(userName) =>set(()=>({userName:userName})),
    decrementCount: () => set((state) => ({ count: state.count - 1 })),
    incrementCount: () => set((state) => ({ count: state.count + 1 })),
  }))
}
