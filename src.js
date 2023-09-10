async function getmeme(){
    let rand = Math.floor(Math.random() * 3);
    console.log(rand);
    var subs = ['dankmemes', 'memes', 'wholesomememes'];
    var title = document.getElementById("title");
    var image = document.getElementById("image");
    let r = new XMLHttpRequest();
    title.innerHTML = "Loading Meme..."; 
    image.src = "placeholder.gif";
    r.open("GET", `https://meme-api.com/gimme/${subs[rand]}`, true);
    r.send();
    r.onload = () => {
        let meme = JSON.parse(r.responseText);
        title.innerHTML = meme.title;
        image.src = meme.url;
    }
}

var btn = document.getElementById('btn');
btn.addEventListener('click', getmeme);
window.addEventListener('load', getmeme);