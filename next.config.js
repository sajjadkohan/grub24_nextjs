/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol : 'https',
                hostname : 'grub24s3.s3.eu-west-2.amazonaws.com',
                pathname : '/**',
                port : ''
            },
            {
                protocol : 'https',
                hostname : 'grub24.co.uk',
                pathname : '/**',
                port : ''
            },
            {
                protocol : 'https',
                hostname : 'd3o47ov0yc40fm.cloudfront.net',
                pathname : '/**',
                port : ''
            },
 
            
        ]
    }
}

module.exports = nextConfig
