"use client"

import { useCallback, useMemo } from "react"

import { refreshSession } from "@/lib/features/auth/sessionSlice"
import { selectAuth, signIn, signOut } from "@/lib/features/auth/authSlice"
import { selectSession } from "@/lib/features/auth/sessionSlice"
import type { Credentials } from "@/lib/api/auth"
import { useAppDispatch, useAppSelector } from "@/hooks/use-redux"

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const auth = useAppSelector(selectAuth)
  const session = useAppSelector(selectSession)

  const login = useCallback(
    (credentials: Credentials) => dispatch(signIn(credentials)),
    [dispatch]
  )

  const logout = useCallback(() => dispatch(signOut()), [dispatch])

  const refresh = useCallback(() => dispatch(refreshSession()), [dispatch])

  const state = useMemo(
    () => ({
      ...auth,
      session,
      isAuthenticated: auth.status === "authenticated" && !!auth.user,
      isLoading: auth.status === "loading" || session.status === "refreshing",
    }),
    [auth, session]
  )

  return { ...state, login, logout, refresh }
}
