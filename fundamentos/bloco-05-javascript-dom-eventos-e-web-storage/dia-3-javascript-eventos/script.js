
const dezDaysList = [
  29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const holiday = [24, 25, 31];
const friday = [4, 11, 18, 25];
const ulDays = document.getElementById("days");
const buttonsContainer = document.querySelector('.buttons-container');
const buttonHoliday = document.createElement('button');
const buttonFriday = document.createElement('button');
const tanks = document.querySelector('.my-tasks');

init();

function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

// Exercício 01
function insertDays() {
  for (let day of dezDaysList) {
    const li = document.createElement("li");
    li.className = "day";
    li.innerText = day;

    if (holiday.find((element) => element === day)) {
      li.className += " holiday";
    }
    if (friday.find((element) => element === day)) {
      li.className += " friday";
    }
    ulDays.appendChild(li);
  }
}

// Exercício 02
function createButtonHoliday(feriado) {
    buttonHoliday.id = 'btn-holiday';
    buttonHoliday.innerText = feriado;
    buttonsContainer.appendChild(buttonHoliday);
}

// Exercício 03
buttonHoliday.onclick = () => {
    let holidays = document.querySelectorAll('.holiday');
    holidays.forEach((holiday) => {
        holiday.classList.toggle('background-holidays');
    })
};

// Exercício 04

function createButtonFriday(sexta) {
    buttonFriday.id = 'btn-friday';
    buttonFriday.innerText = sexta;
    buttonsContainer.appendChild(buttonFriday);
}

// Exercício 05
buttonFriday.onclick = () => {
    let fridays = document.querySelectorAll('.friday');
    fridays.forEach((friday) => {
      friday.innerText = 'Sexta-feira';
    })
}

// Contribuição do Douglas
// Exercício 06
function dayZoom() {
  
  ulDays.onmouseover = (event) => {
    if (event.target.id !== "days") {
      event.target.style.fontSize = '30px';
    }
  }
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event
  // mouseout identifica quando o cursos sai do elemento filho
  ulDays.onmouseout = (event) => {
    if (event.target.id !== "days") {
      event.target.style.fontSize = '20px';
    }
  }

}

// Exercício 07
function createTask(tarefa) {
  let task = document.createElement('span');
  task.innerText = tarefa;
  tasks.appendChild(task);
}

function init() {
  createDaysOfTheWeek();
  insertDays();
  createButtonHoliday('Feriados');
  createButtonFriday('Sexta-feira');
  dayZoom();
}


