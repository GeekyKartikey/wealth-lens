import * as PushAPI from "@pushprotocol/restapi";
import { Wallet } from "ethers";

const privateKeySigner = new Wallet(process.env.PUSH_PRIVATE_KEY);

export const sendNotification = async () => {
  try {
    const response = await PushAPI.payloads.sendNotification({
      signer: privateKeySigner,
      type: 3, // broadcast
      identityType: 2, // direct payload
      notification: {
        title: "Test Notification",
        body: "This is a test message",
      },
      payload: {
        title: "Test Payload",
        body: "This is a test payload message",
        cta: "",
        img: "",
      },
      recipients: "eip155:0xYourWalletAddressHere",
      channel: "eip155:0xYourChannelAddressHere", // your channel address
      env: "staging",
    });
    console.log("Notification Sent:", response);
  } catch (err) {
    console.error("Error sending notification:", err);
  }
};
