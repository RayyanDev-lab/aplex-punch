// contact-pges-JS
document.getElementById("xpulseForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("xpulseName").value.trim();
  const email = document.getElementById("xpulseEmail").value.trim();
  const service = document.getElementById("xpulseService").value;
  const message = document.getElementById("xpulseMsg").value.trim();
  const successMsg = document.getElementById("xpulseSuccess");

  if (name && email && service && message) {
    successMsg.style.display = "block";
    successMsg.textContent = "Message Sent Successfully ✅";

    setTimeout(() => {
      successMsg.style.display = "none";
      document.getElementById("xpulseForm").reset();
    }, 3000);
  } else {
    successMsg.style.display = "block";
    successMsg.style.color = "red";
    successMsg.textContent = "Please fill all required fields!";
    setTimeout(() => (successMsg.style.display = "none"), 2500);
  }
});
