"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BellRing,
  Building2,
  ChevronDown,
  LineChart,
  Package2,
  Settings,
  ShieldCheck,
  Shirt,
  Users,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuAction,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarSeparator,
  SidebarRail,
  useSidebar,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const mainNavigation = [
  {
    title: "Audience",
    href: "/audience",
    icon: Users,
  },
  {
    title: "Security",
    href: "/security",
    icon: ShieldCheck,
  },
  {
    title: "Engagement",
    href: "/engagement",
    icon: BellRing,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: LineChart,
  },
]

const workspaceOptions = [
  {
    name: "Acme Inc",
    plan: "Enterprise",
  },
  {
    name: "Acme Corp",
    plan: "Growth",
  },
  {
    name: "New workspace",
    plan: "Create",
  },
]

const catalogNavigation = [
  {
    id: "apparel",
    title: "Apparel",
    icon: Shirt,
    href: "/catalog/apparel",
    subcategories: [
      {
        id: "apparel-men",
        title: "Men",
        href: "/catalog/apparel/men",
        products: [
          { id: "apparel-men-tshirts", title: "T-Shirts", href: "/catalog/apparel/men/t-shirts" },
          { id: "apparel-men-outerwear", title: "Outerwear", href: "/catalog/apparel/men/outerwear" },
        ],
      },
      {
        id: "apparel-women",
        title: "Women",
        href: "/catalog/apparel/women",
        products: [
          { id: "apparel-women-activewear", title: "Activewear", href: "/catalog/apparel/women/activewear" },
          { id: "apparel-women-dresses", title: "Dresses", href: "/catalog/apparel/women/dresses" },
        ],
      },
    ],
  },
  {
    id: "hardware",
    title: "Hardware",
    icon: Package2,
    href: "/catalog/hardware",
    subcategories: [
      {
        id: "hardware-mobile",
        title: "Mobile",
        href: "/catalog/hardware/mobile",
        products: [
          { id: "hardware-mobile-smartphones", title: "Smartphones", href: "/catalog/hardware/mobile/smartphones" },
          { id: "hardware-mobile-tablets", title: "Tablets", href: "/catalog/hardware/mobile/tablets" },
        ],
      },
      {
        id: "hardware-desktop",
        title: "Desktop",
        href: "/catalog/hardware/desktop",
        products: [
          { id: "hardware-desktop-workstations", title: "Workstations", href: "/catalog/hardware/desktop/workstations" },
          { id: "hardware-desktop-accessories", title: "Accessories", href: "/catalog/hardware/desktop/accessories" },
        ],
      },
    ],
  },
]

type Category = (typeof catalogNavigation)[number]
type Subcategory = NonNullable<Category["subcategories"]>[number]

