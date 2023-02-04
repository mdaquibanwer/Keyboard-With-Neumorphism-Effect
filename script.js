const form = document.querySelector("form"),
textarea = document.querySelector("textarea"),
spaceBtn = document.querySelector("#space"),
inputField = document.querySelector(".input-field")

const disp = (result)=>{  
    form.textarea.value += result;
    spaceBtn.onclick = (()=>{
        form.textarea.value += " ";
    })
    inputField.ondblclick = (()=>{
        form.textarea.value = "";
    })
}