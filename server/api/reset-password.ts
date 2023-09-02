import db from "../../drizzle/db";
import { forgotpassword } from "../../drizzle/schema";
import * as nodemailer from "nodemailer";
import { generateResetPassword } from "../../utils/templatePasswordReset";

export default defineEventHandler(async (event) => {
  const { email } = await readBody(event);
  const uuid = generateUUID();
  await createData(email, uuid);
  await sendNodemailer(email, uuid);
  return true;
});

const createData = async (email: string, uuid: string): Promise<void> => {
  await db.insert(forgotpassword).values({ email: email, code: uuid });
};

const generateUUID = (): string => {
  var d = new Date().getTime(); //Timestamp
  var d2 =
    (typeof performance !== "undefined" &&
      performance.now &&
      performance.now() * 1000) ||
    0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16;
    if (d > 0) {
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
};

const sendNodemailer = async (email: string, uuid: string): Promise<void> => {
  const transporter = nodemailer.createTransport({
    host: "mail.zxcs.nl",
    port: 465,
    secure: true,
    auth: {
      user: "mark@rubyfinance.nl", // generated ethereal user
      pass: "qwertyuio", // generated ethereal password
    },
  });

  const BASE_URI = process.env.AUTH_ORIGIN;

  await transporter.sendMail({
    from: "TREND DAD <mark@rubyfinance.nl>", // sender address
    to: `${email}`, // list of receivers
    subject: `Reset your password`, // Subject line
    text: `Reset your password `, // plain text body
    html: generateResetPassword(BASE_URI as string, uuid, email), // html body
  });
};
