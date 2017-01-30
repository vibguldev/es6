console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function changeTheString(content) {
  var alteredContent = content.replace(/&/g, '&amp;')
                             .replace(/</g, '&lt;')
                             .replace(/>/g, '&gt;')
                             .replace(/'/g, '&apos;')
                             .replace(/"/g, '&quot;')
  return alteredContent

}

function html(templateArr, print1, print2) {
  var firstField = changeTheString(print1);
  var secondField = changeTheString(print2);
  return (`${templateArr[0]}${firstField}${templateArr[1]}${secondField}\"`)
}