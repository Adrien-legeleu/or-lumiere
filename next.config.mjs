/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.aceternity.com"], // Ajoute le domaine de l'image externe ici
  },
};

export default nextConfig;
