const email = document.querySelector(`input[type='email']`);
const button = document.querySelector(`.button`);
const error = document.querySelector('.error');
const icon = document.querySelector('.icon');

button.addEventListener('click', () => {
  let regex = /[A-Z][a-z][0-9]@(gmail|hotmail|outlook).com/g;
  if (!ValidateEmail(email.value)) {
    console.log('invalid');
    email.classList.add('emailErr');
    error.style.display = 'block';
    icon.style.display = 'inline';
  } else {
    console.log('valid');
    email.classList.remove('emailErr');
    error.style.display = 'none';
    icon.style.display = 'none';
  }
});

function ValidateEmail(mail) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  }
  return false;
}
