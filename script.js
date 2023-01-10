/** EXERCICE XP-NINJA */

//FOR NOW BECAUSE THAT’S THE KIND OF COURT I WAS LOOKING FOR WHEN IT’S PERFECT

let older_birth_year= prompt("age1")
let younger_birth_year = prompt("age2")


let half_age_date = (older_birth_year - (older_birth_year - younger_birth_year)) / 2
console.log(half_age_date)


const people = ["Greg", "Mary", "Devon", "James"];
let index = people.indexOf('Greg');
console.log(index)
if (index !== -1) {
    people.splice(index, 1);
}

alert(people)