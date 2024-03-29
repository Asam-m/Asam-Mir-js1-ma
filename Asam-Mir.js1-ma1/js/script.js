const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1:
//Create an object called cat.

//Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".

const cat = {
  complain: function () {
    this.complain();
  },
  complain: function () {
    console.log("Meow");
  },
};
cat.complain();

//Question 2:
//Select the h3 from the HTML using the querySelector method and assign it to a variable called heading.

//Change its innerHTML value to "Updated heading".
const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading ";

//Question 3:
//Use the style property on the heading variable from the question above to change its font size to "2em".
heading.style.fontSize = "2em";

//Question 4:
//Add a class to the heading variable called subheading.
//const subHeading = document.querySelectorAll("p");
//subHeading.classList.add("changed");
