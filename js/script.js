
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

];
// Question 1     

    complain: function cat (){
        console.log ("Meow!");
        return cat;
    }
    


// Question 2 

let headingText = "Updating heading";
const heading = document.querySelector ("h3");
heading.innerHTML = headingText


// Question 3 

heading.style.fontSize = "2em";

// Question 4 

heading.classList.add (".subheading");

// Question 5 

let paragraphs = document.querySelectorAll ("p");
for (paragraph of paragraphs){
    paragraph.style.color = "red"; 
}


// Question 6 

let resultsContainer = document.querySelector (".results");
resultsContainer.innerHTML = "<p>New paragraph</p>"; 
resultsContainer.style.backgroundColor = "yellow";



// Question 7 

function list (cats){
    for (let i=0; i<cats.length; i++){
        console.log (cats[i].name);
        
    }
};

list.innerHTML = cats;

// Question 8  I have some issues with the code... I am aware It can be done better / in another way, I just didn't mange :( 

function createCats (cats){
    for (cat of cats){
        const html= `
        <div>
            <h5>Blob</h5>
            <p>10</p>
        </div>
        <div> 
            <h5>Harold</h5>
            <p>Age unknown/p>
        </div>
        <div>
            <h5>Blurt</h5>
            <p>21</p>
        </div>
        `;
    }
  console.log (createCats);
    return html
}


console.log("cats" + JSON.stringify(cats));

const catContainer = document.querySelector (".cat-container")

console.dir(catContainer);

catContainer.innerHTML = JSON.stringify (cats); 
