/* Task 1 */
var heading = document.getElementById('heading');       
console.log(heading.innerText);

heading.innerHTML = "<h3> Text changed </h3>";

/* Task 2 using plain JavaScript */
//Task 2a
var textBtn = document.getElementById('addText2');
textBtn.addEventListener('click', function(event){
    var task2 = document.getElementById('task2a');
    var paragraph = document.createElement('p');
    paragraph.innerText = "Hello World";
    task2.appendChild(paragraph);
});

/* Task 4 using jQuery */
