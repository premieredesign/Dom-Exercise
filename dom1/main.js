// const handleInput = (e) => {
//   const h1 = document.querySelector("h1");
//   h1.textContent = `Welcome ${e}`;
// };

const main = () => {
  const firstLi = document.querySelector("ol");
  firstLi.addEventListener("click", () => {
    console.log("You clicked the first li");
  });
  // document.getElementById("grow-me").classList.add("big"); // Andrew
  // document.getElementById("shrink-me").classList.remove("big"); // Jackie
  // const list = document.querySelectorAll("li"); // LeAnne
  // for (let i = 0; i < list.length; i++) {
  //   console.log("list", list[i].innerText); // LeAnne
  // }

  // const newLink = document.querySelector(".link"); // Amber
  // newLink.setAttribute("href", "https://www.example.com"); // Amber
  // newLink.textContent = "somewhere"; // Amber

  // document.getElementById("hide-me").style.display = "none"; // Austin
  // document.getElementById("show-me").style.display = "block"; // Rai

  // const input = document.getElementById("name");
  // input.addEventListener("keyup", (event) => handleInput(event.target.value));
};

window.onload = () => {
  document.querySelector("button").addEventListener("click", () => {
    console.log("Button  was clicked");
  });

  document.querySelector("div").addEventListener("click", () => {
    console.log("div  was clicked");
  });
};
