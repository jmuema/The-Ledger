//navbar opacity when scrolling
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#nav-bar').style.opacity = 0.9;
  }else{
    document.querySelector('#nav-bar').style.opacity = 1;
  }

}); 