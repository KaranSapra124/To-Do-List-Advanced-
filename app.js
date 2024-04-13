// // CRUD
// // CREATE , READ , UPDATE , DELETE

// // Create
const txtinpt = document.getElementById("txtinp");
const btn = document.getElementById("btn");
const TaskBox = document.getElementById("TaskBox");
const alertBox = document.getElementById("alertBox");

const arr = [];

//CREATE
btn.addEventListener("click", function () {
  if (txtinpt.value === "") {
    alertBox.innerHTML = `
    <div id="alert-2" class="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
    <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                <span class="sr-only">Info</span> 
                <div class="ms-3 text-sm font-medium">
                 You Have To Put Something Inside The Input!
                </div>
                <button type="button" onclick="Hide()" class="ms-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close">
                  <span class="sr-only">Close</span>
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                </button>
              </div>
    
    `;
    return;
  } else {
    alertBox.innerHTML = `
    <div id="alert-3" class="flex items-center p-4 mb-4 text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <svg class="flex-shrink-0 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
  </svg>
  <span class="sr-only">Info</span>
  <div class="ms-3 text-sm font-medium">
   Your Task Is Successfully Added ✔ 
  </div>
  <button type="button" onclick="Hide()" class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-3" aria-label="Close">
    <span class="sr-only">Close</span>
    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
    </svg>
  </button>
</div>
    `;
    arr.push(txtinpt.value);
    displayToDo(arr);
    txtinpt.value = "";
  }
});

// READ
function displayToDo(task) {
  TaskBox.innerHTML = "";
  for (let i = 0; i < task.length; i++) {
    TaskBox.innerHTML += `

        <li class="p-2 rounded-lg">
           <div class="flex align-middle flex-row justify-between">
             <div class="p-2">
               <input type="checkbox" class="h-6 w-6" value="true"  />
             </div>
             <div class="p-2">
               <p class="text-lg  text-gray-400">${task[i]}</p>
             </div>
             <button
               class="flex text-red-500 border-2 border-red-500 p-2 rounded-lg"
             >
               <svg
                 class="h-6 w-6 text-red-500"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 stroke-width="2"
                 stroke-linecap="round"
                 stroke-linejoin="round"
               >
                 <circle cx="12" cy="12" r="10" />
                 <line x1="15" y1="9" x2="9" y2="15" />
                 <line x1="9" y1="9" x2="15" y2="15" />
               </svg>
               <span>Remove</span>
             </button>
           </div>
           <hr class="mt-2" />
         </li>
           `;
  }
}

function Hide() {
  alertBox.innerHTML = "";
}

// Arrays

// ["Plate 1", "Plate 2"];

// counting 0 start
// const arr = [1, "ODD", 2, "Even", 3, "Odd", 4, "Even"];
// // // console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// arr.push(5);
// console.log(arr)
// arr.pop()
// console.log(arr)

// Home1 and Home2
// bridge
// Home1
