function addingEventListener() {
  console.log("adding event listener");
}

const input = document.getElementById("button");
input.addEventListener("click", function () {
  alert("I was clicked!");
});
