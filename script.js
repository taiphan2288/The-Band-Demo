// automatically slider-show image
var myIndex = 0;
carousel();
function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
myIndex++;
if (myIndex > x.length) {myIndex = 1}    
x[myIndex-1].style.display = "block";  
setTimeout(carousel, 2000); // Change image every 2 seconds
}

// When user click on modal
const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const modalClose = document.querySelector('.js-modal-close');

function showBuyTicket(){
    modal.classList.add('open');
}
function hideBuyTicket(){
    modal.classList.remove('open');
}

for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTicket);
}

modalClose.addEventListener('click', hideBuyTicket);

modal.addEventListener('click',hideBuyTicket);

modalContainer.addEventListener('click', function() {
    event.stopPropagation();
})


// Click on menu bar in mobile
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight
// open/close mobile menu
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } 
    else {
        header.style.height = null;
    }
}
// automatically close when click on element in menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu){
            event.preventDefault();
        }
        else {
            header.style.height = null;
        }
    }
}