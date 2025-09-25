"use client"

import { useMemo } from "react"
import { usePathname } from "next/navigation"
import {
  ChevronDown,
  LogIn,
  LogOut,
  RefreshCcw,
} from "lucide-react"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { useAuth } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/layout/theme-toggle"

const QUICK_SIGN_IN = {
  email: "avery@acme.dev",
  password: "pass1234",
}

export function AppNavbar() {
  const pathname = usePathname()
  const { user, isAuthenticated, isLoading, error, session, login, logout, refresh } =
    useAuth()

  const initials = useMemo(() => user?.name?.match(/\b\w/g)?.join("") ?? "AV", [
    user,
  ])

  return (
    <header className="sticky top-0 z-30 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-4 px-4 py-3">
        <div className="flex flex-1 items-center gap-3">
          <SidebarTrigger className="md:hidden" />
          <SidebarTrigger className="hidden md:inline-flex" />
          <div className="hidden md:block">
            <span className="text-sm font-medium">
              {pathname === "/" ? "Dashboard" : pathname.replace(/^\//, "").split("/").map((segment: string) => 
                segment.charAt(0).toUpperCase() + segment.slice(1)
              ).join(" › ")}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <SessionStatus status={session.status} />
          <AuthMenu
            initials={initials}
            isAuthenticated={isAuthenticated}
            isLoading={isLoading}
            error={error}
            onLogin={() => login(QUICK_SIGN_IN)}
            onLogout={logout}
            onRefresh={refresh}
            name={user?.name}
            email={user?.email}
          />
        </div>
      </div>
    </header>
  )
}

type AuthMenuProps = {
  initials: string
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
  name?: string
  email?: string
  onLogin: () => void
  onLogout: () => void
  onRefresh: () => void
}

function AuthMenu({
  initials,
  isAuthenticated,
  isLoading,
  error,
  name,
  email,
  onLogin,
  onLogout,
  onRefresh,
}: AuthMenuProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2 px-2">
          <Avatar className="size-8">
            <AvatarImage src={undefined} alt={name ?? "Guest avatar"} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <ChevronDown className="size-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64">
        <DropdownMenuLabel className="flex flex-col gap-1">
          <span className="text-sm font-medium">
            {name ?? "Guest"}
          </span>
          <span className="text-xs text-muted-foreground">
            {email ?? "Not authenticated"}
          </span>
          {error ? (
            <span className="text-destructive text-xs font-medium">{error}</span>
          ) : null}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          disabled={isLoading}
          onClick={isAuthenticated ? onLogout : onLogin}
          className="flex items-center justify-between"
        >
          <span>{isLoading ? "Loading..." : (isAuthenticated ? "Sign out" : "Quick sign-in")}</span>
          <DropdownMenuShortcut>
            {isAuthenticated ? <LogOut className="size-4" /> : <LogIn className="size-4" />}
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem disabled={isLoading} onClick={onRefresh}>
          Refresh session
          <DropdownMenuShortcut>
            <RefreshCcw className="size-4" />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

type SessionStatusProps = {
  status: "idle" | "active" | "refreshing" | "expired" | "error"
}

function SessionStatus({ status }: SessionStatusProps) {
  const labelMap: Record<SessionStatusProps["status"], string> = {
    idle: "Signed out",
    active: "Active session",
    refreshing: "Refreshing",
    expired: "Expired",
    error: "Session error",
  }

  const styleMap: Record<SessionStatusProps["status"], string> = {
    idle: "bg-muted text-muted-foreground",
    active: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400",
    refreshing: "bg-amber-500/15 text-amber-600 dark:text-amber-400",
    expired: "bg-destructive/20 text-destructive",
    error: "bg-destructive/20 text-destructive",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2 py-1 text-xs font-medium",
        styleMap[status]
      )}
      aria-live="polite"
    >
      {labelMap[status]}
    </span>
  )
}
