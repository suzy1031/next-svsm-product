import initializeBasicAuth from "nextjs-basic-auth";

const users = [
  {
    user: process.env.BASIC_AUTH_USERNAME,
    password: process.env.BASIC_AUTH_PASSWORD,
  },
];

const basicAuthCheck = async (req, res) => {
  await initializeBasicAuth({ users })(req, res);

  // Workaround for major bug: If you cancel, the page loads normally. - https://github.com/jchiatt/nextjs-basic-auth/issues/4
  if (res.statusCode === 401) {
    res.end("<html>Unauthorized</html>");
  }
};

export default basicAuthCheck;
