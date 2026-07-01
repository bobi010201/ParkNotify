const phone = CONFIG.phone;
const whatsapp = CONFIG.whatsapp;
const viber = CONFIG.viber;
const plate = CONFIG.plate;

// plate display
document.getElementById("plate").textContent = plate;

// CALL
document.getElementById("callBtn").href = `tel:${phone}`;

// WhatsApp
document.getElementById("whatsappBtn").href = `https://wa.me/${whatsapp}`;

// Viber
document.getElementById("viberBtn").href = `viber://chat?number=${viber}`;

// SMS button
const smsBtn = document.getElementById("smsBtn");
const reasonsContainer = document.querySelector(".reasons");
const reasons = document.querySelectorAll(".reason");

// важно: започва скрито
if (reasonsContainer) {
  reasonsContainer.style.display = "none";
}

// SMS click -> show reasons
smsBtn.addEventListener("click", (e) => {
  e.preventDefault();

  reasonsContainer.style.display = "grid";
  reasonsContainer.scrollIntoView({ behavior: "smooth" });
});

// Reason click -> open SMS with ONLY message
reasons.forEach(btn => {
  btn.addEventListener("click", () => {
    const message = btn.getAttribute("data-message");

    const smsLink = `sms:${phone}?body=${encodeURIComponent(message)}`;

    window.location.href = smsLink;
  });
});
