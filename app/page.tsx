"use client"

import {
  ArrowUpRight,
  BarChart3,
  Fingerprint,
  Users as UsersIcon,
} from "lucide-react"

import { AppShell } from "@/components/layout/app-shell"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/use-auth"
import { useKeyboardShortcuts } from "@/hooks/use-keyboard-shortcuts"

const metrics = [
  {
    title: "Active users",
    value: "1,204",
    change: "+8.3%",
    icon: UsersIcon,
    trend: "vs last week",
  },
  {
    title: "Conversion",
    value: "4.62%",
    change: "+0.4%",
    icon: BarChart3,
    trend: "Funnel completion",
  },
  {
    title: "Security score",
    value: "98",
    change: "stable",
    icon: Fingerprint,
    trend: "Policy compliance",
  },
]

export default function Home() {
  useKeyboardShortcuts()
  
  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here&apos;s what&apos;s happening with your workspace.
        </p>
      </div>
      
      <div className="grid gap-6 lg:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.title} className="border-border/60 transition-all hover:shadow-md">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardDescription>{metric.title}</CardDescription>
                <CardTitle className="text-3xl font-semibold">
                  {metric.value}
                </CardTitle>
              </div>
              <div className="rounded-full bg-primary/10 p-3">
                <metric.icon className="text-primary size-6" />
              </div>
            </CardHeader>
            <CardFooter className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{metric.trend}</span>
              <span className={`font-medium ${
                metric.change.includes('+') ? 'text-emerald-600' : 
                metric.change === 'stable' ? 'text-amber-600' : 'text-red-600'
              }`}>
                {metric.change}
              </span>
            </CardFooter>
          </Card>
        ))}
      </div>

      <AuthSummary />
    </AppShell>
  )
}

function AuthSummary() {
  const { isAuthenticated, user, session, isLoading, error, refresh } = useAuth()

  return (
    <Card className="border-border/60">
      <CardHeader>
        <CardTitle>Authentication status</CardTitle>
        <CardDescription>
          Reusable Redux Toolkit hooks keep auth state in sync across the app.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <StatusItem label="Signed in" value={isAuthenticated ? "Yes" : "No"} />
          <StatusItem label="Session state" value={session.status} />
          <StatusItem
            label="User"
            value={user ? `${user.name} (${user.email})` : "Anonymous"}
          />
        </div>
        <div className="rounded-lg border border-dashed border-border bg-muted/40 p-4 text-sm">
          <p className="font-medium">Quick tips</p>
          <ul className="mt-2 space-y-1 text-muted-foreground">
            <li>• Use the avatar menu to simulate sign-in</li>
            <li>• Refresh extends the current session tokens</li>
            <li>• Toggle sidebar with Cmd+B (⌘+B) or click the menu button</li>
            <li>• Switch between light and dark themes from the navbar</li>
            <li>• Press ? for keyboard shortcuts or Cmd+1-4 for quick navigation</li>
          </ul>
          {error ? (
            <p className="text-destructive mt-3 text-xs font-medium">{error}</p>
          ) : null}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Last refreshed: {session.credentials?.expiresAt ?? "not started"}
        </p>
        <Button onClick={() => refresh()} size="sm" disabled={isLoading}>
          {isLoading ? "Refreshing..." : "Refresh session"}
          <ArrowUpRight className="ml-2 size-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

function StatusItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-border bg-card px-3 py-2">
      <span className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </span>
      <span className="text-sm font-semibold text-foreground">{value}</span>
    </div>
  )
}


