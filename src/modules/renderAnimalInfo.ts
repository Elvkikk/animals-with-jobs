//Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
//Typa upp funktionens parameter

import { Animal } from "./IAnimal";


export default function renderAnimalInfo(animal: Animal) {
  const infoDiv = document.querySelector<HTMLDivElement>('.animal-info');
  if (!infoDiv) {
      console.error('Datan har inte kunnat hittats eller hämtas');
      return;
  } 
  // Tom sträng för att rensa info-diven innan vi lägger till ny information, 
  // så att vi inte får dubbletter varje gång funktionen kallas.
  infoDiv.innerHTML = ''; 

  // Skapa och lägg till bilden av karaktären
  const imageElement = document.createElement('img');
  imageElement.className = 'animal-image';
  imageElement.src = animal.imageURL;
  imageElement.alt = `${animal.name} the ${animal.kindOfAnimal}`;
  infoDiv.appendChild(imageElement);

  // Skapa och lägg till namnet och typen av karaktären
  const nameAndTypeElement = document.createElement('h2');
  nameAndTypeElement.className = 'animal-name-and-type';
  nameAndTypeElement.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
  infoDiv.appendChild(nameAndTypeElement);

  const infoInnerDiv = document.createElement('div');
  infoInnerDiv.className = 'animal-info-inner-div';
  infoDiv.appendChild(infoInnerDiv);

  // Skapa och lägg till jobbet och anställningsstatus
  const jobAndStatusElement = document.createElement('p'); 
  jobAndStatusElement.className = 'animal-job-and-status';
  const isCurrentlyEmployed = new Date() >= new Date(animal.employmentStartDate) && new Date() <= new Date(animal.employmentEndDate);
  jobAndStatusElement.textContent = `${animal.job} - Currently ${isCurrentlyEmployed ? 'employed' : 'not employed'}`;
  infoInnerDiv.appendChild(jobAndStatusElement);
  // Skapa och lägg till åldern

  const ageRow = document.createElement('div');
  ageRow.className = 'animal-age-row';
  infoInnerDiv.appendChild(ageRow);

  const ageString = document.createElement('p');
  ageString.className = 'animal-age-string';
  ageString.textContent = 'Age:';
  ageRow.appendChild(ageString);

  const ageElement = document.createElement('p');
  const currentYear = new Date().getFullYear();
  const age = currentYear - animal.birthYear;
  ageElement.className = 'animal-age-years-old';
  ageElement.textContent = `${age} years old.`;
  ageRow.appendChild(ageElement);

  // Skapa och lägg till färdigheterna
  const skillsHeader = document.createElement('h3');
  skillsHeader.className = 'animal-skills-header';
  skillsHeader.textContent = 'Skills:';
  infoInnerDiv.appendChild(skillsHeader);
  
  const skillsList = document.createElement('ul');
  skillsList.className = 'animal-skills-list';
  const skillsArray = Array.isArray(animal.skills) ? animal.skills : [animal.skills];
  skillsArray.forEach(skill => {
      const skillItem = document.createElement('li');
      skillItem.className = 'animal-skills-list-item';
      skillItem.textContent = skill;
      skillsList.appendChild(skillItem);
  });
  infoInnerDiv.appendChild(skillsList);

}

//=====================================================//
//Rendera ut bilden på djuret
//Skriv ut djurets namn och typ av djur. Följ det här formatet: "Gina the Giraffe"
//=====================================================//
//=====================================================//
//Skriv ut djurets jobb och om djuret är anställd just nu eller inte.
//Följ formatet: "Trash Analyst - Currently (not) employed"
//Använd template literals
//=====================================================//
//=====================================================//
//Skriv ut djurets ålder (age). EJ året de är födda. Utan hur gamla de är.
//Följ formatet:  Age: 9 years old.
//Använd template literals
//Bonus om du skriver ut rubriken "Age" med CSS.
//=====================================================//
//=====================================================//
//Skriv ut en lista på djurets färdigheter
//Följ formatet:    Skills:
//                  Flying
//                  Eating
//Bonus om du skriver ut rubriken "Skills" med CSS.
//=====================================================//
