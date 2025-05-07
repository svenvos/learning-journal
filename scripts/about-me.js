import { otherArticles } from "/scripts/data.js";

const articlesContainer = document.getElementById("articles-container");

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
