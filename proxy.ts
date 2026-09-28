import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isLegalRoute = pathname === "/privacy" || pathname === "/terms";
  const isMaintenanceRoute = pathname === "/maintenance";
  const isApiRoute = pathname.startsWith("/api");
  const isNextRoute = pathname.startsWith("/_next");
  const isStaticAsset =
    /\.(?:avif|css|gif|ico|jpeg|jpg|js|mjs|mp4|png|svg|webp|woff2?)$/i.test(
      pathname,
    );

  if (
    isLegalRoute ||
    isMaintenanceRoute ||
    isApiRoute ||
    isNextRoute ||
    isStaticAsset
  ) {
    return NextResponse.next();
  }

  const maintenanceUrl = request.nextUrl.clone();
  maintenanceUrl.pathname = "/maintenance";

  return NextResponse.rewrite(maintenanceUrl);
}

export const config = {
  matcher: ["/:path*"],
};
