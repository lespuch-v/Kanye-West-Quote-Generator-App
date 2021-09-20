// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));

// https://api.kanye.rest/
// http://www.boredapi.com/api/activity/

// 91221db2bbd8b35ccda86f1fc62c46342f9bb3ae
// https://emoji-api.com/categories?access_key=91221db2bbd8b35ccda86f1fc62c46342f9bb3ae

// [Math.floor(Math.random() * 2639)]

const myButton = document.getElementById("myBtn")
const myParagraph = document.getElementById("amazingParagraph")
const myEmoji = document.getElementById("myEmoji")
let headerEmoji = document.querySelector("headerEmoji")

myButton.addEventListener("click", function(){
    fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => {
        console.log("hello")
        console.log(data.quote)
        myParagraph.innerText = data.quote
    })
})

setInterval(function(){ 
    fetch("https://emoji-api.com/emojis?access_key=91221db2bbd8b35ccda86f1fc62c46342f9bb3ae")
    .then(response => response.json())
    .then(emData => {
        console.log(emData[0].character)
        myEmoji.innerText = `${emData[[Math.floor(Math.random() * 2639)]].character}`
    })
}, 5000);