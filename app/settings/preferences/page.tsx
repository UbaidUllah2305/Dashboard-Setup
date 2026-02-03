"use client"

import { AppShellClient } from "@/components/layout/app-shell-client"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function PreferencesSettings() {
  return (
    <AppShellClient>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Preferences</h1>
        <p className="text-muted-foreground">
          Customize your dashboard experience and application settings.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Appearance</CardTitle>
            <CardDescription>
              Customize the look and feel of your dashboard.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Theme</Label>
              <p className="text-sm text-muted-foreground">
                Use the theme toggle in the navbar to switch between light and dark mode.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label>Sidebar</Label>
              <p className="text-sm text-muted-foreground">
                Press Cmd+B (⌘+B) to toggle sidebar visibility.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dashboard</CardTitle>
            <CardDescription>
              Configure your dashboard layout and data refresh settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Auto-refresh</Label>
              <p className="text-sm text-muted-foreground">
                Automatically refresh dashboard data every 5 minutes.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label>Compact view</Label>
              <p className="text-sm text-muted-foreground">
                Show more data in less space on smaller screens.
              </p>
            </div>
            
            <Button variant="outline">Reset to Defaults</Button>
          </CardContent>
        </Card>
      </div>
    </AppShellClient>
  )
}