const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
// ------------------------------------------

// funzione

function createBox (container, list) {
    list.forEach((element) => {
        container.innerHTML +=
         `
        <div class="box"> 
            <i class="${element.family} ${element.prefix}${element.name} ${element.color}"></i>
            <p>${element.name}</p>
        </div>
        `;
          
    });
}

// ----------------------------------------------------

const containerHtml = document.querySelector('.container');
const filterHtml = document.getElementById('element-type');
const selectAll = document.getElementById('all');
const selectAnimal = document.getElementById('animal');
const selectVegetable = document.getElementById('vegetable');
const selectUser = document.getElementById('user');




    const listAnimal = icons.filter(function (element){
        const AnimalType = element.type;
        if(AnimalType === "animal") {
            return true      
        }     
    })
    console.log(listAnimal)
    // nuovo array di animal


    const listVegetable = icons.filter(function (element){
        const vegetableType = element.type;
        if(vegetableType === "vegetable") {
            return true      
        }      
    })
    console.log(listVegetable)
    // nuovo array di vegetable


    const listUser = icons.filter(function (element){
        const UserType = element.type;
        if(UserType === "user") {
            return true      
        }  
    })
    console.log(listUser)
    // nuovo array di user

    const cleanList = [
        icons,
        listAnimal,
        listVegetable,
        listUser
    ];
    console.log(cleanList);

        
        
        
filterHtml.addEventListener('change', function(){
        containerHtml.innerHTML = '';
        const valore = filterHtml.value
        createBox(containerHtml, cleanList[valore])
        })
    

     

