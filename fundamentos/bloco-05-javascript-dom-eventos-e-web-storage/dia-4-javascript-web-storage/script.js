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
    textSizeListener();
    lineHeightListener();
    fontTypeListener();

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

        console.log(menuList);
        
        function menuToggle(target) {
            let targetSection = document.getElementById(target.attributes.section.nodeValue);
            if (auxToggle[target.id].selected) {
                target.style = "";
                auxToggle[target.id].selected = false;
                targetSection.style.display = "none";
            } else {
                target.style.color = auxToggle[target.id].color;
                target.style = `border-right: solid 2px ${auxToggle[target.id].color}; padding-right: 4px; color: white;`;
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
        const subtitleColorPick = document.getElementById('subtitle-color');
        const textColorPick = document.getElementById('text-color');

        titleColorPick.oninput = (event) => {
            title.style.color = event.target.value;
        };
        
        subtitleColorPick.oninput = (event) => {
            subtitle.forEach((p) => {
                p.style.color = event.target.value;
            })
        };   

        textColorPick.oninput = (event) => {
            text.forEach((p) => {
                p.style.color = event.target.value;
            })
        };

        titleColorPick.onchange = (event) => {
        };

        subtitleColorPick.onchange = (event) => {
        };

        textColorPick.onchange = (event) => {
        };  
            
    }
    
    // https://www.ti-enxame.com/pt/javascript/como-obter-o-tamanho-da-fonte-em-html/1070829157/
    function textSizeListener() {
        const titleSizeSlider = document.getElementById('title-size');
        const subtitleSizeSlider = document.getElementById('subtitle-size');
        const textSizeSlider = document.getElementById('text-size');

        const actualTitleSize = parseInt(window.getComputedStyle(title).fontSize);
        const actualSubtitleSize = parseInt(window.getComputedStyle(subtitle[0]).fontSize);
        const actualTextSize = parseInt(window.getComputedStyle(text[0]).fontSize);

        titleSizeSlider.value = actualTitleSize;
        subtitleSizeSlider.value = actualSubtitleSize;
        textSizeSlider.value = actualTextSize;

        titleSizeSlider.nextElementSibling.innerText = `${(actualTitleSize<10)?0:''}${actualTitleSize}px`;
        subtitleSizeSlider.nextElementSibling.innerText = `${(actualSubtitleSize<10)?0:''}${actualSubtitleSize}px`;
        textSizeSlider.nextElementSibling.innerText = `${(actualTextSize<10)?0:''}${actualTextSize}px`;

        // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/instanceof
        function setTextSize(event, element) {
            const valueFormatted = `${(event.target.value < 10) ? 0 : ''}${event.target.value}px`;
            event.target.nextElementSibling.innerText = `${(event.target.value < 10) ? 0 : ''}${event.target.value}px`;
            if (element instanceof NodeList) {
                element.forEach((element) => {
                    element.style.fontSize = valueFormatted;
                });
            } else {
                element.style.fontSize = valueFormatted;
            }            
        }

        titleSizeSlider.oninput = (event) => {
            setTextSize(event, title);
        }
        subtitleSizeSlider.oninput = (event) => {
            setTextSize(event, subtitle);
        }
        textSizeSlider.oninput = (event) => {
            setTextSize(event, text);
        }

        titleSizeSlider.onchange = (event) => {
            
        }
        subtitleSizeSlider.onchange = (event) => {
            
        }
        textSizeSlider.onchange = (event) => {
            
        }

    }

    // https://www.w3schools.com/jsref/jsref_tofixed.asp
    function lineHeightListener() {
        
    }

    // https://www.w3schools.com/css/css_font.asp
    // https://www.w3schools.com/tags/tag_select.asp
    function fontTypeListener() {
        const selectFont = document.getElementById('select-font-family');
        fonts.forEach((font) => {
            const option = document.createElement('option');
            option.value = font.name;
            option.innerText = font.name;
            selectFont.appendChild(option);
        })
    }
}

let fonts = [
    { family: 'serif', name: 'Times New Roman' },
    { family: 'serif', name: 'Georgia' },
    { family: 'serif', name: 'Garamond' },
    { family: 'sans-serif', name: 'Arial' },
    { family: 'sans-serif', name: 'Verdana' },
    { family: 'sans-serif', name: 'Helvetica' },
    { family: 'monospace', name: 'Courier New' },
    { family: 'monospace', name: 'Lucida Console' },
    { family: 'monospace', name: 'Monaco' },
    { family: 'cursive', name: 'Brush Script MT' },
    { family: 'cursive', name: 'Lucida Handwriting' },
    { family: 'fantasy', name: 'Copperplate' },
    { family: 'fantasy', name: 'Papyrus' },
]
