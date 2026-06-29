import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { ADMIN_COOKIE, verifySessionToken } from "@/lib/admin-auth"

// Gate every /admin route behind the shared password, except the login page itself.
export const config = {
  matcher: ["/admin/:path*"],
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // The login page must stay reachable.
  if (pathname === "/admin/login") {
    return NextResponse.next()
  }

  const secret = process.env.ADMIN_SESSION_SECRET
  const token = request.cookies.get(ADMIN_COOKIE)?.value
  const authorized = secret ? await verifySessionToken(secret, token) : false

  if (!authorized) {
    const loginUrl = request.nextUrl.clone()
    loginUrl.pathname = "/admin/login"
    loginUrl.search = ""
    loginUrl.searchParams.set("from", pathname)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}
