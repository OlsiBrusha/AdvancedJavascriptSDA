let fourthStudent = students[3];
console.log(`Fourth student is ${fourthStudent.fName} and his knowledge on the second language is ${fourthStudent.languages.javaScript
}`)
let secondStudent = students[1];
secondStudent.cities.push("Elbasan");
console.log(secondStudent.cities);
function isGreat(){
    if(fourthStudent.isGreat === false){
        return "Aleksander is not great"
    }
}
console.log(isGreat());