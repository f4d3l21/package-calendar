let dateActuelle = new Date();

document.querySelector('.current-month').innerHTML = dateActuelle.toLocaleString('fr-FR', { month: 'long', year: 'numeric' });

document.addEventListener('DOMContentLoaded', function() {
    displayCalendar(dateActuelle);
});

function displaycalendar(date) {
    const joursDuMois = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const premierJourDuMois = new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    let datesHTML = "";
    let jour = 1;
    let decalage = premierJourDuMois === 0 ? 7 : premierJourDuMois;

    for (let i = 0; i < 42; i++) {
        if (i < decalage - 1 || jour > joursDuMois) {
            datesHTML += "<li></li>";
        } else {
            datesHTML += "<li>" + jour + "</li>";
            jour++;
        }
    }

    document.querySelector('.calendar-dates').innerHTML = datesHTML;
    document.querySelector('.current-month').textContent = date.toLocaleString('fr-FR', { month: 'long', year: 'numeric' });
}

function nextMonth() {
    dateActuelle.setMonth(dateActuelle.getMonth() + 1);
    displaycalendar(dateActuelle);
}

function lastMonth() {
    dateActuelle.setMonth(dateActuelle.getMonth() - 1);
    displaycalendar(dateActuelle);
}
