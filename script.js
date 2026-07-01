document.addEventListener("DOMContentLoaded", () => {

  const CONFIG_SAFE = window.CONFIG || {
    phone: "",
    whatsapp: "",
    viber: "",
    plate: "PB2621XE"
  };

  const phone = CONFIG_SAFE.phone;

  const plateEl = document.getElementById("plate");
  const smsBtn = document.getElementById("smsBtn");
  const reasonsContainer = document.querySelector(".reasons");
  const reasons = document.querySelectorAll(".reason");

  // safety checks (важно)
  if (!plateEl || !smsBtn || !reasonsContainer) {
    console.error("Missing elements - check HTML");
    return;
  }

  // plate
  plateEl.textContent = CONFIG_SAFE.plate;

  // links
  document.getElementById("callBtn").href = `tel:${phone}`;
  document.getElementById("whatsappBtn").href = `https://wa.me/${CONFIG_SAFE.whatsapp}`;
  document.getElementById("viberBtn").href = `viber://chat?number=${CONFIG_SAFE.viber}`;

  // start hidden (safe)
  reasonsContainer.style.display = "none";

  // show reasons
  smsBtn.addEventListener("click", (e) => {
    e.preventDefault();
    reasonsContainer.style.display = "grid";
    reasonsContainer.scrollIntoView({ behavior: "smooth" });
  });

  // send SMS only message
  reasons.forEach(btn => {
    btn.addEventListener("click", () => {

      if (navigator.vibrate) navigator.vibrate(50);

      const message = btn.getAttribute("data-message") || "";

      window.location.href =
        `sms:${phone}?body=${encodeURIComponent(message)}`;
    });
  });

});
