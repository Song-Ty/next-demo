/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '/',
    async redirects() {
        return [
            {
                source: '/',
                destination: '/art01',
                permanent: true,
            },
            // {
            //     source: '/',
            //     destination: '/dashboard',
            //     permanent: true,
            // },
        ]
    },
};

export default nextConfig;
