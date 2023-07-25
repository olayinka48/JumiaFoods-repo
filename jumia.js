    function showButton() {
        let button = document.getElementById('popoutButton');
        button.style.display = 'block'; 
    }

    function displayMap(){
        
    }

    let select = document.getElementById('select')
    let userInput = document.getElementById('userInput')
    let flexCheckDefault = document.getElementById('flexCheckDefault')
    let checkInput = document.getElementById('checkInput')
    let clear = document.getElementById('clearDiv')
    let miss = document.getElementById('miss')
    let change = document.getElementById('change')
    let exclusive  = document.getElementById('change2')
    let section  = document.getElementById('section1')
    let arrow  = document.getElementById('showArrow')


    const signUp = () => {
        if(userInput.value == '' || select.value == 'select your city'){
            alert('enter your details')
            
        }else{
            clear.style.display = 'none'
            miss.style.display = 'none'
            change.textContent = 'You have been added to our Newsletter'
            exclusive.textContent = 'Thank you for your registration. From now on you will receive updates about exclusive offers in your city.'
            section.style.height = '20vh'

        }
    

        // if(theForm.checkbox.checked == false){
        //     alert("Not Success")
        //     return false; 
        // }

        // else{
        //     // window.location.href = 'main.html'
        //     alert('successful')
        //     return true;
        // }
        }
        let icon = document.getElementById('icon')
        let advert = document.getElementById('advert')
        
        advert.style.display = 'none';
        icon.style.display = 'none';

           setInterval(() => {
              advert.style.display = '';
              icon.style.display = '';
              
              
            
           }, 3000);

        const exit = () => {
            advert.style.display = 'none';
            icon.style.display = 'none';
        
        }


        
        
   
