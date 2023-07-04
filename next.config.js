/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'grub24s3.s3.eu-west-2.amazonaws.com',
                pathname : '/**',
                port : ''
            }
        ]
    }
}

module.exports = nextConfig
