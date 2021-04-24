import { withIronSession } from "next-iron-session";

export default withIronSession(
  async (req, res) => {
    if (req.method === "POST") {
      const { name, mobile, userId } = req.body;
      req.session.set("user", { name, mobile, userId });
      await req.session.save();
      return res.status(200).send("");
    }
    return res.status(404).send("");
  },
  {
    cookieName: "rideshare_session_cookie",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production" ? true : false,
    },
    password: process.env.APPLICATION_SECRET,
  }
);
