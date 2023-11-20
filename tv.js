function toggleScreen() {
    const screen = document.getElementById('screen');
    const powerButton = document.getElementById('powerButton');
    screenOn = !screenOn;

    if (screenOn) {
        powerButton.innerText = 'Desligar';
        screen.innerHTML = `<iframe width="854" height="480" src="${currentChannel}" title="Canal Atual" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
    } else {
        powerButton.innerText = 'Ligar';
        screen.innerHTML = '';
    }
}
