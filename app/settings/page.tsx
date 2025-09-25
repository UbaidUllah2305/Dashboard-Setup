"use client"

import Link from "next/link"
import { 
  Settings, 
  Users, 
  ShieldCheck, 
  BellRing,
  ArrowRight 
} from "lucide-react"

import { AppShell } from "@/components/layout/app-shell"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const settingsPages = [
  {
    title: "Profile Settings",
    description: "Manage your profile information, avatar, and personal details.",
    href: "/settings/profile",
    icon: Users,
  },
  {
    title: "Change Password",
    description: "Update your account password and security settings.",
    href: "/settings/password", 
    icon: ShieldCheck,
  },
  {
    title: "Preferences",
    description: "Customize your dashboard experience and application settings.",
    href: "/settings/preferences",
    icon: Settings,
  },
  {
    title: "Notifications",
    description: "Configure email and push notification preferences.",
    href: "/settings/notifications",
    icon: BellRing,
  },
]

export default function SettingsPage() {
  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings and preferences.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {settingsPages.map((setting) => (
          <Card key={setting.href} className="border-border/60 transition-all hover:shadow-md">
            <Link href={setting.href}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <setting.icon className="text-primary size-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{setting.title}</CardTitle>
                  </div>
                </div>
                <ArrowRight className="text-muted-foreground size-5" />
              </CardHeader>
              <CardContent>
                <CardDescription>{setting.description}</CardDescription>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </AppShell>
  )
}