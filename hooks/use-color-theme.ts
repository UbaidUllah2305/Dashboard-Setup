"use client"

import { useCallback, useEffect, useMemo, useState } from "react"

import { palettes, type ThemePalette } from "@/lib/theme/palettes"

const STORAGE_KEY = "app-theme-palette"

const applyPalette = (palette: ThemePalette) => {
  const root = document.documentElement
  Object.entries(palette.values).forEach(([variable, value]) => {
    root.style.setProperty(variable, value)
  })
}

export const useColorTheme = () => {
  const [activeId, setActiveId] = useState<string>(() => {
    if (typeof window === "undefined") return palettes[0]?.id ?? "neutral"
    return localStorage.getItem(STORAGE_KEY) ?? palettes[0]?.id ?? "neutral"
  })

  const activePalette = useMemo(
    () => palettes.find((palette) => palette.id === activeId) ?? palettes[0],
    [activeId]
  )

  useEffect(() => {
    if (!activePalette) return
    applyPalette(activePalette)
    localStorage.setItem(STORAGE_KEY, activePalette.id)
  }, [activePalette])

  const setPalette = useCallback((id: string) => {
    setActiveId(id)
  }, [])

  return {
    palettes,
    activePalette,
    setPalette,
  }
}
