import { createClient } from '@insforge/sdk'

export const insforge = createClient({
  baseUrl: import.meta.env.VITE_INSFORGE_URL,
  anonKey: import.meta.env.VITE_INSFORGE_ANON_KEY,
})

const STORAGE_BASE = `${import.meta.env.VITE_INSFORGE_URL}/api/storage/buckets/downloads/objects`

export const DOWNLOAD_URLS = {
  plugin: `${STORAGE_BASE}/networking.zip`,
  guide: `${STORAGE_BASE}/networking-plugin-user-guide.pdf`,
}
