const phone = CONFIG.phone;
const whatsapp = CONFIG.whatsapp;
const viber = CONFIG.viber;
const plate = CONFIG.plate;

// plate display
document.getElementById("plate").textContent = plate;

// CALL
document.getElementById("callBtn").href = `tel:${phone}`;

// SMS (default empty message, will be filled by reason buttons)
document.getElementById("smsBtn").href = `sms:${phone}`;

// WhatsApp
document.getElementById("whatsappBtn").href = `https://wa.me/${whatsapp}`;

// Viber
document.getElementById("viberBtn").href = `viber://chat?number=${viber}`;

// REASONS -> auto SMS
const reasons = document.querySelectorAll(".reason");

reasons.forEach(btn => {
  btn.addEventListener("click", () => {
    const message = btn.getAttribute("data-message");

    const smsLink = `sms:${phone}?body=${encodeURIComponent(message + "\n\nБлагодаря!")}`;

    // open SMS app directly
    window.location.href = smsLink;
  });
});
