// Elements Declaration
var sidebar = document.querySelector('.sidebar');
var list = document.querySelector('.list');
var sidebar__open_btn = document.querySelector('.sidebar__open');
var sidebar__close_btn = document.querySelector('.sidebar__close');
var login = document.querySelector('.login');
var logout = document.querySelector('.logout');
var fa_user = document.querySelector('.fa-caret-right');

// hide sidebar
sidebar__open_btn.addEventListener('click',()=>{
    sidebar.style.left = "0";
});

// Show sidebar
sidebar__close_btn.addEventListener('click',()=>{
    sidebar.style.left = "-100%";
});

// toggle user nav dropdown
login.addEventListener('click',()=>{
    if(logout.style.display=='block'){
        logout.style.display = 'none';
        fa_user.style.transform = "rotate(0deg)";
    }else{
        logout.style.display = 'block';
        fa_user.style.transform = "rotate(-270deg)";
    }

});
// On click show point details
map.on('click', 'point', function (e) {
    sidebar.style.left = "0"
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties;
    list.innerHTML = `
        <li class="list__item"><i class="fa fa-building-o"></i> Owner - ${description.owner}</li>
        <li class="list__item"><i class="fa fa-plane"></i> Pilot - ${description.pilot}</li>
        <li class="list__item"><i class="fa fa-globe"></i> Longitude - ${coordinates[1].toFixed(5)}</li>
        <li class="list__item"><i class="fa fa-globe"></i> Latitude - ${coordinates[0].toFixed(5)}</li>
        <li class="list__item"><i class="fa fa-tachometer" aria-hidden="true"></i> Speed - ${(description.steps/description.updateTime).toFixed(2)}kmph</li>
    `;
});
// Change to a pointer when it hover on point.
map.on('mouseenter', 'point', function () {
    map.getCanvas().style.cursor = 'pointer';
});
// Change it back to a normal when it leaves.
map.on('mouseleave', 'point', function () {
    map.getCanvas().style.cursor = '';
});