avatarContent = 
		`	<div class='inspectContainer'>
			<div class='inspectBox'>
	            <label for="cell-text" >Image</label>
	            <input  type="file" id="image-upload" onchange="changeImage(event)">
            </div>

            
            <div class='inspectBox slid'>
                <label for="image-url">Enter Initials</label>
                <div >
                    <input type="text" id="genavt" oninput="genrate()" minlength="2">
                    <input style='position:relative; bottom:-5px' type="color" class='colorbox' id="avtColor" onchange='genrate()'>
                </div>
            </div>


            <div class='inspectBox'>
	            <label for="image-url">Image URL</label>
	            <input type="text" id="image-url" oninput="changeImageUrl()">
            </div>

            <div class='inspectBox slid'>
	            <label for="image-width">Size</label>
	            <div>
	            	<input type="range" id="image-width"   min="0" max="500" value="16" oninput="changeImageSize()">
		            <span id='imgwidth' style='color: #4f4f4f96; font-size:24px'>0px</span>
	            </div>
	            
            </div>

            <div class='inspectBox'>

	            <label>Horizontal Alignment:</label>
	            <div class='Hclass'>
		            <button class='Hbtn' onclick="changeImageAlignment(this,'left')">Left</button>
		            <button class='Hbtn' onclick="changeImageAlignment(this,'center')">Center</button>
		            <button class='Hbtn' onclick="changeImageAlignment(this,'right')">Right</button>
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

function cropImageToRound(url) {
    const imgElement = document.querySelector('img'); // Assumes there is only one image element, or you can pass this as a parameter

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Create a new image object
    const image = new Image();
    image.crossOrigin = 'Anonymous'; // Handle CORS for external images

    image.onload = function() {
        // Set canvas dimensions to the image dimensions
        canvas.width = image.width;
        canvas.height = image.height;

        // Draw the image to the canvas
        ctx.drawImage(image, 0, 0);

        // Create a circular clipping region
        ctx.globalCompositeOperation = 'destination-in';
        ctx.beginPath();
        ctx.arc(image.width / 2, image.height / 2, image.width / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();

        // Convert canvas to data URL
        const dataURL = canvas.toDataURL();

        // Update the image element
        imgElement.src = dataURL;
        imgElement.style.width = 100 + 'px'
        
        document.getElementById('imgwidth').innerHTML = 100 + 'px';
        
    };

    // Set image source
    image.src = url;
}


function changeImage(event) {
    const file = event.target.files[0];
    if (file && content) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const imgElement = content.querySelector('img');
            if (imgElement) {
                cropImageToRound(e.target.result)
                //imgElement.src = e.target.result;
                // Retain current size and padding
                changeImageSize();
                //changeImagePadding();
            }
        };
        reader.readAsDataURL(file);
    }
}

function changeImageUrl() {
    const url = document.getElementById('image-url').value;
    if (content) {
        const imgElement = content.querySelector('img');
        if (imgElement) {
            cropImageToRound(url)
            //imgElement.src = url;
        }
    }
}

function genrate(){
    const initials = document.getElementById('genavt').value
    const avtColor = document.getElementById('avtColor').value
    console.log('genavt ', avtColor.replace('#',''))

    if(initials.length == 2){
       let url = "https://api.dicebear.com/9.x/initials/svg?seed=" + initials
       let newurl = 'https://api.dicebear.com/9.x/initials/svg?seed=' + initials + '&backgroundColor=' + avtColor.replace('#','')
       cropImageToRound(newurl)
    }
    
}

function changeImageSize() {
    var width = document.getElementById('image-width').value;
    

    
        if(width<=400){
        	width = `${width}px`;
        }else{
        	width = '400px'
        }
    

    
        height = 'auto';
   

    if (content) {
        const imgElement = content.querySelector('img');
        if (imgElement) {
            imgElement.style.width = width;
            
            document.getElementById('imgwidth').innerHTML = width;
            
        }
    }
}


function changeImageAlignment(btn,alignment) {
	document.querySelectorAll('.Hbtn').forEach(tab => {
		if(tab.textContent == 'Left' || tab.textContent == 'Center' || tab.textContent == 'Right'){
			tab.style.backgroundColor = 'white';		
		}
	  
	})

	btn.style.backgroundColor = '#EDEDEE'

    if (content.parentElement) {
        content.parentElement.style.textAlign = alignment;
    }
}

function changeImageVerticalAlignment(alignment) {
    if (content.parentElement) {
        content.parentElement.parentElement.style.verticalAlign = alignment;
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

