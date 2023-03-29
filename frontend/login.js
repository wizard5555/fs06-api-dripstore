const API_URL = 'http://localhost:8000/login';

if (null != localStorage.getItem('token')) {
    alert('Vc ja esta logado');
    location.href="index.html";
}

function login() {
    event.preventDefault(); //evitar o recarregamento da pagina

    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value,
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.erro) {
                document.getElementById('resultado').innerHTML = `
                    <div class="alert alert-danger"> ${data.erro} </div>
                `; 
                
                return;
            }

            if (data.token) {
                document.getElementById('resultado').innerHTML = `
                    <div class="alert alert-success">Bem vindo</div>
                `;

                localStorage.setItem('token', data.token);
                location.href="index.html";

                return;
            }

            document.getElementById('resultado').innerHTML = `
                <div class="alert alert-danger">Erro, contate o admin.</div>
            `;
        });
}
