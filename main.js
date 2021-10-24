const LinksSocialMedia = {
  github: 'dalilabellorin',
  linkedin: 'in/dalila-bellorin-362a30112',
  facebook: 'dalila.bellorin.58',
  instagram: 'bellorindaza10',
  twitter: 'BellorinDalila'
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
