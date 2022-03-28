module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b990f67709cce7e0387fe8c15ff59907'),
  },
});
