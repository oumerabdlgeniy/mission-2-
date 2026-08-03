

function totalof(scores){
  let total=0;
  for (let i=0;i<scores.length;i++)
  {
total+=scores[i]
  }
  return total;
}

//arrow function
const average=(total,scores)=>total/scores.length

function grade(avg){
    if (avg >= 90) {
        return "A+";
    } else if (avg >= 85) {
        return "A";
    } else if (avg >= 80) {
        return "B+";
    } else if (avg >= 75) {
        return "B";
    } else if (avg >= 70) {
        return "C+";
    } else if (avg >= 60) {
        return "C";
    } else {
        return "F";
    }
}

const students=[]
//rest parameter
function Addstudent(name,age,gender,...scores){
  
    const total=totalof(scores)
    const avg=average(total,scores)
    const result=grade(avg)

    const student={
        name,
        age,
        gender,
        scores,
        average:avg,
        grade:result

    }
    students.push(student)

}
Addstudent("abdu oumer",20,"male",90,100,80,75)
Addstudent("Abdi mohamed",13,"male",80,90,70,75)
Addstudent("husu abdu",22,"male",60,80,70,95)
Addstudent("muhidin elias",15,"male",93,80,90,85)

//Higher order function
students.forEach(student=>{
    console.log(student.age,student.grade)
    
})
//filter method
const adultstudent=students.filter(student=>student.age>=18)
console.log(adultstudent)
//map method
const studentname=students.map(student=>student.name)
console.log(studentname)
//closure
function createResultChecker(passMark) {
    return function (average) {
        return average >= passMark ? "Pass" : "Fail";
    };
}

const checkResult = createResultChecker(50);

console.log(checkResult(75)); 
console.log(checkResult(40)); 