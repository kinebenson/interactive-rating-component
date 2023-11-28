// Target HTML Elements 

const feedbackPage = document.getElementById("ratings");
const thankyouPage = document.getElementById("thankyou");
const button = document.getElementById("button");
const ratings = document.querySelectorAll("#rating");
const selection = document.getElementById("selection");



// make the submit button clickable 
button.addEventListener("click", feedBack);


// function to be able to select a rating before submission 
ratings.forEach((rating) => {
    rating.addEventListener("click", () => (selection.textContent = rating.textContent));
});



// function to display the thankyou container after submission 
function feedBack() {
    feedbackPage.style.display = "none";
    thankyouPage.style.display = "flex";
}