"use client";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

type PDFProps = {
  url: string;
};

const PdfViewer: React.FC<PDFProps> = ({ url }) => (
  <Document file={url} onLoadError={e =>
    console.log("Error while loading document! " + e.message)
  }>
    <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false}/>
  </Document>
);

export default PdfViewer;