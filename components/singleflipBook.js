const SingleFlipBook = {
    template: `
    <div>
       <div class="container-fluid p-0 flex" style="height:100vh;background-color:#363265;" id="singleFlipBook">
            <div id="flipbookPDFContainer"></div>
       </div>
    </div>
    `,
    created() {
        this.index = this.$route.params.id;
        console.log(this.index);

        this.selectedPdfUrl = this.files.filter(x => x.id == this.index).map(x => x.pdfUrl)[0];
        console.log(this.selectedPdfUrl);
        var source_pdf = this.selectedPdfUrl;
        if (this.index == 1) {
            var option_pdf = { webgl: true, backgroundColor: "#363265" };
        }
        else if (this.index == 2) {
            var option_pdf = { webgl: true, backgroundColor: "#363265" };
        }
        else if (this.index == 3) {
            var option_pdf = { webgl: true, backgroundColor: "#363265" };
        }
        else if (this.index == 4) {
            var option_pdf = { webgl: true, backgroundColor: "#363265" };
        }
        setTimeout(() => {
            var flipBook_pdf = $("#flipbookPDFContainer").flipBook(
                source_pdf,
                option_pdf
            );
        }, 2000)
    },
    data() {
        return {
            files: [
                {
                    id: 1,
                    pdfUrl: '/resources/pdf/Books/1.pdf'
                },
                {
                    id: 2,
                    pdfUrl: '/resources/pdf/Books/2.pdf'
                },
                {
                    id: 3,
                    pdfUrl: '/resources/pdf/Books/3.pdf'
                },
                {
                    id: 4,
                    pdfUrl: '/resources/pdf/Books/4.pdf'
                }
            ],
            index: null,
            selectedPdfUrl: "",
        };
    },
    methods: {},
};