export function AppSidebar() {
  const pathname = usePathname()
  const { state: sidebarState } = useSidebar()
  const isSidebarCollapsed = sidebarState === "collapsed"

  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(catalogNavigation.map((category) => [category.id, false]))
  )
  const [expandedSubcategories, setExpandedSubcategories] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      catalogNavigation.flatMap((category) =>
        category.subcategories?.map((subcategory) => [subcategory.id, false]) ?? []
      )
    )
  )

  const isActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href)

  const isSubcategoryActive = (subcategory: Subcategory) =>
    isActive(subcategory.href) ||
    subcategory.products?.some((product) => isActive(product.href))

  const isCategoryActive = (category: Category) =>
    isActive(category.href) ||
    category.subcategories?.some((subcategory) => isSubcategoryActive(subcategory))

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  const toggleSubcategory = (subcategoryId: string) => {
    setExpandedSubcategories((prev) => ({
      ...prev,
      [subcategoryId]: !prev[subcategoryId],
    }))
  }

  return (
    <Sidebar collapsible="icon" className="data-[side=left]:border-r">
      <SidebarRail />
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="items-start">
                  <Building2 className="mt-0.5 size-4" />
                  <span className="flex flex-1 flex-col text-left">
                    <span className="text-sm font-semibold text-sidebar-foreground">
                      Acme Inc
                    </span>
                    <span className="text-xs text-sidebar-foreground/70">
                      Enterprise plan
                    </span>
                  </span>
                  <ChevronDown className="size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                <DropdownMenuLabel>Select workspace</DropdownMenuLabel>
                {workspaceOptions.map((workspace) => (
                  <DropdownMenuItem key={workspace.name} className="flex flex-col items-start">
                    <span className="text-sm font-medium">{workspace.name}</span>
                    <span className="text-xs text-muted-foreground">{workspace.plan}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="overflow-x-hidden scrollbar-hide pb-4">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs uppercase tracking-wide text-sidebar-foreground/70">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavigation.map((item) => (
                <SidebarMenuItem key={item.href}>
                  <SidebarMenuButton asChild isActive={isActive(item.href)} tooltip={item.title}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Catalog</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {catalogNavigation.map((category) => (
                <SidebarMenuItem key={category.id}>
                  <SidebarMenuButton
                    asChild
                    tooltip={category.title}
                    isActive={isCategoryActive(category)}
                  >
                    <Link href={category.href}>
                      <category.icon />
                      <span>{category.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  {!!category.subcategories?.length && !isSidebarCollapsed ? (
                    <SidebarMenuAction
                      type="button"
                      aria-label={`${expandedCategories[category.id] ? "Collapse" : "Expand"} ${category.title}`}
                      aria-expanded={!!expandedCategories[category.id]}
                      aria-controls={`${category.id}-subcategories`}
                      onClick={(event) => {
                        event.preventDefault()
                        event.stopPropagation()
                        toggleCategory(category.id)
                      }}
                    >
                      <ChevronDown
                        className={cn(
                          "size-4 transition-transform",
                          !expandedCategories[category.id] && "-rotate-90"
                        )}
                      />
                    </SidebarMenuAction>
                  ) : null}
                  {expandedCategories[category.id] && !!category.subcategories?.length ? (
                    <SidebarMenuSub
                      id={`${category.id}-subcategories`}
                      className="border-l border-sidebar-border/50"
                    >
                      {category.subcategories.map((subcategory) => {
                        const subcategoryActive = isSubcategoryActive(subcategory)
                        const productListId = `${subcategory.id}-products`

                        return (
                          <SidebarMenuSubItem key={subcategory.id}>
                            <SidebarMenuSubButton asChild isActive={subcategoryActive}>
                              <Link href={subcategory.href}>
                                <span>{subcategory.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                            {!!subcategory.products?.length && !isSidebarCollapsed ? (
                              <SidebarMenuAction
                                type="button"
                                showOnHover
                                aria-label={`${expandedSubcategories[subcategory.id] ? "Collapse" : "Expand"} ${subcategory.title}`}
                                aria-expanded={!!expandedSubcategories[subcategory.id]}
                                aria-controls={productListId}
                                onClick={(event) => {
                                  event.preventDefault()
                                  event.stopPropagation()
                                  toggleSubcategory(subcategory.id)
                                }}
                              >
                                <ChevronDown
                                  className={cn(
                                    "size-4 transition-transform",
                                    !expandedSubcategories[subcategory.id] && "-rotate-90"
                                  )}
                                />
                              </SidebarMenuAction>
                            ) : null}
                            {expandedSubcategories[subcategory.id] && !!subcategory.products?.length ? (
                              <div
                                id={productListId}
                                className="ml-6 mt-1 flex flex-col gap-1"
                              >
                                {subcategory.products.map((product) => {
                                  const productActive = isActive(product.href)
                                  return (
                                    <Link
                                      key={product.id}
                                      href={product.href}
                                      aria-current={productActive ? "page" : undefined}
                                      className={cn(
                                        "truncate text-xs text-muted-foreground transition-colors hover:text-sidebar-foreground",
                                        productActive && "text-sidebar-foreground font-medium"
                                      )}
                                    >
                                      {product.title}
                                    </Link>
                                  )
                                })}
                              </div>
                            ) : null}
                          </SidebarMenuSubItem>
                        )
                      })}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton tooltip="Settings">
                  <Settings className="size-4" />
                  <span>Settings</span>
                  <ChevronDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                side="top" 
                className="w-56"
                sideOffset={8}
              >
                <DropdownMenuItem asChild>
                  <Link href="/settings/profile" className="flex items-center gap-2">
                    <Users className="size-4" />
                    <span>Profile Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings/password" className="flex items-center gap-2">
                    <ShieldCheck className="size-4" />
                    <span>Change Password</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings/preferences" className="flex items-center gap-2">
                    <Settings className="size-4" />
                    <span>Preferences</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/settings/notifications" className="flex items-center gap-2">
                    <BellRing className="size-4" />
                    <span>Notifications</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
