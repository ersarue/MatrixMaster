const name = document.querySelector('#name');
const email = document.querySelector('#email');
const country = document.querySelector('#country');
const note = document.querySelector('#exampleFormControlTextarea1');
const submit = document.querySelector('#submit-button');
const message = document.querySelector('.msg');
const selection = document.querySelector('.selection');
console.log(name.value);
submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (name.value === '' || email.value === '' || country.value === '') {
    message.innerHTML = 'Please make sure that you filled in each box.';
    message.style.color = 'red';
  } else {
    const h4 = document.createElement('h4');
    selection.appendChild(h4);
    h4.innerText = 'Your information has been saved as following: ';
    const hrTag = document.createElement('hr');
    h4.appendChild(hrTag);
    const ul = document.createElement('ul');
    selection.appendChild(ul);
    const customerInfo = [name.value, email.value, country.value, note.value];
    for (let i = 0; i < customerInfo.length; i++) {
      const li = document.createElement('li');
      li.innerText = customerInfo[i];
      li.style.listStyle = 'none';
      ul.appendChild(li);
      name.value = '';
      email.value = '';
      country.value = '';
      note.value = '';
    }
    /* [name.value, email.value, country.value, note.value].forEach((val) => {
      const li = document.createElement('li');
      li.innerText = val;
      li.style.listStyle = 'none';
      ul.appendChild(li);
      val = '';
    }); */
  }
});
