const main_div = document.getElementById('main-div');
const btn = document.getElementById('btn');
const input = document.getElementById('input');
const task = document.getElementById('task');
const filter = document.getElementById('filter');
const items_left = document.getElementById('items-left');
const left = document.getElementById('left');
const clear = document.getElementById('clear'); 
let isImage1 = true;
let previousBackgroundColor = null;
let newDivs = [];
let uncheckedTasksCount = 0;
const background_image = document.getElementById('background-image')
const background_image2 = document.getElementById('background-image2')




//tasks left
function updateUncheckedTasksCount() {
    uncheckedTasksCount = newDivs.filter(div => !div.querySelector('.checkbox').checked).length;
    left.innerText = `${uncheckedTasksCount} items left`;
    
}



//background cvlileba
function toggleBackgroundColor(element, color) {
    if (isImage1) {
        previousBackgroundColor = element.style.backgroundColor;
        element.style.backgroundColor = color;
    } else {
        element.style.backgroundColor = previousBackgroundColor;
    }
}

//text color cvlileba
function toggleColor(element, color) {
    if (isImage1) {
        previousColor = element.style.color;
        element.style.color = color;
        
    } else {
        element.style.color = previousColor;
        
    }
    
}
function toggleBackgroundImage2() {
    const backgroundImage2 = document.getElementById('background-image2');
    if (isImage1) {
        backgroundImage2.src = 'desktop2.jpg'; 
    } else {
        backgroundImage2.src = 'desktop1.jpg'; 
    }
}

// light dark image cvlieleba
function toggleBtnImage() {
    const btnImage = btn.querySelector('img');
    if (isImage1) {
        btnImage.src = 'Combined Shape.png'; 
    } else {
        btnImage.src = 'Combined Shape (1).png';
    }
}
function toggleBackgroundImage() {
    const backgroundImage = document.getElementById('background-image');
    if (isImage1) {
        backgroundImage.src = 'Bitmap (1).jpg'; 
    } else {
        backgroundImage.src = 'Bitmap.jpg'; 
    }
}

btn.addEventListener('click', () => {
    for (const div of newDivs) {
        const paragraph = div.querySelector('p');
        toggleColor(paragraph, 'white');
    }


    toggleBackgroundColor(main_div, '#171823');
    toggleBackgroundColor(input, '#25273D');
    toggleBackgroundColor(task, '#25273D');
    toggleBackgroundColor(filter, '#25273D');
    toggleBackgroundColor(items_left, '#25273D');
    toggleColor(input, 'white');

    
    toggleBtnImage();

   
    toggleBackgroundImage();
    toggleBackgroundImage2();

    
    isImage1 = !isImage1;
});


//enter button funqcia
input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter' && input.value != '') {
        const newDiv = document.createElement('div');
        const checkbox = document.createElement('input');
        const paragraph = document.createElement('p');
        const deleteButton = document.createElement('img');
        

        if(!isImage1){
            
            paragraph.style.color = 'white'
        }
        


        newDiv.className = 'newdiv';
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        paragraph.innerText = input.value;
        deleteButton.className = 'deletebutton';

        // delete btn eventlistener
        deleteButton.addEventListener('click', () => {
            task.removeChild(newDiv);
            newDivs = newDivs.filter(div => div !== newDiv);
            updateUncheckedTasksCount(); 
        });

        // checkbox eventlistener
        checkbox.addEventListener('change', () => {
            if (checkbox.checked) {
                paragraph.style.textDecoration = 'line-through';
                paragraph.style.color = '#D1D2DA';
            } else {
                paragraph.style.textDecoration = 'none';
            }
            updateUncheckedTasksCount(); 
        });

        newDiv.appendChild(checkbox);
        newDiv.appendChild(paragraph);
        newDiv.appendChild(deleteButton);

        task.appendChild(newDiv);
        newDivs.push(newDiv);
        input.value = '';
        updateUncheckedTasksCount(); 
       
    }
});

// Clear eventlistener
clear.addEventListener('click', () => {
    for (const div of newDivs) {
        if (div.querySelector('.checkbox').checked) {
            task.removeChild(div);
            newDivs = newDivs.filter(existingDiv => existingDiv !== div);
            updateUncheckedTasksCount(); 
        }
    }
});




