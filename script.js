document.addEventListener("DOMContentLoaded", () => {

  const CONFIG = window.CONFIG;

  const phone = CONFIG.phone;

  const smsBtn = document.getElementById("smsBtn");
  const overlay = document.getElementById("overlay");
  const sheet = document.getElementById("sheet");

  const plateEl = document.getElementById("plate");

  const callBtn = document.getElementById("callBtn");
  const whatsappBtn = document.getElementById("whatsappBtn");
  const viberBtn = document.getElementById("viberBtn");

  const reasons = document.querySelectorAll(".reason");

  // plate
  plateEl.textContent = CONFIG.plate;

  // links
  callBtn.href = `tel:${CONFIG.phone}`;
  whatsappBtn.href = `https://wa.me/${CONFIG.whatsapp}`;
  viberBtn.href = `viber://chat?number=${CONFIG.viber}`;

  // safety check
  if (!smsBtn || !overlay || !sheet) {
    console.error("Missing UI elements");
    return;
  }

  // open sheet
  smsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.classList.add("show");
    sheet.classList.add("show");
  });

  // close sheet
  overlay.addEventListener("click", () => {
    overlay.classList.remove("show");
    sheet.classList.remove("show");
  });

  // reasons → SMS
  reasons.forEach(btn => {
    btn.addEventListener("click", () => {

      if (navigator.vibrate) navigator.vibrate(50);

      const msg = btn.dataset.message;

      window.location.href =
        `sms:${phone}?body=${encodeURIComponent(msg)}`;
    });
  });

});
