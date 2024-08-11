htmlCodeContent = 
        `   <div class='inspectContainer'>
            

            <div class='inspectBox'>
                <label for="cell-text" style='position: relative;background-color: white;left: 9px;bottom: -7px;'>Text:</label>
                <textarea type="cell-text" id="cell-text" oninput="changeCellText(true)"></textarea>
            </div>
            
            <div class='inspectBox slid'>
                <label for="font-size">Font Size:</label>
                <div>
                    <input type="range" id="font-size" min="10" max="72" value="16" oninput="changeFontSize()"> 
                    <span id='textsize' style='color: #4f4f4f96; font-size:24px'>0px</span>
                </div>
            </div>
            
            <div class='inspectBox'>
                <label for="cell-color">Text Color:</label>
                <input type="color" class='colorbox' id="cell-color" oninput="changeCellTextColor()">
            </div>

            <div class='inspectBox'>
            <label for="cell-bg-color">Background Color:</label>
            <input type="color" class='colorbox' id="cell-bg-color" oninput="changeCellBackgroundColor()">
            </div>

            <div class='inspectBox'>
            <label for="text-align">Text Align:</label>

            <div class='Hclass'>
                <button class='Hbtn' onclick='ChangeTextAlign(this,"left")'><span class="material-symbols-outlined">format_align_left</span></button>
                <button class='Hbtn' onclick='ChangeTextAlign(this, "Center")'><span class="material-symbols-outlined">format_align_center</span></button>
                <button class='Hbtn' onclick='ChangeTextAlign(this, "right")'><span class="material-symbols-outlined">format_align_right</span></button>
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


function changeCellTextColor() {
    const color = document.getElementById('cell-color').value;
    if (content) {
        content.style.color = color;
    }
}

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


