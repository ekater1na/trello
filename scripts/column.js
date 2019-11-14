const Column = {
    idCounter: 4,
    dragged: null,
    process (columnElement) {
        const spanAction_addNote = columnElement.querySelector('[data-action-addNote]')
    
        spanAction_addNote.addEventListener('click', (event) => {
            const noteElement = Note.create()
            
            columnElement.querySelector('[data-notes]').append(noteElement)

            noteElement.setAttribute('contenteditable', 'true')
            noteElement.focus()
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

 