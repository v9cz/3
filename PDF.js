// مثال لاستخدام PDF.js لعرض ملف PDF داخل الصفحة
pdfjsLib.getDocument('/book-site/books/علوم صف٨ - RED WAVE - .pdf').promise.then(function(pdfDoc_) {
    pdfDoc = pdfDoc_;
    renderPage(1);
});

function renderPage(num) {
    pdfDoc.getPage(num).then(function(page) {
        var canvas = document.getElementById('pdf-canvas');
        var ctx = canvas.getContext('2d');
        var viewport = page.getViewport({ scale: 1.5 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({
            canvasContext: ctx,
            viewport: viewport
        });
    });
}
