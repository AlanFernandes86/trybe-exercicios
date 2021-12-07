const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

function insertEntry(object, key, value) {
  object[key] = value;
}

insertEntry(lesson2, 'turno', 'noite');

console.log(lesson2);

function listObjectKeys(object) {
  return Object.keys(object);
}

console.log(listObjectKeys(lesson2));

function getObjectSize(object) {
  return listObjectKeys(object).length;
}

console.log(getObjectSize(lesson2));

function getObjectValues(object) {
  return Object.values(lesson2);
}

console.log(getObjectValues(lesson2));

const allLessons = Object.assign({}, { lesson1 }, { lesson2 }, { lesson3 });

console.log(allLessons);