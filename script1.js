fetch('animals.json') 
  .then(response => response.json())
  .then(data => {
    const sectionsContainer = document.querySelector('.subsection2'); 

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
    localStorage.setItem('animalData', JSON.stringify(data));
  })
  .catch(error => console.error(error));

  const storeData = localStorage.getItem('animalData');


  fetch('Introduction.json') 
  .then(response => response.json())
  .then(data => {
    const sectionsContainer = document.querySelector('.subsection4'); 

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

      const newIframe = document.createElement('iframe');
      newIframe.src = section.div.iframe;
      newIframe.width = "300";
      newIframe.height = "230";
      newIframe.frameborder = "0";
      newIframe.allowFullscreen = "";
      newContent.appendChild(newIframe);

      newSection.appendChild(newContent);

      sectionsContainer.appendChild(newSection);
    });
    localStorage.setItem('IntroductionData', JSON.stringify(data));
  })
  .catch(error => console.error(error));


  fetch('Department.json') 
  .then(response => response.json())
  .then(data => {
    const sectionsContainer = document.querySelector('.subsection5'); 

    data.section.forEach(section => {
      const newSection = document.createElement('section');
      newSection.classList.add(section["@class"]);

      const newIframe = document.createElement('iframe');
      newIframe.src = section.iframe;
      newIframe.width = "300";
      newIframe.height = "230";
      newIframe.frameborder = "0";
      newIframe.allowFullscreen = "";

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

      newContent.appendChild(newIframe);

      newSection.appendChild(newContent);

      sectionsContainer.appendChild(newSection);
    });
    localStorage.setItem('DepartmentData', JSON.stringify(data));
  })
  .catch(error => console.error(error));


  fetch('Wilpattu.json') 
  .then(response => response.json())
  .then(data => {
    const sectionsContainer = document.querySelector('.subsection6'); 

    data.section.forEach(section => {
      const newSection = document.createElement('section');
      newSection.classList.add(section["@class"]);

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
    localStorage.setItem('WilpattuData', JSON.stringify(data));
  })
  .catch(error => console.error(error));


  fetch('yala1.json') 
  .then(response => response.json())
  .then(data => {
    const sectionsContainer = document.querySelector('.subsection7'); 

    data.section.forEach(section => {
      const newSection = document.createElement('section');
      newSection.classList.add(section["@class"]);

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
    localStorage.setItem('YalaData', JSON.stringify(data));
  })
  .catch(error => console.error(error));


  fetch('Index.json')
  .then(response => response.json()) 
  .then(data => {
    document.querySelector('.content h2').textContent = data.title;
    document.getElementById('animalImage').src = data.image;
    document.getElementById('wildlifeDescription').innerHTML = data.content.description;
  })
  .catch(error => console.error(error)); 



  const subscribeBtn = document.getElementById("subscribe-btn");
  const othersubscribeBtn = document.getElementById("Subscribe");
  const subscribeForm = document.querySelector(".subscribe-form");
  const emailInput = subscribeForm.querySelector("#email"); 
  
  subscribeBtn.addEventListener("click", function(event) {
    event.preventDefault(); 
    subscribeForm.style.display = "block";
  });

  othersubscribeBtn.addEventListener("click",function(event){
    event.preventDefault();
    subscribeForm.style.display = "none";
  
  
  const email = emailInput.value; 

  let existingSubscribers = localStorage.getItem("subscribers");
  existingSubscribers = existingSubscribers ? JSON.parse(existingSubscribers) : [];

  existingSubscribers.push({ email: email});
  
  localStorage.setItem("subscribers", JSON.stringify(existingSubscribers)); 

})












  
    

  



  






