let $ = document

let userInput = $.getElementById('input-field')

let addNote = $.getElementById('btn-save')
let removeNote = $.getElementById('btn-delete')
let divParent = $.getElementById('listed')
let container = $.querySelector('.container')






function saveNote () {

let newDiv = $.createElement('div')
newDiv.className = 'card shadow-sm rounded'

let pDiv = $.createElement('p')
pDiv.className = "card-text p-3"
pDiv.innerHTML = userInput.value

newDiv.append(pDiv)
divParent.append(newDiv)

userInput.value = ''
newDiv.addEventListener('click', function (event) {

event.target.parentElement.remove()

})
}


function deleteNote () {

    userInput.value = ''
}













addNote.addEventListener('click', saveNote)
removeNote.addEventListener('click', deleteNote)