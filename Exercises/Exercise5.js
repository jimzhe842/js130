function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName  = lastName  ;
  this.age = age;
  this.gender = gender;
}

let invoiceMixin = {
  invoice: function() {
    console.log(`${this.firstName} ${this.lastName} is Billing customer`);
  }
}

let payTaxMixin = {
  payTax: function() {
    console.log(`${this.firstName} ${this.lastName} Paying taxes`);
  }
}

Person.prototype.fullName = function() {
  console.log(`${this.firstName} ${this.lastName}`);
}

Person.prototype.communicate = function() {
  console.log("Hello");
}

Person.prototype.eat = function() {
  console.log(`${this.firstName} eating...`);
}

Person.prototype.sleep = function() {
  console.log(`${this.firstName} sleeping...`);
}

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this,firstName, lastName, age, gender);
  this.specialization = specialization;
}


Doctor.prototype = Object.create(Person.prototype);
Doctor.prototype.constructor = Doctor;

Doctor.prototype.diagnose = function() {
  console.log(`${this.firstName} diagnosing...`);
}

Object.assign(Doctor.prototype, invoiceMixin);
Object.assign(Doctor.prototype, payTaxMixin);

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function() {
  console.log(`${this.firstName} teaching...`);
}

Object.assign(Professor.prototype, invoiceMixin);
Object.assign(Professor.prototype, payTaxMixin);

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.study = function() {
  console.log(`${this.firstName} studying...`);
}

function GraduateStudent(firstName, lastName, age, gender, undergraduateDegree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, undergraduateDegree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student.prototype);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.research = function() {
  console.log(`${this.firstName} researching...`);
}