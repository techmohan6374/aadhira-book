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
        this.selectedPdfUrl = this.files[this.index];
        console.log(this.selectedPdfUrl);
        var source_pdf = this.selectedPdfUrl;
        if (this.index == 0) {
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
            files: ['/resources/pdf/Books/1.pdf'],
            index: null,
            selectedPdfUrl: "",
        };
    },
    methods: {},
};
