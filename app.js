// init github
const github = new Github; 

// Search input
const searchUser = document.getElementById('searchUser');

// Search input Even Listener
searchUser.addEventListener('keyup', (e)=>{
  // Get input text
  const userText = e.target.value;

  if(userText !== ''){
    //Make http call
    github.getUser(userText)
      .then(data => {
        if(data.profile.message === 'Not Found'){
          // Show Alert

        } else {
          // Show Profile 
        }
        console.log(data); 
      }) 
  } else {
    // Clear the profile
    
  }
  e.preventDefault(); 
});