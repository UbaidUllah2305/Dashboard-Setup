"use client"

import type { ReactNode } from "react"

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { AppNavbar } from "@/components/layout/app-navbar"

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider>
      <div
        className="flex h-screen w-full bg-background text-foreground"
        suppressHydrationWarning
      >
        {/* Decoy for browser extensions that inject into #booster_root; keeps them from mutating the layout div and causing hydration errors */}
        <div id="booster_root" suppressHydrationWarning hidden aria-hidden />
        <AppSidebar />
        <SidebarInset className="flex flex-1 flex-col min-h-0">
          <AppNavbar />
          <div className="flex-1 overflow-y-auto overflow-x-hidden">
            <main className="min-h-full">
              <div className="flex flex-col gap-6 p-6">{children}</div>
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
