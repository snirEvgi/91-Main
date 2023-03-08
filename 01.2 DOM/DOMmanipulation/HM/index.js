function init() {



    const movieName = document.getElementById("movieName"); // grabbing elements
    const movieRating = document.getElementById("movieRating");// grabbing elementss
    const submitBtn = document.getElementById("submitBtnOne")
    submitBtn.onclick = function () {
        const makeLi = document.createElement("li");
        makeLi.classList.add("list-group-item")
        const mainUl = document.getElementById("uList");

        const makeSpan = document.createElement("span")
        makeSpan.innerText = "Movie Name:"
        makeSpan.classList.add("myFirstSpan")
        const makeSecondSpan = document.createElement("span")
        makeSecondSpan.innerText = "Movie Rating:"
        makeSecondSpan.classList.add("mySecondSpan")

        makeLi.append(makeSpan, movieName.value, makeSecondSpan,);
        for (let index = 0; index < movieRating.value; index++) {// for loop that runs on the mr value 
            // in whitch for every value you attaching the rating by an img(a rating of 4 will lead to creeating stars untill it gets to the number 4 )
            const star = document.createElement("img");
            star.classList.add("starImg")
            star.src =
                "https://img.freepik.com/free-vector/golden-star-3d_1053-79.jpg?w=2000";
            star.height = 30;
            star.width = 30;
            makeLi.append(star);
        }
        mainUl.append(makeLi)


        movieName.value = "";
        movieRating.value = "";

    }
    function changeColor() {

    }
} init()


