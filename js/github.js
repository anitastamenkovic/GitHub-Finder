class GitHub {
  constructor() {
    this.client_id = "2a00fbdaf4ed6fec3cf0";
    this.client_secret = "78c2ac6b4f44d30c5651abb016f50f99b213555e";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileURL = `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`;

    const reposURL = `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`;

    const profileResponse = await fetch(profileURL);
    const repoResponse = await fetch(reposURL);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
