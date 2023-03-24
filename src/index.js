import "./styles.css"

console.log('working')
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
    
    
    let cards = document.querySelectorAll('.card');
    cards = [...cards]
    const introPoints = document.getElementById("intro_points").getElementsByTagName("li")
    const checklistCardButton = document.getElementById('right_card_button')
    
    checklistCardButton.addEventListener( 'click', function(){
      this.disabled = true
      if(cards[1].className == "card right_card" ){
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
    
    cards.forEach((card)=>{
      
      card.addEventListener( 'click', function() { 
      
        card.classList.toggle('is-flipped');
        if(card.classList.contains('is-flipped') == true){
          let frontCards = [...card.getElementsByClassName('front')]
          let backCards = [...card.getElementsByClassName('back')]
          frontCards[0].classList.add('front_hidden')
          backCards[0].classList.remove('back_hidden')
        }
        else {
          let frontCards = [...card.getElementsByClassName('front')]
          let backCards = [...card.getElementsByClassName('back')]
          frontCards[0].classList.remove('front_hidden')
          backCards[0].classList.add('back_hidden')
          
        }
          
        })
    
      });
      
    
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

