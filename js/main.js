
function bookingsFn(){
    //get movies  
    const movies = document.querySelectorAll('.movie');
    
    //get button
    const button = document.querySelectorAll('.book-tickets');

    //get nav-button
    const hamburgerIcon = document.querySelector('#nav-button');

    //get close-button
    const closeButton = document.querySelector('#close-button');

    //get overlay
    const overlay = document.querySelector('.overlay');






function  movieName(e) {

    const parent = e.target.parentElement.parentElement;

    //get title
    const movieTitle = parent.querySelector('h2').textContent;


   const moviePoster = window.getComputedStyle(parent).getPropertyValue('background-image').split(',').pop();
   const links = moviePoster.replace('url(','').replace(')','');

     
  

    localStorage.setItem('title', movieTitle);
    localStorage.setItem('poster', links)
  
   
}

//nav--fun

function navFn (e) {
    e.preventDefault();
    //get overlay

   
    //add class
    overlay.classList.add('visible')

    
    
}

function closeFn (e) {
    e.preventDefault();
    //get overlay

   

    //add class
    overlay.classList.remove('visible')

    
    
}







 movies.forEach(movie=>movie.classList.add('ani'));
 button.forEach(link=>link.addEventListener('click', movieName));
 hamburgerIcon.addEventListener('click', navFn);
 closeButton.addEventListener('click', closeFn);

}















//window event
window.addEventListener('DOMContentLoaded', bookingsFn);