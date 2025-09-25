import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit"

import type { RootState } from "@/lib/store"
import type { AuthResponse, Credentials } from "@/lib/api/auth"
import { signIn as requestSignIn, signOut as requestSignOut } from "@/lib/api/auth"
import { setSession, clearSession } from "@/lib/features/auth/sessionSlice"

export type AuthStatus = "idle" | "loading" | "authenticated" | "error"

export type AuthState = {
  user: AuthResponse["user"] | null
  status: AuthStatus
  error: string | null
}

const initialState: AuthState = {
  user: null,
  status: "idle",
  error: null,
}

export const signIn = createAsyncThunk(
  "auth/signIn",
  async (credentials: Credentials, { dispatch, rejectWithValue }) => {
    try {
      const response = await requestSignIn(credentials)
      dispatch(setSession(response.session))
      return response.user
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to sign in right now"
      return rejectWithValue(message)
    }
  }
)

export const signOut = createAsyncThunk(
  "auth/signOut",
  async (_: void, { dispatch, rejectWithValue }) => {
    try {
      await requestSignOut()
      dispatch(clearSession())
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Unable to sign out right now"
      return rejectWithValue(message)
    }
  }
)

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "loading"
        state.error = null
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "authenticated"
        state.user = action.payload
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "error"
        state.error = typeof action.payload === "string" ? action.payload : null
      })
      .addCase(signOut.pending, (state) => {
        state.status = "loading"
      })
      .addCase(signOut.fulfilled, (state) => {
        state.status = "idle"
        state.user = null
        state.error = null
      })
      .addMatcher(
        isAnyOf(signOut.rejected),
        (state, action) => {
          state.status = "error"
          state.error = typeof action.payload === "string" ? action.payload : null
        }
      )
  },
})

export const selectAuth = (state: RootState) => state.auth
export default authSlice.reducer
