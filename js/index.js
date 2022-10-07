// vars and elems
// bio's borrowed from gameofthrones.fandom.com
let cardDeck = document.getElementById('cards')
let chars = {
    rhaenyra:{name: 'Rhaenyra Targaryen', 
            imgSource: "../imgs/Rhaenyra.jpeg", 
            bio: "Rhaenyra is the daughter and only surviving child of King Viserys I and Aemma Arryn. She rides the dragon Syrax.", 
            status: "Alive"},
    alicent:{name: 'Alicent Hightower', 
            imgSource: "../imgs/alicent.jpg" , 
            bio: "Queen Alicent Hightower is the second wife of King Viserys I Targaryen and daughter of Ser Otto Hightower, the Hand of the King.", 
            status: "Alive"},
    kingVis:{name: 'King Viserys', 
            imgSource: "../imgs/kingvis.jpg", 
            bio: `King Viserys I Targaryen is the fifth king of the Targaryen dynasty to rule the Seven Kingdoms.
            Viserys I is the grandson of Jaehaerys I Targaryen, and father of Rhaenyra. He briefly rode Balerion the Black Dread in his youth before the dragon's death of old age.`, 
            status: 'Alive' },
    daemon: {name: 'Daemon Targaryen',
            imgSource: "../imgs/daemon.jpg", 
            bio: `Prince Daemon Targaryen is a prince of the Targaryen dynasty, the younger brother of King Viserys I Targaryen, and uncle of Princess Rhaenyra Targaryen.
            He is a peerless warrior, and also a dragonrider: his mount is Caraxes, the Blood Wyrm.`, 
            status: 'Alive'},
    leanor: {name: 'Laenor Velaryon',
            imgSource: "../imgs/laenor.jpg", 
            bio: "Ser Laenor Velaryon is the son of Corlys Velaryon and Rhaenys Targaryen, and the presumed deceased former heir to Driftmark. He is the rider of the dragon Seasmoke.", 
            status: 'Alive'},
    laena: {name: 'Laena Velaryon',
            imgSource: '../imgs/Laena.jpg',
            bio: "Lady Laena Velaryon was the daughter of Corlys Velaryon and Rhaenys Targaryen and the sister of Laenor Velaryon. She was the rider of the dragon Vhagar.", 
            status: 'Dead'}
}
let searchBox = document.createElement('input')
let search = document.getElementById("search-bar")
searchBox.setAttribute('type', "text")
searchBox.setAttribute('placeholder', "Search for characters")
searchBox.setAttribute('id', "search")
searchBox.setAttribute('onkeyup', 'searchFunc()')
search.appendChild(searchBox)

const makeContent = () => {
    for (char in chars){
        let newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'character-card')
        let newHeading = document.createElement('h1')
        newHeading.setAttribute('class', 'card-title')
        newHeading.innerHTML = chars[char].name
        ///name
        newDiv.append(newHeading)
        ///picture
        let newImg = document.createElement('img')
        newImg.src = chars[char].imgSource
        newDiv.append(newImg)
        /// buttons
        // this is some wet, squishy code
        let buttonDiv = document.createElement('div')
        buttonDiv.setAttribute('class', 'button-div')
        let statusButton = document.createElement('button')
        let bioButton = document.createElement('button')
        bioButton.setAttribute('id', chars[char].name.split(' ')[0]+'-bio-button')
        bioButton.setAttribute("onclick",`show${chars[char].name.split(' ')[0]}Bio()`)
        statusButton.setAttribute('id', chars[char].name.split(' ')[0]+'-status-button')
        statusButton.setAttribute("onclick", `show${chars[char].name.split(' ')[0]}Status()`)
        let bioDiv = document.createElement('div')
        bioDiv.setAttribute('id', chars[char].name.split(' ')[0]+'-bio')
        bioDiv.innerHTML = `<p>${chars[char].bio}</p>`
        bioDiv.style.display = "none"
        newDiv.append(bioDiv)
        let statusDiv = document.createElement('div')
        statusDiv.setAttribute('id', chars[char].name.split(' ')[0]+'-status')
        statusDiv.innerHTML =`<p>${chars[char].status}</p>`
        statusDiv.style.display = "none"
        newDiv.append(statusDiv)
        statusButton.data = "Status"
        statusButton.innerHTML = 'Status'
        bioButton.data = "Bio"
        bioButton.innerHTML = "Bio"
        buttonDiv.appendChild(bioButton)
        buttonDiv.appendChild(statusButton)
        newDiv.append(buttonDiv)
        /// add card
        newDiv.setAttribute('id', chars[char].name.split(' ')[0])
        cardDeck.appendChild(newDiv)
    }
}
makeContent()

