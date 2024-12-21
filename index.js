


var imagesArray = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png","images/dice6.png"];

function pickImage () {

    return Math.floor(Math.random() * imagesArray.length);
    
}

function getRandomImage () {

    var getImage = document.getElementById("img1");
    var randomPickImage1 = pickImage();
    var randomImgUrl = imagesArray[randomPickImage1];
    getImage.src = randomImgUrl;
    return randomPickImage1;
    
}

function getRandomImage2 () {

    var getImage = document.getElementById("img2");
    var randomPickImage2 = pickImage(); 
    var randomImgUrl = imagesArray[randomPickImage2];
    getImage.src = randomImgUrl;
    return randomPickImage2;
    
}

    
function decideWinner() {
    
    var result1 = getRandomImage();
    var result2 = getRandomImage2();

    
    if (result1 > result2) {
        document.querySelector("h1").innerHTML = "Player 1 wins! 🎉";
    } else if (result2 > result1) {
        document.querySelector("h1").innerHTML = "🎉 Player 2 wins!";
    } else if (result1 === result2) {
        document.querySelector("h1").innerHTML = "It's a draw! 🤝";
    }
}


decideWinner();
