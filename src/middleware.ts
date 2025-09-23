import createMiddleware from "next-intl/middleware";
import { routing } from "./i8n/routing";
import { NextRequest } from "next/server";

type Locale = "en" | "ro";

export default function middleware(request: NextRequest) {
  const cookieValue = request.cookies.get("NEXT_LOCALE")?.value?.toLowerCase();
  const accept = request.headers.get("accept-language") ?? "";

  const headerLocale: Locale = accept.startsWith("ro") ? "ro" : "en";

  const locale: Locale =
    cookieValue === "ro" || cookieValue === "en"
      ? (cookieValue as Locale)
      : headerLocale;

  return createMiddleware({ ...routing, defaultLocale: locale })(request);
}

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};
