if(localStorage.getItem("role")!=="user"){
    window.location.href="index.html";
}

// show current user email
const currentUser = localStorage.getItem("loggedUser") || "";
if(document.getElementById("userEmail")){
    document.getElementById("userEmail").innerText = currentUser;
}

const articles =
JSON.parse(localStorage.getItem("articles")) || [];

const preferences =
JSON.parse(localStorage.getItem("userPreferences")) || [];

const activity =
JSON.parse(localStorage.getItem("userActivity")) || {};

const todaySection =
document.getElementById("todaySection");

const recommendedSection =
document.getElementById("recommendedSection");


function calculateScore(category){

if(!activity[category]) return 0;

return (
(activity[category].readTime || 0) +
(activity[category].likes || 0) * 3 +
(activity[category].bookmarks || 0) * 2 +
(activity[category].rating || 0) * 4
);

}


function createCard(article){

    return `
    <div class="glass-card hover-lift p-6 rounded-2xl shadow-xl border border-gray-700">

    <h3 class="text-xl font-semibold mb-2 text-blue-300">
    ${article.title}
    </h3>

    <p class="text-gray-400 text-sm mb-1">
    Category: ${article.category}
    </p>

    <p class="text-gray-400 text-sm mb-4">
    ${article.author} | ${article.location}
    </p>

    <button onclick="readArticle(${article.id},'${article.category.replace(/'/g, "\\'")}')"
    class="btn-primary w-full">
    Read Article
    </button>

    </div>
    `;
}


// TODAY ARTICLES
const todayArticles = articles.filter(a => a.isToday && preferences.includes(a.category));
if(todayArticles.length === 0){
    todaySection.innerHTML = '<p class="col-span-full text-gray-400">No headlines available for your interests.</p>';
} else {
    todayArticles.forEach(a => {
        todaySection.innerHTML += createCard(a);
    });
}


// RECOMMENDED
const recArticles = articles
    .filter(a => preferences.includes(a.category))
    .sort((a,b) =>
        calculateScore(b.category) - calculateScore(a.category)
    );
if(recArticles.length === 0){
    recommendedSection.innerHTML = '<p class="col-span-full text-gray-400">No recommendations yet. Select some interests!</p>';
} else {
    recArticles.forEach(a => {
        recommendedSection.innerHTML += createCard(a);
    });
}


function readArticle(id,category){

localStorage.setItem("currentArticleId",id);
localStorage.setItem("currentCategory",category);

window.location.href="articleView.html";

}