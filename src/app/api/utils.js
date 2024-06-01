
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import nodemailer from 'nodemailer';

export const woocommerce = new WooCommerceRestApi({
    url: "https://hrfleek.com",
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/v3"
});


export const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS, // generated ethereal password
    },
  });
