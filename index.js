

var Monat = prompt("Geben Sie bitte eine Nahme eines Monates ein!");

let a = Monat.charAt(0).toUpperCase()+ Monat.slice(1);



let ergebnis;

switch (a) {
    case "Januar":
        ergebnis = "1.Ay";
        break;
    case "Februar":
        ergebnis = "2. Monat";
        break;
    case "März":
        ergebnis = "3. Monat";
        break;
    case "Äpril":
        ergebnis = "4. Monat";
        break;
    case "Mai":
        ergebnis = "5. Monat";
        break;
    case "Juni":
        ergebnis = "6. Monat";
        break;
    case "Juli":
        ergebnis = "7. Monat";
        break;
    case "Agust":
        ergebnis = "8. Monat";
        break;
    case "September":
        ergebnis = "9. Monat";
        break;
    case "October":
        ergebnis = "10. Monat";
        break;
    case "November":
        ergebnis = "11. Monat";
        break;
    case "Dezember":
        ergebnis = "12. Monat";
        break;
    default:
        alert("eingegebenes Wert ist falsch")
        break;
}

console.log("eingegebener Monat: ", `${a}`, "/", "die Zahl des eingegebenen Monates: ", ergebnis)