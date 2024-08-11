textContent = 
		`	<div class='inspectContainer'>
			<div class='inspectBox'>
            <label for="cell-text" style='position: relative;background-color: white;left: 9px;bottom: -7px;'>Text:</label>
            <textarea type="text" id="cell-text" oninput="changeCellText()"></textarea>
            </div>

            <div class='inspectBox'>
            <label for="text-type">Text Type:</label>
            <div class='Hclass'>
            	<button class='Hbtn' onclick='ChangeHeading(this,"H1")'>H1</button>
            	<button class='Hbtn' onclick='ChangeHeading(this, "H2")'>H2</button>
            	<button class='Hbtn' onclick='ChangeHeading(this, "H3")'>H3</button>
            </div>
            </div>

            
            <div class='inspectBox slid'>
	            <label for="font-size">Font Size:</label>
	            <div >
		            <input type="range" id="font-size" min="10" max="72" value="16" oninput="changeFontSize()"> 
		            <span id='textsize' style='color: #4f4f4f96; font-size:24px'>0px</span>
	            </div>
            </div>
            
            <div class='inspectBox'>
	            <label for="cell-color">Text Color:</label>
	            <input type="color" class='colorbox' id="cell-color" oninput="changeCellFontColor()">
            </div>

            <div class='inspectBox'>
            <label for="cell-bg-color">Background Color:</label>
            <input type="color" class='colorbox' id="cell-bg-color" oninput="changeCellBackgroundColor()">
            </div>

            <div class='inspectBox'>
            <label for="font-family">Font Family:</label>
            <select class='dropdown' id='selectedfont' onchange="changefont()">
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


function changeFontSize() {
	console.log('font zie ', content)
    const size = document.getElementById('font-size').value;
    if (content) {
        content.style.fontSize = `${size}px`;
        document.getElementById('textsize').innerHTML = `${size}px`
    }
}


function changeCellText(html=false) {
    const text = document.getElementById('cell-text').value;
    selectedCell = content
    console.log('change cell text', selectedCell)

    if (html) {
        if (selectedCell) {
            const textDiv = selectedCell.querySelector('strong');
            console.log('textDiv',textDiv)
            textDiv.innerHTML = text
        }

    }else{
        if (selectedCell) {
            content.innerText = text;
            
        }

    }
}
function changeCellFontColor() {
    const color = document.getElementById('cell-color').value;
    
    selectedCell = content
    console.log('h1 coolr', selectedCell)
    if(selectedCell){
    	selectedCell.style.color = color
    }
    
}

function changeCellBackgroundColor() {
    const color = document.getElementById('cell-bg-color').value;
    	selectedCell = content.parentElement
    if (selectedCell) {
        selectedCell.style.backgroundColor = color;
    }
}
    

function ChangeTextAlign(btn, direction){
	
	document.querySelectorAll('.Hbtn').forEach(tab => {
		if(tab.textContent == 'format_align_left' || tab.textContent == 'format_align_center' || tab.textContent == 'format_align_right'){
			tab.style.backgroundColor = 'white';		
		}
	  
	})

	btn.style.backgroundColor = '#EDEDEE'
	console.log("alingn", direction)
	selectedCell = content
	if(selectedCell){
		selectedCell.style.textAlign = direction
	}
}


function changeImageVerticalAlignment(alignment) {
    if (content.parentElement) {
        content.parentElement.parentElement.style.verticalAlign = alignment;
    }
}

function ChangeHeading(btn, tag){
	document.querySelectorAll('.Hbtn').forEach(tab => {
		if(tab.textContent == 'H1' || tab.textContent == 'H2' || tab.textContent == 'H3'){
			tab.style.backgroundColor = 'white';		
		}
	  
	})

	btn.style.backgroundColor = '#EDEDEE'

	// Assuming 'content' is the element you want to change
	var newContent = document.createElement(tag);
	newContent.className = 'text'; // Preserve the original class
	newContent.onclick = content.onclick; // Preserve the original onclick event
	newContent.textContent = content.textContent; // Preserve the original text content

	content.parentNode.replaceChild(newContent, content);
	content = newContent
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

function changefont(fontName) {
	const fontNam = document.getElementById('selectedfont').value;
    const link = document.getElementById('google-fonts');
    const formattedFontName = fontNam.replace(/ /g, '+');
    const fontUrl = `https://fonts.googleapis.com/css2?family=${formattedFontName}:wght@400;700&display=swap`;

    link.href = fontUrl;


    content.style.fontFamily = fontNam;
}


