import { Response } from "express";
export const sendRefreshToken = (res: Response, token: string) => {
  res.cookie("bid", token, {
    httpOnly: true,
    path: "/refresh_token",
    secure: true,
    // domain: ".example.com", OPEN FOR PRODUCTION
  });
};
