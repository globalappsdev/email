

function showModal(button, table=false) {
    var modal = document.getElementById('modal');
    
    if(modal.style.display == 'flex'){
        closeModal()

    }else{
        modal.style.display = 'flex';
        modal.offsetHeight;
    }

    var buttonRect = button.getBoundingClientRect();

    modal.button = button;

    if(table){
        modal.multi = true
    }else{
        modal.multi = false
    }
    
    

    

    var modalRect = modal.getBoundingClientRect();
    var modalWidth = modalRect.width;
    

    modal.style.left =  (button.querySelector('.addbtn').getBoundingClientRect().x - (modalWidth/2)) + 'px'
    modal.style.top = (buttonRect.bottom + window.scrollY) + 'px';

    
    
}

function AddItem(element,table=false){
    var modal = document.getElementById('modal');

    

    console.log(modal.button, "multi ?", modal.multi)

    if (modal.button.classList.contains('first')){
        modal.button.parentElement.classList.add('content')

        const cell_content = CreateElement(element)

        
            
        modal.button.parentElement.innerHTML = cell_content;
        

    }else if(modal.multi){
        if(modal.button.classList.contains('content')){

            modal.button.innerHTML = CreateElement(element,true)

        }else{
            
            parentDiv = modal.button.parentElement

            const newTable = document.createElement('div');
            newTable.classList.add('content');
            // Set the inner HTML for the new table
            newTable.innerHTML = CreateElement(element,true)
            
            // Append the new table to the content div
            if (parentDiv.nextSibling) {
                parentDiv.parentNode.insertBefore(newTable, parentDiv.nextSibling);
            } else {
                parentDiv.parentNode.appendChild(newTable);
            }

        }

        
    }
    else{
        
        var CellContent = CreateElement(element)
        
        const row = modal.button.closest('tr');
    
        
        const newRow = document.createElement('tr');
        
        
        const newCell = document.createElement('td');
        
        
        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'content';
        console.log('else',CellContent)

        
        
        contentDiv.innerHTML = CellContent
        
        
        newCell.appendChild(contentDiv);
        newRow.appendChild(newCell);
        
        
      
        row.parentNode.insertBefore(newRow, row.nextSibling);
        
    }
    closeModal()  
    removeselection()

    
}

function closeModal(){
    var modal = document.getElementById('modal');
    //modal.style.display = 'none';
    setTimeout(() => {
        modal.style.display = 'none';
      }, 100)

}

function openTab(tabName) {
            // Hide all tabs


            document.querySelectorAll('.tablinks').forEach(tab => {
                
                if(tab.innerHTML === tabName){
                    console.log(tab.innerHTML)
                    tab.style.borderBottom = '1px solid gray'
                }else{
                    tab.style.borderBottom = 'none';    
                }
                
                

            });

            document.querySelectorAll('.tabcontent').forEach(tab => {
                tab.style.display = 'none';
                

            });

            // Show the selected tab and add active class
            const tabToShow = document.getElementById(tabName);
            if (tabToShow) {
                tabToShow.style.display = 'block';
                //console.log(tabToShow)
                //tab.style.borderBottom = '1px solid gray'
            }
            
            initResponsiveUI()
        }

document.addEventListener('click', function(event) {
    if (!event.target.closest('.content') && !event.target.closest('.sidebar') && !event.target.closest('.topbar')) {
        document.querySelectorAll('.content').forEach(cell => {
            cell.classList.remove('active');
        });
        
        
        //optionsDiv.innerHTML = ''
        openTab('Styles');

        document.querySelectorAll('.delete').forEach(tab => {
        // Check if the element has the 'active' class
        if (tab.classList.contains('Delactive')) {
            // Remove the 'active' class from the element
            tab.classList.remove('Delactive');
        }

    //console.log("del",button.parentElement.querySelector('.delete'))
        
        });
    }
});


function deleteCell(element, isMultiColumn = false) {
    event.stopPropagation();
    console.log('delete cell', isMultiColumn, element)
    if (isMultiColumn) {
        const parentDiv = element.closest('div.content')
        const remainingDivs = element.parentElement.querySelectorAll('.content');

        if (parentDiv) {

            parentDiv.remove();
            
            console.log('Number of remaining div.content elements:',remainingDivs, remainingDivs.length);

        }

    } else {
        const row = element.closest('tr');
        row.parentNode.removeChild(row);
    }


    if(isMultiColumn){
        const parentDiv = element.closest('div.content')
        if (parentDiv.children.length === 0) {
            console.log("now empty")
        }


    }else{
        var tbody = document.querySelector('#emailtable tbody');

        // Check if tbody has any child nodes (rows)
        if (tbody.children.length === 0) {
            tbody.innerHTML = `
            <tr>
                <td style="padding: 0px;">
                    <div>
                        <div class="first">
                            <button class='addbtn' onclick="showModal(this.parentElement)">+</button>
                        </div>
                    </div>
                    
                </td>
            </tr>
        `;

        } 

    }
    
}
 


function moveRow(tableOrRow, direction) {
  // Determine if the input is a table or a row
  let row = tableOrRow.parentElement.parentElement;
  
  
  console.log("row>",row, row.tagName);

  

  if (row.tagName == 'TD') {
    const parentDiv = tableOrRow.parentElement

    const div = parentDiv.closest('td')

    console.log("row inn",div, 'tableOrRow', tableOrRow.parentElement);

    if (direction === 'up' && parentDiv.previousElementSibling) {
        div.insertBefore(parentDiv, parentDiv.previousElementSibling);
      } else if (direction === 'down' && row.nextElementSibling) {
        div.insertBefore(parentDiv.nextElementSibling, parentDiv);
      }

    
  }else{
        const table = row.closest('tbody');
      
          if (direction === 'up' && row.previousElementSibling) {
                table.insertBefore(row, row.previousElementSibling);
          
          } else if (direction === 'down' && row.nextElementSibling) {
                table.insertBefore(row.nextElementSibling, row);
          }

    }

  
}

function showhideSlidebar(){
    const tab = document.getElementById('tabbuttons')
    const sidebar = document.getElementById('sidebar')
    const shbtn = document.getElementById('shbutton')
    if(tab.style.display=='none'){
        tab.style.display = 'block'
        sidebar.style.display = 'block'
        shbtn.textContent = 'last_page'


    }else{
        tab.style.display = 'none'
        sidebar.style.display = 'none'
        shbtn.textContent = 'menu_open'
    }
}
