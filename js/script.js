let input = document.getElementById("input")
let plus = document.getElementById("plus")
let ul = document.getElementById("ul")
let alldel = document.getElementById("alldel")


plus.addEventListener("click", () => {
    let inp = input.value
    let li = document.createElement("li")
    li.innerHTML = '<input type="checkbox"> ' + inp + '    <button onClick="sk(this)">Delete</button>'
    ul.appendChild(li)
    input.value = ""




})




function sk(s) {
    s.parentElement.remove()

}


alldel.addEventListener("click", () => {


    let ks = document.querySelectorAll('input[type="checkbox"]:checked')


    ks.forEach((s) => {
        s.parentElement.remove()

    })

})

