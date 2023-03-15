window.onload=function(){

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


