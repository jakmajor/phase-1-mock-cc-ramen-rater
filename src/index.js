const ramen_URL = "http://localhost:3000/ramens";
const ramenForm = document.getElementById("new-ramen");
let ramens = [];

let displayRamen = (ramensArray) => {
  ramens = ramensArray;
  ramensArray.forEach((ramen) => {
    const ramenImage = document.createElement("img");
    ramenImage.src = ramen.image;
    document.getElementById("ramen-menu").appendChild(ramenImage);
    ramenImage.addEventListener("click", () => {
      let detailImage = document.querySelector(".detail-image");
      detailImage.src = ramen.image;
      let detailName = document.querySelector(".name");
      detailName.innerText = ramen.name;
      let restaurantName = document.querySelector(".restaurant");
      restaurantName.innerText = ramen.restaurant;
      let rating = document.querySelector("#rating-display");
      rating.innerText = ramen.rating;
      let comment = document.querySelector("#comment-display");
      comment.innerText = ramen.comment;
    });
  });
};

let newRamenData = (e) => {
  e.preventDefault();
  let newName = document.querySelector("#new-name").value;
  let newRestaurant = document.querySelector("#new-restaurant").value;
  let newImage = document.querySelector("#new-image").value;
  let newRating = document.querySelector("#new-rating").value;
  let newComment = document.querySelector("#new-comment").value;
  let newRamenObj = {
    id: "hi",
    name: newName,
    restaurant: newRestaurant,
    image: newImage,
    rating: newRating,
    comment: newComment,
  };

  ramens.push(newRamenObj);
  displayRamen(ramens);
};

let fetchData = () => {
  fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((json) => displayRamen(json));
};

ramenForm.addEventListener("submit", newRamenData);
document.addEventListener("DOMContentLoaded", fetchData);
