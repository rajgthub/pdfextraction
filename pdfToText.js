var pdfUtil = require("pdf-to-text"); //https://www.npmjs.com/package/pdf-to-text
var pdf_path = __dirname + "/pdfs/sample.pdf";
pdfUtil.pdfToText(pdf_path, (err, data) => {
  if (err) throw err;
  //data represents a string of the texts extracted from the pdf file
  console.log("**********************");
  console.log(data);
  // by spliting, we can get array of each word.
  const dictionary = data.split(" "); //arry of words
  console.log("**********************");
  console.log(dictionary);
});
