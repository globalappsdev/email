function CreateElement(type,multi=false) {
    
    switch (type) {
            case 'h1':
            case 'h2':
            case 'h3':
            case 'p':
                newitems = `
                            <${type} class='text' onclick="selectCell(this)">
                                New ${type.toUpperCase()} text
                            </${type}>
                        `;
                
                break;
            case 'image':
                newitems =`
                    <div class='img' onclick="selectCell(this)">
                        <img src="path/to/image" alt="New Image" style="width: 100%; height: auto;">
                    </div>
                `
                break;
            
            case 'divider':
                newitems = `
                <div class='dividerClass' onclick="selectCell(this)">
                    <hr class='dvd'></hr>
                </div>
                    `
                break


            case 'spacer':
                newitems = `
                <div class='spacer' onclick="selectCell(this)">
                    <div class='spacerdiv' style='height:15px'></div>
                </div>
                    `
                break


            case 'button':
                newitems = `
                    
                    <div class='btn' onclick="selectCell(this)">
                        <button data-href="#">New Button</button>
                    </div>
                `
                break;
            case 'html-code':
                newitems = `
                    <div class='html-code'style='min-height:50px' onclick="selectCell(this)">
                        <strong > Code here </strong>
                    </div>
                `
                break;

            case 'avatar':
                newitems =`
                    <div class='avatar' onclick="selectCell(this)">
                        <img src="path/to/image" alt="New Image" style="width: 100%; height: auto;">
                    </div>
                `
                break;

            case '2-column':
                newitems = `
                   
                   
                    <table align="center" class='multitable' onclick="selectCell(this)" cellpadding="0" border="0" style="table-layout: fixed; border-collapse: collapse;">
                        <tbody>
                            <tr>
                                <td>
                                    <div class="content">
                                            <button class='addbtn' onclick='showModal(this.parentElement,true)'>+</button>
                                    </div>
                                    
                                </td>
                                
                                <td>
                                    <div class="content">
                                            <button class='addbtn' onclick='showModal(this.parentElement,true)'>+</button>
                                    </div>
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
                    
                    
                   
                    
                `;
                break;
            case '3-columns':
                newitems = `
                    <table align="center" width="100%" cellpadding="0" onclick="selectCell(this)" border="0" style="table-layout: fixed; border-collapse: collapse;">
                        <tbody>
                            <tr>
                                <td>
                                    <div class="cell-container multi-column">
                                       <div class="content">
                                            <button class="add-element" onclick="showElementOptions(this,div=this.parentElement)">Add element</button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="cell-container multi-column">
                                       <div class="content">
                                            <button class="add-element" onclick="showElementOptions(this,div=this.parentElement)">Add element</button>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="cell-container multi-column">
                                        <div class="content">
                                            <button class="add-element" onclick="showElementOptions(this,div=this.parentElement)">Add element</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                `;
                break;
        }
        if(multi){//"<div class='delete' ><button class='del' onclick='deleteCell(this,true)'>x</button></div> <div class='bottomAdd'><button class='addRow' onclick='showModal(this.parentElement,true)'>+</button></div> "
            return newitems + `
                   <div class='delete' >
                        <button class='delBtn' onclick='moveRow(this.parentElement,"up")'><span class="material-symbols-outlined arrow">arrow_upward</span></button> 
                        <button class='delBtn' onclick='moveRow(this.parentElement,"down")'><span class="material-symbols-outlined arrow">arrow_downward</span></button> 

                        <button class='delBtn' onclick='deleteCell(this.parentElement,true)'>x</button> 
                    </div> 
                    
                    <div class='bottomAdd'>
                        <button class='addRow' onclick='showModal(this.parentElement,true)'>+</button>
                    </div> 
                `;


        }else{
            return newitems + `
                    <div class='delete' >
                        <button class='delBtn' onclick='moveRow(this.parentElement.parentElement,"up")'><span class="material-symbols-outlined arrow">arrow_upward</span></button> 
                        <button class='delBtn' onclick='moveRow(this.parentElement.parentElement,"down")'><span class="material-symbols-outlined arrow">arrow_downward</span></button> 
                        <button class='delBtn' onclick='deleteCell(this.parentElement,false)' >x</button> 
                    </div> 
                    
                    <div class='bottomAdd'>
                        <button class='addRow' onclick='showModal(this.parentElement,false)'>+</button>
                    </div>
                `;

        }
        
}