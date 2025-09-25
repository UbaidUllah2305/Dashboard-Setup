import { configureStore } from "@reduxjs/toolkit"

import authReducer from "@/lib/features/auth/authSlice"
import sessionReducer from "@/lib/features/auth/sessionSlice"

export const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer,
      session: sessionReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  })

export const store = makeStore()

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore["getState"]>
export type AppDispatch = AppStore["dispatch"]
