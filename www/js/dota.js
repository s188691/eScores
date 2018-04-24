
var req = new XMLHttpRequest();
req.open('GET', 'http://www.mozilla.org/', false); 
req.send(null);
if(req.status == 200)
  dump(req.responseText);