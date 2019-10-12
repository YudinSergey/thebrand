let header_navigation = document.querySelector('.nav');
let browse_button = document.querySelector('.browse_button');
let nav_category_hover = document.querySelector('.nav_category_hover_form');
let browse_form = document.querySelector('.browse_form');
let products_section=document.querySelector('.popular_products_section');
let products_items = document.querySelectorAll('.product');
let basket = document.querySelector('#basket');
let mini_basket_form = document.querySelector('.mini_basket_form');
let mobile_burger = document.querySelector('.mobile_burger_button');
let mobile_menu = document.querySelector('.mobile_menu');
let mobile_menu_header = document.querySelector('.mobile_menu_header');
let mobile_menu_main_part = document.querySelector('.main_part');

header_navigation.addEventListener('mouseover', (event)=>{
    if(event.target==header_navigation.children[2]){
        nav_category_hover.style.display = 'flex';
    }
});

nav_category_hover.addEventListener('mouseleave', ()=>{
   nav_category_hover.style.display='none';
});

browse_button.addEventListener('click', ()=>{
    browse_form.style.display='block';
});

browse_form.addEventListener('mouseleave', ()=>{
    browse_form.style.display='none';
});

products_section.addEventListener('click', (event)=>{
   event.preventDefault();
});

for(let i=0;i<products_items.length;i++){
    products_items[i].addEventListener('mouseover', (event)=>{
        event.currentTarget.children[0].children[0].style.display='flex';
    });

    products_items[i].addEventListener('mouseout', (event)=>{
        event.currentTarget.children[0].children[0].style.display='none';
    });
}

basket.addEventListener('mouseover', (event)=>{
        mini_basket_form.style.display = 'block';

});

mini_basket_form.addEventListener('mouseleave', ()=>{
    mini_basket_form.style.display='none';
});

mobile_burger.addEventListener('click', (event)=>{
   event.preventDefault();
   mobile_menu.style.display="block";
});

mobile_menu_header.addEventListener('click', (event)=>{
   event.preventDefault();
   if(event.target.classList.contains('mobile_header_tab')&&event.target.classList.contains('active_tab')==false){
       for(let i=0; i<mobile_menu_header.children.length;i++){
           mobile_menu_header.children[i].classList.remove('active_tab');
       }
       if(event.target==mobile_menu_header.children[0]){
           mobile_menu_main_part.children[0].children[0].children[0].textContent="Home";
           mobile_menu_main_part.children[0].children[1].children[0].textContent="Shop";
           mobile_menu_main_part.children[0].children[2].children[0].textContent="About";
           mobile_menu_main_part.children[0].children[3].children[0].textContent="How It Works";
           mobile_menu_main_part.children[0].children[4].children[0].textContent="Contact";
       }else if(event.target==mobile_menu_header.children[1]){
           mobile_menu_main_part.children[0].children[0].children[0].textContent="Tearms & Condition";
           mobile_menu_main_part.children[0].children[1].children[0].textContent="Privacy Policy";
           mobile_menu_main_part.children[0].children[2].children[0].textContent="How to Buy";
           mobile_menu_main_part.children[0].children[3].children[0].textContent="How to Sell";
           mobile_menu_main_part.children[0].children[4].children[0].textContent="Promotion";
       }else if(event.target==mobile_menu_header.children[2]){
           mobile_menu_main_part.children[0].children[0].children[0].textContent="Men";
           mobile_menu_main_part.children[0].children[1].children[0].textContent="Women";
           mobile_menu_main_part.children[0].children[2].children[0].textContent="Child";
           mobile_menu_main_part.children[0].children[3].children[0].textContent="Apparel";
           mobile_menu_main_part.children[0].children[4].children[0].textContent="Brows All";
       }
       event.target.classList.add('active_tab');
   }
});



