class Github{
  constructor(){
    this.client_id = 'b9317567ce099f0d7834';
    this.client_secret = 'fce8ec2936c26b681538b29ba9bce6b838382022';
  }

  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    return {
      // thinking this is where my problem is 'changed profile'
      profile
       
    }
  }
}