class Github{
    constructor(){
        this.client_id='17e86d8ce8ac746eb2f1'
        this.client_secret='dda0e366d67c67b31c79cbf8654b2711b7df5749'
        this.repos_count=5;
        this.repos_sort='created:asc';
    }

    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
       const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        

        const profile =await profileResponse.json();
        const repos = await repoResponse.json();

        return {profile,repos}
    }
}