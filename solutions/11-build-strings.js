// BEGIN
export const buildDefinitionList = (definitions)=>{
    if(definitions.length === 0 ){
        return '';
    }
    let html = '<dl>';
    for (const definition of definitions) {
        const [term, description] = definition;
        html += `<dt>${term}</dt><dd>${description}</dd>`;
    }
    html += '</dl>';

    return html;
}
export default buildDefinitionList;
// END