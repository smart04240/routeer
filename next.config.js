module.exports = {
  env: {
    API_BASE_URI: "https://api.staging.routeer.com",
  },
  async redirects() {
    return [
      {
        source: "/admin",
        destination: "/admin/bulk",
        permanent: false,
      },
    ];
  },
};
