let content
function selectCell(button){
	event.stopPropagation();
	removeselection()
	const cellClass = button.classList.contains('text') ? 'text' :
                      button.classList.contains('img') ? 'img' :
                      button.classList.contains('btn') ? 'btn' :
                      button.classList.contains('dividerClass') ? 'dividerClass' :
                      button.classList.contains('html-code') ? 'html-code' :
                      button.classList.contains('multitable') ? 'multitable' :
                      button.classList.contains('dividerClass') ? 'dividerClass' :
                      button.classList.contains('spacer') ? 'spacer' :
                      button.classList.contains('avatar') ? 'avatar' :


                      '';
  	
  	console.log("SELCET>", button.className)
  	updatesidebar(cellClass, button)

  	document.querySelectorAll('.content').forEach(tab => {
	    
	    if (tab.classList.contains('active')) {
	        
	        tab.classList.remove('active');
	    }

	button.parentElement.classList.add('active')
	});
  	
  	document.querySelectorAll('.delete').forEach(tab => {
	    
	    if (tab.classList.contains('Delactive')) {
	    	
	        tab.classList.remove('Delactive');
	    }

	//console.log("del",button.parentElement.querySelector('.delete'))
	//button.parentElement.querySelector('div.delete').classList.add('Delactive')
		
	 
	//button.parentElement.querySelector('.delete').classList.add('Delactive')
	
	});
	const contentActiveParent = button.closest('.content.active');
  
	  // If we found the parent, select the delete div that's its direct child
	  if (contentActiveParent) {
	    const deleteDiv = contentActiveParent.querySelector(':scope > .delete');
	    if (deleteDiv) {
	      deleteDiv.classList.add('Delactive');
	    }
	  }


    


}

