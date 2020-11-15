   import { fetchData } from "./modules/TheDataMiner.js";

   (() => {
       console.log('loaded');
       
       function popErrorBox(message) {
           alert("Something broke... I have to refuse the connection.");
       }
   
       function handleDataSet(data) {
        let thingSection = document.querySelector('.thing-section'),
            thingTemplate = document.querySelector('#thing-template').content;

        for (let thing in data) {
            let currentThing = thingTemplate.cloneNode(true),
                currentThingText = currentThing.querySelector('.thing').children;

            currentThingText[1].src = `images/${data[thing].Image}`;
            currentThingText[2].textContent = data[thing].Title;
            currentThingText[3].textContent = data[thing].Description;
            

            // add this new user to the view
            userSection.appendChild(currentUser);
        }
    }
   
    function retrieveProjectInfo() {
        // test for an ID
        debugger;
        console.log(this.id);

        fetchData(`./includes/index.php?id=${this.id}`).then(data => console.log(data)).catch(err => console.log(err));
    }
   
       function renderPortfolioThumbnails(thumbs) {
           let thingSection = document.querySelector('.thing-section'),
               thingTemplate = document.querySelector('#thing-template').content;
   
           for (let thing in thumbs) {
               let currentThing = thingTemplate.cloneNode(true),
                   currentThingText = currentThing.querySelector('.thing').children;
   
               currentThingText[1].src = `images/${thumbs[thing].Image}`;
               currentThingText[1].id = thumbs[thing].id;
            
               // add this new user to the view
              
               thingSection.appendChild(currentThing);
           }
          thingSection.addEventListener("click", retrieveProjectInfo);
       }
           
       fetchData("./includes/index.php").then(data => renderPortfolioThumbnails(data)).catch(err => console.log(err));
   })();