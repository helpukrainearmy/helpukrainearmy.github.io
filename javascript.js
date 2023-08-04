async function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;

    // Make the textarea non-editable to avoid showing it on the screen
    textarea.setAttribute('readonly', '');

    // Add the textarea to the document
    document.body.appendChild(textarea);

    // Select the text inside the textarea
    textarea.select();

    // Copy the selected text to the clipboard
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);

    $(`.block-info`).css({bottom: "10px"});
    await sleep(3000);
    $(`.block-info`).css({bottom: "-110px"});
}

$('.card').click(()=>{
    copyToClipboard("5168745122493726")
});


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}