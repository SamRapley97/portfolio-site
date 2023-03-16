window.onload=function(){

/*
On page loading, wait until page is fully present. 
Add an event listener that will check that this is correct.
In a for loop, change bullet point CSS so that it is checked green box, hover in. 
Only run once per session

*/


const introPoints = document.getElementById("intro_points").getElementsByTagName("li")
console.log(introPoints)
Array.from(introPoints).forEach((x, i) => {
  setTimeout(function(){
    console.log(x)
    x.style.color = "blue"
    console.log("${x} is working")
  }, i * 1000)
});
  


function greenCheckmark(x) {
  
}




 

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


