import React from 'react'
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import {Download} from "lucide-react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import { Document,Page,pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();


const Resume = () => {
    return (
        <>
         <div id="window-header">
             <WindowControls target="resume"/>
             <h2>Resume.pdf</h2>
             <a href="/files/resume.pdf" className='cursor-pointer' title="Download resume">
                 <Download className="icons"/>
             </a>
         </div>
            <Document file="files/resume.pdf" >
                <Page pageNumber={1}scale={0.8}  renderTextLayer renderAnnotationLayer />
            </Document>
        </>
    )
}

const ResumeWindow = WindowWrapper(Resume,'resume')
export default ResumeWindow
