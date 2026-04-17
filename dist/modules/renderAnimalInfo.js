//Titta i index.html och hitta den div där info om varje djur ska skrivas ut.
//Typa upp funktionens parameter
export default function renderAnimalInfo(animal) {
    const infoDiv = document.querySelector('.animal-info');
    if (!infoDiv) {
        console.error('Info-diven har inte kunnat hittas eller hämtas');
        return;
    }
    // Tom sträng för att rensa info-diven innan vi lägger till ny information, 
    // så att vi inte får dubbletter varje gång funktionen kallas.
    infoDiv.innerHTML = '';
    // Skapa och lägg till bilden av djuret
    const imageElement = document.createElement('img');
    imageElement.className = 'animal-image';
    imageElement.src = animal.imageURL;
    imageElement.alt = `${animal.name} the ${animal.kindOfAnimal}`;
    infoDiv.appendChild(imageElement);
    // Skapa och lägg till namnet och typen av djur
    const nameAndTypeElement = document.createElement('h2');
    nameAndTypeElement.className = 'animal-name-and-type';
    nameAndTypeElement.textContent = `${animal.name} the ${animal.kindOfAnimal}`;
    infoDiv.appendChild(nameAndTypeElement);
    // Skapa och lägg till jobbet och anställningsstatus
    const jobAndStatusElement = document.createElement('p');
    const isCurrentlyEmployed = new Date() >= new Date(animal.employmentStartDate) && new Date() <= new Date(animal.employmentEndDate);
    jobAndStatusElement.textContent = `${animal.job} - Currently ${isCurrentlyEmployed ? 'employed' : 'not employed'}`;
    infoDiv.appendChild(jobAndStatusElement);
    // Skapa och lägg till åldern
    const ageElement = document.createElement('p');
    const currentYear = new Date().getFullYear();
    const age = currentYear - animal.birthYear;
    ageElement.className = 'animal-age';
    ageElement.textContent = `Age: ${age} years old.`;
    infoDiv.appendChild(ageElement);
    // Skapa och lägg till färdigheterna
    const skillsHeader = document.createElement('h3');
    skillsHeader.textContent = 'Skills:';
    infoDiv.appendChild(skillsHeader);
    const skillsList = document.createElement('ul');
    skillsList.className = 'animal-skills-list';
    animal.skills.forEach(skill => {
        const skillItem = document.createElement('li');
        skillItem.className = 'animal-skill';
        skillItem.textContent = skill;
        skillsList.appendChild(skillItem);
        function skillItemNone() {
            if (!(skillItem.textContent = skill)) {
                skillItem.textContent = 'No skills listed';
            }
        }
    });
    infoDiv.appendChild(skillsList);
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
