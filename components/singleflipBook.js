const SingleFlipBook = {
    template: `
    <div>
       <div class="container-fluid p-0 flex" style="height:100vh;background-color:#363265;" id="singleFlipBook">
            <div id="flipbookPDFContainer"></div>
            <audio id="flipbookAudio" style="display:none;"></audio>
       </div>
    </div>
    `,
    created() {
        this.index = this.$route.params.id;
        console.log(this.index);

        this.selectedPdfUrl = this.files.filter(x => x.id == this.index).map(x => x.pdfUrl)[0];
        this.selectedAudioUrl = this.files.filter(x => x.id == this.index).map(x => x.audioUrl)[0];
        console.log(this.selectedPdfUrl);
        var source_pdf = this.selectedPdfUrl;
        var audioUrl = this.selectedAudioUrl;

        var option_pdf = { webgl: true, backgroundColor: "#363265" };

        setTimeout(() => {
            var flipBook_pdf = $("#flipbookPDFContainer").flipBook(
                source_pdf,
                option_pdf
            );

            // Play the audio after loading the flipbook
            var audioElement = document.getElementById('flipbookAudio');
            audioElement.src = audioUrl;
            audioElement.play(); // Start playing the audio
        }, 4000);
    },
    data() {
        return {
            files: [
                {
                    id: 1,
                    pdfUrl: 'resources/pdf/Books/1.pdf',
                    audioUrl:'resources/audio/Books/1.mp3'
                },
                {
                    id: 2,
                    pdfUrl: 'resources/pdf/Books/2.pdf',
                    audioUrl:'resources/audio/Books/2.mp3'
                },
                {
                    id: 3,
                    pdfUrl: 'resources/pdf/Books/3.pdf',
                    audioUrl:'resources/audio/Books/3.mp3'
                },
                {
                    id: 4,
                    pdfUrl: 'resources/pdf/Books/4.pdf',
                    audioUrl:'resources/audio/Books/4.mp3'
                }
            ],
            index: null,
            selectedPdfUrl: "",
            selectedAudioUrl: ""
        };
    },
    methods: {},
};


