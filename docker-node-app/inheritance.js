"use strict";
// var parent = {
// 	amt: 1000
// };
//
// var child = Object.create(parent);
// child.amt = 10;
// delete child.amt;
//
// console.log(child.amt);

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
}

Person.prototype.getFullName = function() {
	return this.firstName + " " + this.lastName;
}

function Student(studentId, firstName, lastName) {
	this._super.call(this, firstName, lastName);
	this.studentId = studentId;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
Student.prototype._super = Person;

Student.prototype.getRecordInfo = function() {
	return this.studentId + " " + this.lastName + ", " + this.firstName;
}

class Person2 {

	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	getFullName() {
		return this.firstName + " " + this.lastName;
	}
}

class Student2 extends Person2 {
	constructor(studentId, firstName, lastName) {
		super(firstName, lastName);
		this.studentId = studentId;
	}

	getRecordInfo() {
		return this.studentId + " " + this.lastName + ", " + this.firstName;
	}
}


var s = new Student2(1, "Uncle", "Bob");
console.dir(s);
console.log(s.getFullName());
console.log(s.getRecordInfo());

console.log(typeof Person);
console.log(typeof Person2);


//console.log(Object.getPrototypeOf(Person) === Person.prototype);
