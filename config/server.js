module.exports = ({ env }) => ({
  host: env("HOST", "3.223.221.167"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "cfc719e33590e3d0d06b428e1944d8f4"),
    },
  },
});
