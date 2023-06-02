//ITCS227 Source Code template for 2T AV 2022-2023
/*
	Program: Computation of Grades using functions
	Programmer: Rian Miguel P. Estrellado
	Section: BSCS AN22
	Start Date: June 2, 2023
	End Date: June 3, 2023 
*/
var num = parseInt(prompt("Enter number of students <Max of 5>:"))
const name = []; var firstcp=[]; var secondcp =[]; var thirdcp =[]; var fourthcp =[]; var fifthcp =[];
var averagecp = [];

var firstsa =[]; var secondsa =[]; var thirdsa =[];
var averagesa =[];

var major =[]; var gs =[];

const lg = [];
for(let i = 0; i < (num); i++){
alert("Calculate the average of the " + [i] +" student ");
name[i] = prompt("Enter student name: ");
firstcp[i] = parseInt(prompt("Enter enabling assessment 1: "));
secondcp[i] = parseInt(prompt("Enter enabling assessment 2: "));
thirdcp[i] = parseInt(prompt("Enter enabling assessment 3: "));
fourthcp[i] = parseInt(prompt("Enter enabling assessment 4: "));
fifthcp[i] = parseInt(prompt("Enter enabling assessment 5: "));
averagecp[i] = (firstcp[i] + secondcp[i] + thirdcp[i] + fourthcp[i] + fifthcp[i])/5;
Math.round(averagecp[i]);
//console.log(average)
alert("The average of class participation is " + Math.round(averagecp[i]));

firstsa[i] = parseInt(prompt("Enter summative assessment 1: "));
secondsa[i] = parseInt(prompt("Enter summative assessment 2: "));
thirdsa[i] = parseInt(prompt("Enter summative assessment 3: "));
averagesa[i] = (firstsa[i] + secondsa[i] + thirdsa[i])/3;
alert("The average of summative assessment is " + Math.round(averagesa[i]));
Math.round(averagesa[i]);

major[i] = parseInt(prompt("Enter major exam: "));
alert("The average of major exam is " + Math.round(major[i]));
Math.round(major[i]);

gs[i] = (averagecp[i] + averagesa[i] + major[i])/3;
alert("The Grade Score is is " + Math.round(gs[i]));
Math.round(gs[i]);

switch(true){
	//if the grade is greater than or equal to 90 = A+
	case (gs[i] >= 90):
		console.log('Your grade is A+');
		lg[i] = "A+";
		break;
	//if the grade is greater than or equal to 89 = B
	case (gs[i] >= 80 && gs[i] <=89):
		console.log('your grade is B');
		lg[i] = "B";
		break;
	//if the grade is greater than or equal to 70 = C
	case (gs[i] >= 70 && gs[i] <=79):
		console.log('Your grade is C');
		lg[i] = "C ";
		break;
	//if the grade is greater than or equal to 60 = D
	case (gs[i] >= 60 && gs[i] <=69):
		console.log('Your grade is D');
		lg[i] = "D";
		break;
	//if the grade is less than or equal to 70 = F
	default:
		console.log('Your grade is F');
		lg[i] = "F";
		break;
};	
}
//=================================================================================================
//=================================================================================================
//=================================================================================================



let studentarray = [
    ['Name of student', 'Class Participation', 'Summative Assessment', 'Exam Grade', 'Grade Score', 'Letter Grade'],
    [name[0]          , averagecp[0]         ,  averagesa[0]         ,  major[0]   , gs[0]        ,          lg[0]],
    [name[1]          , averagecp[1]         ,  averagesa[1]         ,  major[1]   , gs[1]        ,          lg[1]],
    [name[2]          , averagecp[2]         ,  averagesa[2]         ,  major[2]   , gs[2]        ,          lg[2]],
    [name[3]          , averagecp[3]         ,  averagesa[3]         ,  major[3]   , gs[3]        ,          lg[3]],
    [name[4]          , averagecp[4]         ,  averagesa[4]         ,  major[4]   , gs[4]        ,          lg[4]],
];
console.table(studentarray)