# Next.js 15 Auth Dashboard

A fully client-ready dashboard starter built with the latest Next.js App Router, TypeScript, Tailwind CSS v4, ShadCN UI, and Redux Toolkit. It ships with a responsive sidebar + navbar shell, simulated auth flow, and light/dark theme support powered by CSS variables in `app/globals.css`.

### ✨ Highlights

- **Next.js 15 + App Router** with TypeScript and strict ESLint defaults.
- **Tailwind CSS v4** utility pipeline with OKLCH design tokens managed in `app/globals.css`.
- **ShadCN UI** sidebar, navbar, dropdowns, cards, tooltips, sheets, and inputs for a polished shell.
- **Redux Toolkit auth stack** featuring dual slices (`auth` and `session`) plus reusable hooks for login/logout/refresh flows.
- **Light/dark theme toggle** built with `next-themes`, applied globally via CSS variables.

### 🚀 Quick start

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to explore the dashboard.

### 🔐 Auth workflow

- Open the avatar menu in the navbar to trigger the **Quick sign-in** action. This dispatches `auth/signIn` and hydrates the session slice.
- Use **Refresh session** to exercise the `session/refresh` thunk and update tokens.
- Sign out to clear both slices and return to the guest state. The summary card on the home page mirrors this state using the exported `useAuth` hook.

### � Theme controls

- `app/globals.css` defines all semantic colors (`--primary`, `--accent`, `--sidebar`, etc.) consumed by Tailwind via the inline `@theme` block.
- The navbar theme menu lets you switch between light, dark, or system mode using `next-themes`.

### 📁 Key modules

- `components/layout/app-shell.tsx` – wraps the sidebar, navbar, and content area.
- `components/layout/app-navbar.tsx` – navigation bar with theme toggle and auth menu.
- `components/layout/theme-toggle.tsx` – dropdown toggle powering the light/dark switch.
- `components/layout/app-sidebar.tsx` – ShadCN sidebar implementation with grouped navigation.
- `lib/features/auth/*.ts` – Redux Toolkit slices for user/state (`auth`) and tokens (`session`).
Deploy to any Node-compatible host (Vercel, Netlify, Render). Build assets with:

```bash
npm run build
npm start
```

Ensure environment variables for real authentication backends are injected before wiring the placeholder API.

---

**Built with ❤️ using Next.js 15, TypeScript, and Tailwind CSS**

A modern, production-ready dashboard application built with Next.js 15, TypeScript, Tailwind CSS v4, and ShadCN UI components. Features a comprehensive authentication system, responsive sidebar navigation, and professional settings management.

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwindcss)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.9.0-764abc?style=for-the-badge&logo=redux)

## 🚀 Features

### 🎨 **Modern UI/UX**
- **Responsive Design**: Mobile-first approach with desktop enhancements
- **Dark/Light Theme**: Seamless theme switching with next-themes
- **Professional Layout**: Collapsible sidebar with icon-only collapsed state
- **Smooth Animations**: Subtle transitions and hover effects
- **Accessibility**: Full keyboard navigation and screen reader support

### 🔐 **Authentication System**
- **Redux Toolkit Integration**: Dual-slice architecture (auth + session)
- **Simulated Auth Flow**: Complete login/logout/refresh cycle
- **Session Management**: Token-based authentication with expiration handling
- **Loading States**: Professional loading indicators throughout

### 🧭 **Navigation & Routing**
- **Collapsible Sidebar**: Hide/show with Cmd+B or click toggle
- **Hierarchical Catalog**: Expandable categories and subcategories
- **Breadcrumb Navigation**: Clear path indication in navbar
- **Keyboard Shortcuts**: Cmd+1-4 for quick navigation, ? for help

### ⚙️ **Settings Management**
- **Profile Settings**: Avatar upload, personal information management
- **Password Security**: Secure password change with validation
- **Preferences**: Theme, layout, and dashboard customization
- **Notifications**: Email and push notification configuration

## 📦 Tech Stack

