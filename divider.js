dividerContent = 
		`	<div class='inspectContainer'>



            
            <div class='inspectBox slid'>
	            <label for="button-width">Width:</label>
	            <div>
	            	<input type="range" id="button-width" min="0" max="100" value="16"  oninput="changedividerwidth()">
		            <span id='buttonWidth' style='color: #4f4f4f96; font-size:24px'>0%</span>
	            </div>
            </div>

            <div class='inspectBox slid'>
	            <label for="button-height">Height:</label>
	            <div>
	            	<input type="range" id="button-height" min="0" max="72" value="16" oninput="changedividerheight()">
	            	
		            <span id='buttonHeight' style='color: #4f4f4f96; font-size:24px'>0px</span>
	            </div>
            </div>

            
            <div class='inspectBox'>
	            <label for="button-color">Divider Color:</label>
	            <input type="color"  class='colorbox'  id="button-color" oninput="changedividercolor()">
            </div>

            <div class='inspectBox'>
            <label for="cell-bg-color">Background Color:</label>
            <input type="color" class='colorbox' id="cell-bg-color" oninput="changeCellBackgroundColor()">
            </div>

            


            <div class='inspectBox slid'>
            <label>Padding:</label>

            <div>
            <span class="material-symbols-outlined">align_horizontal_left</span>
            <input type="range" id="paddingtop" min="0" max="72" value="16" oninput="ChangePadding('top')"> 
            </div>

            <div>
            <span class="material-symbols-outlined">align_horizontal_left</span>
            <input type="range" id="paddingbottom" min="0" max="72" value="16" oninput="ChangePadding('bottom')"> 
            </div>

            <div>
            <span class="material-symbols-outlined">align_horizontal_left</span>
            <input type="range" id="paddingright" min="0" max="72" value="16" oninput="ChangePadding('right')"> 
            </div>

            <div>
            <span class="material-symbols-outlined">align_horizontal_left</span>
            <input type="range" id="paddingleft" min="0" max="72" value="16" oninput="ChangePadding('left')"> 
            </div>

            </div>
            </div>
        `;



function changedividerheight() {
    const number = document.getElementById('button-height').value;
    
    if (content) {
        const divider = content.querySelector('hr');
        //console.log('divider',number, divider)
        if (divider) {
            divider.style.borderTopWidth = number + 'px';
            document.getElementById('buttonHeight').innerHTML = number + 'px'
        }
    }
}
function changedividerwidth() {
    const number = document.getElementById('button-width').value;
    
    if (content) {
        const divider = content.querySelector('hr');
        //console.log('divider',number, divider)
        if (divider) {
            divider.style.width = number + '%';
            document.getElementById('buttonWidth').innerHTML = number + '%'
        }
    }
}

function ChangePadding(direction){
	content.parentElement.style.padding = '0px'
	if(direction=='top'){
		amt = document.getElementById('paddingtop').value
		content.style.paddingTop = `${amt}px`;
	}else if(direction=='bottom'){
		amt = document.getElementById('paddingbottom').value
		content.style.paddingBottom = `${amt}px`;
	}else if(direction=='left'){
		amt = document.getElementById('paddingleft').value
		content.style.paddingLeft = `${amt}px`;
	}else if(direction=='right'){
		amt = document.getElementById('paddingright').value
		content.style.paddingRight = `${amt}px`;
	}

}

function changedividercolor() {
   
    const color = document.getElementById('button-color').value;
    if (content) {
        const divider = content.querySelector('hr');
        divider.style.borderTopColor = color;
    }
    
}

function changefont(fontName) {
	const fontNam = document.getElementById('selectedfont').value;
    const link = document.getElementById('google-fonts');
    const formattedFontName = fontNam.replace(/ /g, '+');
    const fontUrl = `https://fonts.googleapis.com/css2?family=${formattedFontName}:wght@400;700&display=swap`;

    link.href = fontUrl;


    content.style.fontFamily = fontNam;
}


