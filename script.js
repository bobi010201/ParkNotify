(function () {
  const phone = CONFIG.phone;
  const whatsapp = CONFIG.whatsapp;
  const viber = CONFIG.viber;
  const plate = CONFIG.plate;

  document.getElementById("plate").textContent = plate;

  document.getElementById("callBtn").href = `tel:${phone}`;
  document.getElementById("whatsappBtn").href = `https://wa.me/${whatsapp}`;
  document.getElementById("viberBtn").href = `viber://chat?number=${viber}`;

  const smsBtn = document.getElementById("smsBtn");
  const reasonsContainer = document.querySelector(".reasons");
  const reasons = document.querySelectorAll(".reason");

  // start hidden
  reasonsContainer.style.display = "none";

  // show reasons
  smsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    reasonsContainer.style.display = "grid";
    reasonsContainer.scrollIntoView({ behavior: "smooth" });
  });

  // open SMS with ONLY message
  reasons.forEach(btn => {
    btn.addEventListener("click", () => {

      if (navigator.vibrate) navigator.vibrate(50);

      const message = btn.getAttribute("data-message");

      const smsLink = `sms:${phone}?body=${encodeURIComponent(message)}`;

      window.location.href = smsLink;
    });
  });

})();
