/* 
Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte ( Font family ). */

window.onload = () => {
    const main = document.querySelector('main');
    const title = document.querySelector('.title h1');
    const subtitle = document.querySelectorAll('.title p');
    const text = document.querySelectorAll('.text p');

    setMenu();
    backgroundColorListener();
    textColorListener();

    function setMenu() {
        const menu = document.getElementById('menu');
        const menuList = document.querySelectorAll('.menu-item');
        let auxToggle = {};
        
        function random255() {
            return Math.random() * 255;
        }

        menuList.forEach((item) => {
            const color = `rgb(${random255()},${random255()},${random255()})`
            const selected = false;
            auxToggle[item.id] = {color, selected};
        });

        function menuToggle(target) {
            let targetSection = document.getElementById(target.attributes.section.nodeValue);
            if (auxToggle[target.id].selected) {
                target.style.borderColor = "";
                auxToggle[target.id].selected = false;
                targetSection.style.display = "none";
            } else {
                target.style.borderColor = auxToggle[target.id].color;
                auxToggle[target.id].selected = true;
                targetSection.style.display = "block";
                targetSection.style.borderColor = auxToggle[target.id].color;
            }
        }

        menu.onclick = (event) => {
            if (event.target.id != 'menu') {
                menuToggle(event.target);
            }
        }; 
    }
  
    function backgroundColorListener() {
        const colorPicker = document.getElementById('color-picker');
        const colorPickerInput = document.getElementById('color-picker-input');

        colorPicker.onclick = (event) => {
            colorPickerInput.click();
        };
        colorPickerInput.oninput = (event) => {
            main.style.backgroundColor = event.target.value;
            colorPicker.style.backgroundColor = event.target.value;
        };
        colorPickerInput.onchange = (event) => {
        };
    }

    function textColorListener() {
        const titleColorPick = document.getElementById('title-color');
        const titleSubtitleColorPick = document.getElementById('subtitle-color');
        const textColorPick = document.getElementById('text-color');

        titleColorPick.oninput = (event) => {
            title.style.color = event.target.value;
        };
        titleColorPick.onchange = (event) => {
        };

        titleSubtitleColorPick.oninput = (event) => {
            subtitle.forEach((p) => {
                p.style.color = event.target.value;
            })
        };
        titleSubtitleColorPick.onchange = (event) => {
        };

        textColorPick.oninput = (event) => {
            text.forEach((p) => {
                p.style.color = event.target.value;
            })
        };
        textColorPick.onchange = (event) => {
        };      
    }
    
    function textSizeListener() {

    }
}


