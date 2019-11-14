document
    .querySelectorAll('.column')
    .forEach(columnProcess)

document
    .querySelector('[data-action-addColumn]')
    .addEventListener('click', (event) => {
        const columnElement = document.createElement('div')
        columnElement.classList.add('column')
        columnElement.setAttribute('graggable', 'true')
        columnElement.setAttribute('data-column-id', Column.idCounter)
        columnElement.innerHTML =  `<p class="column-header">В плане</p>
                                    <div data-notes></div>
                                    <p class="column-footer">
                                        <span data-action-addNote class="action">+ Добавить карточку</span>
                                    </p>`
        Column.idCounter++
        document.querySelector('.columns').append(columnElement)
        columnProcess(columnElement)
    })

document
    .querySelectorAll('.note')
    .forEach(Note.process)

function setCaret(node){
	if (node.textContent.length > 0){
		const range = document.createRange();
		const sel = window.getSelection();
		range.setStart(node.childNodes[0], node.textContent.length);
		range.collapse(true);
		sel.removeAllRanges();
		sel.addRange(range);
	}
}

