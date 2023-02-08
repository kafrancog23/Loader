const textarea = document.querySelector("textarea");
const counter = document.getElementById("counter")

textarea.addEventListener("input", function(e){
    const target = e.target;
    const max = target.getAttribute("maxLength");
    const current = target.value.length;
    counter.innerHTML = `${current}/${max}`
})