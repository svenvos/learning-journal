class Blog {
    constructor({title, smallDescription, date, image, fullArticleText}) {
        this.title = title;
        this.smallDescription = smallDescription;
        this.date = date;
        this.image = image;
        this.fullArticleText = fullArticleText;
    }
}

export const heroArticle = new Blog({
    title: "My journey as a frontend developer.",
    smallDescription: `After several months of learning in the Frontend Developer Career Path,
                        I've made the big jump over to the Bootcamp to get expert code reviews of my Solo Projects
                        projects and meet like-minded peers.`,
    date: "May 7, 2025",
    image: "hero.png",
    fullArticleText: `<h3 class="font-weight-900">How I stay committed to learning</h3>
                        <p>I like to think of myself as a lifelong learner. I used to spend hours and hours learning,
                        then try to create simple projects using what I learned or work new techniques into existing projects.</p>
                        <p>While that was fun, I felt like it would be helpful to share what I was learning
                        and most things about my journey with the world.</p>
                        <h3 class="font-weight-900">How I got started</h3>
                        <p>I started simple and gradually grew my learning journal site.
                        I would take notes about what I was learning. After each learning session, I'd use my
                        notes to not only reflect on what I learned but also write short summaries of what I learned
                        using my own words.</p>
                        <p>That helped me grok what I was learning, and I
                        realized that posting my learning summaries was also helping others learn and stay motivated.</p>`
});

export const otherArticles = [
    new Blog({
        title: "Blog one",
        smallDescription: `I'm excited to start a new learning journey as a
                            Scrimba Bootcamp student! After several months of learning in
                            the Frontend Developer Career Path.
        `,
        date: "May 4, 2025",
        image: "blog1.png",
        fullArticleText: ``
    }),
    new Blog({
        title: "Blog two",
        smallDescription: `I'm excited to start a new learning journey as a
                            Scrimba Bootcamp student! After several months of learning in
                            the Frontend Developer Career Path.
        `,
        date: "March 20, 2025",
        image: "blog2.png",
        fullArticleText: ``
    }),
    new Blog({
        title: "Blog three",
        smallDescription: `I'm excited to start a new learning journey as a
                            Scrimba Bootcamp student! After several months of learning in
                            the Frontend Developer Career Path.
        `,
        date: "April 4, 2025",
        image: "blog3.png",
        fullArticleText: ""
    })
];
