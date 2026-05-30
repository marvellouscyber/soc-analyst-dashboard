const events = [
    "[INFO] Firewall rules updated",
    "[WARNING] Multiple failed login attempts",
    "[INFO] Malware scan completed",
    "[ALERT] Suspicious IP detected",
    "[INFO] Endpoint protection active",
    "[WARNING] Unusual network traffic detected",
    "[INFO] System integrity verified",
    "[ALERT] Brute-force attack blocked"
];

const eventList = document.getElementById("event-list");

function addEvent() {
    const randomEvent =
        events[Math.floor(Math.random() * events.length)];

    const li = document.createElement("li");
    li.textContent = randomEvent;

    eventList.prepend(li);

    if (eventList.children.length > 8) {
        eventList.removeChild(eventList.lastChild);
    }
}

setInterval(addEvent, 3000);
