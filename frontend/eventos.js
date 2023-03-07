function excluir(categoriaId) {
    if (false == confirm('Tem certeza?')) {
        return;
    }

    tableData.innerHTML = `
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `;

    fetch('http://localhost:8000/categories/' + categoriaId, {
        method: 'DELETE',
    });

    //vai esperar 02 segundos, e vai atualizar a Tabela do HTML
    setTimeout(() => atualizarTabela(), 2000);
}


function atualizarTabela() {
    fetch('http://localhost:8000/categories', {
        headers: {
            senha: '123bolinha'
        }
    })
        .then(res => res.json())
        .then(categorias => {
            tableData.innerHTML = ""; //pra limpar a tabela

            categorias.map(cada => {
                tableData.innerHTML += `
                    <tr>
                        <td>${cada.name}</td>
                        <td>${cada.image}</td>
                        <td>${cada.description}</td>
                        <td>
                            <button onclick="excluir('${cada.id}')" class="btn btn-danger">Excluir</button>
                        </td>
                    </tr>
                `;
            });
        });
}

atualizarTabela();
