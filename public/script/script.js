// function toggle
const navbarExtra = document.getElementById("navbar-extra");

document.getElementById("menu").addEventListener("click", () => {
    if (navbarExtra.classList.contains("hidden")) {
        navbarExtra.classList.remove("hidden");
    } else {
        navbarExtra.classList.add("hidden");
    }
});

const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !navbarExtra.contains(e.target)) {
        navbarExtra.classList.add("hidden");
    }
});

// search input
const searchbutton = document.querySelector(".search-button");

searchbutton.addEventListener("click",async function () {
    console.log("haloo")
    try {
        const inputKeyword = document.querySelector(".input-keyword");
        const movie = await getMovie(inputKeyword.value)
        console.log(movie)
        updateUi(movie)

    } catch(err) {
        console.log(err);
    }
});

// method get movie
function getMovie(keyword) {
    return fetch("http://www.omdbapi.com/?apikey=520bb745&s=" + keyword)
        .then((response) => {
            if(!response.ok) {
                throw new Error("Problem on your link");
            }
            return response.json();
        })
        .then((response) => {
            if(response.Response === "False") {
                throw new Error(response.statusText);
            }
            return response.Search;
        });
}

function updateUi(movies) {
    let cards = "";
    movies.forEach((m) => {
        cards += showCard(m);
    });

    const movieContainer = document.querySelector(".movie-container")

    movieContainer.innerHTML = cards;
}

function showCard (m) {
    return `  
        <div class="sm:w-64 w-36 border border-white">
            <img class="sm:h-96 h-56" src="${m.Poster}" alt="">
            <div class="sm:p-4 p-1">
                <p>Judul : ${m.Title}</p>
                <p>Tahun Rilis : ${m.Year}</p> 
            </div>
        </div>
        `
}
