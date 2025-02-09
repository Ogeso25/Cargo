// Dein geheimer Zugangscode
const SECRET_CODE = "GEHEIM2025";

// Referenzen zu den DOM-Elementen
const accessCodeInput = document.getElementById('accessCode');
const validateButton = document.getElementById('validateButton');
const ticketButton = document.getElementById('ticketButton');

// Überprüfe den Zugangscode beim Klick auf "Code überprüfen"
validateButton.addEventListener('click', function () {
  const userCode = accessCodeInput.value;

  if (userCode === SECRET_CODE) {
    // Überprüfen, ob der Button sichtbar ist
    if (!ticketButton.classList.contains('hidden')) return;

    // Code korrekt: Ticket-Button anzeigen
    ticketButton.classList.remove('hidden');
    alert('Code korrekt! Der Ticket-Button ist jetzt sichtbar.');
  } else {
    // Falscher Code: Fehlerhinweis
    alert('Falscher Code. Bitte versuche es erneut.');
  }
});

// Öffne den Stripe-Link in einem neuen Tab, wenn der Button angeklickt wird
document.querySelector(".button-5").addEventListener("click", function (e) {
  e.preventDefault(); // Verhindere standardmäßiges Verhalten
  window.open("https://buy.stripe.com/9AQdUR4g96LybVS7sw", "_blank");
});
