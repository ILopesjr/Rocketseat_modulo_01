const classA = [{
        name: 'Mayk',
        grade: 9.8
    },

    {
        name: 'Diego',
        grade: 10
    },

    {
        name: 'Fulano',
        grade: 2
    }
]

const classB = [{
        name: 'Cleiton',
        grade: 10
    },

    {
        name: 'Robson',
        grade: 10
    },

    {
        name: 'Siclano',
        grade: 2
    },

    {
        name: 'Ivanildo',
        grade: 10
    }
]

function calculateAverege(students) {
    let sum = 0;

    for (let i = 0; i < students.length; i++) {
        sum += students[i].grade;
    }

    return sum / students.length;
}

function sendMessage(averege) {
    if (averege > 5) {
        return console.log(`Averege: ${averege}. congratulations!`);
    } else {
        return console.log(`Averege: ${averege} is not good`);
    }
}

const averege = ((calculateAverege(classA) + calculateAverege(classB)) / 2).toFixed(2);

function MarkAsFlunked(student) {
    student.flunked = false;

    if (student.grade < 5) {
        student.flunked = true;
    }
}

function sendMessageflunked(student) {
    if (student.flunked) {
        console.log(`o student ${student.name} está flunked!`);
    }
}

function studentsflunkeds(students) {
    for (const student of students) {
        MarkAsFlunked(student);
        sendMessageflunked(student);
    }
}

sendMessage(averege);
studentsflunkeds(classA);
studentsflunkeds(classB);
