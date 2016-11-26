//scripts
var api_key = "keyiTYSW80CCENwb2";
var art_records= "https://api.airtable.com/v0/appZBFzcRUVvRqp8i/Landmarks?api_key=" + api_key;

$.get(art_records, function(data) {
  $(data.records).each(function(i, loc){  
    console.log(loc);
    $(".locations").append(`<li>Name: ${loc.fields["Name/Description"]} <br> Where: ${loc.fields["Where"]}</li>`);
    $(".locations").append("<img src=\"" + loc.fields.Pic[0].url + "\" width=\"400\" height=\"400\" alt=\"picture\">");
  });
});