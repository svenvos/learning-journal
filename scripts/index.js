import { heroArticle, otherArticles } from "/scripts/data.js";

const featuredArticle = document.getElementById("featured-article");
const articlesContainer = document.getElementById("articles-container");

featuredArticle.innerHTML = `
    <div class="featured-article-textbox-container">
        <p class="small">${heroArticle.date}</p>
        <h1 class="font-weight-900">${heroArticle.title}</h1>
        <p>${heroArticle.smallDescription}</p>
    </div>
`;

featuredArticle.style.backgroundImage = `url(/images/${heroArticle.image})`;

let tempStr = "";
otherArticles.forEach(article => {
    tempStr += `
        <div class="article">
            <img src="/images/${article.image}" alt="${article.title}">
            <div class="article-textbox-container">
                <p class="small">${article.date}<p>
                <h2 class="font-weight-900">${article.title}</h2>
                <p> ${article.smallDescription}</p>
            </div>
        </div>
    `;
});

articlesContainer.innerHTML = `${tempStr}`;
