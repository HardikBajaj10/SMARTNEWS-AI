const container =
document.getElementById("articleList");

function renderArticles(){

container.innerHTML="";

articles.forEach((article,index)=>{

container.innerHTML +=

`

<div class="bg-gray-800 p-5 rounded">

<h2 class="text-lg">

${article.title}

</h2>

<p>

${article.category}

</p>

<button onclick="deleteArticle(${index})"

class="bg-red-500 mt-3 px-3 py-1 rounded">

Delete

</button>

</div>

`;

});

}

renderArticles();


function addArticle(){

const title =
document.getElementById("title").value;

const category =
document.getElementById("category").value;

const author =
document.getElementById("author").value;

articles.push({

title,
category,
author,
rating:4,
views:0

});

renderArticles();

}


function deleteArticle(index){

articles.splice(index,1);

renderArticles();

}