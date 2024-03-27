

const mode = document.getElementById("mode");

mode.addEventListener("click",(event) => {
    event.preventDefault();
   
    if (document.getElementById('themechanger').style.backgroundColor == "white"){
        mode.textContent = "🌒";
        console.log(document.getElementById('blog_container').style.borderTop= "white")

        document.getElementById('themechanger').style.backgroundColor = "black";
        document.getElementById('themechanger').style.color = "white";
        document.getElementById('submit').style.backgroundColor = "white";
        document.getElementById('submit').style.color = "black";
        document.getElementById('header_container').style.borderBottom = 'white solid 2px';
        document.getElementById('blog_container').style.borderTop = 'white solid 2px';
        document.getElementById('blog_circle_container').style.borderRight = 'white solid 2px';
        document.getElementById('form_container').style.borderLeft = 'white solid 2px';
        document.getElementById('usernameData').style.borderBottom = 'white solid 2px';
        
        
    }else {
        mode.textContent = "🌞";
        document.getElementById('themechanger').style.backgroundColor = "white";
        document.getElementById('themechanger').style.color = "black";
        document.getElementById('submit').style.backgroundColor = "black";
        document.getElementById('submit').style.color = "white";
        document.getElementById('header_container').style.borderBottom = 'black solid 2px';
        document.getElementById('blog_container').style.borderTop = 'black solid 2px';
        document.getElementById('blog_circle_container').style.borderRight = 'black solid 2px';
        document.getElementById('form_container').style.borderLeft = 'black solid 2px';
        document.getElementById('usernameData').style.borderBottom = 'black solid 2px';

    }
});



