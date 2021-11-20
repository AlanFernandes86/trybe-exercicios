/* 
Cor de fundo da tela;
Cor do texto;
Tamanho da fonte;
Espaçamento entre as linhas do texto;
Tipo da fonte ( Font family ). */

window.onload = () => {
    const body = document.body;
    const menu = document.getElementById('menu');
    const menuList = document.querySelectorAll('.menu-item');
    const sectionBackgroundColor = document.getElementById('#section-background-color');
    const sectionEditText = document.getElementById('#section-edit-text');
    const colorPicker = document.getElementById('color-picker');
    const colorPickerInput = document.getElementById('color-picker-input');

    setMenu();
    function setMenu() {
        let auxToggle = {};

        menuList.forEach((item) => {
            auxToggle[item.id] = false;
        });

        menu.onclick = (event) => {
            if (event.target.id != 'menu') {
                menuToggle(event.target);
            }
        };

        function menuToggle(target) {
            if (auxToggle[target.id]) {
                target.style.borderColor = "white";
                auxToggle[target.id] = false;
                document.getElementById(target.attributes.section.nodeValue).style.display = "none";
            } else {
                target.style.borderColor = "magenta";
                auxToggle[target.id] = true;
                console.log(target);
                document.getElementById(target.attributes.section.nodeValue).style.display = "block";
            }
        }
    }

    colorPicker.onclick = (event) => {
        colorPickerInput.click();
    }
    colorPickerInput.oninput = (event) => {
        body.style.backgroundColor = event.target.value;
        colorPicker.style.backgroundColor = event.target.value;
    }
    colorPickerInput.onchange = (event) => {
        
    }
    
}


