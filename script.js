// 1. Clock Logic
function updateClock() {
    const now = new Date();
    document.getElementById('clock').innerText = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
}
setInterval(updateClock, 1000);
updateClock();

// 2. Window Toggle Logic
function closeWindow(id) {
    document.getElementById(id).classList.add('hidden');
    document.getElementById('task-tab').classList.add('hidden');
}

function openWindow(id) {
    document.getElementById(id).classList.remove('hidden');
    document.getElementById('task-tab').classList.remove('hidden');
    document.getElementById('start-menu').classList.add('hidden'); // Close start menu
}

function minimizeWindow(id) {
    document.getElementById(id).classList.toggle('hidden');
}

function toggleStartMenu() {
    document.getElementById('start-menu').classList.toggle('hidden');
}

// 3. Dragging Logic (Makes the title bar move the window)
dragElement(document.getElementById("personal-window"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}