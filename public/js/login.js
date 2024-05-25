var GLOBAL_USERNAME; // Declaración de la variable global
document.addEventListener('DOMContentLoaded', function() {
    console.log('login.js cargado');
    const loginForm = document.getElementById('login-form');
    
    if (loginForm) {
        console.log('Formulario encontrado');
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Formulario enviado');

            const userCredentials = {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            };

            console.log('Credenciales:', userCredentials);

            fetch('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userCredentials)
            })
            .then(response => {
                console.log('Response recibido:', response);
                return response.json();
            })
            .then(data => {
                console.log('Datos recibidos:', data);
                if (data.success) {
                    GLOBAL_USERNAME=userCredentials.username
                    if (data.role === 'admin') {
                        window.location.href = 'admin.html';
                    } else {
                        window.location.href = 'client.html';
                    }
                } else {
                    alert('Credenciales incorrectas');
                }
            })
            .catch(error => console.error('Error:', error));
        });
    } else {
        console.error('Formulario no encontrado');
    }

});
