document.addEventListener("DOMContentLoaded", () => {

  const CONFIG = window.CONFIG;

  const phone = CONFIG.phone;
  const plate = CONFIG.plate;

  document.getElementById("plate").textContent = plate;

  document.getElementById("callBtn").href = `tel:${phone}`;
  document.getElementById("whatsappBtn").href = `https://wa.me/${CONFIG.whatsapp}`;
  document.getElementById("viberBtn").href = `viber://chat?number=${CONFIG.viber}`;

  const smsBtn = document.getElementById("smsBtn");
  const overlay = document.getElementById("overlay");
  const sheet = document.getElementById("sheet");

  const reasons = document.querySelectorAll(".reason");

  function openSheet() {
    overlay.classList.add("show");
    sheet.classList.add("show");
  }

  function closeSheet() {
    overlay.classList.remove("show");
    sheet.classList.remove("show");
  }

  smsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openSheet();
  });

  overlay.addEventListener("click", closeSheet);

  reasons.forEach(btn => {
    btn.addEventListener("click", () => {

      if (navigator.vibrate) navigator.vibrate(50);

      const msg = btn.getAttribute("data-message");

      window.location.href =
        `sms:${phone}?body=${encodeURIComponent(msg)}`;
    });
  });

});
