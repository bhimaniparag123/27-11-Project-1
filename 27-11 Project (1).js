// #1.

class School {
  Student(name, email, contactNumber) {
    this.name = name;
    this.email = email;
    this.contactNumber = contactNumber;
    console.log("Student Details:");
    console.log("Name: " + this.name);
    console.log("Email: " + this.email);
    console.log("Contact Number: " + this.contactNumber);
  }

  Faculty(name, email, contactNumber) {
    this.name = name;
    this.email = email;
    this.contactNumber = contactNumber;

    console.log("Faculty Details:");
    console.log("Name: " + this.name);
    console.log("Email: " + this.email);
    console.log("Contact Number: " + this.contactNumber);
  }
}

let mySchool = new School();
mySchool.Student("Parag Bhimani", "Paragbhimani@gmail.com", "4457687834");
mySchool.Faculty("Girish Gindaliya", "Girishgondaliya@gmail.com", "7098080976");


// Expected Output=>
// Student Details:
// Name: Parag Bhimani
// Email: Paragbhimani@gmail.com
// Contact Number: 4457687834
// Faculty Details:
// Name: Girish Gindaliya
// Email: Girishgondaliya@gmail.com
// Contact Number: 7098080976