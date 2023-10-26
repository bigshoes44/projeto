function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

     const img = document.querySelector("#profile img") 

    if(html.classList.contains('light')) {
        img.setAttribute('src', 'assets/avatarlight.png') && 
        ('alt' , 'Foto de Larissa sorrindo usando óculos escuro e blusa preta. Palhas de coqueiro ao fundo')
    //    html.classList.remove('light')
              
     } else {

        img.setAttribute('src', 'assets/avatar.png') 
     }
    //        html.classList.add('light')
    //    }
   
    
}