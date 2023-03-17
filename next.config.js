/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["www.google.com", "links.papareact.com"],
  },
  env: {
    mapbox_key: "your super secret Key",
  },
};
