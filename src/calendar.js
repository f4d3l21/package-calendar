let dateActuel = new Date();


document.addEventListener('DOMContentLoaded', function () {
    displayCalendar(dateActuel);
    selectMonthYear();
    document.getElementById("month-select").addEventListener("change", uploadCalendar);
    document.getElementById("year-select").addEventListener("change", uploadCalendar);
});

const evenements = [
    { mois: 1, jour: 1, description: "Jour de l'An" },
    { mois: 5, jour: 1, description: "Fête du Travail" },
    { mois: 5, jour: 8, description: "Victoire 1945" },
    { mois: 7, jour: 14, description: "Fête nationale" },
    { mois: 8, jour: 15, description: "Assomption" },
    { mois: 11, jour: 1, description: "Toussaint" },
    { mois: 11, jour: 11, description: "Armistice 1918" },
    { mois: 12, jour: 25, description: "Noël" }
];

const mois = [
    "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];


function isJourFerie(mois, jour) {
    return evenements.some(evenement => evenement.mois === mois && evenement.jour === jour);
}


function selectMonthYear() {
    const monthSelect = document.getElementById('month-select');
    const yearSelect = document.getElementById('year-select');

    monthSelect.innerHTML = mois.map((m, index) => `<option value="${index}">${m}</option>`).join('');
    monthSelect.value = dateActuel.getMonth();


    const currentYear = dateActuel.getFullYear();
    yearSelect.innerHTML = '';
    for (let i = currentYear - 10; i <= currentYear + 10; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.text = i;
        yearSelect.appendChild(option);
    }
    yearSelect.value = currentYear;
}

function displayCalendar(date) {
    const moisEnCours = date.getMonth() + 1;
    const joursDuMois = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const premierJourDuMois = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    let datesHTML = "";
    let jour = 1;
    let decalage = premierJourDuMois === 0 ? 7 : premierJourDuMois;

    for (let i = 0; i < 42; i++) {
        if (i < decalage - 1 || jour > joursDuMois) {
            datesHTML += "<li></li>";
        } else {
            if (isJourFerie(moisEnCours, jour)) {
                datesHTML += `<li style="color:orange;">${jour}</li>`;
            } else {
                datesHTML += `<li>${jour}</li>`;
            }
            jour++;
        }
    }

    document.querySelector('.calendar-dates').innerHTML = datesHTML;
}

function uploadCalendar() {
    const selectedMonth = parseInt(document.getElementById("month-select").value);
    const selectedYear = parseInt(document.getElementById("year-select").value);
    
    dateActuel = new Date(selectedYear, selectedMonth, 1);
    displayCalendar(dateActuel);
}




