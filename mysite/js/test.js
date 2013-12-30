	$(document).ready(function(){
	$.getJSON("http://localhost/json/test.json", function(data) {
			$("tbody").html("");//Çå¿ÕÄÚÈÝ
			$.each(data.comments, function(i, item) {
				$("tbody").append(
						"<tr><td>"+ item.Image+"</td>"+ 
						"<td>"+ item.Mode +"</td>"+
						"<td>"+ item.Details +"</td>"+
						"<td>"+ item.Status +"</td>"+
						"<td>"+ item.other +"</td></tr>"+"<div>hello</div>");
			});
			});
});