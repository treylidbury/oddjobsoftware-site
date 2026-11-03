document.querySelectorAll('[data-copy]').forEach(function(btn){
  btn.addEventListener('click',function(){
    var el=document.getElementById(btn.getAttribute('data-copy'));
    var text=el.textContent;
    function done(){btn.textContent='Copied';setTimeout(function(){btn.textContent='Copy email'},1800)}
    function fallback(){var r=document.createRange();r.selectNodeContents(el);var s=window.getSelection();s.removeAllRanges();s.addRange(r)}
    try{navigator.clipboard.writeText(text).then(done,fallback)}catch(e){fallback()}
  });
});
