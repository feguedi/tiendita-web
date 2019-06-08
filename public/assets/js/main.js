'use strict'


// $('#btn-registrar').click(() => {
//     const data = {
//         name: $('#reg-name').text(),
//         email: $('#reg-email').text(),
//         username: $('#reg-username').text(),
//         password: $('#reg-password').text(),
//     };

//     // console.log(`Enviando datos: ${ data }`);

//     $.ajax({
//         url: '/registrar',
//         headers: {
//             'Content-type': 'application/x-www-form-urlencoded'
//         },
//         method: 'POST',
//         beforeSend: function(xhr) {
//             console.log(`Enviando datos: ${ data }`);
//         },
//         data
//     })
//     .done(data => {
//         console.log(`Datos enviados: ${ data }`);
//         $('#respuesta').append(`
//         <div class="toast fade show" role="alert" aria-live="assertive" aria-atomic="true">
//             <div class="toast-header">
//                 <strong class="mr-auto">${ "Success" }</strong>
//                 <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                 </button>
//             </div>
//             <div class="toast-body">
//                 ${ data }
//             </div>
//         </div>
//         `);
//     });
// });