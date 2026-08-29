import { getStore } from "@netlify/blobs";

interface RateLimitEntry {
  count: number;
  windowStart: number;
}

export async function checkRateLimit(
  key: string,
  { max, windowMs }: { max: number; windowMs: number },
): Promise<{ allowed: boolean }> {
  const store = getStore("lead-rate-limits");
  const now = Date.now();

  const entry = (await store.get(key, { type: "json" })) as RateLimitEntry | null;

  if (!entry || now - entry.windowStart > windowMs) {
    await store.setJSON(key, { count: 1, windowStart: now });
    return { allowed: true };
  }

  if (entry.count >= max) {
    return { allowed: false };
  }

  await store.setJSON(key, { count: entry.count + 1, windowStart: entry.windowStart });
  return { allowed: true };
}
