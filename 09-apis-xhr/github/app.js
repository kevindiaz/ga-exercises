// $.ajax('https://api.github.com/users/kevindiaz', function(data){
//   console.log(data);
// });

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if(this.readyState === XMLHttpRequest.DONE){
    if(this.status === 200) {
      console.log('success');
    } else {
      console.log('error');
    }
    console.log(JSON.parse(this.responseText));
  }
};

xhr.open('GET', 'http(s)://api.coindesk.com/v1/bpi/currentprice.json');
xhr.send();
