const input = document.querySelector('#name-input');
const userName = document.querySelector("#name-output");


input.addEventListener("input", (event => {
  const value = event.target.value.trim();
  if (value === "") { 
    return userName.textContent = "Anonymous";
  } else {
    return userName.textContent = value;
}
 })) 