import { cookies } from "next/headers";
import { NextResponse } from "next/server";

/**
 * Verify the admin authentication cookie.
 * Returns null if authenticated, or a 401 Response if not.
 */
export async function requireAdmin(): Promise<NextResponse | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("admin_token");

  if (!token || token.value !== "authenticated") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null; // authenticated
}
