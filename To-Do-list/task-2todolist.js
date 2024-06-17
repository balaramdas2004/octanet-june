document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const tasksUl = document.getElementById('tasks');

    addTaskButton.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            newTaskInput.value = '';
        }
    });

    function addTask(taskText) {
        const li = document.createElement('li');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                li.style.textDecoration = 'line-through';
            } else {
                li.style.textDecoration = 'none';
            }
        });

        const textSpan = document.createElement('span');
        textSpan.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'remove';
        removeButton.addEventListener('click', () => {
            tasksUl.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(textSpan);
        li.appendChild(removeButton);
        tasksUl.appendChild(li);
    }
});
