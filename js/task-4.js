const form = document.querySelector(".login-form")




function handleSubmit(event) {
  event.preventDefault();
  const forms = event.target.elements;
  const email = forms.email.value.trim();
  const password = forms.password.value.trim();
  if (email === "" || password === "") {
    return alert('All form fields must be filled in');
  } 

   console.log({
    email: email,
     password: password
   });

  event.target.reset();
}
form.addEventListener('submit', handleSubmit);


