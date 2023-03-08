function init() { }

init();

function addMovie() {
    const movieName = document.getElementById("movieName"); // grabbing elements
    const movieRating = document.getElementById("movieRating");// grabbing elements
    const mnValue = movieName.value;// ordering value
    const mrValue = parseInt(movieRating.value);// ordering value
    const newMovieListItem = document.createElement("li"); // crating a const that is a call for creating an element
    newMovieListItem.classList.add("list-group-item");// adding a class for styling for the new elemnt created
    const spanBadge = document.createElement("span"); // for creating a span
    spanBadge.classList.add("badge", "bg-secondary");// css for span
    spanBadge.innerText = mnValue; // span will contain movie name
    const div = document.createElement("div");// for creating a div
    div.classList.add("answerContainer")
    for (let index = 0; index < mrValue; index++) {// for loop that runs on the mr value 
        // in whitch for every value you attaching the rating by an img(a rating of 4 will lead to creeating stars untill it gets to the number 4 )
        const star = document.createElement("img");
        star.classList.add("starImg")
        star.src =
            "https://img.freepik.com/free-vector/golden-star-3d_1053-79.jpg?w=2000";
        star.height = 30;
        star.width = 30;
        div.append(star);
    }
    newMovieListItem.append(spanBadge, div);
    document.getElementById("content").append(newMovieListItem);


}