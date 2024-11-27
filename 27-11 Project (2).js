//#2
 
class Person {
    constructor(name, age, salary) {
      this.name = name;
      this.age = age;
      this.salary = salary;
    }
   
    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Salary: ${this.salary}`);
    }
  }
   
  class Employee extends Person {
    constructor(name, age, salary, jobTitle) { 
      super(name, age, salary);
      this.jobTitle = jobTitle;
    } 
    displayEmployeeDetails() {
      this.displayDetails();  
      console.log(`Job Title: ${this.jobTitle}`);
    }
  }
   
  const employee1 = new Employee("Parag Bhimani", 19, 15000, "Web Developer Internship");
  employee1.displayEmployeeDetails();
  




// Expected Output=>
// Name: Parag Bhimani, Age: 19, Salary:15000
// Job Title: web Developer Internship