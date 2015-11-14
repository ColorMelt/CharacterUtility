var players = [];
var Player = function(id){
		var ele = $(
			'<div class="thumbnail">'
			+
			'<form class="forms" action="demo_form.asp">'
			+
			'<input class="charform" type="text"  placeholder="Character name"><br>'
			+
			'<input id="'
			+
			200+id
			+
			'" class="initform" type="text" placeholder="Initiative score"><br>'
			+
			'</form>'
			+
			'<div class="result" id="'
			+id
			+
			'">result</div>'
			+
			'<button id="delete" class="deletebutton" type="input">Delete</button>'
			+
			'</div>'
			
			);
		//ele.attr({
		//	id: this.id,
		//});
		//ele.addClass("thumbnail");
		$(".characters").append(ele);	
};



function main() {
	var charnum = 0;
	$("#addChar").click(function() 
	{
		players.push(
			new Player(charnum)
			);
		charnum++;
	}); //add char

	$("#roll").click(function() 
	{

		//var stats = document.getElementsByClassName("initform").innerHTML;
		var all = document.getElementsByClassName("result");
		//var inits = [];

		for (var i=0, max=all.length; i < max; i++) 
		{
			var stats = document.getElementById(2000+i).value;
			//console.log(stats);
			var init = Number(stats) + Math.floor(Math.random() * 20);
			document.getElementById(i).innerHTML = init;
			//$('#'+i).append(init);
	     	//console.log(init);
		}
	//blocks.forEach(function(i) { i.drawblock(ctx);})	
	});

	$(".thumbnail .deletebutton").click(function(event) {
		alert("message");
	});
	
	/*
	$(".thumbnail").click(function() 
	{
		//$(this.id).remove();
		//alert(this.id);
		
		//charnum--;
	});
	*/

}; // main