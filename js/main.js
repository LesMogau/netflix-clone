const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


//selecting tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    //for adding borders to current tab
    this.classList.add('tab-border');
    //getting content item from DOM
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    //adding showclass
    tabContentItems.classList.add('show');

    console.log(this.id);
}
function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
tabContentItems.forEach(item => item.classList.remove('show'));

}
tabItems.forEach(item=>item.addEventListener('click',selectItem));
