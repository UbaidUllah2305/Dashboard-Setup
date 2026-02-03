"use client"

import dynamic from "next/dynamic"
import type { ReactNode } from "react"

const AppShellDynamic = dynamic(
  () => import("@/components/layout/app-shell").then((m) => m.AppShell),
  {
    ssr: false,
    loading: () => (
      <div
        className="flex h-screen w-full items-center justify-center bg-background text-muted-foreground"
        suppressHydrationWarning
      >
        Loading…
      </div>
    ),
  }
)

export function AppShellClient({ children }: { children: ReactNode }) {
  return <AppShellDynamic>{children}</AppShellDynamic>
}
