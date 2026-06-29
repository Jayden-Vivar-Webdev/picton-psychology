import type { Metadata } from "next"

import { LoginForm } from "./login-form"

export const metadata: Metadata = {
  title: "Sign in | Picton Psychology",
  description: "Restricted area.",
  robots: { index: false, follow: false },
}

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>
}) {
  const { from } = await searchParams
  const redirectTo = from && from.startsWith("/admin") ? from : "/admin"

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="flex flex-col gap-2 text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Picton Psychology
          </span>
          <h1 className="font-serif text-2xl font-medium text-foreground">
            Admin access
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground">
            This area is restricted. Enter the shared admin password to
            continue.
          </p>
        </div>

        <LoginForm redirectTo={redirectTo} />
      </div>
    </main>
  )
}
