import item from './item.js';

const items=[];
const hideCheckedItems = false;

const findById = function (id) {
  return items.find(item => item.id === id);
}

const addItem = function (name) {
  try {
    item.validateName(name);
    items.push(item.create(name));
  } catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

const findAndToggleChecked = function (id) {
  const found = findById(id);
  found.checked = !found.checked;
}

const findAndUpdateName = function(id, newName) {
  try {
    item.validateName(newName);
    const found = findById(id);
    found.name = newName;
  } catch(error) {
    console.log(`Cannot add item: ${error.message}`);
  }
}

const findAndDelete = function(id){
  const index = items.findIndex(item => item.id === id);
  const results = items.splice(index, 1);
  return results;
}

const toggleCheckedFilter = function (){
  this.hideCheckedItems = !this.hideCheckedItems;
}

export default {
  items,
  hideCheckedItems,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};