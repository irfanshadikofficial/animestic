//active episode system
var header = document.getElementById("eps-no");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
//episode system
let notice = ' | [Use Ads Blocker Extension for better experience]'
function eps1(){
    document.getElementById('player').src = 'https://goload.io/streaming.php?id=MTcxOTA0&title=Cike+Wu+Liuqi+%28Dub%29+Episode+1';
    document.getElementById('epsno').innerHTML = 'Episode 1' + notice;
}
function eps2(){
    document.getElementById('player').src = 'https://goload.io/streaming.php?id=MTcxOTA1&title=Cike+Wu+Liuqi+%28Dub%29+Episode+2';
    document.getElementById('epsno').innerHTML = 'Episode 2' + notice;
}
function eps3(){
    document.getElementById('player').src = 'https://goload.io/streaming.php?id=MTcxOTA2&title=Cike+Wu+Liuqi+%28Dub%29+Episode+3';
    document.getElementById('epsno').innerHTML = 'Episode 3' + notice;
}
function eps4(){
    document.getElementById('player').src = 'https://goload.io/streaming.php?id=MTcxOTA3&title=Cike+Wu+Liuqi+%28Dub%29+Episode+4';
    document.getElementById('epsno').innerHTML = 'Episode 4' + notice;
}
function eps5(){
    document.getElementById('player').src = 'https://goload.io/streaming.php?id=MTcxOTA4&title=Cike+Wu+Liuqi+%28Dub%29+Episode+5';
    document.getElementById('epsno').innerHTML = 'Episode 5' + notice;
}
function eps6(){
    document.getElementById('player').src = 'https://goload.io/streaming.php?id=MTcxOTA5&title=Cike+Wu+Liuqi+%28Dub%29+Episode+6';
    document.getElementById('epsno').innerHTML = 'Episode 6' + notice;
}
function eps7(){
    document.getElementById('player').src = 'https://goload.io/streaming.php?id=MTcxOTEw&title=Cike+Wu+Liuqi+%28Dub%29+Episode+7';
    document.getElementById('epsno').innerHTML = 'Episode 7' + notice;
}
function eps8(){
    document.getElementById('player').src = 'https://goload.io/streaming.php?id=MTcxOTEx&title=Cike+Wu+Liuqi+%28Dub%29+Episode+8';
    document.getElementById('epsno').innerHTML = 'Episode 8' + notice;
}
function eps9(){
    document.getElementById('player').src = 'https://goload.io/streaming.php?id=MTcxOTEy&title=Cike+Wu+Liuqi+%28Dub%29+Episode+9';
    document.getElementById('epsno').innerHTML = 'Episode 9' + notice;
}
function eps10(){
    document.getElementById('player').src = 'https://goload.io/streaming.php?id=MTcxOTEz&title=Cike+Wu+Liuqi+%28Dub%29+Episode+10';
    document.getElementById('epsno').innerHTML = 'Episode 10' + notice;
}

//disqus

    var disqus_config = function () {
    this.page.url = scissorseven.html;  // Replace PAGE_URL with your page's canonical URL variable
    this.page.identifier = 'Scissor Seven (Dub)'; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    };
    
    (function() { // DON'T EDIT BELOW THIS LINE
        var d = document, s = d.createElement('script');
        s.src = 'https://animestic.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();

//disqus_thread
document.getElementById('disq').addEventListener('click', () => {
    document.getElementById('disq').style.display = 'none';
    document.getElementById('disqus_thread').style.display = 'block';
})
//disqus finish