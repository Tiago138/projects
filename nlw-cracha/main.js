const LinksSocialMedia = {
  github: "tiago138",
  youtube: "",
  facebook: "",
  instagram: "",
  twitter: "",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      UserImage.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

getGitHubProfileInfos();

//const socialLinks = document.getElementById("socialLinks");
//function changeSocialMediaLinks() {
//  for (let i = 1; i < socialLinks.children.length; i++) {
//    const social = socialLinks.children[i].getAttribute("class");
//
//    socialLinks.children[
//      i
//    ].children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`;
//  }
//}
