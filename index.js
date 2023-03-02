// Bolatito just got admitted to Greenfield High School as an Arts student. To commence her studies, she needs to know the subjects she will be taking as an Arts student. All students have to take the General subjects.
// 	The subjects for each class group are as follows:
// 	Science Subjects - Physics, Chemistry, Biology, Technical Drawing 
// Social Science Subjects - Accounting, Commerce, Marketing, Geography
// Arts Subjects - Government, Economics, Literature, History
// General Subjects - English, Mathematics

// Using if…else conditional statement, write a program that will help Bolatito determine the subjects she will be taking for the session using her class group. Also, in the case of an invalid class group, your output should be the General subjects. \


// ask Bolatito for her class group
let classGroup = prompt("What is your class group?");

// use if-else statements to determine the subjects based on class group
if (classGroup === "Science") {
  console.log("Your subjects are Physics, Chemistry, Biology, Technical Drawing, English, Mathematics");
} else if (classGroup === "Social Science") {
  console.log("Your subjects are Accounting, Commerce, Marketing, Geography, English, Mathematics");
} else if (classGroup === "Arts") {
  console.log("Your subjects are Government, Economics, Literature, History, English, Mathematics");
} else {
  console.log("Invalid class group. Your subjects are English, Mathematics.");
}
