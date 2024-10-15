
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import nodemailer from 'nodemailer';

import { Client } from '@hubspot/api-client';

export const hubspotClient = new Client({ accessToken:'pat-eu1-1946d52b-3476-46b4-a8f5-9b5732a35868'});


export const woocommerce = new WooCommerceRestApi({
    url: "https://dashboard.hrfleek.com",
    consumerKey: process.env.WC_CONSUMER_KEY,
    consumerSecret: process.env.WC_CONSUMER_SECRET,
    version: "wc/v3"
});


export const transporter = nodemailer.createTransport({
    host: "mail.intelliverseai.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // generated ethereal user
      pass: process.env.EMAIL_PASS, // generated ethereal password
    },
  });


