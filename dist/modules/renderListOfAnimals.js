//Titta i index.html och hitta den UL där listan på djur ska skrivas ut.
//Rendera ut en lista över djurens namn på skärmen
//Varje list-item ska ha en event-lyssnare som kallar på "renderAnimalInfo"
//Typa upp funktionens parameter
import renderAnimalInfo from "./renderAnimalInfo.js";
export default function renderListOfAnimals(animals) {
    // Hämta ul elementet där listan ska renderas.
    const listElement = document.querySelector('.list-of-animals ul');
    listElement?.classList.add('animal-list'); // Lägg till en klass för styling av listan.
    if (!listElement) {
        console.error('Listan har inte kunnat hittas eller hämtas');
        return;
    }
    // Tom sträng för att rensa listan innan vi lägger till nya element, 
    // så att vi inte får dubbletter varje gång funktionen kallas.
    listElement.innerHTML = '';
    animals.forEach(animal => {
        // Skapa ett list-item för varje karaktär och lägg till det i listan.
        const listItem = document.createElement('li');
        listItem.className = 'animal-list-item';
        listItem.textContent = animal.name;
        // Lägg till listItem i listan "ul".
        listElement.appendChild(listItem);
        // När ett list-item klickas, rendera ut informationen om det djuret.
        listItem.addEventListener('click', () => {
            renderAnimalInfo(animal);
        });
    });
}
