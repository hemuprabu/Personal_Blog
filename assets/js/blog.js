function backHandler() {
    window.location.href = localStorage.getItem('previous');
} 

// let blogData = [];

const mode1 = document.getElementById("mode1");
mode1.addEventListener("click",(event) => {
  event.preventDefault();
 
  if (document.getElementById('themechangerBlog').style.backgroundColor === "white" || document.getElementById('themechangerBlog').style.backgroundColor === '') {
      mode1.textContent = "🌒";
      document.getElementById('themechangerBlog').style.backgroundColor = "black";
      document.getElementById('themechangerBlog').style.color = "white";
      document.getElementById('header_container1').style.borderBottom = 'white solid 2px';
     var myObj = document.querySelector('#blog-list');
     for (let i=0;i<myObj.children.length; i++){
      myObj.children[i].style.border = 'white solid 2px';
      myObj.children[i].children[0].style.borderBottom = 'white solid 2px';
     }
  }else {
      mode1.textContent = "🌞";
      document.getElementById('themechangerBlog').style.backgroundColor = "white";
      document.getElementById('themechangerBlog').style.color = "black";
      var myObj = document.querySelector('#blog-list');
      //myObj.style.border = 'white solid 2px';
      for (let i=0;i<myObj.children.length; i++){
       myObj.children[i].style.border = 'black solid 2px';
       myObj.children[i].children[0].style.borderBottom = 'black solid 2px';
      }
      document.getElementById('header_container1').style.borderBottom = 'black solid 2px';
      

  }
});
  


  function onLoadHandler(){
    const blog= JSON.parse(localStorage.getItem('blogData'));
    let ul= document.getElementById('blog-list');

    for(let i =0; i<blog.length; i++){
       console.log(blog[i]);
        let li = document.createElement('li');
                li.setAttribute('class','blogitemLi');
                // li.setAttribute('id','blogitemLi');
                ul.appendChild(li);
                let h = document.createElement('h2');
                h.setAttribute('class','usernameData');
                // h.setAttribute('id','usernameData');
                 h.textContent=blog[i].username;
                 let p_title = document.createElement('p');
                 p_title.setAttribute('class','titleData');
                 p_title.textContent=blog[i].title;
                 let p_cmt = document.createElement('p');
                 p_cmt.setAttribute('class','commentdata');
                 p_cmt.textContent=blog[i].comment;
                 li.append(h, p_title, p_cmt);



    }
  }
    
  