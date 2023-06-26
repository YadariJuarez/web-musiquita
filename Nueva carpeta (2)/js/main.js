let image = document.getElementById("image");
let text = document.getElementsById("texto");
let evento_btn = document.getElementById("evento")

console.log(text.textContent)

evento_btn.addEventListener("click",function () {
        console.log(!isPlaying);

        if (!isPlaying) {
            audio.play();
            isPlaying = true;
            evento_btn.innerHTML = "pause";
            image.style.animationPlayState = "running";
        }
        else {
            audio.pause();
            isPlaying = false;
            evento_btn.innerHTML = "play";
            image.style.animationPlayState = "paused";
        }
    })
