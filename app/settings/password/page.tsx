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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function PasswordSettings() {
  return (
    <AppShellClient>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Change Password</h1>
        <p className="text-muted-foreground">
          Update your account password to keep your account secure.
        </p>
      </div>

      <div className="max-w-md">
        <Card>
          <CardHeader>
            <CardTitle>Password Security</CardTitle>
            <CardDescription>
              Choose a strong password to protect your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="current">Current Password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="new">New Password</Label>
              <Input id="new" type="password" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm">Confirm New Password</Label>
              <Input id="confirm" type="password" />
            </div>
            
            <div className="pt-4">
              <Button>Update Password</Button>
            </div>
            
            <div className="text-xs text-muted-foreground">
              <p>Password requirements:</p>
              <ul className="mt-1 ml-4 list-disc space-y-1">
                <li>At least 8 characters long</li>
                <li>Include uppercase and lowercase letters</li>
                <li>Include at least one number</li>
                <li>Include at least one special character</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppShellClient>
  )
}