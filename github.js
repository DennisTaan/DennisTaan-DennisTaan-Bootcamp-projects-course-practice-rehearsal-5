 class Github{
  constructor(){
    this.client_id="a846708fe153122cff53";
    this.client_secret="9c4a8e4136650a80ec0e9dcf0ba31f78f7aa521a";
    this.repos_count = 5;
    this.repos_sort = "created:asc"
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos
    }
  }
}
 