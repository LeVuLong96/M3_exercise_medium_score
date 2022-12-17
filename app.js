let students = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }
]


let femaleTotalScore = 0;
let maleTotalScore = 0;

let femaleFriends = 0;
let maleFriends = 0;

let scoreFemale = 0;
let scoreMale = 0;

for (let i = 0; i < students.length; i++) {
    if(students[i].gender === 'female') {
        femaleTotalScore += students[i].point;
        femaleFriends ++;
        scoreFemale = femaleTotalScore/femaleFriends;
    } else {
        maleTotalScore += students[i].point;
        maleFriends ++;
        scoreMale = maleTotalScore/maleFriends;
    }
}

console.log(`${students[0].name}: ${students[0].point}`)

console.log(`Score male: ${scoreFemale}`)
console.log(`Score male: ${scoreMale}`)
