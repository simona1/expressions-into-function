// Clean up the code below with a single function called `personalIntroduction`
// The new code should have the exact same functionality and output.

function personalIntroduction(name, height, favoriteColor) {
  console.log("My name is " + name + ", and my height is " + height + ", and my favorite color is " + favoriteColor);
};

console.log("Single function version");
personalIntroduction("Bob", "72", "red");
personalIntroduction("Samantha", "65", "orange");
personalIntroduction("Christofer", "69", "green");
personalIntroduction("Tamera", "63", "blue");

console.log();
console.log("Repetitive version");
var name = "Bob";
var height = "72";
var favoriteColor = "red";
var string = "My name is " + name;
string += ", and my height is " + height;
string += ", and my favorite color is " + favoriteColor;
console.log(string);

var name = "Samantha";
var height = "65";
var favoriteColor = "orange";
var string = "My name is " + name;
string += ", and my height is " + height;
string += ", and my favorite color is " + favoriteColor;
console.log(string);

var name = "Christopher";
var height = "69";
var favoriteColor = "green";
var string = "My name is " + name;
string += ", and my height is " + height;
string += ", and my favorite color is " + favoriteColor;
console.log(string);

var name = "Tamera";
var height = "63";
var favoriteColor = "blue";
var string = "My name is " + name;
string += ", and my height is " + height;
string += ", and my favorite color is " + favoriteColor;
console.log(string);
