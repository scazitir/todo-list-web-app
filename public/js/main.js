const taskList = document.getElementById('ul-list-of-tasks');
const doneTaskList = document.getElementById('ul-list-of-done-tasks');
const removeBtn = document.getElementById('remove-task');
const removeDoneBtn = document.getElementById('remove-done-task');
const doneBtn = document.getElementById('update-status');

const GET_ALL_TASKS = '/tasks';
const GET_ALL_DONE_TASKS = '/done-tasks';

// It will fetch all tasks in the db, and call function to show the results
fetch(GET_ALL_TASKS)
  .then(response => response.json())
  .then(showAllTasks)
  .catch(err => console.log(err));

// It will do the same that function above, but using done-tasks db
fetch(GET_ALL_DONE_TASKS)
  .then(response => response.json())
  .then(showAllDoneTasks)
  .catch(err => console.log(err));


function showAllTasks (tasks) {
  tasks.forEach( task => {
    const li = document.createElement('li');
    li.classList.add('task-li');
    li.id = `task-${task._id}`;

    const checkbox = document.createElement('input');
    checkbox.type = 'radio';
    checkbox.name = 'check';
    checkbox.value = task._id;

    const label = document.createElement('label');
    label.appendChild(document.createTextNode(task.title));

    const updateBtn = document.createElement('button');
    updateBtn.type = 'button';
    updateBtn.className = 'btn update-btn';
    updateBtn.innerText = 'Update';

    updateBtn.addEventListener('click', () => {
          // create input element
          const titleInput = document.createElement('input');
          titleInput.type = 'text';
          titleInput.placeholder = 'Enter title';

          // create popover
          $(updateBtn).popover({
            html: true,
            content: titleInput,
          });

          // show popover
          $(updateBtn).popover('show');

          // add input element to DOM
          const popoverContent = $(updateBtn).next('.popover').find('.popover-content');
          popoverContent.append(titleInput);

          // add event listener to the input element when you remove your cursor of the popover
          titleInput.addEventListener('blur', function() {
            const updatedTitle = titleInput.value;
            
            fetch(`/tasks/${task._id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ title: updatedTitle})
            })
      
            window.location.reload();
          });

          // Validate the new title when the user clicks on enter of the keyboard
          titleInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter'){
              const updatedTitle = titleInput.value;
            
              fetch(`/tasks/${task._id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title: updatedTitle})
              })
              $(updateBtn).popover('hide'); 
      
              window.location.reload();
            }
          });
    })

    // Remove a task from to do tasks
    removeBtn.addEventListener('click', () => {
      const taskToRemove = document.getElementById(`task-${task._id}`);
      if (checkbox.checked) {
        taskList.removeChild(taskToRemove);
        fetch(`/tasks/${task._id}`, { method: 'DELETE' });
      }
    });

    // Remove task from to do, and create the same task on done-task db
    doneBtn.addEventListener('click', () => {
      const doneTask = document.getElementById(`task-${task._id}`);
      if (checkbox.checked) {

        taskList.removeChild(doneTask);
        fetch('/done-tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title: task.title})
        })

        fetch(`/tasks/${task._id}`, { method: 'DELETE' });

        window.location.reload();
      }
    })

    li.appendChild(checkbox);
    li.appendChild(label);
    li.appendChild(updateBtn);
    taskList.appendChild(li);
  })
}  

// Function to get all tasks from done-tasks database
function showAllDoneTasks (tasks) {
  tasks.forEach( task => {

    // Creates a list of task
    const li = document.createElement('li');
    li.classList.add('task-li-done');
    li.id = `done-task-${task._id}`;

    // Create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'radio';
    checkbox.name = 'check';
    checkbox.value = task._id;

    const label = document.createElement('label');
    label.appendChild(document.createTextNode(task.title));

    // When the checkbox is checked and the button remove is clicked, the task will be removed from the done-tasks db
    removeDoneBtn.addEventListener('click', () => {
      const taskToRemove = document.getElementById(`done-task-${task._id}`);
      if (checkbox.checked) {
        doneTaskList.removeChild(taskToRemove);
        fetch(`/done-tasks/${task._id}`, { method: 'DELETE' });
      }
    });

    li.appendChild(checkbox);
    li.appendChild(label);
    doneTaskList.appendChild(li);
  })
}  
