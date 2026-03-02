
// CATEGORY COUNT (Aggregation Simulation)

const categoryCount = {};

articles.forEach(article => {

categoryCount[article.category] =
(categoryCount[article.category] || 0) + 1;

});


// BAR CHART

new Chart(

document.getElementById("categoryChart"),

{

type:"bar",

data:{

labels:Object.keys(categoryCount),

datasets:[{

label:"Articles",

data:Object.values(categoryCount),

backgroundColor:"#3b82f6"

}]

}

});




// AVERAGE RATING (Aggregation)

const ratings = articles.map(a=>a.rating);

const avgRating =
ratings.reduce((a,b)=>a+b,0)/ratings.length;



new Chart(

document.getElementById("ratingChart"),

{

type:"pie",

data:{

labels:["Average Rating","Remaining"],

datasets:[{

data:[avgRating,5-avgRating],

backgroundColor:[

"#22c55e",

"#374151"

]

}]

}

});