//bio button funcs
function showRhaenyraBio (){
    let bio = document.getElementById('Rhaenyra-bio')
    if (bio.style.display === 'none'){
        bio.style.display = 'block'
    } else {
        bio.style.display = 'none'
    }
}
function showAlicentBio (){
    let bio = document.getElementById('Alicent-bio')
    if (bio.style.display === 'none'){
        bio.style.display = 'block'
    } else {
        bio.style.display = 'none'
    }
}
function showKingBio (){
    let bio = document.getElementById('King-bio')
    if (bio.style.display === 'none'){
        bio.style.display = 'block'
    } else {
        bio.style.display = 'none'
    }
}
function showDaemonBio (){
    let bio = document.getElementById('Daemon-bio')
    if (bio.style.display === 'none'){
        bio.style.display = 'block'
    } else {
        bio.style.display = 'none'
    }
}
function showLaenorBio (){
    let bio = document.getElementById('Laenor-bio')
    if (bio.style.display === 'none'){
        bio.style.display = 'block'
    } else {
        bio.style.display = 'none'
    }
}
function showLaenaBio (){
    let bio = document.getElementById('Laena-bio')
    if (bio.style.display === 'none'){
        bio.style.display = 'block'
    } else {
        bio.style.display = 'none'
    }
}

//status button funcs
function showRhaenyraStatus (){
    let bio = document.getElementById('Rhaenyra-status')
    if (bio.style.display === 'none'){
        bio.style.display = 'block'
    } else {
        bio.style.display = 'none'
    }
}
function showAlicentStatus (){
    let bio = document.getElementById('Alicent-status')
    if (bio.style.display === 'none'){
        bio.style.display = 'block'
    } else {
        bio.style.display = 'none'
    }
}
function showKingStatus (){
    let bio = document.getElementById('King-status')
    if (bio.style.display === 'none'){
        bio.style.display = 'block'
    } else {
        bio.style.display = 'none'
    }
}
function showDaemonStatus (){
    let bio = document.getElementById('Daemon-status')
    if (bio.style.display === 'none'){
        bio.style.display = 'block'
    } else {
        bio.style.display = 'none'
    }
}
function showLaenorStatus (){
    let bio = document.getElementById('Laenor-status')
    if (bio.style.display === 'none'){
        bio.style.display = 'block'
    } else {
        bio.style.display = 'none'
    }
}
function showLaenaStatus (){
    let bio = document.getElementById('Laena-status')
    if (bio.style.display === 'none'){
        bio.style.display = 'block'
    } else {
        bio.style.display = 'none'
    }
}

// search function runs on keyup from html doc, works with all bio and status text
const searchFunc = () => {
    let input = document.getElementById('search')
    let filter = input.value.toUpperCase()
    let characterCard = document.getElementsByClassName('character-card')

    for (i = 0; i < characterCard.length; i++){
        let textVal = characterCard[i].textContent
        let loudText = textVal.toUpperCase()
        if(loudText.indexOf(filter) > -1){
            characterCard[i].style.display = '' 
        } else {
            characterCard[i].style.display = 'none'
        }
    }
}

