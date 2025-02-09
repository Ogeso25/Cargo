// Dein geheimer Zugangscode
const SECRET_CODE = "GEHEIM2025";

const accessCodeInput = document.getElementById('accessCode');
const validateButton = document.getElementById('validateButton');
const ticketButton = document.getElementById('ticketButton');

validateButton.addEventListener('click', function () {
  const userCode = accessCodeInput.value;

  if (userCode === SECRET_CODE) {
    // Überprüfen, ob der Button sichtbar ist
    if (!ticketButton.classList.contains('hidden')) return;

    // Code korrekt: Button anzeigen
    ticketButton.classList.remove('hidden');
    alert('Code korrekt! Der Ticket-Button ist jetzt sichtbar.');
  } else {
    alert('Falscher Code. Bitte versuche es erneut.');
  }
});
