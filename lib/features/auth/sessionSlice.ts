import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

import type { RootState } from "@/lib/store"
import type { SessionPayload } from "@/lib/api/auth"
import { refreshSession as requestRefreshSession } from "@/lib/api/auth"

export type SessionStatus = "idle" | "active" | "refreshing" | "expired" | "error"

export type SessionState = {
  status: SessionStatus
  credentials: SessionPayload | null
  error: string | null
}

const initialState: SessionState = {
  status: "idle",
  credentials: null,
  error: null,
}

export const refreshSession = createAsyncThunk(
  "session/refresh",
  async (_: void, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    const refreshToken = state.session.credentials?.refreshToken

    if (!refreshToken) {
      return rejectWithValue("No refresh token available")
    }

    try {
      const session = await requestRefreshSession(refreshToken)
      return session
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Unable to refresh the current session"
      return rejectWithValue(message)
    }
  }
)

const sessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    setSession(state, action: { payload: SessionPayload }) {
      state.status = "active"
      state.error = null
      state.credentials = action.payload
    },
    clearSession(state) {
      state.status = "idle"
      state.error = null
      state.credentials = null
    },
    expireSession(state) {
      state.status = "expired"
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(refreshSession.pending, (state) => {
        state.status = "refreshing"
        state.error = null
      })
      .addCase(refreshSession.fulfilled, (state, action) => {
        state.status = "active"
        state.credentials = action.payload
      })
      .addCase(refreshSession.rejected, (state, action) => {
        state.status = "error"
        state.error = typeof action.payload === "string" ? action.payload : null
      })
  },
})

export const { setSession, clearSession, expireSession } = sessionSlice.actions
export const selectSession = (state: RootState) => state.session
export default sessionSlice.reducer
