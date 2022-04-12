const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        APP_URL: "http://localhost:3000",
        NEXTAUTH_URL: "http://localhost:3000",
      },
    };
  }

  return {
    env: {
      APP_URL: "https://inventory-manager-nextjs-v4.vercel.app",
      NEXTAUTH_URL: "https://inventory-manager-nextjs-v4.vercel.app/",
    },
  };
};
