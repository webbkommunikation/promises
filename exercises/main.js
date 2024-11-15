const jokeSetup = document.getElementById("jokeSetup")
const jokePunchline = document.getElementById("jokePunchline")
const showPunchline = document.getElementById("showPunchline")

fetch("https://official-joke-api.appspot.com/random_joke") // Test with correct and incorrect URLs
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json();
    })
    .then((data) => {
        jokeSetup.textContent = data.setup;
        jokePunchline.textContent = data.punchline;
        showPunchline.style.display = "inline";
        jokePunchline.style.display = "none";
    })
    .catch(() => {
        jokeSetup.textContent = "enough humor for today, try again tomorrow";
        showPunchline.style.display = "none";
        jokePunchline.style.display = "none";
    });

showPunchline.addEventListener("click", () => {
    jokePunchline.style.display = "block";
});

/* Exercise 3
async function getJoke() {
    try {
        const response = await fetch("https://official-joke-api.appspot.com/random_joke"); // Test with correct and incorrect URLs
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        jokeSetup.textContent = data.setup;
        jokePunchline.textContent = data.punchline;
        showPunchline.style.display = "inline";
        jokePunchline.style.display = "none";
    } catch (error) {
        jokeSetup.textContent = "enough humor for today, try again tomorrow!";
        showPunchline.style.display = "none";
        jokePunchline.style.display = "none";
    }
}

getJoke();
*/