const menu = document.querySelector('.hamburger');
const menuActive = document.querySelector('.header__menu-list');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuActive.classList.toggle('menu--open');
});

// tabs

const tabItem = document.querySelectorAll('.tab__btn');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function (element){
    element.addEventListener('click', open);
});

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('tab__btn--active');
    });
    tabContent.forEach(function(item){
        item.classList.remove('tabs__content-item--active');
    });

    tabTarget.classList.add('tab__btn--active');
    document.querySelector(`#${button}`).classList.add
    ('tabs__content-item--active');
};

// transition=



    openContentButtons.forEach(button => {
        button.addEventListener("click", () => {
            const contentId = button.getAttribute("data-content");

            // Hide all content blocks
            tabsContentItems.forEach(item => {
                item.classList.remove("tabs__content-item--active");
            });

            // Show the selected content block with a slight delay for the fade-in effect
            const selectedContent = document.getElementById(contentId);
            if (selectedContent) {
                setTimeout(() => {
                    selectedContent.classList.add("tabs__content-item--active");
                }, 50); // Adjust the delay as needed
            }
        });
    });


