/* global jsPDF */
import React, { useState } from 'react'
import renderHtml from "react-render-html"
import JoditEditor from "jodit-react";
// import { jsPDF } from "jspdf";
import ReactDOMServer from "react-dom/server";

export default function CV({ data }) {
    const ok = "Nguyễn Văn Tèo"

    const [content, setContent] = useState(data);
    console.log("content",content);
    // var pdf=new window.jsPDF();

    const exportPDF = () => {
 
        let element = (
          <div style={{ display: "flex", flexWrap: "wrap" }}>Sample Text</div>
        );
        // var pdf=new window.jsPDF();
        const doc = new window.jsPDF("p", "pt", "letter");
//         // doc.fromHTML(content)
        doc.fromHTML(ReactDOMServer.renderToString(...data.content), {
          // callback: function (doc) {
          //   doc.save('CV.pdf');
          // }
        });
        doc.save('CV.pdf')

//         var doc = new jsPDF();
// doc.fromHTML(ReactDOMServer.renderToString(data.content),{
//   callback: function (doc) {
//         doc.save('CV.pdf');
//       }
// });
// doc.save("myDocument.pdf");


// var doc = new jsPDF();
// doc.fromHTML(ReactDOMServer.renderToStaticMarkup(data.content));
// doc.save("myDocument.pdf");


// const string = ReactDOMServer.renderToString(...data.content);
// const pdf = new jsPDF("p", "mm", "a4");
// pdf.fromHTML(string);
// pdf.save("pdf");
      };
    return (
        <div className='container' style={{ marginTop: "1rem", marginBottom: "2rem" }}>
            {/* {data ? renderHtml(data.content) : ""} */}

            <div className="form-group">
            <label htmlFor="" className='mb-3 mt-3'>Chỉnh Sửa CV</label>
            <JoditEditor
              value={data ? data.content:""}
              onChange={(e) => setContent(e)}
              tabIndex={1}

            />
          </div>
          <div>
            <button className="m-auto d-flex mt-5" onClick={exportPDF}>Lưu CV</button>
          </div>
        </div>
    )
}
