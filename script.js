//Globals.
var api_key = "keyiTYSW80CCENwb2";
var loc_records= "https://api.airtable.com/v0/appZBFzcRUVvRqp8i/Landmarks?view=Main%20View&api_key=" + api_key;

$.get(loc_records, function(data) {
  var letter = "A";
  $(data.records).each(function(i, loc){  
    
    //Append header letters per each section, 0th , i'th , and final element
    if(i === 0) {
      letter =  data.records[0].fields["Name"][0].toUpperCase();
      $(".locations").append("<h1>" + letter + "</h1>");
    }
    
    if(loc.fields["Name"][0].toUpperCase() === letter && i > 0) {
       if(letter !== data.records[i-1].fields["Name"][0].toUpperCase()) {
        $(".locations").append("<h1>" + letter + "</h1>");
      }
      
		  if(data.records[i+1]) {
		    letter = data.records[i+1].fields["Name"][0].toUpperCase();
		  }
	  }
  
    $(".locations").append(`<li class="description">${loc.fields["Name"]} <br>Location: ${loc.fields["Neighborhood"]}</li>`);
    //$(".locations").append("<img src=\"" + loc.fields["Picture of Landmark"]["0"].url + "\" width=\"auto\" height=\"400\" alt=\"picture\">");
    
  });
});