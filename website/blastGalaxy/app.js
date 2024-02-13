  //--------------------------------------Sticky nav
  window.onscroll = function() {sticknav()};
  var nav = document.getElementById("taskbar");
  var sticky = nav.offsetTop;
  function sticknav() {
    if (window.scrollY > sticky) {
      nav.classList.add("sticky");
    } else {
      nav.classList.remove("sticky");
    }
  }
  //-------------------------------------------------progressbar
   document.addEventListener('DOMContentLoaded', function() {
      const progressBar = document.createElement('div');
      progressBar.classList.add('progress-bar');
      document.body.appendChild(progressBar);
    
      window.addEventListener('scroll', updateProgressBar);
    
      function updateProgressBar() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercentage + '%';
      }
    });
  //-------------------------------------------------slideshow
  
    