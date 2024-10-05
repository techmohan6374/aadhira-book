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
                        <div class="card book-card" data-aos="flip-left">
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
                <span class="flex"><iconify-icon icon="emojione-monotone:eye-in-speech-bubble"></iconify-icon> Viewers : 234</span>
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
                    subTitleName: 'பாண்டவர் தரப்பு முக்கிய வீரர்கள்',
                    coverImage: 'resources/images/Books/7.jpg',
                },
                {
                    id: 8,
                    titleName: 'மகாபாரத சாகரம்',
                    subTitleName: 'கௌரவர்  தரப்பு முக்கிய வீரர்கள்',
                    coverImage: 'resources/images/Books/8.jpg',
                },
                {
                    id: 9,
                    titleName: 'மகாபாரத சாகரம்',
                    subTitleName: 'மகாபாரதத்தில் சில சான்றோர்கள்',
                    coverImage: 'resources/images/Books/9.jpg',
                },
                {
                    id: 10,
                    titleName: 'மகாபாரத சாகரம்',
                    subTitleName: 'கங்கையின் மைந்தர் பீஷ்மர்',
                    coverImage: 'resources/images/Books/10.jpg',
                },
                {
                    id: 11,
                    titleName: 'மகாபாரத சாகரம்',
                    subTitleName: 'தந்தை துரோணரும் தனயன் அஸ்வத்தாமாவும்',
                    coverImage: 'resources/images/Books/11.jpg',
                },
                {
                    id: 12,
                    titleName: 'மகாபாரத சாகரம்',
                    subTitleName: 'திருதராஷ்டிர மன்னர்',
                    coverImage: 'resources/images/Books/12.jpg',
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
    mounted() {
        let text = "தந்தை துரோணரும் தனயன் அஸ்வத்தாமாவும்";
        let parts = text.split(' ');
        let formattedText = parts.slice(0, 2).join(' ') + "<br>" + parts.slice(2).join(' ');
        $("#mainPage .col-12:nth-child(11) .card h5").html(formattedText);
    }
};
