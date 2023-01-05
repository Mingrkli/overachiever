const allSets = document.querySelector('.all-sets');
const dataLoadCards = allCards;

const fullImageDiv = document.querySelector('.full-image');
const fullImageDivImg = fullImageDiv.querySelector('img');
const closeFullImageBtn = fullImageDiv.querySelector('button');

// When window is Loaded
window.addEventListener('DOMContentLoaded', () => {
    loadSets();
})

// Close fullImage
closeFullImageBtn.addEventListener('click', () => {
    fullImageDiv.classList.add('hidden');
})

// Load card sets
function loadSets() {
    for (const set in dataLoadCards) {
        // Article element
        let article = document.createElement('article');

        // Create the set name header and the div which will contain all the cards from that set
        let inner = `
            <h2>${dataLoadCards[set].SetName}</h2>

            <div class="grid-cards">
                
            </div>
        `

        // Combine the inner with the article which then allows me to get the div with the class "grid-cards" to put the img elements in it in the following loop
        article.innerHTML += inner;
        const gridCardsDiv = article.querySelector('.grid-cards');

        // For each name in the data for the current set, add each card into the gridCardsDiv 
        dataLoadCards[set].names.map(name => {
            const img = `<img src="../images/cardSets/${dataLoadCards[set].FolderName}/${name}.png">`
        
            gridCardsDiv.innerHTML += img;
        })
        
        // create a eventLister for each of the imgs so that when clicked it will show full image
        gridCardsDiv.querySelectorAll('img').forEach(img => {
            img.addEventListener('click', e => {
                fullImageDiv.classList.remove('hidden');
                fullImageDivImg.src = e.target.src
            })
        });
        
        // append the article into the site
        allSets.append(article);
    }

}