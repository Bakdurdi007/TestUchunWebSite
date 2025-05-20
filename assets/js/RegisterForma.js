// JSHSHIR faqat 14 ta raqam
document.getElementById("jshshir").addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, "").slice(0, 14);
});

// Pasport: 2 harf + 7 raqam
document.getElementById("passport").addEventListener("input", function () {
    this.value = this.value.toUpperCase().replace(/[^A-Z0-9]/g, "").slice(0, 9);
});

// Telefon: faqat +998 bilan va 9 ta raqam
const phoneInput = document.getElementById("phone");
phoneInput.value = "+998";
phoneInput.addEventListener("input", function () {
    if (!this.value.startsWith("+998")) this.value = "+998";
    this.value = this.value.replace(/[^\d\+]/g, "").slice(0, 13);
});

// Sana formatlash (dd.mm.yyyy)
function formatDateInput(inputElement) {
    inputElement.addEventListener("input", function () {
        let val = this.value.replace(/\D/g, "").slice(0, 8);
        if (val.length >= 5) {
            this.value = val.slice(0, 2) + '.' + val.slice(2, 4) + '.' + val.slice(4);
        } else if (val.length >= 3) {
            this.value = val.slice(0, 2) + '.' + val.slice(2);
        } else {
            this.value = val;
        }
    });
}

formatDateInput(document.getElementById("birthdate"));
formatDateInput(document.getElementById("anotherDate"));