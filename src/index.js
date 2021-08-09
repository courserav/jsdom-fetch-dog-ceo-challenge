console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', (e) => {
    fetch(`https://dog.ceo/api/breeds/image/random/4`)
    .then(resp => resp.json())
    .then(json => addImages(json))
    .catch(console.error)

    fetch(`https://dog.ceo/api/breeds/list/all`)
    .then(resp => resp.json())
    .then(json => addBreeds(json))
    .catch(console.error)

    return console.log('DOM loaded')
})

function addImages(images){
    let dogContainer = document.getElementById("dog-image-container")
    for (let i = 0; i < images.message.length; i++){
        dogContainer.innerHTML += '<img src="' + images.message[i] + '" alt="nothing to see here" width="200" height="200">'
    }
}


function addBreeds(breeds){
    let breedsList = document.getElementById("dog-breeds")
    breedsArray = Object.keys(breeds.message)
    for (let i = 0; i < breedsArray.length; i++){
        let li = document.createElement("li")
        li.appendChild(document.createTextNode(breedsArray[i]))
        li.addEventListener('click', (e) => {
            if (li.style.color == "black"){
                li.style.color = "blue"
            }
            else{
                li.style.color = "black"
            }
        })
        breedsList.appendChild(li)
    }

    let dropDown = document.getElementById("breed-dropdown")

    dropDown.addEventListener('change', (e) => {
        let liNodes = breedsList.childNodes 
        let selection = 'none'

        if (dropDown.value == 'a'){
            selection = 'a'    
        }
        else if (dropDown.value == 'b'){
            selection = 'b'
        }
        else if (dropDown.value == 'c'){
            selection = 'c'
        }
        else if (dropDown.value == 'd'){
            selection = 'd'
        }
        else if (dropDown.value == 'e'){
            selection = 'e'
        }
        else if (dropDown.value == 'f'){
            selection = 'f'
        }

        for (let i = 1; i < liNodes.length; i++){
            if (liNodes[i].textContent[0] != selection){
                liNodes[i].style.display = "none"
            }
            else{
                liNodes[i].style.display = "list-item"                
            }
        }
    })
}

