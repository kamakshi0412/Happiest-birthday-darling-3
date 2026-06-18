function checkPassword(){

const password =
document.getElementById("birthdayPassword").value;

if(password === "23062022"){

document.getElementById("welcomeScreen")
.classList.add("hidden");

document.getElementById("mainContent")
.classList.remove("hidden");

const music =
document.getElementById("bgMusic");

music.play().catch(()=>{});

}
else{

document.getElementById("errorMessage")
.innerHTML =
"❌ Wrong answer. Try again ❤️";

}

} 
function closeModal() {
    modal.classList.add("hidden");
}

function unlockNext(current) {
    const next = document.getElementById(`box${current + 1}`);

    if(next){
        next.classList.remove("locked");
        next.classList.add("unlocked");
    }
}

function openBox(number){

    switch(number){

        // BOX 1

        case 1:

        modalBody.innerHTML = `
        <h2>👶 Childhood Memories</h2>

        <p>Add your childhood photos inside the photos folder.</p>

        <div class="gallery">

            <img src="childhood1.JPG">
            <img src="childhood2.JPG">
            <img src="childhood3.JPG">
            <img src="childhood4.jpg">

        </div>

        <br>

        <button onclick="finishBox(1)">
        Unlock Next Gift ❤️
        </button>
        `;
        break;

        // BOX 2

        case 2:

        modalBody.innerHTML = `
        <div class="letter">

        <h2>💌 Dear Kanishka</h2>

        <p>

        Happy Birthday to the most amazing sister.

        Thank you for every laugh, every memory,
        every fight that became a funny story,
        and every moment we shared together.

        I am grateful to have you in my life.

        I hope this year brings you happiness,
        success, love, adventures and everything
        your heart wishes for.

        You deserve the world.

        Happy Birthday once again ❤️

        Love,
        Nikki

        </p>

        <br>

        <button onclick="finishBox(2)">
        Unlock Next Gift ❤️
        </button>

        </div>
        `;
        break;

        // BOX 3

        case 3: 
            
modalBody.innerHTML = `
<h2>🎵 Lyrics That Remind Me Of You</h2>

<p>
Every lyric on this page reminds me of you,
our memories and how special you are to me. ❤️
</p>

<img src="lyrics-page.jpg.jpg">
style="
width:100%;
max-width:700px;
border-radius:20px;
margin-top:15px;
box-shadow:0 8px 25px rgba(0,0,0,0.15);
">

<br><br>

<button onclick="finishBox(3)">
Unlock Next Gift ❤️
</button>
`;
break;

        // BOX 4

        case 4:

        modalBody.innerHTML = `
        <h2>📸 Our Beautiful Memories</h2>

        <div class="gallery">

            <img src="memory1.jpg">
            <img src="memory2.jpg">
            <img src="memory3.jpg">
            <img src="memory4.jpg">
            <img src="memory5.jpg">
            <img src="memory6.jpg">

        </div>

        <br>

        <button onclick="finishBox(4)">
        Unlock Next Gift ❤️
        </button>
        `;
        break;

        // BOX 5

        case 5:

        modalBody.innerHTML = `
        <div class="secret">

        <h2>🔒 Secret Message</h2>

        <p>

        No matter how old we become,
        you'll always be my favorite person
        to annoy and love forever.

        ❤️

        </p>

        <br>

        <button onclick="finishBox(5)">
        Unlock Next Gift ❤️
        </button>

        </div>
        `;
        break;

        // BOX 6

        case 6:

        modalBody.innerHTML = `
        <h2>😂 Funny Memories</h2>

        <div class="gallery">

            <img src="funny1.jpg">
            <img src="funny2.jpg">
            <img src="funny3.jpg">

        </div>

        <video controls>
            <source src="funny.mp4">
        </video>

        <br>

        <button onclick="finishBox(6)">
        Unlock Next Gift ❤️
        </button>
        `;
        break;

        // BOX 7

        case 7:

        modalBody.innerHTML = `
        <div class="quiz">

        <h2>❓ Friendship Quiz</h2>

        <p>
        What does I call you the most?
        </p>

        <button onclick="quizWrong()">
            Nautanki
        </button>

        <button onclick="quizCorrect()">
          Darling
        </button>

        <button onclick="quizWrong()">
        Pagal aurat
        </button>

        </div>
        `;
        break;

        // BOX 8

        case 8:

        modalBody.innerHTML = `
        <h2>🎥 Birthday Video</h2>

        <video controls autoplay>

            <source src="birthday.mp4">

        </video>

        <br><br>

        <button onclick="finishBox(8)">
        Unlock Next Gift ❤️
        </button>
        `;
        break;

        // BOX 9

        case 9:

        modalBody.innerHTML = `
        <div class="cake-wrapper">

        <h2>🎂 Make a Wish</h2>

        <div class="cake" onclick="blowCandle()">
        🕯️🎂
        </div>

        <div class="cake-text">
        Click the candle to blow it out!
        </div>

        </div>
        `;
        break;

        // BOX 10

        case 10:

        modalBody.innerHTML = `
        <div class="final-page">

        <h1>🎉 Happy Birthday Kanishka 🎉</h1>

        <p>

        May your day be filled with love,
        happiness, laughter and beautiful moments.

        Thank you for being the best sister.

        I hope all your dreams come true.

        ❤️

        With all my love,

        Nikki

        </p>

        </div>
        `;

        createConfetti();

        break;
    }

    modal.classList.remove("hidden");
}

function finishBox(number){

    unlockNext(number);

    closeModal();

    alert("Gift unlocked! 🎁");
}

function quizWrong(){
    alert("Oops! Try again ❤️");
}

function quizCorrect(){

    alert("Correct! 🎉");

    unlockNext(7);

    closeModal();
}

function blowCandle(){

    modalBody.innerHTML = `
    <div class="cake-wrapper">

    <h2>🎂 Wish Granted ❤️</h2>

    <div style="font-size:8rem;">
    🎂
    </div>

    <p>

    May all your dreams come true,
    Kanishka ❤️

    </p>

    <br>

    <button onclick="finishBox(9)">
    Final Surprise 🎉
    </button>

    </div>
    `;
}

function createConfetti(){

    const container =
    document.getElementById("confettiContainer");

    container.innerHTML = "";

    for(let i=0;i<150;i++){

        const confetti =
        document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
        Math.random()*100 + "%";

        confetti.style.top =
        "-20px";

        confetti.style.background =
        `hsl(${Math.random()*360},100%,75%)`;

        confetti.style.animationDelay =
        Math.random()*3 + "s";

        container.appendChild(confetti);
    }
}

window.onclick = function(e){

    if(e.target === modal){

        closeModal();

    }
}
