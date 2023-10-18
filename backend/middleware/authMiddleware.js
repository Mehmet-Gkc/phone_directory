import { validateToken } from "../lib/auth.js"

export const authMiddleware = async (req, res, next) => {
  const authorization = req.cookies.accessToken;

  if (!authorization) {
    return res.status(403).json({ msg: "Authentication failed!" });
  }

  try {
    const token = authorization;
    const decodedToken = await validateToken(token);

    if (!decodedToken) {
      return res
        .status(403)
        .json({ msg: "Authentication failed!, invalid token" });
    }

    req.userId = decodedToken.userId;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Authentication failed!" });
  }
};
