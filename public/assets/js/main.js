'use strict'


$('#btn-registrar').click(() => {
    const data = {
        name: $('#reg-name').text(),
        email: $('#reg-email').text(),
        username: $('#reg-username').text(),
        password: $('#reg-password').text(),
    };
    $.ajax({
        url: '/registrar',
        method: 'POST',
        data
    })
    .done(data => console.log(`Datos enviados: ${ data }`));
});