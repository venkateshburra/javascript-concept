import Tooltip from "./styleui/tooltip";
import Dropdown from "./styleui/dropdown";
import Tabs from "./styleui/tab";
import Snackbar from "./styleui/snackbar";
// create a tooltip

const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

// create dropdown

const dropdown = document.querySelectorAll('.dropdown');

dropdown.forEach(dropdown => {
  const instance = new Dropdown(dropdown);
  instance.init();
})

// create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

// create snackbar
const snackbar = new Snackbar();
snackbar.init();

const button = document.querySelector('button');
button.addEventListener('click', () => {
  snackbar.show('you clicked me :)');
});