   const button = document.getElementById('button');
        const paragraph = document.getElementById('para');

        button.addEventListener('click', function () {

              paragraph.textContent = 'New text this is workinggg ';
});

// 2
const task = document.getElementById('task');

const addtaskButton = document.getElementById('addtask');


const taskList = document.getElementById('displaytask');

addtaskButton.addEventListener('click', function() {
    const taskText = task.value;

    if (taskText.trim() !== '') {
        const newTaskItem = document.createElement('li');
        newTaskItem.textContent = taskText;

        taskList.appendChild(newTaskItem);

        taskInput.value = '';
    }
});

// 3
const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      if (name === '' || email === '' || password === '') {
        event.preventDefault();
        alert('Please fill out all required fields.');
      }
    });

    //4

    const images = ['image.jpg', 'image2.jpeg', 'image3.jpeg'];
    let currentImage = 0;
    const slideshow = document.getElementById('slideshow');
    const prevBtn = document.getElementById('prevbtn');
    const nextBtn = document.getElementById('nextbtn');

    prevBtn.addEventListener('click', function() {
      currentImage = (currentImage - 1 + images.length) % images.length;
      slideshow.src = images[currentImage];
    });

    nextBtn.addEventListener('click', function() {
      currentImage = (currentImage + 1) % images.length;
      slideshow.src = images[currentImage];
    });