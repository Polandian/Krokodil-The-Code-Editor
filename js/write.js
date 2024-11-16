document.addEventListener('keydown', function(event){
	var cursorX = parseInt(window.getComputedStyle(document.getElementById("editorCursor")).marginLeft)
	var cursorY = parseInt(window.getComputedStyle(document.getElementById("editorCursor")).marginTop)
	var lineAmount = document.getElementById("lineNumber").childElementCount - 1
	var currentLine = cursorY / 31
	var key = event.key
	var decrepatedKeys = ["Control", "Alt", "AltGraph", "CapsLock", "Tab", "Escape", 
		"F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", 
		"ScrollLock", "Pause", "Insert", "Delete", "Backspace", "PageUp", "PageDown",
		"NumLock", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Enter",
		"Insert", "End", "Clear", "Meta", "ContextMenu", " ", "Shift", "Home"]
	var helpKeys = ['"', "'", "(", "[", "{", "<",]
	var helpKeysHelp = ['"', "'", ")", "]", "}", ">"]

	//TODO TAB DETECTION
	//TODO ADD REMOVING SPECIAL CHARACTERS
	//TODO LAST ACTION
	//BTW  JAVASCRIPT DOESN'T SEE THE SPANS AS OTHER ELEMENTS, SO ITS GONNA BE PRETTY EZZ!!! IM SO HAPPY OMG
	//TODO ALSO THIS LOOKS PRETTY COOL FOR LINES WITH ERRORS: document.querySelectorAll(".lineNumber")[x].style.background = "rgb(245, 15, 84)";
	//TODO MAKE OWN SCROLLBAR 'CAUSE WHY NOT
	//TODO MOVING UP AND DOWN WITH ARROW KEY
	//TODO SCROLL ON OVERFLOW
	//TODO ALSO CHECK OUT split() FOR SYNTAX HIGHLIGHTHING
	//TODO PERFORMANCE ISSUES ON RELATIVE LINES WHEN OPENED A BIG FILE
	/*
	Solution 1: make a limit (like 50 or 100)
	Solution 2: don't render other parts until they are shown (overflow thing)(display: none)
	*/
	//TODO SAVE FILE ON ORIGINAL DESTINATION

	if(!decrepatedKeys.includes(key)){
		if(event.ctrlKey && event.shiftKey && event.keyCode == 75) return false
		if(event.ctrlKey && event.keyCode == 83) return false
		if(event.ctrlKey && event.keyCode == 65) return false
		if(event.ctrlKey && event.keyCode == 79) return false

		var bool = event.getModifierState("CapsLock") //CAPSLOCK DETECTOR
		
		cursorX += 9
		setCaretPos(cursorX, cursorY)
		if(!event.shiftKey && bool == false){
			var _0x0000007;
			var _0x0000008;

			var temp = document.querySelectorAll(".textEditorLine")[currentLine].innerText

			if(helpKeys.includes(key)) _0x0000007 = 2 
			else _0x0000007 = 1
			
			if(_0x0000007 == 1) {
				var src = temp.slice(0, cursorX / 9 - 1) + key.toLowerCase() + temp.slice(cursorX / 9 - 1) 		
			}
			else if(_0x0000007 == 2){
				_0x0000008 = helpKeys.indexOf(key)
				var src = temp.slice(0, cursorX / 9 - 1) + key.toLowerCase() + helpKeysHelp[_0x0000008] + temp.slice(cursorX / 9 - 1) 
			}

			document.querySelectorAll(".textEditorLine")[currentLine].innerText = src
		}
		//if shift is being holded
		if(event.shiftKey || bool == true){
			var _0x0000007;
			var _0x0000008;

			var temp = document.querySelectorAll(".textEditorLine")[currentLine].innerText

			if(helpKeys.includes(key)) _0x0000007 = 2 
			else _0x0000007 = 1
			
			if(_0x0000007 == 1) {
				var src = temp.slice(0, cursorX / 9 - 1) + key + temp.slice(cursorX / 9 - 1) 		
			}
			else if(_0x0000007 == 2){
				_0x0000008 = helpKeys.indexOf(key)
				var src = temp.slice(0, cursorX / 9 - 1) + key + helpKeysHelp[_0x0000008] + temp.slice(cursorX / 9 - 1) 
			}

			document.querySelectorAll(".textEditorLine")[currentLine].innerText = src
		}		
	}
	else{
		if(key == " "){
			cursorX += 9
			setCaretPos(cursorX, cursorY)
			var temp = document.querySelectorAll(".textEditorLine")[currentLine].innerText
			var src = temp.slice(0, cursorX / 9 - 1) + "&nbsp" + temp.slice(cursorX / 9 - 1) 
			document.querySelectorAll(".textEditorLine")[currentLine].innerHTML = src
		}
		else if(key == "Tab"){
			cursorX += 36
			setCaretPos(cursorX, cursorY)
			var temp = document.querySelectorAll(".textEditorLine")[currentLine].innerText
			var src = temp.slice(0, cursorX / 9 - 4) + "&nbsp&nbsp&nbsp&nbsp" + temp.slice(cursorX / 9 - 4) 
			document.querySelectorAll(".textEditorLine")[currentLine].innerHTML = src
		}
	} 
	cursorX = undefined
	cursorY = undefined
	currentLine = undefined
	lineAmount = undefined
	key = undefined
	decrepatedKeys = undefined
	helpKeys = undefined
	helpkeysHelp = undefined
}, false)
