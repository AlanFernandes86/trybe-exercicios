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

function getAllStudents(allLessons) {
  const lessons = Object.keys(allLessons);
  let sumStudents = 0;
  lessons.forEach((lesson) => {
    sumStudents += allLessons[lesson].numeroEstudantes;
  });
  return sumStudents;
}

console.log(getAllStudents(allLessons));

function getKeyAtPosition(object, position) {
  const lessons = Object.keys(object);
  return lessons[position];
}

console.log(getKeyAtPosition(lesson2, 2));

function hasKeyAndValue(object, key, value) {
  let result = false;
  Object.entries(object).forEach(([k, v]) => {
    if(key === k && value === v) result = true;
  });
  return result;
}

console.log(hasKeyAndValue(lesson3, 'turno', 'noite'));
// Output: true,
console.log(hasKeyAndValue(lesson3, 'materia', 'Maria Clara'));
// Output: false