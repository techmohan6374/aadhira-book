const SingleFlipBook = {
    template: `
    <div id="singleFlipBook">
       <div class="container-fluid p-0">
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
        setTimeout(()=>{
            var option_pdf = { webgl: true, backgroundColor: "#363265" };
            var flipBook_pdf = $("#flipbookPDFContainer").flipBook(
                source_pdf,
                option_pdf
            );
        },2000)
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
