/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: "export", //add output
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'i.ibb.co',
            port: '',
            pathname: '**',
            search: '',
          },
        ],
      },

};

export default nextConfig;
