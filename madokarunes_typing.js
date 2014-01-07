function startMRTyping(fonts, fontsize, words, trial = 3){
	(new (function(){
		var div   = $("<div>").css("font-size", fontsize).appendTo("body");
		var input = $("<input>").appendTo("body");
		var miss_count = 0;
		var init = this.init = function(){
			div.text(words[Math.floor(words.length * Math.random())]);
			div.css("font-family", fonts[Math.floor(fonts.length * Math.random())]);
			miss_count = 0;
			input.val("");
			input.focus();
		}
		input.keydown(function(e){
			var keycode = (e.which ? e.which : event.keyCode);
			if(keycode == 13){
				if(input.val() == div.text()){
					init();
				}else if(++miss_count >= trial){
					alert(div.text());
					init();
				}
			}
		});
	})).init();
}
