// milestone exam
// 1 prompt keyword is used in console
//const password = prompt("please enter password")
// const conformPassword = prompt("please enter password conform password");

// if(password===conformPassword){
//     console.log("your log in  susseful ")
// }else{+
//     console.log("your password is incorrect")
// }

// 2 
// const a= prompt("please input a")
// const b=prompt("please input b")
// const key=prompt("plese enter operator")
// switch (key) {
//     case "+":console.log("the sum of a and b" ,a+b)
        
//         break;
//     case "-":console.log("the diffrence of a and b" ,a-b)
//         break;
//     case "*":console.log("the multiplication of a and b" ,a*b)
//         break;
//      case "/":console.log("the division of a and b" ,a/b)
//         break;
//     default:
//         console.log("the two no is not valid")
//         break;
// }

// 2 or 

// function calculator(num1,num2,operator){
//     let result
//     switch(operator){
//         case "+": result=num1+num2;
//         break;
//         case "-": result=num1-num2;
//         break;
//         case "/": result=num1/num2;
//         break;
//         case "*": result=num1*num2;
//         break;
//         default:
//                 console.log("the operator are invalid")

//     }
//     console.log("the rsult are equal to" ,result)
// }
//calculator(3,6,"*")

 //3 color mixture
//  let color1 =prompt("please enter first color")
//  let color2 =prompt("please enter second color")
 
//  if (color1=="red"||color2=="blue"){
//     console.log("radish")

//  } else(color1=="blaclk"||color2=="green");
// console.log("grrenish")
// 3or

// function mixColors(color1, color2) {
//     switch (color1) {
//       case "red":
//         switch (color2) {
//           case "blue":
//             return "purple";
//           case "yellow":
//             return "orange";
//           default:
//             return "Invalid color combination";
//         }
//       case "blue":
//         switch (color2) {
//           case "red":
//             return "purple";
//           case "yellow":
//             return "green";
//           default:
//             return "Invalid color combination";
//         }
//       case "yellow":
//         switch (color2) {
//           case "red":
//             return "orange";
//           case "blue":
//             return "green";
//           default:
//             return "Invalid color combination";
//         }
//       default:
//         return "Invalid color combination";
//     }
//   }
  
//   console.log(mixColors("red", "blue")); // purple
//   console.log(mixColors("blue", "red")); // purple
//   console.log(mixColors("red", "yellow")); // orange
//   console.log(mixColors("yellow", "red")); // orange
//   console.log(mixColors("blue", "yellow")); // green
//   console.log(mixColors("yellow", "blue")); // green
//   console.log(mixColors("green", "purple")); // Invalid color combination
 
//  // 4 highest mark
//  const marks = [80, 75, 90, 85, 95]; // example array of marks

// let highestMarks = 0;
// let highestMarksIndex = -1;

// for (let i = 0; i < marks.length; i++) {
//   if (marks[i] > highestMarks) {
//     highestMarks = marks[i];
//     highestMarksIndex = i;
//   }
// }

// const studentWithHighestMarks = highestMarksIndex >= 0 ? `Student ${highestMarksIndex + 1}` : "No student";
// console.log(`The highest marks were scored by: ${studentWithHighestMarks}, with a score of ${highestMarks}`);

    
// //5 capitilized

// function capitalizeName(name) {
//     return name.charAt(0).toLowerCase() === name.charAt(0) 
//       ? name.charAt(0).toUpperCase() + name.slice(1) 
//       : name;
//   }
  
//   console.log(capitalizeName("jane")); // Jane
//   console.log(capitalizeName("John")); // John
//   console.log(capitalizeName("jOHN")); // JOhn


