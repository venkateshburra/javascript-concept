// console.log('dom file');

// const body = document.querySelector('body');

// const styleBody = ()  => {
//   body.style.background = 'peachpuff';
// };

// const addTitle = (text) => {
//   const title = document.createElement('h1');
//   title.textContent = text;
//   body.append(title);
// };

// const contact = 'venkatesh@theburra.com.uk';

// export { styleBody, addTitle, contact};

const users = [
  { name : 'venky', premium : true},
  { name : 'mahesh', premium : false},
  { name : 'sahul', premium : true},
  { name : 'tharun', premium : false},
];

const userPremium = (users) => {
  return users.filter(user => user.premium)
}

export { userPremium, users as default }