const webpush = require("web-push");

// const vapidKeys = webpush.generateVAPIDKeys();
// console.log(vapidKeys);
// VAPID keys should only be generated only once.
const vapidKeys = {
  publicKey:
    "BP_Pcm60GaSFzk84eYui0_E7NqjZs6B1dr_kvirEc00IByVvv0UYLocsVwdm2bmov6U9EsQN_qxdEMVT3Pmtj-E",
  privateKey: "E9HzIBXUSHenAQMDFy2HqQJH4yYK39tWNLD8rGE5EDQ",
};

webpush.setVapidDetails(
  "mailto:example@yourdomain.org",
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/cfLlgXNgpZM:APA91bGkK8a5ti2i2xII76NPDodrHSNGSpy__mpjnxTr55EjnYNa8vV_iVY4yxpei75Q9q6i4_AJmSgoeWdNLb7eu7ZzR7S-Mpjx7bQUO8Gls4digp4KwCNJ-BfE4QvhleoTEDdouB3P",
  expirationTime: null,
  keys: {
    p256dh:
      "BETePFJKwwnTDqCMye_BzC1yuWPvHRDnDP_28clQxkBMVkdz5inbWeBuLWz81wLGSONW8AVo_zBJXibs-JXczdI",
    auth: "6WNkLQvi-dGsQmXoHnutiQ",
  },
};
webpush.sendNotification(pushSubscription, "Your Push Payload Text");
