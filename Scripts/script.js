function addTask(){
    const inputTask = document.getElementById('inputTask');
    const listContainer = document.getElementById('listContainer');

    if (inputTask.value !== ''){
        const li = document.createElement('li');
        li.textContent = inputTask.value;


        const deleleButton = document.createElement('button');
        deleleButton.textContent = 'Delete';
        deleleButton.onclick = function(){
            li.remove();
        };

        li.appendChild(deleleButton);
        listContainer.appendChild(li);
        inputTask.value = '';
    }
    
}