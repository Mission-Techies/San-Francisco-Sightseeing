//scripts
var api_key = "keyiTYSW80CCENwb2";
var art_records= "https://api.airtable.com/v0/appZBFzcRUVvRqp8i/Landmarks?api_key=" + api_key;

$.get(art_records, function(data) {
  $(data.records).each(function(i, mural){    
    $(".murals").append(`<li>Name: ${mural.fields["Name/Description"]} <br> Where: ${mural.fields["Where"]}</li>`);
    $(".murals").append("<img src=\"" + mural.fields.Pic[0].url + "\" width=\"400\" height=\"400\" alt=\"picture\">");
  });
});