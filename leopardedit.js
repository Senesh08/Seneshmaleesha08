
fetch('slleopard.json') 
  .then(response => response.json())
  .then(data => {
    populateTable(data);
    localStorage.setItem('LeopardData', JSON.stringify(data));
  })
  .catch(error => console.error(error));


function populateTable(data) {
    const tbody = document.querySelector('#animalTable tbody');
    tbody.innerHTML = ''; 
    
    data.section.forEach((section, index) => {
        const row = document.createElement('tr');

        const imgCell = document.createElement('td');
        const img = document.createElement('img');
        img.src = section.img["@src"];
        img.classList.add('imagesize');
        img.classList.add(section.img["@class"]);
        imgCell.appendChild(img);
        row.appendChild(imgCell);

        const animalCell = document.createElement('td');
        animalCell.textContent = section.div.h2;
        row.appendChild(animalCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = section.div.p.replace(/\r\n/g, "\n");
        row.appendChild(descriptionCell);

        const editCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = function() {
            openEditor(index); 
        };
        editCell.appendChild(editButton);
        row.appendChild(editCell);

        tbody.appendChild(row);
    });
}

let editingIndex; 


function openEditor(index) {
    editingIndex = index; 
    const currentContent = document.querySelector(`#animalTable tbody tr:nth-child(${index + 1}) td:nth-child(3)`).textContent;
    document.getElementById('edited-content').value = currentContent;
    document.getElementById('editor-popup').style.display = 'block';
}


function saveChanges() {
    const editedContent = document.getElementById('edited-content').value;
    
    document.querySelector(`#animalTable tbody tr:nth-child(${editingIndex + 1}) td:nth-child(3)`).textContent = editedContent;

    
    const data = JSON.parse(localStorage.getItem('LeopardData'));
    data.section[editingIndex].div.p = editedContent;
    localStorage.setItem('LeopardData', JSON.stringify(data));

    closeEditor();
}


function cancelEdit() {
    closeEditor();
}

function closeEditor() {
    document.getElementById('editor-popup').style.display = 'none';
}



function saveChanges() {
    const editedContent = document.getElementById('edited-content').value;
    
    const descriptionCell = document.querySelector(`#animalTable tbody tr:nth-child(${editingIndex + 1}) td:nth-child(3)`);
    descriptionCell.textContent = editedContent;

    
    const data = JSON.parse(localStorage.getItem('LeopardData'));
    data.section[editingIndex].div.p = editedContent;
    localStorage.setItem('LeopardData', JSON.stringify(data));

    
    updateSriLankanLeopardHTML(data);

    closeEditor();
}


function updateSriLankanLeopardHTML(data) {
    
    const htmlContent = data.section.map(section => `
        <section class="${section["@class"]}">
            <img src="${section.img["@src"]}" class="${section.img["@class"]}">
            <div class="${section.div["@class"]}">
                <h2>${section.div.h2}</h2>
                <p>${section.div.p.replace(/\r\n/g, "<br>")}</p>
            </div>
        </section>
    `).join('');

    
    const animalsinSriLankaContainer = document.querySelector('.subsection4');
    animalsinSriLankaContainer.innerHTML = htmlContent;
}