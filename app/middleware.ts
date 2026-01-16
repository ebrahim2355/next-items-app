import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const auth = req.cookies.get("auth");

    if (!auth && req.nextUrl.pathname.startsWith("/add-item")) {
        return NextResponse.redirect(new URL("/login", req.url));
    }
}