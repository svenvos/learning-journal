import { heroArticle, otherArticles } from "/scripts/data.js";

const mainArticleContainer = document.getElementById("main-article-container");
const articlesContainer = document.getElementById("articles-container");

mainArticleContainer.innerHTML = `
    <header>
        <p class="small">${heroArticle.date}</p>
        <h1 class="font-weight-900">${heroArticle.title}</h1>
        <p>${heroArticle.smallDescription}</p>
    </header>
    <img src="/images/${heroArticle.image}" alt="${heroArticle.title}">
    <div>${heroArticle.fullArticleText}</div>
`;

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
