const Column = {
    idCounter: 4,
    dragged: null,
    process (columnElement) {
        const spanAction_addNote = columnElement.querySelector('[data-action-addNote]')
        const noteElement = document.createElement('div')
    
        spanAction_addNote.addEventListener('click', (event) => {
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
            headerElement.removeAttribute('contenteditable', true) 
            if (!noteElement.textContent.trim().length) {
                noteElement.remove()
            }
        }) 		
        
        columnElement.addEventListener('dragover', Column.dragover)
        columnElement.addEventListener('drop', Column.drop)

        
    },

   dragover (event) {
        event.preventDefault()
    },

    drop (event) {
        if (Note.dragged){
            return this.querySelector('[data-notes]').append(Note.dragged)
        }
    }
}

 