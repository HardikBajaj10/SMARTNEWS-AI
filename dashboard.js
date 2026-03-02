
const container =
document.getElementById("articles");

const searchInput =
document.getElementById("searchInput");

const categoryFilter =
document.getElementById("categoryFilter");



function renderArticles(){

container.innerHTML="";


const search =
searchInput.value.toLowerCase();

const category =
categoryFilter.value;



articles

.filter(article =>

(article.title
.toLowerCase()
.includes(search))

&&

(category==="All"
||

article.category===category)

)

.sort((a,b)=>b.rating-a.rating)



.forEach(article=>{


const recommended =
article.rating > 4.5 ?

`<span
class="bg-green-500 px-2 ml-2 rounded">

Recommended ⭐

</span>`

:"";

container.innerHTML +=

`

<div class="bg-gray-800 p-6 rounded-lg shadow-lg 
hover:scale-105 transform transition duration-300">

<h2 class="text-xl mb-2">

${article.title}

${recommended}

</h2>

<p>

Category :
${article.category}

</p>

<p>

Rating :
${article.rating}

</p>

<p>

Views :
${article.views}

</p>

</div>

`;

});

}


searchInput.addEventListener("input",
renderArticles);

categoryFilter.addEventListener("change",
renderArticles);



renderArticles();
document.getElementById("totalArticles").innerText =
articles.length;