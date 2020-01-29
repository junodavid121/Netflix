// Grab tab and tab content item
const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll(".tab-content-item");

//// Functions

// Select tab content item
function selectItem(e) {
    removeBorder(); 
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border');
    //Grab content item form DOM
    const tabContentItem = document.querySelector(`#${this.id}-content`)
    // Add show class
    tabContentItem.classList.add('show')
}

//Remove border
function removeBorder(){
    tabItems.forEach(item => item.classList.remove("tab-border"))
}

//Hide Content
function removeShow(){
    tabContentItems.forEach(item => item.classList.remove("show"))
}

//// Active Functions

//Listen for tab click
tabItems.forEach(item=> item.addEventListener('click',selectItem))