function removeselection(){
	let activeElements = document.querySelectorAll('.active');
		activeElements.forEach(element => {
		    element.classList.remove('active');
		});

}
function updatesidebar(cellClass, button){
	var inspectTab = document.getElementById('Inspect')
	var stylesTab = document.getElementById('Styles')

	if(cellClass=='multitable'){
		content = button
		openTab('Styles')

		document.getElementById('table-bg-color').value = rgbToHex(window.getComputedStyle(button).backgroundColor)

	}else if(cellClass=='text'){
		openTab('Inspect')
		content = button
		
		inspectTab.innerHTML = ''
		inspectTab.innerHTML = textContent

		document.getElementById('cell-text').value = button.textContent.trim();
		document.getElementById('font-size').value = parseInt(window.getComputedStyle(button).fontSize);
		document.getElementById('textsize').innerHTML = window.getComputedStyle(button).fontSize
		//Add font-style
		var computedStyle = window.getComputedStyle(content);

		document.getElementById('selectedfont').value = window.getComputedStyle(content).fontFamily
    	
		document.getElementById('paddingtop').value = parseInt(computedStyle.paddingTop)
		document.getElementById('paddingleft').value = parseInt(computedStyle.paddingLeft)
		document.getElementById('paddingright').value = parseInt(computedStyle.paddingRight)
		document.getElementById('paddingbottom').value = parseInt(computedStyle.paddingBottom)

		document.getElementById('cell-color').value = rgbToHex(window.getComputedStyle(button).color);
        document.getElementById('cell-bg-color').value = rgbToHex(window.getComputedStyle(button.parentElement).backgroundColor);



	}else if(cellClass=='img'){
		openTab('Inspect')
		content = button

		inspectTab.innerHTML = ''
		inspectTab.innerHTML = ImgContent;

		document.getElementById('image-url').value = content.querySelector('img').src
		document.getElementById('image-width').value = parseInt(window.getComputedStyle(content.querySelector('img')).width)
		document.getElementById('imgwidth').innerHTML = parseInt(window.getComputedStyle(content.querySelector('img')).width) + 'px'

		document.getElementById('image-height').value = parseInt(window.getComputedStyle(content.querySelector('img')).width)
		document.getElementById('imgheight').innerHTML = parseInt(window.getComputedStyle(content.querySelector('img')).height) + 'px'

		

		var computedStyle = window.getComputedStyle(content);
    	
		document.getElementById('paddingtop').value = parseInt(computedStyle.paddingTop)
		document.getElementById('paddingleft').value = parseInt(computedStyle.paddingLeft)
		document.getElementById('paddingright').value = parseInt(computedStyle.paddingRight)
		document.getElementById('paddingbottom').value = parseInt(computedStyle.paddingBottom)
		

	}else if(cellClass=='btn'){
		openTab('Inspect')
		content = button

		inspectTab.innerHTML = ''
		inspectTab.innerHTML = buttonContent;

		document.getElementById('button-text').value = content.querySelector('button').innerText;
		try{
			document.getElementById('button-url').value = content.querySelector('a').getAttribute('href');	
		}catch (error){
			console.log(error)
		}
		
		
		document.getElementById('button-width').value = parseInt(window.getComputedStyle(content.querySelector('button')).width)
		document.getElementById('btnwidth').innerHTML = parseInt(window.getComputedStyle(content.querySelector('button')).width) + 'px'

		document.getElementById('button-width').value = parseInt(window.getComputedStyle(content.querySelector('button')).height)
        document.getElementById('btnheight').innerHTML = parseInt(window.getComputedStyle(content.querySelector('button')).height) + 'px'


        document.getElementById('button-border-radius').value = parseInt(window.getComputedStyle(content.querySelector('button')).borderRadius)
        document.getElementById('btnborderradius').innerHTML = parseInt(window.getComputedStyle(content.querySelector('button')).borderRadius) + 'px'

        document.getElementById('button-font-size').value = parseInt(window.getComputedStyle(content.querySelector('button')).fontSize)
        document.getElementById('buttontextsize').innerHTML = parseInt(window.getComputedStyle(content.querySelector('button')).fontSize) + 'px'

        document.getElementById('cell-color').value = rgbToHex(window.getComputedStyle(content.querySelector('button')).color)
        document.getElementById('cell-bg-color').value = rgbToHex(window.getComputedStyle(button.parentElement).backgroundColor);

        document.getElementById('button-color').value = rgbToHex(window.getComputedStyle(content.querySelector('button')).backgroundColor)
        
		document.getElementById('selectedfont').value = window.getComputedStyle(content.querySelector('button')).fontFamily 

		document.getElementById('bordercolor').value = rgbToHex(window.getComputedStyle(content.querySelector('button')).borderColor)
		document.getElementById('bordersize').value = parseInt(window.getComputedStyle(content.querySelector('button')).borderWidth)
		document.getElementById('Sbordersize').innerHTML =  parseInt(window.getComputedStyle(content.querySelector('button')).borderWidth) + 'px'

		console.log("WID", rgbToHex(window.getComputedStyle(content.querySelector('button')).color))

		var computedStyle = window.getComputedStyle(content);
    	
		document.getElementById('paddingtop').value = parseInt(computedStyle.paddingTop)
		document.getElementById('paddingleft').value = parseInt(computedStyle.paddingLeft)
		document.getElementById('paddingright').value = parseInt(computedStyle.paddingRight)
		document.getElementById('paddingbottom').value = parseInt(computedStyle.paddingBottom)

	}else if(cellClass=='dividerClass'){
		openTab('Inspect')
		content = button
		inspectTab.innerHTML = ''
		inspectTab.innerHTML = dividerContent;

		document.getElementById('button-width').value = parseInt(window.getComputedStyle(content.querySelector('hr')).width)
		document.getElementById('buttonWidth').innerHTML = parseInt(window.getComputedStyle(content.querySelector('hr')).width) + 'px'

		document.getElementById('button-height').value = parseInt(window.getComputedStyle(content.querySelector('hr')).borderTopWidth)
        document.getElementById('buttonHeight').innerHTML = parseInt(window.getComputedStyle(content.querySelector('hr')).borderTopWidth) + 'px'

        document.getElementById('button-color').value = rgbToHex(window.getComputedStyle(content.querySelector('hr')).borderTopColor)
        document.getElementById('cell-bg-color').value = rgbToHex(window.getComputedStyle(button.parentElement).backgroundColor);
        

        var computedStyle = window.getComputedStyle(content);
    	
		document.getElementById('paddingtop').value = parseInt(computedStyle.paddingTop)
		document.getElementById('paddingleft').value = parseInt(computedStyle.paddingLeft)
		document.getElementById('paddingright').value = parseInt(computedStyle.paddingRight)
		document.getElementById('paddingbottom').value = parseInt(computedStyle.paddingBottom)


	}else if(cellClass=='spacer'){
		openTab('Inspect')
		content = button
		inspectTab.innerHTML = ''
		inspectTab.innerHTML = SpacerContent;

		document.getElementById('spacer-height').value = parseInt(window.getComputedStyle(content.querySelector('.spacerdiv')).height)
		document.getElementById('spacehight').textContent = parseInt(window.getComputedStyle(content.querySelector('.spacerdiv')).height) + 'px'
		document.getElementById('cell-bg-color').value = rgbToHex(window.getComputedStyle(button.parentElement).backgroundColor);
	
	}else if(cellClass=='html-code'){
		openTab('Inspect')
		content = button
		inspectTab.innerHTML = ''
		inspectTab.innerHTML = htmlCodeContent;

		const htmlcode = content.querySelector('strong');

		document.getElementById('cell-text').value = htmlcode.outerHTML.trim();
		document.getElementById('font-size').value = parseInt(window.getComputedStyle(button).fontSize);
		document.getElementById('textsize').innerHTML = window.getComputedStyle(button).fontSize
		//Add font-style
		var computedStyle = window.getComputedStyle(content);

		
    	
		document.getElementById('paddingtop').value = parseInt(computedStyle.paddingTop)
		document.getElementById('paddingleft').value = parseInt(computedStyle.paddingLeft)
		document.getElementById('paddingright').value = parseInt(computedStyle.paddingRight)
		document.getElementById('paddingbottom').value = parseInt(computedStyle.paddingBottom)

		document.getElementById('cell-color').value = rgbToHex(window.getComputedStyle(button).color);
        document.getElementById('cell-bg-color').value = rgbToHex(window.getComputedStyle(button.parentElement).backgroundColor);

	}else if(cellClass=='avatar'){
		openTab('Inspect')
		content = button

		inspectTab.innerHTML = ''
		inspectTab.innerHTML = avatarContent


		document.getElementById('image-url').value = content.querySelector('img').src
		document.getElementById('image-width').value = parseInt(window.getComputedStyle(content.querySelector('img')).width)
		document.getElementById('imgwidth').innerHTML = parseInt(window.getComputedStyle(content.querySelector('img')).width) + 'px'
		document.getElementById('cell-bg-color').value = rgbToHex(window.getComputedStyle(button.parentElement).backgroundColor);
		//document.getElementById('image-height').value = parseInt(window.getComputedStyle(content.querySelector('img')).width)
		//document.getElementById('imgheight').innerHTML = parseInt(window.getComputedStyle(content.querySelector('img')).height) + 'px'

		

		var computedStyle = window.getComputedStyle(content);
    	
		document.getElementById('paddingtop').value = parseInt(computedStyle.paddingTop)
		document.getElementById('paddingleft').value = parseInt(computedStyle.paddingLeft)
		document.getElementById('paddingright').value = parseInt(computedStyle.paddingRight)
		document.getElementById('paddingbottom').value = parseInt(computedStyle.paddingBottom)

	}
		
}


function rgbToHex(rgb) {
    const result = rgb.match(/\d+/g).map(function(x) {
        return parseInt(x).toString(16).padStart(2, '0');
    });
    return `#${result.join('')}`;
}
function changetableBackgroundColor() {
    const color = document.getElementById('table-bg-color').value;
    	console.log(content)
    	selectedCell = content
    if (selectedCell) {
        selectedCell.style.backgroundColor = color;
    }
}

function canvasRadius() {
    const amt = document.getElementById('table-border-radius').value;
    const canvas = document.getElementById('emailtable')
    	
        canvas.style.borderRadius = amt + 'px';
    	
}