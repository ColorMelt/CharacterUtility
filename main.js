var players = [];
var Player = function(id){
		var ele = $(
			'<div class="thumbnail">'
			+
			'<form action="demo_form.asp">'
			+
			'<input class="formstuff" type="text"  placeholder="Character name"><br>'
			+
			'<input class="formstuff" type="text" placeholder="Initiative score"><br>'
			+
			'</form>'
			+
			'<div class="result" id="'
			+id
			+
			'">result</div>'
			);
		ele.attr({
			id: this.id,
		});
		ele.addClass("thumbnail");
		$("#charform").append(ele);

		this.roll = function(id)
		{
			
			

			
		};
};



function main() {
	var charnum = 0;
	$("#addChar").click(function() {
	players.push(
		new Player(charnum)

		);
	charnum++;

	}); //add char




	$("#roll").click(function() {



	var all = document.getElementsByClassName("result");
	

	for (var i=0, max=all.length; i < max; i++) 
	{
		var init = 1 + Math.floor(Math.random() * 20);
		document.getElementById(i).innerHTML = init;
		//$('#'+i).append(init);
     	console.log(init);
		

	}


	//blocks.forEach(function(i) { i.drawblock(ctx);})



  		
});


};