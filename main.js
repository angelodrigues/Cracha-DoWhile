// Treinando variaveis: let , const e object

//Exemplo de objeto :
// const use = {
//  name: 'Angelo Barcelos'
//  phone: 12112121
//  accept: true
// }
//
// como fazer uma chamada de dados dentro desse objct:
//
// alert(object.(variavel))
// alert(user.name)       <-- Vai puxar a variavel name
//for (let i = 0; i <= 10; i++) {
//    alert(i)
//  }
// i = i + 1
// i++
const linksSocialMedia = {
  github: 'angelodrigues',
  youtube: 'UCXlAZITZzg_W1VIqj5ug3Pg',
  facebook: 'angelo.rodrigues.9216',
  instagram: 'angelodrigues',
  twitter: 'barcelos_angelo'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
    })
}

// Arrow functions
// function nomedafuncao(argumentos){
//   code
// }
