document.addEventListener("DOMContentLoaded", () => {

  const phone = CONFIG.phone;

  document.getElementById("plate").textContent = CONFIG.plate;

  document.getElementById("callBtn").href = `tel:${phone}`;
  document.getElementById("whatsappBtn").href = `https://wa.me/${CONFIG.whatsapp}`;
  document.getElementById("viberBtn").href = `viber://chat?number=${CONFIG.viber}`;

  const smsBtn = document.getElementById("smsBtn");
  const sheet = document.getElementById("sheet");
  const overlay = document.getElementById("overlay");

  function openSheet() {
    sheet.classList.add("show");
    overlay.classList.add("show");
  }

  function closeSheet() {
    sheet.classList.remove("show");
    overlay.classList.remove("show");
  }

  smsBtn.addEventListener("click", openSheet);
  overlay.addEventListener("click", closeSheet);

  document.querySelectorAll(".reason").forEach(btn => {
    btn.addEventListener("click", () => {
      const msg = btn.dataset.msg;
      window.location.href = `sms:${phone}?body=${encodeURIComponent(msg)}`;
    });
  });

});
