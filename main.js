window.onload=function(){



// Delay loop for the intro text list elements
const delayLoop = (fn, delay) => {
    return (x, i) => {
      setTimeout(() => {
        fn(x);
      }, i * delay);
    }
};


// Checks whether list animation has already run.
if (!('hasCodeRunBefore' in localStorage)){

// Gets the individual list elements, converys into an array and adds class of "checkbox to each one"
  const introPoints = document.getElementById("intro_points").getElementsByTagName("li")
  const checkBox = x => x.className = "checkbox"
  Array.from(introPoints).forEach(delayLoop(checkBox, 1000)) 

// // Once run, sends to local storage so as to prevent running on every reload.
  localStorage.setItem("hasCodeRunBefore", true);  
} 
else {
// If local cache exists, gets all the elements and assigns them correct class
  const introPoints = document.getElementById("intro_points").getElementsByTagName("li")
  Array.from(introPoints).forEach((x) => {
  x.className = "checkbox"
});

}

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



carousel = document.getElementById('carousel')

carousel.scrollLeft = (carousel.scrollWidth - carousel.clientWidth) / 2


}
