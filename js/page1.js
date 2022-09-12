let nptFld = document.getElementById('usrNpt');
let btn = document.getElementById('addBtn');
let listOut = document.getElementById('list');

const addToList = () => {
  let newLi = document.createElement('p');
  newLi.innerHTML = nptFld.value;
  listOut.append(newLi);
}

btn.addEventListener('click', addToList);