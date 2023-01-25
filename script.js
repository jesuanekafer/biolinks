function  toggleMode () {
     const html= document.documentElement

     if(html.classList.contains('light')) {
        html.classList.remove('light')
     } else {
        html.classList.add('light')
     }

     //ou pode ser 
     //html.classList.toggle('light')
}