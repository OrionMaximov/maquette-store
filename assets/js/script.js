const imgElements = document.querySelectorAll(".mini img");
console.dir(imgElements);
//const mini =document.getElementsByClassName("mini"); marche si sur img directement
const frameImg = document.createElement("div");
const imgFull = [];
frameImg.style.width = "100vw";
frameImg.style.height = "100vh";
frameImg.style.justifyContent = "center";
frameImg.style.alignItems = "center"
frameImg.style.position = "fixed";
frameImg.style.zIndex = 5;
document.body.prepend(frameImg);


for (let i = 0; i < imgElements.length; i++) {
    let n = i;
    imgElements[i].addEventListener(
        "click",
        () => {
            console.log("blablabla");
            imgFull[n] = document.createElement("img");
            frameImg.style.display = "flex";
            imgFull[n].src = imgElements[n].src;
            frameImg.append(imgFull[n]);
        }
    )
    
} 
frameImg.addEventListener(
        "click",
        () => {
                frameImg.style.display = "none";
                frameImg.innerHTML = "";
                
            }
        
    )