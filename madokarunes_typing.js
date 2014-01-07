function startMRTyping(fontsize, words, trial){
	(new (function(){
		var div   = $("<div>").css("font-size", fontsize).appendTo("body");
		var input = $("<input>").appendTo("body");
		var miss_count = 0;
		var init = this.init = function(){
			w = words[Math.floor(words.length * Math.random())];
			switch(Math.floor(Math.random() * 3)){
			case 0:
				div.css("font-family", "MadokaRunes");
				div.text(w.toLowerCase());
				break;
			case 1:
				div.css("font-family", "MadokaRunes");
				div.text(w.toUpperCase());
				break;
			case 2:
				div.css("font-family", "MadokaMusical");
				div.text(w.toLowerCase());
				break;
			}
			miss_count = 0;
			input.val("");
			input.focus();
		}
		input.keydown(function(e){
			var keycode = (e.which ? e.which : event.keyCode);
			if(keycode == 13){
				if(input.val().toLowerCase() == div.text().toLowerCase()){
					init();
				}else if(++miss_count >= trial){
					alert(div.text());
					init();
				}
			}
		});
	})).init();
}
