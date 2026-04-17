import fetchAnimals from "./modules/fetchAnimals.js";
import renderListOfAnimals from "./modules/renderListOfAnimals.js";
async function init() {
    const animals = await fetchAnimals();
    if (animals) {
        renderListOfAnimals(animals);
    }
}
init();
