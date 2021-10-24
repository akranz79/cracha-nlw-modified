const LinksSocialMedia = {
  github: 'akranz79',
  linkedin: 'in/akranz',
  facebook: 'ahkranz79',
  instagram: 'henrytech7',
  twitter: 'Alexand20297572',
  youtube: 'channel/UC1WRr5kwU2lSwCu6HMLlCpg'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
      userTitle.textContent = data.name
    })
}

getGitHubProfileInfos()
