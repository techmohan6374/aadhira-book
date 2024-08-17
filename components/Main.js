const Main = {
    template: `
    <div id="mainPage">
       <div class="container-fluid p-0">
            <header class="flex pt-4">
                <h1>ஆதிரா புத்தகங்கள்</h1>          
            </header>
            <div class="container">
                <div class="row py-4">
                    <div class="col-12 col-xl-6">
                        <div class="card book-card">
                            <div class="card-image">
                                <img src="/resources/images/Books/1.jpg" alt="Book Cover" loading="lazy"/>
                            </div>
                            <div class="card-content mt-2">
                                <h6>மகாபாரதம் பகவான் ஸ்ரீ கிருஷ்ணர்</h6>
                                <button class="flex" v-on:click="openFlipBook(0)">
                                    <iconify-icon icon="octicon:book-16"></iconify-icon>
                                    பார்க்கவும்
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer class="flex">
                © Copyright Aadhira Books - 2024
                <span class="flex"><iconify-icon icon="emojione-monotone:eye-in-speech-bubble"></iconify-icon> Viewers : 5</span>
            </footer>
       </div>
    </div>
    `,
    created() {

    },
    data() {
        return {

        };
    },
    methods: {
        openFlipBook(id) {
            this.$router.push(`/singleflipBook/${id}`);
        },
    },
};
