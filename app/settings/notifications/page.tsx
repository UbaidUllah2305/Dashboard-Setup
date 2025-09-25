"use client"

import { AppShell } from "@/components/layout/app-shell"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function NotificationSettings() {
  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Notifications</h1>
        <p className="text-muted-foreground">
          Manage how and when you receive notifications.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Email Notifications</CardTitle>
            <CardDescription>
              Choose what email notifications you want to receive.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Security alerts</Label>
              <p className="text-sm text-muted-foreground">
                Get notified about important security events and login attempts.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label>Weekly reports</Label>
              <p className="text-sm text-muted-foreground">
                Receive a summary of your dashboard metrics every week.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label>System updates</Label>
              <p className="text-sm text-muted-foreground">
                Stay informed about new features and system maintenance.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Push Notifications</CardTitle>
            <CardDescription>
              Configure in-app and browser notifications.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Real-time alerts</Label>
              <p className="text-sm text-muted-foreground">
                Get instant notifications for critical events.
              </p>
            </div>
            
            <div className="space-y-2">
              <Label>Daily digest</Label>
              <p className="text-sm text-muted-foreground">
                Receive a summary of daily activities and metrics.
              </p>
            </div>
            
            <Button>Save Notification Settings</Button>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}