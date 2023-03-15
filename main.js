document.addEventListener('click', (e) =>
  {
    let elementName = e.target.name;
    console.log(elementName)
    setTimeout(function () {
        document.getElementById(elementName).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }, 100);
    
    
  }
);