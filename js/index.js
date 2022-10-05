// vars and elems
let cardDeck = document.getElementById('cards')
let chars = {
    rhaenyra: {name: 'Rhaenyra Targaryen', imgSource: "../imgs/Rhaenyra.jpeg" , bio: "bio", status: "status"},
    alicent: {name: 'Alicent Hightower', imgSource: "../imgs/alicent.jpg" , bio: "bio", status: "status"},
    kingVis: {name: 'King Viserys', imgSource: "../imgs/kingvis.jpg", bio: "bio", status: 'status' },
    daemon: {name: 'Daemon Targaryen', imgSource: "../imgs/daemon.jpg", bio: "bio", status: 'status'},
    leanor: {name: 'Laenor Velaryon', imgSource: "../imgs/laenor.jpg", bio: "bio", status: 'status'},
    laena: {name: 'Laena Velaryon', imgSource: '../imgs/Laena.jpg', bio: "bio", status: 'status'}
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
        // newHeading.setAttribute('id', chars[char].name.split(' ')[0])
        newHeading.setAttribute('class', 'card-title')
        newHeading.innerHTML = chars[char].name
        ///name
        newDiv.append(newHeading)
        ///picture
        let newImg = document.createElement('img')
        newImg.src = chars[char].imgSource
        newDiv.append(newImg)
        /// buttons
        let buttonDiv = document.createElement('div')
        buttonDiv.setAttribute('class', 'button-div')
        let statusButton = document.createElement('button')
        let bioButton = document.createElement('button')
        bioButton.setAttribute('id', chars[char].name.split(' ')[0]+'-bio-button')
        bioButton.setAttribute("onclick",`show${chars[char].name.split(' ')[0]}bio()`)
        statusButton.setAttribute('id', chars[char].name.split(' ')[0]+'-status-button')
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

function showRhaenyrabio (){
    let bio = document.getElementById('Rhaenyra-bio')
    if (bio.style.display === 'none'){
        bio.style.display = 'block'
    } else {
        bio.style.display = 'none'
    }
}

// search function runs on keyup from html doc
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

