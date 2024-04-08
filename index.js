document.querySelector(".close-menu").addEventListener("click", ()=>{
    let menu = document.querySelector('.menu')
    closemenu(menu)
})
document.querySelector(".open-menu").addEventListener("click", ()=>{
    let menu = document.querySelector('.menu')
    openmenu(menu)
})

function openmenu(menu){
    if(menu.nodeName.toLowerCase() == "aside"){
        menu.classList.toggle("ds-none")
    }
}
function closemenu(menu){
    if(menu.nodeName.toLowerCase() == "aside"){
        menu.classList.toggle("ds-none")
    }
}



for (const key in document.querySelector('.menu_list').children) {
    if (Object.hasOwnProperty.call(document.querySelector('.menu_list').children, key)) {
        const element = document.querySelector('.menu_list').children[key];
        element.addEventListener('click', ()=>{
            let menu = document.querySelector('.menu')
            closemenu(menu)
        })
    }
}


function composeEmail(e) {
    e.preventDefault()
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    // Compose the email subject and body
    var subject = "Message from " + name;
    var body = "Name: " + name + "\nEmail: " + email + "\nMessage: " + message;
  
    // Create the mailto link
    var mailtoLink = "mailto:peterpaultolulope@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  
    // Open the default email client
    window.location.href = mailtoLink;

    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
  }


  if(window.location.href.includes("contact.html")){
    document.getElementById('submit').addEventListener("click", (e)=>composeEmail(e))
  }



