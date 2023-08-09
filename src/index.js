const displayLike = document.querySelector("#duck-display-likes")
//Deliverable 1
//Getting the Data through (fetch)
//let currentLikes = 0


fetch("http://localhost:3000/ducks")
    .then(r => r.json())
    .then(ducks => {

        ducks.forEach(duckIndividual => {
            console.log(duckIndividual)
            displayNav(duckIndividual)
        })
        displayDuck(ducks[0])

        displayLike.addEventListener("click", () => {
            displayLike.textContent = parseInt(displayLike.textContent) + 1 + " likes "
            // console.log(currentLikes)
        })
        const duckForm = document.querySelector("#new-duck-form")
        duckForm.addEventListener("submit", (e) => submitForm(e))
    })
//Display all the navbar
//For each through array
//create nav elements
function displayNav(duck) {
    const navBar = document.querySelector("#duck-nav")
    console.log(duck.id)
    const img = document.createElement("img")
    img.src = duck.img_url
    //img_url is from db.json
    navBar.append(img)

    img.addEventListener("click", () => displayDuck(duck))
}


//Deliverable 2: Display each duck
//Gonna be working working in index.html and grabbng from duck-display
function displayDuck(duck) {
    //querySelecting
    const displayName = document.querySelector("#duck-display-name")
    const displayImage = document.querySelector("#duck-display-image")

    //set textContent
    displayName.textContent = duck.name
    displayImage.src = duck.img_url
    displayLike.textContent = duck.likes + " Likes "
    // currentLikes = duck.likes


}
//edit existing dom to be duck content
//querySelecting
//.textcontent edit
//Display the first duck

//Deliverable 3: Incriment like button
//add event listener on button
//edit exisitng like count (front end)
//make sure "Like" is at the end
//Bonus: Patch

//Deliverable 4: submission form
function submitForm(e) {
    e.preventDefault()
    console.log(e.target["duck-name-input"].value)
    const newDuck = {
        "name": e.target["duck-name-input"].value,
        "img_url": e.target["duck-image-input"].value,
        "likes": 0
    }
    fetch("http://localhost:3000/ducks", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newDuck)
    })
        .then(r => r.json())
        .then(console.log())
    displayNav(newDuck)
}
//select the form
//get data out of form
//display the data
//Bonus: Post