buttonContent = 
		`	<div class='inspectContainer'>

			<div class='inspectBox'>
	            
	            <label for="button-text">Button Text:</label>
            	<input type="text" id="button-text" oninput="changeButtonText()">
            </div>

            <div class='inspectBox'>
	            <label for="button-url">Button URL:</label>
	            <input type="text" id="button-url" oninput="changeButtonURL()">
            </div>

            <div class='inspectBox slid'>
	            <label for="button-width">Width:</label>
	            <div>
	            	<input type="range" min='0' max='400' value='100' id="button-width" oninput="changeButtonSize()">
		            <span id='btnwidth' style='color: #4f4f4f96; font-size:24px'>0px</span>
	            </div>
	            <label for="button-height">Height:</label>
	            <div>
	            	<input type="range" min='0' max='200' value='20' id="button-height" oninput="changeButtonSize()">
	            	<span id='btnheight' style='color: #4f4f4f96; font-size:24px'>0px</span>
	            </div>
            </div>

            <div class='inspectBox slid'>
	            <label for="button-border-radius">Border Radius:</label>
	            <div>
		            <input type="range" id="button-border-radius" min="0" max="50" value="0" oninput="changeButtonBorderRadius()">
		            <span id='btnborderradius' style='color: #4f4f4f96; font-size:24px'>0px</span>
	            </div>
            </div>

            <div class='inspectBox slid'>
	            <label for="button-font-size">Font Size:</label>
	            <div>
		            <input type="range" id="button-font-size" min="8" max="72" value="16" oninput="changeButtonFontSize()">
		            <span id='buttontextsize' style='color: #4f4f4f96; font-size:24px'>0px</span>
	            </div>
            </div>


            
            

            
            <div class='inspectBox'>
	            <label for="cell-color">Text Color:</label>
	            <input type="color" class='colorbox' id="cell-color" oninput="changeCellTextColor()">
            </div>

            <div class='inspectBox'>
	            <label for="button-color">Button Color:</label>
	            <input type="color" class='colorbox' id="button-color" oninput="changeButtonColor()">
	        </div>

	        
            <div class='inspectBox'>
            <label for="cell-bg-color">Background Color:</label>
            <input type="color" class='colorbox' id="cell-bg-color" oninput="changeCellBackgroundColor()">
            </div>


	        <div style='display:flex'>
	          	  <div class='inspectBox'>
		            <label for="borderr">Border Color:</label>
		            <input type="color" class='colorbox' id="bordercolor" oninput="changebordercolor()">
	            </div>
	        

	             <div class='inspectBox slid'>
		            <label for="button-font-size">Border Width</label>
		            <div>
			            <input type="range" id="bordersize" min="0" max="10" value="1" oninput="changebordercolor()">
			            <span id='Sbordersize' style='color: #4f4f4f96; font-size:24px'>0px</span>
		            </div>
	            </div>
            </div>

            <div class='inspectBox'>
            <label for="font-family">Font Family:</label>
            <select class='dropdown' id='selectedfont'  onchange="changeButtonFontFamily()">
            	<option value="Roboto">Roboto</option>
		        <option value="Open Sans">Open Sans</option>
		        <option value="Lora">Lora</option>
		        <option value="Montserrat">Montserrat</option>
		        <option value="Merriweather">Merriweather</option>
		        <option value="Poppins">Poppins</option>
		        <option value="Oswald">Oswald</option>
		        <option value="Raleway">Raleway</option>
		        <option value="Playfair Display">Playfair Display</option>
		        <option value="PT Sans">PT Sans</option>
		        <option value="Lato">Lato</option>
		        <option value="Source Sans Pro">Source Sans Pro</option>
		        <option value="Nunito">Nunito</option>
		        <option value="Dancing Script">Dancing Script</option>
		        <option value="Roboto Condensed">Roboto Condensed</option>
		        <option value="Ubuntu">Ubuntu</option>
		        <option value="Slabo 27px">Slabo 27px</option>
		        <option value="Anton">Anton</option>
		        <option value="Arimo">Arimo</option>
		        <option value="Cabin">Cabin</option>
		        <option value="Quicksand">Quicksand</option>
		        <option value="Exo">Exo</option>
		        <option value="Julius Sans One">Julius Sans One</option>
		        <option value="Zilla Slab">Zilla Slab</option>
		        <option value="Karla">Karla</option>
		        <option value="Bebas Neue">Bebas Neue</option>
            </select>
            </div>

            


            <div class='inspectBox'>
            <label for="text-align">Text Align:</label>

            <div class='Hclass'>
            	<button class='Hbtn' onclick='ChangeTextAlign(this,"left")'><span class="material-symbols-outlined">format_align_left</span></button>
            	<button class='Hbtn' onclick='ChangeTextAlign(this, "Center")'><span class="material-symbols-outlined">format_align_center</span></button>
            	<button class='Hbtn' onclick='ChangeTextAlign(this, "right")'><span class="material-symbols-outlined">format_align_right</span></button>
            </div>
            </div>


            <div class='inspectBox'>
	            <label>Vertical Alignment:</label>
	            <div class='Hclass'>
		            <button class='Hbtn' onclick="changeImageVerticalAlignment('top')">Top</button>
		            <button class='Hbtn' onclick="changeImageVerticalAlignment('middle')">Middle</button>
		            <button class='Hbtn' onclick="changeImageVerticalAlignment('bottom')">Bottom</button>
		        </div>
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


function changeButtonText() {
    const text = document.getElementById('button-text').value;
    if (content) {
        const buttonElement = content.querySelector('button');
        if (buttonElement) {
            buttonElement.innerText = text;
        }
    }
}

function changeButtonURL() {
    const url = document.getElementById('button-url').value;
    if (content) {
        let buttonElement = content.querySelector('button');
        if (buttonElement) {
            let anchorElement = buttonElement.closest('a');
            
            if (anchorElement) {
                // If an anchor already exists, just update its href
                anchorElement.href = url;
            } else {
                // If no anchor exists, create one and wrap the button
                anchorElement = document.createElement('a');
                anchorElement.href = url;
                anchorElement.target = '_blank'; // Opens link in new tab
                
                buttonElement.parentNode.insertBefore(anchorElement, buttonElement);
                anchorElement.appendChild(buttonElement);
            }
            
            // Update button attributes
            buttonElement.removeAttribute('href');
            buttonElement.removeAttribute('data-href');
        }
    }
}

function changeButtonSize() {
    const width = document.getElementById('button-width').value;
    const height = document.getElementById('button-height').value;
    if (content) {
        const buttonElement = content.querySelector('button');
        if (buttonElement) {
        	var bwidth = width ? `${width}px` : 'auto';
        	var bheight = height ? `${height}px` : 'auto';
            buttonElement.style.width = bwidth
            buttonElement.style.height = bheight

            document.getElementById('btnwidth').innerHTML = bwidth
            document.getElementById('btnheight').innerHTML = bheight
        }
    }
}

function changeButtonBorderRadius() {
    const radius = document.getElementById('button-border-radius').value;
    if (content) {
        const buttonElement = content.querySelector('button');
        if (buttonElement) {
            buttonElement.style.borderRadius = `${radius}px`;
            document.getElementById('btnborderradius').innerHTML = `${radius}px`
            
        }
    }
}

function changeButtonFontSize() {
    const fontSize = document.getElementById('button-font-size').value;
    if (content) {
        const buttonElement = content.querySelector('button');
        if (buttonElement) {
            buttonElement.style.fontSize = `${fontSize}px`;
            document.getElementById('buttontextsize').innerHTML = `${fontSize}px`
            
        }
    }
}

function changeCellTextColor() {
    const color = document.getElementById('cell-color').value;
    if (content) {
        content.querySelector('button').style.color = color;
    }
}

function changeButtonColor() {
    const color = document.getElementById('button-color').value;
    if (content) {
        const buttonElement = content.querySelector('button');
        if (buttonElement) {
            buttonElement.style.backgroundColor = color;
        }
    }
}

function changebordercolor(){
	const color = document.getElementById('bordercolor').value
	const border = document.getElementById('bordersize').value
	if(content){
		const buttonElement = content.querySelector('button')
		if(buttonElement){
			buttonElement.style.border = `${border}px solid ${color}`;
			document.getElementById('Sbordersize').innerHTML = `${border}px`
			
		}
	}
}

function changeButtonFontFamily(fontName) {
	const fontNam = document.getElementById('selectedfont').value;
    const link = document.getElementById('google-fonts');
    const formattedFontName = fontNam.replace(/ /g, '+');
    const fontUrl = `https://fonts.googleapis.com/css2?family=${formattedFontName}:wght@400;700&display=swap`;

    link.href = fontUrl;


    content.querySelector('button').style.fontFamily = fontNam;
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

