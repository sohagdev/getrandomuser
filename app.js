const userImg = document.getElementById('user-img'),
  userTitle = document.getElementById('user-title'),
  userValue = document.getElementById('user-value'),
  userList = document.getElementById('value-list'),
  userBtn = document.getElementById('user-icon'),
  emailBtn = document.getElementById('email-icon'),
  birthdayBtn = document.getElementById('list-icon'),
  locationBtn = document.getElementById('location-icon'),
  phoneBtn = document.getElementById('phone-icon'),
  lockBtn = document.getElementById('lock-icon');

let data = [];
// Fetch data form randomuser api
getRandomUser();
async function getRandomUser() {
  const res = await fetch('https://randomuser.me/api');
  const data = await res.json();
  // console.log(data);

  const user = data.results[0];
  // console.log(user);
  const newUser = {
    name: `${user.name.title} ${user.name.first} ${user.name.last}`,
    email: `${user.email}`,
    birthday: `${user.dob.date}`,
    location: `${user.location.city} ${user.location.state} ${user.location.country}`,
    phone: `${user.phone}`,
    picture: `${user.picture.large}`,
    login: `${user.login.username}`,
  };
  addData(newUser);
}
// Add data to the DOM
function addData(obj) {
  data.push(obj);
  updateDom();
}
function updateDom(provideData = data) {
  provideData.forEach((item) => {
    userImg.src = `${item.picture}`;
    userBtn.addEventListener('click', (e) => {
      userTitle.innerText = 'Hi, My Name is';
      userValue.innerText = `${item.name}`;
      userBtn.classList = 'active';
      e.preventDefault();
    });
    emailBtn.addEventListener('click', (e) => {
      userTitle.innerText = 'My email address is';
      userValue.innerText = `${item.email}`;
      emailBtn.classList = 'active';
      e.preventDefault();
    });
    birthdayBtn.addEventListener('click', (e) => {
      userTitle.innerText = 'My birthday is';
      userValue.innerText = `${item.birthday}`;
      birthdayBtn.classList = 'active';
      e.preventDefault();
    });
    locationBtn.addEventListener('click', (e) => {
      userTitle.innerText = 'My address is';
      userValue.innerText = `${item.location}`;
      locationBtn.classList = 'active';
      e.preventDefault();
    });
    phoneBtn.addEventListener('click', (e) => {
      userTitle.innerText = 'My Phone Number is';
      userValue.innerText = `${item.phone}`;
      phoneBtn.classList = 'active';
      e.preventDefault();
    });
    lockBtn.addEventListener('click', (e) => {
      userTitle.innerText = 'My User Name is';
      userValue.innerText = `${item.login}`;
      lockBtn.classList = 'active';
      e.preventDefault();
    });
  });
}
