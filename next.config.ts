import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Desabilitar otimizações de fonte que podem causar warnings
  optimizeFonts: false,
  
  // Configurações para resolver problemas de console
  experimental: {
    // Desabilitar algumas otimizações que podem causar warnings
    optimizeCss: false,
  },
  
  // Headers para resolver problemas de CORS e adblocker
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}

export default nextConfig