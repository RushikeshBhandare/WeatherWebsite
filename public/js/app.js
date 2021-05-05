// Query Selector 
const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const massageOne = document.querySelector('#MassageOne')
const massageTwo = document.querySelector('#MassageTwo')

//massageOne.textContent = 'From Javascript'

weatherForm.addEventListener('submit', (event)=>{
    event.preventDefault()

    const location = searchElement.value
    massageTwo.textContent = 'Loading';
    fetch('/weather?adress=' + location).then((response)=>{
        response.json().then((data)=>{
            if(data.error){
            massageTwo.textContent = data.error;
                return
            }
            console.log(data)
            massageTwo.textContent = '';
            massageOne.textContent = data.Location; 
            massageTwo.textContent = data.forcast; 

        })
     })
 


    console.log(location)
})