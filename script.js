function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
 // if(html.classList.contains('light')) {
 //   html.classListremove('light')
 // } else {
 //html.classList.add('light')
 // } 

//pegar a tag img
 const img = document.querySelector("#profile img")
 //substituir a imagem
if(html.classList.contains('light')) {
  //se tiver light mode, adcionar a imagem light 
 img.setAttribute('src', './assets/itoshiSae.png')
}else{
   // set tiver sem light mode , manter a imagem normal
   img.setAttribute('src', 'https://github.com/Temaker11.png')
  }
}

