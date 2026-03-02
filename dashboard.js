const container =
document.getElementById("articles");

articles.forEach(article=>{

container.innerHTML +=

`

<div class="bg-gray-800 p-6 rounded-lg">

<h2 class="text-xl mb-2">

${article.title}

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