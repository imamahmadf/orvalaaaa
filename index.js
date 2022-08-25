const navbar= document.getElementsByTagName('nav') [0];
const navbarLink = document.getElementById("navLink") 
window.addEventListener('scroll', function() {
console.log(window.scrollY);
if (window.scrollY > 1) {
    navbar.classList.replace('bg-transparent', 'nav-color');
    navbar.classList.replace("navbar-dark", "navbar-light")
} else if (this.window.scrollY <= 0) {
    navbar.classList.replace('nav-color', 'bg-transparent')
    navbar.classList.replace("navbar-light", "navbar-dark")
}
});



const belajarJs = () => {

    const tes = document.getElementById("belajar")

    document.getElementById("output").innerHTML= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, ducimus."
    
}




const fnRender = (val) => {
    
    let visikon= `
    <ul>
    <li>Provide advanced, in-depth and accurate analysis; </li>
    <li>Provide advisory services to optimize business and maximize profit;</li>
    <li>Provide the best talents in the field of analysis and advisory through accelerated, innovative and inclusive learning programs.</li>
  </ul>`

  let misikon = `<p>Become an Indonesian leading firm that provides creative solutions in the field of advisory and analysis</p>`
     
    if (val===1) {
        //utk ambil render
    document.getElementById('render').innerHTML = misikon
    } else {
        document.getElementById('render').innerHTML = visikon
    }
}

const visi = (val) => {
    
    fnRender(val)
}


const misi = (val) => {
   
    fnRender(val)
}