import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,          // allow connections beyond strict localhost
    port: 5173,
    strictPort: true,    // lock the port, don't auto-switch
    watch: {
      usePolling: true,  // makes file watching more robust
    },
    hmr: {
      protocol: 'ws',
      host: 'localhost', // force websocket host
      port: 5173,
    },
  },
})
