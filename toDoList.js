let user_input = ''
let toDoList = new Array()


const new_entry = () => {
  let toDoListEntry = prompt('Enter new ToDo');
  toDoList.push(toDoListEntry);
  console.log(`${toDoListEntry} has been added to the list`)
}

const list = () => {
  console.log('******')
  toDoList.forEach(function(item) {
   console.log(`${toDoList.indexOf(item)}: ${item}`);
  });
  console.log('******')
}

const delete_entry = () => {
  let toDoListDelete = prompt('Which entry index would you like to delete?');
  toDoList.shift(toDoListDelete);
  console.log(`Entry ${toDoListDelete} has been deleted`)
}

while(user_input != 'quit') {
  user_input = prompt('What would you like to do?');
  switch(user_input) {
    case 'new':
      new_entry()
      break;
    case 'list':
      list()
      break;
    case 'delete':
      delete_entry()
      break;
    case 'quit':
      break;
  }
}