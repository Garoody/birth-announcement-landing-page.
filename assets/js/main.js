const arrivalCounter = document.querySelector("[data-arrival-date]");

if (arrivalCounter) {
    const arrivalTimestamp = new Date(arrivalCounter.dataset.arrivalDate).getTime();
    const timeElements = {
        jour: document.getElementById("jour"),
        heure: document.getElementById("heure"),
        minute: document.getElementById("minute"),
        seconde: document.getElementById("seconde"),
    };

    const displayTime = ({ jour, heure, minute, seconde }) => {
        timeElements.jour.textContent = String(jour).padStart(2, "0");
        timeElements.heure.textContent = String(heure).padStart(2, "0");
        timeElements.minute.textContent = String(minute).padStart(2, "0");
        timeElements.seconde.textContent = String(seconde).padStart(2, "0");
    };

    const updateArrivalCounter = () => {
        if (!Number.isFinite(arrivalTimestamp)) {
            displayTime({ jour: 0, heure: 0, minute: 0, seconde: 0 });
            return;
        }

        const elapsedTime = Math.max(0, Date.now() - arrivalTimestamp);
        const second = 1_000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        displayTime({
            jour: Math.floor(elapsedTime / day),
            heure: Math.floor((elapsedTime % day) / hour),
            minute: Math.floor((elapsedTime % hour) / minute),
            seconde: Math.floor((elapsedTime % minute) / second),
        });
    };

    updateArrivalCounter();
    window.setInterval(updateArrivalCounter, 1_000);
}

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}
