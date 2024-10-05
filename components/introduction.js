const introduction = {
    template: `
    <div id="introPage">
    
      <div class="introduction">
    <header class="flex pt-4">
        <h1>முன்னுரை</h1>
    </header>
    <div class="container">
        <div class="row">
            <div class="col-12 mt-4">
                 <div class="book-slider-container owl-carousel">
                        <div class="book-slider flex" v-on:click="openSingleBook(1)">
                            <iconify-icon icon="twemoji:closed-book"></iconify-icon>
                            <div class="book-number">நூல்-1</div>
                        </div>
                        <div class="book-slider flex" v-on:click="openSingleBook(2)">
                            <iconify-icon icon="twemoji:green-book"></iconify-icon>
                            <div class="book-number">நூல்-2</div>
                        </div>
                        <div class="book-slider flex" v-on:click="openSingleBook(3)">
                            <iconify-icon icon="twemoji:orange-book"></iconify-icon>
                            <div class="book-number">நூல்-3</div>
                        </div>
                        <div class="book-slider flex" v-on:click="openSingleBook(4)">
                            <iconify-icon icon="twemoji:blue-book"></iconify-icon>
                            <div class="book-number">நூல்-4</div>
                        </div>
                        <div class="book-slider flex" v-on:click="openSingleBook(5)">
                            <iconify-icon icon="twemoji:closed-book"></iconify-icon>
                            <div class="book-number">நூல்-5</div>
                        </div>
                        <div class="book-slider flex" v-on:click="openSingleBook(6)">
                            <div class="book-number">நூல்-6</div>
                            <iconify-icon icon="twemoji:green-book"></iconify-icon>
                        </div>
                        <div class="book-slider flex" v-on:click="openSingleBook(7)">
                            <iconify-icon icon="twemoji:orange-book"></iconify-icon>
                            <div class="book-number">நூல்-7</div>
                        </div>
                        <div class="book-slider flex" v-on:click="openSingleBook(8)">
                            <iconify-icon icon="twemoji:blue-book"></iconify-icon>
                            <div class="book-number">நூல்-8</div>
                        </div>
                         <div class="book-slider flex" v-on:click="openSingleBook(9)">
                           <iconify-icon icon="twemoji:closed-book"></iconify-icon>
                            <div class="book-number">நூல்-9</div>
                        </div>
                         <div class="book-slider flex" v-on:click="openSingleBook(10)">
                            <iconify-icon icon="twemoji:green-book"></iconify-icon>
                            <div class="book-number">நூல்-10</div>
                        </div>
                         <div class="book-slider flex" v-on:click="openSingleBook(11)">
                            <iconify-icon icon="twemoji:orange-book"></iconify-icon>
                            <div class="book-number">நூல்-11</div>
                        </div>
                         <div class="book-slider flex" v-on:click="openSingleBook(12)">
                            <iconify-icon icon="twemoji:blue-book"></iconify-icon>
                            <div class="book-number">நூல்-12</div>
                        </div>
                    </div>
            </div>
            <div class="col-12">
                <div class="card intro-card">
                    <a href="resources/pdf/Books/Introduction.pdf" class="download-intro-btn flex" download>
                        <iconify-icon icon="ic:file-download"></iconify-icon>
                    </a>
                    <p class="text-1">உ</p>
                    <p class="text-2">ஓம் நமோ பகவதே வாசுதேவாய</p>
                    <p class="text-3">மகாபாரத சாகரம்</p>
                    <p class="text-4">நூல் தொகுதி அறிமுகம்</p>
                    <p class="text-5">பகவான் ஸ்ரீ கிருஷ்ணரின் பாதார விந்தங்களுக்கு அனந்த கோடி வந்தனம்
                        வியாச மகரிஷி திருவடிகளுக்கு சரணம்</p>

                    <p class="text-6">மகாபாரத இதிகாசம் பாரத தேசத்தின் உயிர் நாடி. இராமாயணம், மகாபாரதம் என்ற இதிகாசங்கள்
                        இன்றி,⠀மிகப் பழைய பண்பாட்டையும், கலாசாரத்தையும் கொண்டுள்ள பாரத தேசத்தில் எந்த ஒரு மொழியும்,
                        இனமும், குலமும் இல்லை. ஏதாவது ஒரு வகையில் இவ்விரு இதிகாசங்களின் தாக்கம் இந்த தேசம் முழுவதும்
                        உள்ளது.
                    </p>
                    <p class="text-7">

                        மகாபாரதத்தினை முழுமையாகப் படித்தறிய வேண்டும் என்ற ஆவல் இளம் வயது முதலே இருந்த போதிலும் மூல
                        நூலின் தமிழாக்கம் கிடைக்கவில்லை. இன்றைய அறிவியல் தொழில் நுட்ப வளர்ச்சியின் பயனாக <span
                            class="bold-text">2019-</span>ஆம் ஆண்டில் மூல நூலின் தமிழாக்கம் கிடைத்தது. படிப்பதற்காக
                        வாங்கிப் படிக்கத் தொடங்கிய பின், தமிழ் படிக்கத் தெரிந்த அனைவரும் நூலின் செய்திகளைப் படித்தறிந்து
                        கொள்ளும் வகையில் எழுதும் எண்ணம் தோன்றியது. பரபரப்பான வாழ்க்கை முறை உள்ள இந்த கால கட்டத்தில்
                        அவ்வப்போது கிடைக்கும் நேரத்தில் படிக்கும் வகையில் பல்வேறு தலைப்புகளின் கீழ் நூல் முழுமையும்
                        பகுத்தும், தொகுத்தும் எழுத இறையருள் கிட்டியது. எழுத்துப் பணி முடிக்க நான்காண்டுக் காலமும்
                        தட்டச்சு செய்ய ஓராண்டும் ஆனது. தற்போது வலைத்தளத்தில் பகவான் ஸ்ரீ கிருஷ்ணர் என்ற முதல் நூல்
                        வெளியிடப்படுகிறது.

                    </p>
                    <p class="text-8">
                        பகவான் ஸ்ரீ கிருஷ்ணர், யுதிஷ்டிரர், பீமன், அர்ஜுனன், கர்ணன், துரியோதனன் முதலிய முக்கிய நாயகர்கள்
                        மகாபாரத சரித்திரத்தில் பெறும் பங்கும், நிகழ்வுகளும் வரிசையாகத் தொகுத்து இயன்ற வரை எளிய நடையில்
                        தரப்பட்டுள்ளன. ஒவ்வொரு நூலின் தொடக்கத்திலும் நூலின் உள்ளடக்கம் சிறு சிறு தலைப்புகள் மூலம்
                        வரிசையாகத் தரப்பட்டுள்ளன. எளிதில் படிக்க இது துணைபுரியும்.
                    </p>

                    <p class="text-9">
                        மகாபாரதத்தில் இடம் பெறும் முனிவர்கள், தேவர்கள், மன்னர்கள் மற்றும் பல கதைகள் அனைத்தும் தனி
                        நூல்களாக, தனி தலைப்புகளின் கீழ் பருவம் மற்றும்⠀அத்தியாய⠀எண்களுடன்⠀கொடுக்கப்பட்டுள்ளன. சாந்தி
                        பருவம், அனுசாஸன பருவம், அஸ்வமேதிக பருவம் இவற்றின் செய்திகள் தனி நூல்களாக உள்ளன.
                        சாந்தி பருவம் அரச நீதியை அறிவிக்கிறது. ஆத்ம தரிசனத்தை உணர்த்துகிறது. அனுசாஸன பருவம் மனிதப்
                        பிறவியின் ஏற்றத் தாழ்வுகள், நான்கு வருணங்கள், நான்கு ஆசிரமங்கள், வாழ்க்கையின் ஏற்ற இறக்கங்கள்,
                        தாவர, ஜங்கமப் பிறவிகள் இவற்றிற்கான காரணங்களை விளக்குகிறது.
                    </p>
                    <p class="text-10">
                        அஸ்வமேதிக பருவம் வைஷ்ணவ தர்மத்தை விவரிக்கிறது. இப்பெரும் இதிகாசத்தில் கூறப்பட்டுள்ள
                        தீர்த்தங்கள், மலைகள், நதிகள், வனங்கள், இடம் பெறும் ஸ்துதிகள், அசரீரி, வரங்கள், முக்கிய சோதிடக்
                        குறிப்புகள், அகர வரிசைக் குறிப்புகளும்⠀தனியாகத்⠀தொகுக்கப்பட்டுள்ளன. இயன்ற வரை செய்திகள்
                        முழுமையாகத் தரப்பட்டுள்ளன.⠀பகவான் ஸ்ரீ கிருஷ்ணர் அருளால் இப்பணி முடிவடைந்தது. இருபதிற்கும்
                        மேற்பட்ட நூல்கள் இத்தொகுதியில் உள்ளன.
                    </p>
                    <p class="text-11">
                        இன்றைய அறிவியல் வளர்ச்சியில் நாம் காணும் பல முன்னேற்றங்களுக்கான ஆதாரம் மகாபாரத இதிகாசத்தில்
                        காணப்படுகிறது. எடுத்துக் காட்டுகளாக சோதனைக் குழாய் குழந்தை - கௌரவர்களின் பிறப்பு; க்ளோனிங் முறை
                        உயிர் உருவாக்கம் - ப்ருது சக்கரவர்த்தி தோற்றம்; பெண் ஆணாதல் - சிகண்டியின் வரலாறு; ஆண் பெண்ணாதல்
                        - பங்காஸ்வ மன்னன் வரலாறு; வானில் நிலை நிறுத்தப்படும் விண்வெளி ஆய்வு மையங்கள் - சால்வனின் வானில்
                        இயங்கிய சௌப விமானம்; ஏவுகணைகள் - தெய்வ அஸ்திரங்கள் ஆகியவற்றைக் கூறலாம்.
                    </p>

                    <p class="text-12">
                        குழந்தைப் பருவத்திலேயே இராமாயண, மகாபாரத சரித்திரங்களைச் சொல்லி வளர்த்த என் பாட்டி தெய்வமான
                        கோபாலம்மாள் கோவிந்த கவுண்டர் அவர்களுக்கும், என் தாய் தெய்வமான ஆசிரியை தனலட்சுமி இராமசாமிக்
                        கவுண்டர் அவர்களுக்கும் மானசீக நமஸ்காரங்கள்.
                    </p>

                    <p class="text-13">
                        மூலநூலை வலைத்தளத்தில் தேடிக் கண்டுபிடித்து வாங்கிக் கொடுத்து உதவிய, என் கணவர் பேராசிரியர்
                        முனைவர், <span class="bold-text"> திரு.கு.சங்கரன்</span> அவர்களுக்கு என் பணிவான வணக்கங்கள்.
                        விருப்ப ஓய்வு பெற்று பதினைந்து ஆண்டுக் காலத்திற்குப் பின் இந்த முயற்சியில் ஈடுபட்ட எனக்கு
                        ஊக்கமும், ஆலோசனைகளும் அளித்த எங்கள் மகன் <span class="bold-text">திரு.நம்பிசங்கரன்</span> 
                        (CA,⠀USA) மகள் <span class="bold-text">திருமதி.பிரியதர்சினி சரவணன்</span> (CA,⠀USA) இருவருக்கும்
                        அன்பும் வாழ்த்துக்களும் உரியதாகும்.
                        இப்பெரும் நூலினை சிறப்பாகத் தட்டச்சு செய்து கொடுத்த <a href="https://stargraphix.in/" target="_blank" style="color:black;">
                        சகோதரர் <span class="bold-text">மனோகர் (ஸ்டார் கிராபிக்ஸ்) </span></a> அவர்களுக்கு என மனமார்ந்த நன்றியைத் தெரிவித்துக் கொள்கிறேன்.
                        வலைத்தளம் உருவாக்கிய <a href="https://stargraphix.in/" target="_blank" style="color:black;"><span class="bold-text">வீராசாமி,</span></a>
                        செல்வன் <a href="https://stargraphix.in/" target="_blank" style="color:black;"><span class="bold-text">மோகன்ராஜ்</span></a> த/பெ.மனோகர் இருவருக்கும் வாழ்த்துக்கள்.
                    </p>
                    <p class="text-14">
                        இன்றைய திசை திருப்பப்பட்ட வாழ்க்கை முறையில் மறைக்கப்பட்ட தர்மத்தை அடிப்படையாகக் கொண்ட வாழ்வியல்
                        நெறியை இதிகாசங்களின் வாயிலாக அறிந்து தாங்களும் உயர்ந்து சமுதாயத்தையும் இளம் தலைமுறையினர் உயர்த்த
                        வேண்டும் எனப் பகவான் வாசுதேவ
                        ஸ்ரீ கிருஷ்ணரைப் பிரார்த்தித்துக் கொள்ளுகிறேன்.
                    </p>

                    <p class="text-15">
                        இறுதியாக, இந்தப் பணியில் ஈடுபட்ட காலத்தில் நான் பெற்ற அமைதியையும், மகிழ்வையும் அனைவருக்கும்
                        அளிக்க பகவான் வாசுதேவ ஸ்ரீ கிருஷ்ணரின் பாதார விந்தங்களைப் பணிகிறேன். மகாபாரதம் என்ற மாபெரும்
                        சரித்திரத்தை எந்த மொழியில், எந்த வடிவில் படித்தாலும், கேட்டாலும், சொன்னாலும், அளவற்ற ஆனந்தமும்,
                        அமைதியும் பெறுவது உறுதி.
                    </p>
                    <p class="text-16">
                        வணக்கத்துடன்,
                    </p>
                    <p class="text-17">
                        ஆதிரா
                    </p>
                    <p class="text-18">
                        (கலாராணி சங்கரன்)
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="intro-footer-text flex">
        <button class="book-view-count flex" v-on:click="openBooks()">
            <iconify-icon icon="majesticons:open"></iconify-icon>
            புத்தககங்களை பார்க்கவும்
        </button>
    </div>
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
        openBooks() {
            this.$router.push(`/Main`);
        },
        openSingleBook(id){
            this.$router.push(`/singleflipBook/${id}`);
        }
    },
    mounted() {
        $(".owl-carousel").owlCarousel({
            loop: false,
            margin: 0,
            nav: false,
            dots: false,
        });
    }
};
