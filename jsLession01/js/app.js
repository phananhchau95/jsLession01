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
var BMI = weight/(height*height);
console.log('Your weight: '+weight);
console.log('Your height: '+height);
console.log('Your BMI: '+BMI);
var result = '';
if (BMI<18.5) {
	result = 'Underweight';
	console.log('You are '+result);
}else if(BMI>=18.5&&BMI<25){
	result = 'Normal weight';
	console.log('You are '+result);
}else if(BMI>=25&&BMI<30){
	result = 'Overweight';
	console.log('You are '+result);
}else if(BMI>30){
	result = 'Obesity';
	console.log('You are '+result);
}