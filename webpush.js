const webpush = require("web-push");

// const vapidKeys = webpush.generateVAPIDKeys();
// console.log(vapidKeys);
// VAPID keys should only be generated only once.
const vapidKeys ={
  publicKey: 'BP_Pcm60GaSFzk84eYui0_E7NqjZs6B1dr_kvirEc00IByVvv0UYLocsVwdm2bmov6U9EsQN_qxdEMVT3Pmtj-E',
  privateKey: 'E9HzIBXUSHenAQMDFy2HqQJH4yYK39tWNLD8rGE5EDQ'
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/fVRSWRpA4Us:APA91bF8puDnWTBrTWj6h_952Gyd6B9ajS-BsG-rAyAsRlZ5zafIDbnl5yzx4yU3yzyAP7ID95dOcHsZSufN3ZBk2Ytl6GkV9dxzOwVxj6Azybp3emaCJpIL2J2xJeINtf2-GTFUXD5b",
  expirationTime: null,
  keys: {
    p256dh:
      "BNwwmyq70PstMnlQM2baCGG2NkVP0og0PhDjW_kCRzAMeokz7q9PDYIQepuQZuxqeAfAZv52-wXLm-ED0b-xRdk",
    auth: "SZnUB6xoTX_yXKv0PA6eXQ",
  },
};
webpush.sendNotification(pushSubscription, "Your Push Payload Text");
