
let articles =
JSON.parse(localStorage.getItem("articles")) || [];



function addArticle(){

const title =
        document.getElementById("title").value.trim();
const category =
        document.getElementById("category").value.trim();
const author =
        document.getElementById("author").value.trim();
const location =
        document.getElementById("location").value.trim();
const today =
        document.getElementById("isToday").checked;

// simple client-side validation
if(!title || !category || !author || !location){
    alert("Please fill in all fields before adding an article.");
    return;
}


const newArticle={

id:Date.now(),

title,

category,

author,

location,

isToday:today

};

articles.push(newArticle);

localStorage.setItem(
    "articles",
    JSON.stringify(articles)
);

alert("Article Added");

// reset form
document.getElementById("title").value = "";
document.getElementById("category").value = "";
document.getElementById("author").value = "";
document.getElementById("location").value = "";
document.getElementById("isToday").checked = false;

renderArticles();

}



function renderArticles(){

const list =
document.getElementById("articleList");

if(!list) return;

list.innerHTML="";

articles.forEach(a=>{

list.innerHTML+=`

<div class="bg-gray-700 p-4 rounded mb-3">

<h3>${a.title}</h3>

<p>${a.category}</p>

<p>${a.author}</p>

</div>

`;

});

}


renderArticles();