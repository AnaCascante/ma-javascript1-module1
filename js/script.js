const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
        
    },
    {
        name: "Blurt",
        age: 21
    },
// Question 1     
    {
        complain: function (){
            console.log ("Meow!");
        }
    }
];



// Question 2 

let headingText = "Updating heading";
const heading = document.querySelector ("h3");
heading.innerHTML = headingText


// Question 3 

heading.style.fontSize = "2em";

// Question 4 **********Add a class to the heading variable called subheading.



// Question 5 

let paragraphs = document.getElementsByTagName ("p");
for (paragraph of paragraphs){
    paragraph.style.color = "red"; 
}


// Question 6 

let resultsContainer = document.querySelector (".results");
resultsContainer.innerHTML = "<p>New paragraph</p>"; 
resultsContainer.style.backgroundColor = "yellow";



// Question 7 ********Create a function that has one parameter called list. ******* Inside the function, loop through the list parameter and console log the name property in each object. ********** Call the function and pass in the cats variable in the script.js file in the repo.

function list (){

}


// Question 8 ********* Create a function called createCats(done). The function will have one parameter called cats (done). ******** Inside the function loop through the value passed in as cats and create HTML for each object in the array(done). ***** Wrap each item in a div, each name property in an h5 tag and each age property in a p tag (done). ******** If the age property is missing, it should display “Age unknown” instead. ********** Return the HTML from the function. *********** Call the function and pass in the cats array as the argument. ************ Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container.

function createCats (cats){
    for (cat of cats){
        const html= `
        <div>
            <h5>Blob</h5>
            <p>10</p>
            <h5>Harold</h5>
            <p> Age unknown </p>
            <h5>Blurt</h5>
            <p>21</p>
        </div>
        `;
        if (age != null){
            console.log ("Age unknown")}
        console.log (cat)
    }
  
}


console.log("cats" + JSON.stringify(cats));



const catContainer = document.querySelector (".cat-container")

console.dir(catContainer);
