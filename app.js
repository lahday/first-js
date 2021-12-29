// Declare two variables: firstName and lastName. 1
// Assign the value "Kehinde" to firstName     2
// Assign the value "Odetola" to   lastName   2
// Copy the value from firstName AND lastName to boss. i.e variable  boss should be equal to Kehinde Odetola  3
// Show the value of boss using alert .  2
// Create a variable with the name of our planet. How would you name such a variable?  2
// Create a variable to store the name of a current visitor to a website. How would you name that variable? 2
// create an array arr of 20 items in it 3
// output the items with positions in a  multiple of 5  in  array  arr      4
// create an dog Object with 4 properties.  2
// create an array of objects of 8  different animals and output 1 of each animal's properties 5
//  Create a variable for ptpAmount and write a conditional statement using if and else for different cases of the PTP Amount; Have an output for any possible amount. (be creative here for the possible scenarios of PTP). 5
// 12. Bonus question.. At Bfree Mentorship Programme Which team stands out as the best ? and why? 1 (edited)

let firstName;
let lastName;
firstName = "Kehinde";
lastName = "Odetola";

let boss = firstName + " " + lastName;
console.log(boss);

alert(boss);

let myPlanet = "Earth";
let webVisitor = {
  firstName: "Ololade",
  lastName: "Seriki",
};
console.log(webVisitor);

let arr = [
  "lade",
  12,
  "dancing",
  "codes",
  "talk",
  "eat",
  "Vic",
  "tola",
  "moh",
  "martha",
  "francis",
  56,
  true,
  "bags",
  "shoes",
  "bottles",
  "glass",
  "book",
  "hair",
  "cable",
];

console.log(arr[4]);
console.log(arr[9]);
console.log(arr[14]);
console.log(arr[19]);

let Dog = {
  name: "Andy",
  breed: "German Shepherd",
  age: 2,
  color: "light gray",
};
console.log(Dog.breed);

let Animals = [
  { name: "cat", color: "black", age: 1, owner: "vic" },
  { name: "dog", color: "white", age: 2, owner: "martha" },
  { name: "sheep", color: "orange", age: 2, owner: "martha" },
  { name: "lion", color: "green", age: 2, owner: "lade" },
  { name: "fish", color: "gray", age: 1, owner: "kehinde" },
  { name: "snake", color: "purple", age: 3, owner: "francis" },
  { name: "antelope", color: "lilac", age: 4, owner: "moh" },
  { name: "duck", color: "light gray", age: 0, owner: "tola" },
];

console.log(Animals[0].name);
console.log(Animals[1].color);
console.log(Animals[2].owner);
console.log(Animals[3].age);
console.log(Animals[4].name);
console.log(Animals[5].owner);
console.log(Animals[6].age);
console.log(Animals[7].color);

let ptpAmount = 2000;
if (ptpAmount <= 1000) {
  console.log("you cannot schedule a ptp less than the ptpAmount");
} else if (ptpAmount < 2000) {
  console.log("ptp scheduled is less than ptpAmount");
} else {
  console.log("save ptp");
}

const bestTeam = "frontend dev";
console.log(bestTeam);
