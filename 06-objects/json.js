var str = '{"data":{"type":"gif","id":"lBJVIL9t7iXte","url":"http:\/\/giphy.com\/gifs\/lBJVIL9t7iXte","image_original_url":"http:\/\/media0.giphy.com\/media\/lBJVIL9t7iXte\/giphy.gif","image_url":"http:\/\/media0.giphy.com\/media\/lBJVIL9t7iXte\/giphy.gif","image_mp4_url":"http:\/\/media0.giphy.com\/media\/lBJVIL9t7iXte\/giphy.mp4","image_frames":"51","image_width":"399","image_height":"211","fixed_height_downsampled_url":"http:\/\/media0.giphy.com\/media\/lBJVIL9t7iXte\/200_d.gif","fixed_height_downsampled_width":"378","fixed_height_downsampled_height":"200","fixed_width_downsampled_url":"http:\/\/media0.giphy.com\/media\/lBJVIL9t7iXte\/200w_d.gif","fixed_width_downsampled_width":"200","fixed_width_downsampled_height":"106","fixed_height_small_url":"http:\/\/media0.giphy.com\/media\/lBJVIL9t7iXte\/100.gif","fixed_height_small_still_url":"http:\/\/media0.giphy.com\/media\/lBJVIL9t7iXte\/100_s.gif","fixed_height_small_width":"189","fixed_height_small_height":"100","fixed_width_small_url":"http:\/\/media0.giphy.com\/media\/lBJVIL9t7iXte\/100w.gif","fixed_width_small_still_url":"http:\/\/media0.giphy.com\/media\/lBJVIL9t7iXte\/100w_s.gif","fixed_width_small_width":"100","fixed_width_small_height":"53","username":"","caption":""},"meta":{"status":200,"msg":"OK"}}';

console.log(str);
var giphyImg = JSON.parse(str);
console.log(giphyImg);
console.log('The type is ' + giphyImg.data.type);
console.log('The image url is ' + giphyImg.data.image_url);

var myGiphy = {
  type: giphyImg.data.type,
  image_url: giphyImg.data.image_url
};

console.log(myGiphy);
var myGiphyJSONString = JSON.stringify(myGiphy);
console.log(myGiphyJSONString);
