const phone = CONFIG.phone;
const whatsapp = CONFIG.whatsapp;
const viber = CONFIG.viber;
const plate = CONFIG.plate;

// --------------------
// DISPLAY REGISTRATION
// --------------------
document.getElementById("plate").textContent = plate;

// --------------------
// CALL BUTTON
// --------------------
document.getElementById("callBtn").setAttribute("href", `tel:${phone}`);

// --------------------
// WHATSAPP (fixed format)
// --------------------
document.getElementById("whatsappBtn").setAttribute(
  "href",
  `https://wa.me/${whatsapp.replace(/\+/g, "")}`
);

// --------------------
// VIBER (fixed format)
// --------------------
document.getElementById("viberBtn").setAttribute(
  "href",
  `viber://chat?number=${viber}`
);

// --------------------
// SMS BUTTON (simple direct)
// --------------------
document.getElementById("smsBtn").addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = `sms:${phone}`;
});

// --------------------
// REASONS -> AUTO SMS TEXT
// --------------------
const reasons = document.querySelectorAll(".reason");

reasons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const message = btn.getAttribute("data-message");

    const fullMessage =
      message +
      "\n\nБлагодаря, че отделихте време да уведомите собственика.";

    const smsLink = `sms:${phone}?body=${encodeURIComponent(fullMessage)}`;

    window.location.href = smsLink;
  });
});
