$.urlParam = function(name) {
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	if (results) {
		return results[1] || 0;
	}
	return null;
}

var rec_address = "https://api.airtable.com/v0/appZBFzcRUVvRqp8i/Landmarks/" + decodeURIComponent($.urlParam('id')) + "?api_key=" + airtable_key;

$.get(rec_address, function(data) {
  console.log(data);	
	
  var header_name = "<h1>";
  header_name += data.fields.Name;
  header_name += "</h1>";
  $(".container").append(header_name);
  
  var loc_img = "<img src=\"" + data.fields["Picture of Landmark"]["0"].url + "\" width=\"auto\" height=\"400\" alt=\"picture\">";
  $(".container").append(loc_img);
  //console.log(html);
  var html = "<p>";
  html += data.fields["Description"];
  html += "</p>";
  $(".container").append(html);
});