/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript: {
        ignoreBuildErrors: true,
        
    },
    // distDir: 'dist',
    trailingSlash: true,
    images: { unoptimized: true },
    reactStrictMode: false,  
    experimental: {
        missingSuspenseWithCSRBailout: false,
      },

}

module.exports = nextConfig
