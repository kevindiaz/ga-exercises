$(document).ready(function () {
  var $loginBtn = $('#login');
  var $signInView = $('.sign-in-view');
  var $imageResultsView = $('.image-results-view');

  // initialize the SDK with our API key
 _500px.init({
   sdk_key: '8626d07001b7482e7707a6248a3b28bcaf22fd23'
 });

 _500px.getAuthorizationStatus(function (status) {
   if (status == 'authorized') {
     load()
   }
 });

 $loginBtn.on('click', function() {
   _500px.login(function (status) {
     if(status == 'authorized') {
       load();
     } else {
       // not authorized
     }
   });
 });

 function load() {

   $signInView.hide();
   $imageResultsView.show();

   if(navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position) {
       var radius = 50;
       var geo = position.coords.latitude +
                 ',' +
                 position.coords.longitude +
                 ',' +
                 radius +
                 'mi';

       console.log(geo);

       _500px.api('/photos/search', {geo: geo}, function(response) {

         var photos = response.data.photos;

         for(var i = 0; i < photos.length; i++) {
           var url = photos[i].image_url
           $('.images').append('')
         }

       });



     });
   } else {
     console.warn('browser doesnt support geolocation');
   }
 }
});
