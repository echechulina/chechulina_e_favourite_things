import { fetchData } from "./modules/TheDataMiner.js";


(() => {
   
    console.log('loaded');

    function popErrorBox(message) {
        alert("Something broke. You can no longer view the page.");
    }

    function lightboxSetUp(event) {
       
        const lightbox = document.querySelector(".lightbox");
        const data = event.currentTarget.dataset;
        console.log(data);
        lightbox.querySelector(".lightImage").src = data.image;
        lightbox.querySelector(".thingTitle").innerHTML = data.title;
        lightbox.querySelector(".thingDescription").innerHTML = data.description;
        lightbox.classList.add('openLB');

    }

    function hideLB(event) {
        const lightbox = document.querySelector(".lightbox");
        lightbox.classList.remove('openLB');
    }




    function retrieveProjectInfo(event) {
       
        if (!event.target.id) { return }

        fetchData(`./includes/index.php?ID=${event.target.id}`).then(data => console.log(data)).catch(err => {console.log(err); popErrorBox(err);});
    }



    function renderPortfolioThumbnails(thumbs) {
        console.log(thumbs)
        let thingSection = document.querySelector('.thing-section'),
            thingTemplate = document.querySelector('#thing-template').content;

        for (let thing in thumbs) {


            let currentThing = thingTemplate.cloneNode(true),
                currentThingText = currentThing.querySelector('.thing').children,
                currentThingLB = currentThing.querySelector('.thing');


            currentThingText[1].src = `images/${thumbs[thing].image}`;
            currentThingText[1].id = thumbs[thing].ID;
            

            currentThingLB.dataset.title = thumbs[thing].title;
            currentThingLB.dataset.image = `images/${thumbs[thing].image}`;
            currentThingLB.dataset.description = thumbs[thing].description;

            currentThingLB.addEventListener("click", lightboxSetUp);


            thingSection.appendChild(currentThing);
        }

        thingSection.addEventListener("click", retrieveProjectInfo);
    }

    fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err => {console.log(err); popErrorBox(err);});

    let lbClose = document.querySelector('.close-lb');
    lbClose.addEventListener('click', hideLB);
    lbClose.addEventListener('click', hideLB);
})();