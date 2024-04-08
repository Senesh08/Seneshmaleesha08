  fetch('slleopard.json')
  .then(response => response.json())
  .then(data => {
    if (!data || !data.image) {
      console.error("Error: Missing data in JSON or image property");
      return; 
    }

    const imagePath = `images/${data.image}`; 

    document.getElementById('yalaImage').src = imagePath;
    document.getElementById('yalaImage').onerror = function() {
      console.error("Error: Image not found at", imagePath);
    };

    document.querySelector('.content h2').textContent = data.title;
    document.getElementById('wildlifeDescription1').innerHTML = data.content.description;
  })
  .catch(error => console.error(error));


  fetch('slleopard.json') 
  .then(response => response.json())
  .then(data => {
    const sectionsContainer = document.querySelector('.subsection3'); 

    data.section.forEach(section => {
      const newSection = document.createElement('section');
      newSection.classList.add(section["@class"]);

      const newImg = document.createElement('img');
      newImg.src = section.img["@src"];
      newImg.classList.add(section.img["@class"]);
      newSection.appendChild(newImg);

      const newContent = document.createElement('div');
      newContent.classList.add(section.div["@class"]);

      const newH2 = document.createElement('h2');
      newH2.textContent = section.div.h2;
      newContent.appendChild(newH2);

      const newBr = document.createElement('br');
      newContent.appendChild(newBr);

      const newP = document.createElement('p');
      newP.textContent = section.div.p.replace(/\r\n/g, "<br>"); 
      newContent.appendChild(newP);

      newSection.appendChild(newContent);

      sectionsContainer.appendChild(newSection);
    });
    localStorage.setItem('LeopardData', JSON.stringify(data));
  })
  .catch(error => console.error(error));



const users = [
  {
    "username": "admin",
    "password": "admin",
    "role": "admin",
    "email": "admin@admin.com"
  },
  {
    "username": "user",
    "password": "user",
    "role": "site_user",
    "email": "user@user.com"
  }
];
  
async function validateLogin() {
  event.preventDefault(); 
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const errorMessage = document.getElementById('error-message');
  
  const foundUser = users.find(user => user.username === username && user.password === password);
  
  if (foundUser) {
    window.location.href = 'dashboard.html'; 
      
    sessionStorage.setItem('currentUser', JSON.stringify(foundUser));
  } else {
    errorMessage.textContent = 'Invalid username or password';
  }
}


function handleLogout(){
  sessionStorage.removeItem('isLoggedIn');
  window.location.href = 'login.html';
}
const logoutListItem = document.querySelector('.logout');

logoutListItem.addEventListener('click', function(){
  handleLogout();
})












  
  





  
