const username = document.getElementById('usernameInput');
const title = document.getElementById('titleInput');
const comment = document.getElementById('CmmtInput');
const sumbitBtn =  document.getElementById("submit");
const form = document.getElementById('myForm');
//const errorMessagesDiv = document.getElementById('errorMessages');
let isInputsValid = false;

var base_url = window.location.origin;
form.addEventListener("submit",(event) => { 
  event.preventDefault();
    validateInputs();
    validateComment();
    validateTitle();
    if(isInputsValid){
      saveBlogData();
    }
});

const setError = (element, message)=> {
  const inputControl = element.parentElement;
  const errorMessagesDiv =inputControl.querySelector('.errorMessages');
  errorMessagesDiv.innerText = message;
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorMessagesDiv =inputControl.querySelector('.errorMessages');
  errorMessagesDiv.innerText = '';
}

const validateInputs =()=> {
  const usernameInp = username.value.trim();
  if(usernameInp === '' || usernameInp == null){
    setError(username, 'Username is required');
    isInputsValid = false;
  }else {
    isInputsValid = true;
    setSuccess(username);

  } 
  
 
  
  
}

const validateTitle = () =>{
  const titleInp = title.value.trim();

  if(titleInp === '' || titleInp == null){
    setError(title, 'Title is required');
    isInputsValid = false;
  }else {
    isInputsValid = true;

    setSuccess(title);
  }
}

const validateComment = () => {
  const commentInp = comment.value.trim();

  if(commentInp === '' || commentInp == null){
    setError(comment, 'Comment is required');
    isInputsValid = false;
  }else {
    isInputsValid = true;

    setSuccess(comment);
  }
}

let arrData = [];
function saveBlogData() {
    
    const blogData = {
        username: username.value.trim(),
        title: title.value.trim(),
        comment: comment.value.trim(),
      };
      
      if(localStorage.getItem('blogData') ){
        arrData = JSON.parse(localStorage.getItem('blogData'));
        arrData.push(blogData);
      }else {
        arrData.push(blogData)
      }
      const currentUrl = window.location.href;
      localStorage.setItem('previous', currentUrl);
      
      localStorage.setItem('blogData', JSON.stringify(arrData));
      window.location.href = base_url+'./Personal_Blog/blog.html';
    }
      
