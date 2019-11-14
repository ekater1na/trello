const Column = {
    idCounter: 4
}

function columnProcess (columnElement) {
    const spanAction_addNote = columnElement.querySelector('[data-action-addNote]')

    spanAction_addNote.addEventListener('click', (event) => {
        const noteElement = document.createElement('div')
        noteElement.classList.add('note')
        noteElement.setAttribute('graggable', 'true')
        noteElement.setAttribute('data-note-id', Note.idCounter)
        Note.idCounter++

        columnElement.querySelector('[data-notes]').append(noteElement)
        Note.process(noteElement)

        headerElement.setAttribute('contenteditable', 'true')
        headerElement.focus()
    })

    const headerElement = columnElement.querySelector('.column-header') 
	headerElement.addEventListener('dblclick', (event) => {
		headerElement.setAttribute('contenteditable', 'true') 
		setCaret(headerElement)
		headerElement.focus() 
	}) 
	
    headerElement.addEventListener('blur', (event) => {
        headerElement.removeAttribute('contenteditable') 
        if (!noteElement.textContent.trim().length) {
            noteElement.remove()
        }
    }) 		

    columnElement.addEventListener('dragover', (event) => {
        event.preventDefault()
    })

    columnElement.addEventListener('drop', (event) => {
    if (Note.dragged){
        return columnElement.querySelector('[data-notes]').append(Note.dragged)
    }
	})
}