$.get(loc_records, function(data) {
  var letter = "A";
  console.log(data.records);
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
	  
	  //setup each location
	  var html = "<div onclick=\"location.href='detail.html?id=" + loc.id + "';\" style=\"cursor: pointer;\">";
	  html += `<li class="description">${loc.fields["Name"]} <br>Location: ${loc.fields["Neighborhood"]}</li>`;
	  //html += "<img src=\"" + loc.fields["Picture of Landmark"]["0"].url + "\" width=\"auto\" height=\"400\" alt=\"picture\">";
	  html += "</div>";
	  $(".locations").append(html);
	 
  });
});