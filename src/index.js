import "./styles.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfVAHmazdBEbedaMgRXTioNRz15r0f56w",
  authDomain: "portfolio-site-staging-eb356.firebaseapp.com",
  projectId: "portfolio-site-staging-eb356",
  storageBucket: "portfolio-site-staging-eb356.appspot.com",
  messagingSenderId: "989341024010",
  appId: "1:989341024010:web:ef84e194c6aba63240c4f3",
  measurementId: "G-DKX65NXSFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}


window.onload=function(){



    // Delay loop for the intro text list elements
    const delayLoop = (fn, delay) => {
        return (x, i) => {
          setTimeout(() => {
            fn(x);
          }, i * delay);
        }
    };

  
    const carousel = document.getElementById('carousel')
    carousel.scrollLeft = (carousel.scrollWidth - carousel.clientWidth) / 2
    
    
  
    const introPoints = document.getElementById("intro_points").getElementsByTagName("li")
    const checklistCardButton = document.getElementById('right_card_button')
    
    checklistCardButton.addEventListener( 'click', function(){
      this.disabled = true
      if(this.parentNode.className == "card right_card" ){
        const checkBox = x => x.classList.add('checkbox')
        Array.from(introPoints).forEach(delayLoop(checkBox, 700)) 
        setTimeout(() => {this.disabled=false}, 4500)
      } 
      else {
        const removeCheckBox = x => x.classList.remove('checkbox')
        Array.from(introPoints).forEach(removeCheckBox)
        this.disabled = false;
      }
    
    })

    
    const introButtons = [...document.getElementsByClassName('intro_buttons')]
  

    introButtons.forEach((introButton)=>{
      
        introButton.addEventListener( 'click', function() { 
          let card = this.parentNode
          this.parentNode.classList.toggle('is-flipped');
          if(this.parentNode.classList.contains('is-flipped') == true){
            card.querySelector('.front').classList.add('front_hidden')
            card.querySelector('.back').classList.remove('back_hidden')
           
            
           
          }
          else {
            card.querySelector('.front').classList.remove('front_hidden')
            card.querySelector('.back').classList.add('back_hidden')   
            
          }
            
        })
      
    });
        
      
    
    // cards.forEach((card)=>{
      
    //   card.addEventListener( 'click', function() { 
      
    //     card.classList.toggle('is-flipped');
    //     if(card.classList.contains('is-flipped') == true){
         
    //       frontCards[0].classList.add('front_hidden')
    //       backCards[0].classList.remove('back_hidden')
    //     }
    //     else {
    //       let frontCards = [...card.getElementsByClassName('front')]
    //       let backCards = [...card.getElementsByClassName('back')]
    //       frontCards[0].classList.remove('front_hidden')
    //       backCards[0].classList.add('back_hidden')
          
    //     }
          
    //     })
    
    //   });
      
    
      const menuOptions = document.getElementById("menu_options")
    
      // Adds an event for when one of the menu items is clicked on. 
      menuOptions.addEventListener('click', (e) =>
        {
      // Assigns a variable equal to the clicked on menu option's name property. 
          let elementName = e.target.name; 
      // Sets a timeout so as to ensure that action can be initialised, runs smooth scroll action
          setTimeout(function () {
              document.getElementById(elementName).scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  
              });
          }, 100);
        }
      )

    
}

