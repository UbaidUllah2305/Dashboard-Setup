"use client"

import { useEffect, useState } from "react"
import { NotFoundContent } from "@/components/not-found-content"

/**
 * Renders 404 content only after mount so server and initial client both output
 * the same minimal tree (no Suspense/dynamic). Avoids hydration mismatch when
 * browser extensions mutate the DOM.
 */
export function NotFoundClient() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center text-center"
      suppressHydrationWarning
    >
      {mounted ? <NotFoundContent /> : null}
    </div>
  )
}
