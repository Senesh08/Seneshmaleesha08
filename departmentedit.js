
fetch('Department.json') 
  .then(response => response.json())
  .then(data => {
    populateTable(data);
    localStorage.setItem('DepartmentData', JSON.stringify(data));
  })
  .catch(error => console.error(error));


function populateTable(data) {
    const tbody = document.querySelector('#animalTable tbody');
    tbody.innerHTML = ''; // 
    
    data.section.forEach((section, index) => {
        const row = document.createElement('tr');

        const animalCell = document.createElement('td');
        animalCell.textContent = section.div.h2;
        row.appendChild(animalCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = section.div.p.replace(/\r\n/g, "\n");
        row.appendChild(descriptionCell);

        
        const mapCell = document.createElement('td');
        mapCell.innerHTML = section.iframe;
        row.appendChild(mapCell);

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
    const currentContent = document.querySelector(`#animalTable tbody tr:nth-child(${index + 1}) td:nth-child(2)`).textContent;
    document.getElementById('edited-content').value = currentContent;
    document.getElementById('editor-popup').style.display = 'block';
}


function saveChanges() {
    const editedContent = document.getElementById('edited-content').value;

    
    const data = JSON.parse(localStorage.getItem('DepartmentData'));
    data.section[editingIndex].div.p = editedContent;
    localStorage.setItem('DepartmentData', JSON.stringify(data));

    
    const descriptionCell = document.querySelector(`#animalTable tbody tr:nth-child(${editingIndex + 1}) td:nth-child(2)`);
    descriptionCell.textContent = editedContent;

    closeEditor();
}


function cancelEdit() {
    closeEditor();
}

function closeEditor() {
    document.getElementById('editor-popup').style.display = 'none';
}


fetch('Department.json') 
  .then(response => response.json())
  .then(data => {
    updateDepartmentofWildlifeHTML(data);
    
    localStorage.setItem('DepartmentData', JSON.stringify(data));
  })
  .catch(error => console.error(error));

function updateDepartmentofWildlifeHTML(data) {
    
    const htmlContent = data.section.map(section => `
        <section class="${section["@class"]}">
            <div class="${section.div["@class"]}">
                <h2>${section.div.h2}</h2>
                <p>${section.div.p.replace(/\r\n/g, "<br>")}</p>
                <iframe src="${section.iframe}" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </section>
    `).join('');

    
    const departmentOfWildlifeContainer = document.querySelector('.subsection5');
    departmentOfWildlifeContainer.innerHTML = htmlContent;

    
    localStorage.setItem('DepartmentData', JSON.stringify(data));
}

