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

// SMS button -> show reasons instead of opening SMS
const smsBtn = document.getElementById("smsBtn");
const reasonsContainer = document.querySelector(".reasons");

smsBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // показва причините
  reasonsContainer.style.display = "grid";

  // scroll към тях (по-удобно за телефон)
  reasonsContainer.scrollIntoView({ behavior: "smooth" });
});

// Reasons -> open SMS with selected message only
const reasons = document.querySelectorAll(".reason");

reasons.forEach(btn => {
  btn.addEventListener("click", () => {
    const message = btn.getAttribute("data-message");

    const smsLink = `sms:${phone}?body=${encodeURIComponent(message)}`;

    window.location.href = smsLink;
  });
});
