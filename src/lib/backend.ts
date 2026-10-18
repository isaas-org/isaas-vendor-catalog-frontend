// Server-side access to the Spring Boot backend. BACKEND_API_URL has no
// NEXT_PUBLIC_ prefix, so it is never inlined into the browser bundle; call
// these helpers from Server Components and Server Actions only.

export function backendUrl(path: string): string {
  const base = process.env.BACKEND_API_URL;
  if (!base) {
    throw new Error("BACKEND_API_URL is not set");
  }
  return new URL(path, base).toString();
}

export type BackendHealth = { status: string };

export async function getBackendHealth(): Promise<BackendHealth> {
  const res = await fetch(backendUrl("/actuator/health"));
  if (!res.ok) {
    throw new Error(`Backend health check failed: ${res.status}`);
  }
  return res.json();
}
