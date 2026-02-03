"use client"

import Link from "next/link"

/**
 * Rendered only on the client (via dynamic ssr: false) so browser extensions
 * cannot mutate server HTML and cause hydration errors.
 */
export function NotFoundContent() {
  return (
    <>
      <h1 className="text-2xl font-bold">404</h1>
      <p className="text-muted-foreground mt-2">This page could not be found.</p>
      <Link
        href="/"
        className="text-primary mt-6 underline underline-offset-4 hover:no-underline"
      >
        Return home
      </Link>
    </>
  )
}
