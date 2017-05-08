$(() => {
    //drawer
    $('.app-header__btn-slide-nav').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });

    //modal
    $('.modal').modal({
        opacity: 0.3
    });

    //modal of login
    $('.app-login__signup').click(() => {
        $('.app-login').modal('close');
    });

    //modal of signup
    $('.app-signup__btn-login').click(() => {
        $('.app-signup').modal('close');
    });
});