### **Core Framework**
- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [React 19](https://react.dev/) - Latest React with concurrent features
- [TypeScript 5](https://www.typescriptlang.org/) - Type-safe development

### **Styling & UI**
- [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework
- [ShadCN UI](https://ui.shadcn.com/) - High-quality component library
- [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icons
- [next-themes](https://github.com/pacocoursey/next-themes) - Theme management

### **State Management**
- [Redux Toolkit](https://redux-toolkit.js.org/) - Modern Redux development
- [React Redux](https://react-redux.js.org/) - Official React bindings

## 🏁 Quick Start

### Prerequisites
- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nextjs-dashboard-starter.git
cd nextjs-dashboard-starter

# Install dependencies
npm install

# Start development server
npm run dev

# Open your browser
open http://localhost:3000
```

### Build for Production

```bash
# Create optimized build
npm run build

# Start production server
npm start
```

## 📂 Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── globals.css              # Global styles and CSS variables
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Dashboard homepage
│   └── settings/                # Settings pages
│       ├── page.tsx             # Settings overview
│       ├── profile/page.tsx     # Profile management
│       ├── password/page.tsx    # Password security
│       ├── preferences/page.tsx # User preferences
│       └── notifications/page.tsx # Notification settings
├── components/                   # Reusable UI components
│   ├── layout/                  # Layout components
│   │   ├── app-shell.tsx        # Main layout wrapper
│   │   ├── app-sidebar.tsx      # Sidebar navigation
│   │   ├── app-navbar.tsx       # Top navigation bar
│   │   └── theme-toggle.tsx     # Theme switcher
│   └── ui/                      # ShadCN UI components
├── hooks/                       # Custom React hooks
│   ├── use-auth.ts             # Authentication hook
│   ├── use-redux.ts            # Redux typed hooks
│   └── use-keyboard-shortcuts.ts # Keyboard navigation
├── lib/                         # Utility functions
│   ├── features/               # Redux slices
│   │   └── auth/              # Authentication state
│   ├── store.ts               # Redux store configuration
│   └── utils.ts               # Common utilities
└── README.md                   # Project documentation
```

## 🎯 Key Features Guide

### Authentication Flow
1. **Sign In**: Click avatar menu → "Quick sign-in" (demo credentials)
2. **Session Management**: Automatic token refresh and expiration handling
3. **Sign Out**: Clears all authentication state and redirects

### Navigation
- **Sidebar Toggle**: Cmd+B (⌘+B) or click hamburger menu
- **Fullscreen Mode**: Cmd+F (⌘+F) or click fullscreen button in navbar
- **Quick Navigation**: Cmd+1-4 for main sections
- **Keyboard Help**: Press ? to see all shortcuts
- **Category Expansion**: Click arrows to expand/collapse catalog sections

### Settings Management
- **Profile**: Update personal information and avatar
- **Security**: Change password with validation requirements
- **Preferences**: Customize dashboard appearance and behavior
- **Notifications**: Configure email and push notification preferences

### Theme System
- **Light/Dark Mode**: Toggle in navbar or system preference
- **CSS Variables**: Consistent theming across all components
- **Smooth Transitions**: Animated theme switching

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd + B` | Toggle sidebar |
| `Cmd + F` | Toggle fullscreen mode |
| `F11` | Toggle fullscreen (browser standard) |
| `Cmd + 0` / `Cmd + H` | Navigate to Dashboard |
| `Cmd + 1` | Navigate to Audience |
| `Cmd + 2` | Navigate to Security |
| `Cmd + 3` | Navigate to Engagement |
| `Cmd + 4` | Navigate to Analytics |
| `?` | Show keyboard shortcuts |

## 🚦 Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Type checking
npx tsc --noEmit     # TypeScript type checking
```

## 🎨 Customization

### Adding New Navigation Items
```typescript
// components/layout/app-sidebar.tsx
const mainNavigation = [
  {
    title: "Your Section",
    href: "/your-route",
    icon: YourIcon,
  },
  // ... existing items
]
```

### Creating New Settings Pages
```typescript
// app/settings/your-setting/page.tsx
import { AppShell } from "@/components/layout/app-shell"

export default function YourSetting() {
  return (
    <AppShell>
      {/* Your settings content */}
    </AppShell>
  )
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🔗 Deployment
