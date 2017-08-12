// var arr = {age: 23, name: 'Chau'};
// console.log(arr);
// console.log(arr.name +' '+ arr.age);
//toan tu 3 ngoi (ternary operator)
// var name = 'chau';
// name == 'chau' ? console.log('my name is chau') : console.log('it is not my name');
// var numC = 20;
// if (numC > 20) {console.log('aa');}
var weight = 48;
var height = 1.58;
var bmi = weight/(height*height);
console.log('Your weight: '+weight);
console.log('Your height: '+height);
console.log('Your BMI: '+bmi);
var result = '';
if (bmi<18.5) {
	result = 'Underweight';
	console.log('You are '+result);
}else if(bmi>=18.5&&bmi<25){
	result = 'Normal weight';
	console.log('You are '+result);
}else if(bmi>=25&&bmi<30){
	result = 'Overweight';
	console.log('You are '+result);
}else if(bmi>=30){
	result = 'Obesity';
	console.log('You are '+result);
}