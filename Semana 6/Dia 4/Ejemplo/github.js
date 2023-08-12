const imgProfile = document.querySelector("#img-profile");
const githubName = document.querySelector("#github-name");
const githubUser = document.querySelector("#github-username");
const githubBio = document.querySelector("#github-bio");
const githubJoined = document.querySelector("#github-joined");
const githubFollower = document.querySelector("#github-followers");
const githubFollowing = document.querySelector("#github-following");
const githubRepos = document.querySelector("#github-repos");

const githubSearch = document.querySelector("#github-search");
const githubAction = document.querySelector("#github-action-search");

githubSearch.addEventListener('keyup', (event) => {
    if (event.key === "Enter") {
        githubAction.click();
    }
})

githubAction.onclick = () => {
  const username = githubSearch.value;

//   githubSearch.value = "";

  if (username === "") {
    swal.fire("Error", "Debes de llenar los datos", "error");
    return;
  }

  obtenerDatosGithub(username);
};

const obtenerDatosGithub = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();
  console.log(response);
  console.log("Imprime el API: ", data);
  console.log(!!data.login);
  if (!!data.login) {
    setDataUser(data)
  }
};

const setDataUser=(data)=>{
    githubUser.innerText = data.login;
    githubName.innerText = data.name;
    githubBio.innerText = data.bio || 'has no bio';
    imgProfile.src = data.avatar_url;
    githubJoined.innerText = "Joined " + new Date(data.created_at).toLocaleDateString('es-ES');
    githubRepos.innerText = data.public_repos;
    githubFollower.innerText = data.followers;
    githubFollowing.innerText = data.following;
};
