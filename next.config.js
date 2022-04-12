const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = () => {
  return {
    env: {
      APP_URL: "https://nextjs-inventory-manager.vercel.app",
      NEXTAUTH_URL: "https://nextjs-inventory-manager.vercel.app",
    },
  };
};
