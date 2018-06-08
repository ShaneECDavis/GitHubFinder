// init github
const github = new Github; 
// init UI
const ui = new UI; 

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
          ui.showProfile(data);
        } 
      }) 
  } else {
    // Clear the profile

  }
   
});