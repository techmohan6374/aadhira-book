const Main = {
    template: `
    <div id="mainPage">
       <div class="container-fluid p-0">
            <header class="flex pt-4">
                <h1>ஆதிரா புத்தகங்கள்</h1>          
            </header>
            <div class="container" style="padding-bottom:40px;">
                <div class="row py-4">
                    <div class="col-12 col-xl-6 mb-4" v-for="books in aadhiraBooksData">
                        <div class="card book-card">
                            <div class="card-image">
                                <img :src="books.coverImage" alt="Book Cover" loading="lazy"/>
                            </div>
                            <div class="card-content mt-2">
                                <h6>{{books.titleName}} <span class="book-badge">நூல்- {{books.id}}</span></h6>
                                <h5>{{books.subTitleName}}</h5>
                                <button class="flex" v-on:click="openFlipBook(books.id)">
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
                <span class="flex"><iconify-icon icon="emojione-monotone:eye-in-speech-bubble"></iconify-icon> Viewers : 227</span>
            </footer>
       </div>
    </div>
    `,
    created() {

    },
    data() {
        return {
            aadhiraBooksData: [
                {
                    id: 1,
                    titleName: 'மகாபாரத சாகரம்',
                    subTitleName: 'பகவான் ஸ்ரீ கிருஷ்ணர்',
                    coverImage: 'resources/images/Books/1.jpg',
                },
                {
                    id: 2,
                    titleName: 'மகாபாரத சாகரம்',
                    subTitleName: 'சாந்தி பருவம் - பொது செய்திகள்',
                    coverImage: 'resources/images/Books/2.jpg',
                },
                {
                    id: 3,
                    titleName: 'மகாபாரத சாகரம்',
                    subTitleName: 'அனுசாஸன பருவம் - பொது செய்திகள்',
                    coverImage: 'resources/images/Books/3.jpg',
                },
                {
                    id: 4,
                    titleName: 'மகாபாரத சாகரம்',
                    subTitleName: 'அஸ்வமேதிக பருவம் - பொது செய்திகள்',
                    coverImage: 'resources/images/Books/4.jpg',
                },
                {
                    id: 5,
                    titleName: 'மகாபாரத சாகரம்',
                    subTitleName: 'முனிவர்களும், தேவர்களும் ',
                    coverImage: 'resources/images/Books/5.jpg',
                },
                {
                    id: 6,
                    titleName: 'மகாபாரத சாகரம்',
                    subTitleName: 'மன்னர்கள் மற்றும் சில வரலாறுகள்',
                    coverImage: 'resources/images/Books/6.jpg',
                },
                {
                    id: 7,
                    titleName: 'மகாபாரத சாகரம்',
                    subTitleName: 'பாண்டவர் தரப்பு முக்கிய வீரர்கள் ',
                    coverImage: 'resources/images/Books/7.jpg',
                },
                {
                    id: 8,
                    titleName: 'மகாபாரத சாகரம்',
                    subTitleName: 'கௌரவர்  தரப்பு முக்கிய வீரர்கள் ',
                    coverImage: 'resources/images/Books/8.jpg',
                }
            ],
            introductionContainer: true,
            mainContainer: false,
        };
    },
    methods: {
        openFlipBook(id) {
            this.$router.push(`/singleflipBook/${id}`);
        }
    },
};
