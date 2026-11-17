(function(){
  var b=document.querySelector('.menu-btn'),n=document.querySelector('.nav');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});}
  document.addEventListener('click',function(e){
    if(!e.target.closest('[data-copy]'))return;
    var t=document.getElementById('toast'),done=function(){t.classList.add('show');setTimeout(function(){t.classList.remove('show')},2200)};
    if(navigator.clipboard){navigator.clipboard.writeText('32priyadharshini@gmail.com').then(done)}else{done()}
  });
})();
