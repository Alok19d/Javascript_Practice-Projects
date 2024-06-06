const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;
let inBetween = false;

function handleCheck(e){
    // Check if shift key is pressed AND check that they are checking it.
    if(e.shiftKey && this.checked){
        checkboxes.forEach(checkbox =>{ 
            if(checkbox === this || checkbox === lastChecked){
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => (checkbox.addEventListener('click', handleCheck)));