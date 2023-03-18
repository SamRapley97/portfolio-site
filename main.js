window.onload=function(){





// Delay loop for the intro text list elements
const delayLoop = (fn, delay) => {
    return (x, i) => {
      setTimeout(() => {
        fn(x);
      }, i * delay);
    }
};



const carouselWrapper = document.getElementById('carousel_wrapper')
const carouselScroll = () => {
  setInterval(function() { 
    carouselWrapper.scrollBy({
      top: 0,
      left: 400,
      behavior: "smooth",
    })
}, 2000);
}
delayLoop(carouselScroll(), 2000)



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


const menuOptions = document.getElementById("menu_options")
menuOptions.addEventListener('click', (e) =>
  {
    let elementName = e.target.name;
    setTimeout(function () {
        document.getElementById(elementName).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, 100);
  }
)

}

}
