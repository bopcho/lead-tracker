let myLeads = ["lead1", "lead2", "lead3"]
const inputEl = document.getElementById('input-el')
const inputBtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')

localStorage.setItem("myName", "Bobby")

let name = localStorage.getItem("myName")

localStorage.clear()
inputBtn.addEventListener("click", function() {
  myLeads.push(inputEl.value)
  inputEl.value = ""
  renderLeads()
})

function renderLeads() {
  let listItems = "" 
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
    <li>
        <a target='_blank' href='${myLeads[i]}'>
          ${myLeads[i]}
        </a>
    </li>
  `
  }
  ulEl.innerHTML = listItems
}
