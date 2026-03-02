
const id =
parseInt(localStorage.getItem("currentArticleId"));

const category =
localStorage.getItem("currentCategory");

const article =
    articles.find(a => a.id === id);

if(!article){
    document.getElementById("title").innerText = "Article not found";
} else {
    document.getElementById("title").innerText = article.title;
    document.getElementById("meta").innerText =
        `${article.category} · ${article.author} · ${article.location}`;
    document.getElementById("content").innerText = article.content || "";
}


let startTime = Date.now();

let activity =
JSON.parse(localStorage.getItem("userActivity")) || {};

if(!activity[category]){
activity[category] = {
readTime:0,
likes:0,
bookmarks:0,
rating:0
};
}


function like(){
    if(!activity[category]) return;
    activity[category].likes += 1;
    localStorage.setItem("userActivity", JSON.stringify(activity));
    // disable button and provide feedback
    const btn = document.querySelector('button[onclick^="like("]');
    if(btn){
        btn.disabled = true;
        btn.innerText = 'Liked';
        btn.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

function bookmark(){
    if(!activity[category]) return;
    activity[category].bookmarks += 1;
    localStorage.setItem("userActivity", JSON.stringify(activity));
    const btn = document.querySelector('button[onclick^="bookmark("]');
    if(btn){
        btn.disabled = true;
        btn.innerText = 'Bookmarked';
        btn.classList.add('opacity-50', 'cursor-not-allowed');
    }
}

function finishReading(){
    const duration =
        Math.floor((Date.now() - startTime) / 1000);
    if(activity[category]){
        activity[category].readTime += duration;
        localStorage.setItem("userActivity", JSON.stringify(activity));
    }
    window.location.href="dashboard.html";
}