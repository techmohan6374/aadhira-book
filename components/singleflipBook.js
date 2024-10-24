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
        }, 5000);
    },
    data() {
        return {
            files: [
                {
                    id: 1,
                    pdfUrl: 'resources/pdf/Books/1.pdf',
                    audioUrl: 'resources/audio/Books/1.mp3'
                },
                {
                    id: 2,
                    pdfUrl: 'resources/pdf/Books/2.pdf',
                    audioUrl: 'resources/audio/Books/2.mp3'
                },
                {
                    id: 3,
                    pdfUrl: 'resources/pdf/Books/3.pdf',
                    audioUrl: 'resources/audio/Books/3.mp3'
                },
                {
                    id: 4,
                    pdfUrl: 'resources/pdf/Books/4.pdf',
                    audioUrl: 'resources/audio/Books/4.mp3'
                },
                {
                    id: 5,
                    pdfUrl: 'resources/pdf/Books/5.pdf',
                    audioUrl: 'resources/audio/Books/5.mp3'
                },
                {
                    id: 6,
                    pdfUrl: 'resources/pdf/Books/6.pdf',
                    audioUrl: 'resources/audio/Books/6.mp3'
                },
                {
                    id: 7,
                    pdfUrl: 'resources/pdf/Books/7.pdf',
                    audioUrl: 'resources/audio/Books/7.mp3'
                },
                {
                    id: 8,
                    pdfUrl: 'resources/pdf/Books/8.pdf',
                    audioUrl: 'resources/audio/Books/8.mp3'
                },
                {
                    id: 9,
                    pdfUrl: 'resources/pdf/Books/9.pdf',
                    audioUrl: 'resources/audio/Books/9.mp3'
                },
                {
                    id: 10,
                    pdfUrl: 'resources/pdf/Books/10.pdf',
                    audioUrl: 'resources/audio/Books/10.mp3'
                },
                {
                    id: 11,
                    pdfUrl: 'resources/pdf/Books/11.pdf',
                    audioUrl: 'resources/audio/Books/11.mp3'
                },
                {
                    id: 12,
                    pdfUrl: 'resources/pdf/Books/12.pdf',
                    audioUrl: 'resources/audio/Books/12.mp3'
                },
                {
                    id: 13,
                    pdfUrl: 'resources/pdf/Books/13.pdf',
                    audioUrl: 'resources/audio/Books/13.mp3'
                },
                {
                    id: 14,
                    pdfUrl: 'resources/pdf/Books/14-1.pdf',
                    audioUrl: 'resources/audio/Books/14-1.mp3'
                },
                {
                    id: 15,
                    pdfUrl: 'resources/pdf/Books/14-2.pdf',
                    audioUrl: 'resources/audio/Books/14-2.mp3'
                },
                {
                    id: 16,
                    pdfUrl: 'resources/pdf/Books/14-3.pdf',
                    audioUrl: 'resources/audio/Books/14-3.mp3'
                },
                {
                    id: 17,
                    pdfUrl: 'resources/pdf/Books/15.pdf',
                    audioUrl: 'resources/audio/Books/15.mp3'
                },
                {
                    id: 18,
                    pdfUrl: 'resources/pdf/Books/16.pdf',
                    audioUrl: 'resources/audio/Books/16.mp3'
                },
                {
                    id: 19,
                    pdfUrl: 'resources/pdf/Books/17.pdf',
                    audioUrl: 'resources/audio/Books/17.mp3'
                },
                {
                    id: 20,
                    pdfUrl: 'resources/pdf/Books/18.pdf',
                    audioUrl: 'resources/audio/Books/18.mp3'
                },
                {
                    id: 21,
                    pdfUrl: 'resources/pdf/Books/19.pdf',
                    audioUrl: 'resources/audio/Books/19.mp3'
                },

            ],
            index: null,
            selectedPdfUrl: "",
            selectedAudioUrl: ""
        };
    },
    methods: {},
};


