SpacerContent = 
		`	<div class='inspectContainer'>
			

            <div class='inspectBox slid'>
	            <label for="Height">Height</label>
	            <div>
	            	<input type="range" id="spacer-height"   min="3" max="200" value="16" oninput="changeSpacerHeight()">
		            <span id='spacehight' style='color: #4f4f4f96; font-size:24px'>0px</span>
	            </div>
	            
            </div>

             <div class='inspectBox'>
            <label for="cell-bg-color">Background Color:</label>
            <input type="color" class='colorbox' id="cell-bg-color" oninput="changeCellBackgroundColor()">
            </div>

            </div>
          
        `;

function changeSpacerHeight() {
    const heightNum = document.getElementById('spacer-height').value
    if (content) {
        const spacer = content.querySelector('.spacerdiv');
        console.log(spacer)
        spacer.style.height = heightNum + 'px';
        document.getElementById('spacehight').innerHTML = heightNum + 'px'
    } 
    // body...
}