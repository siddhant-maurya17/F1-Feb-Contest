/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
   arr
    .filter(function(student){
        return student.marks>=50;
    })
     
    .map(function(student){
      console.log(student);
      });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(student){
        if(student.marks>=50){
        console.log(student);
    }
    });
}

function addData() {
  //Write your code here, just console.log
  arr.push({id:4,name:"susan",age:"20",marks:45})
    console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  for (let i=0;i<arr.length;i++) {
        if (arr[i].marks < 50){
          arr.splice(i, 1);
          i--;
        }
      }
      console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
   let newArr = [
        { id: 4, name: "david", age: "18", marks: 80 },
        { id: 5, name: "jessica", age: "20", marks: 85 },
        { id: 6, name: "michael", age: "19", marks: 35 },
      ];
      let concatenatedArray = arr.concat(newArr);
      console.log(concatenatedArray);
}
