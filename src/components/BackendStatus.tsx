import { connection } from "next/server";
import { getBackendHealth } from "@/lib/backend";

// Rendered at request time (inside <Suspense>), so BACKEND_API_URL is read at
// runtime rather than frozen at build time.
export async function BackendStatus() {
  await connection();

  let status: string;
  try {
    status = (await getBackendHealth()).status;
  } catch (err) {
    status = err instanceof Error ? err.message : "unreachable";
  }

  return (
    <p className="text-sm text-zinc-600 dark:text-zinc-400">
      Backend: <span className="font-mono">{status}</span>
    </p>
  );
}
