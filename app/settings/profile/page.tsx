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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function ProfileSettings() {
  return (
    <AppShellClient>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Profile Settings</h1>
        <p className="text-muted-foreground">
          Manage your profile information and preferences.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Update your personal information and profile picture.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="size-20">
                <AvatarImage src={undefined} alt="Profile" />
                <AvatarFallback>AV</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                Change Photo
              </Button>
            </div>
            
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="Avery Baker" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="avery@acme.dev" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="title">Job Title</Label>
                <Input id="title" placeholder="Product Manager" />
              </div>
            </div>

            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Settings</CardTitle>
            <CardDescription>
              Configure your account preferences and settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="timezone">Timezone</Label>
              <Input id="timezone" placeholder="UTC-8 (Pacific Time)" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="language">Language</Label>
              <Input id="language" placeholder="English (US)" />
            </div>
            <Button variant="outline">Update Preferences</Button>
          </CardContent>
        </Card>
      </div>
    </AppShellClient>
  )
}