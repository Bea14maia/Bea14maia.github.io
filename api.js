document.getElementById("button").addEventListener("click", () => {
    var pesquisa = document.getElementById("pesquisa").value;
    console.log(pesquisa);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "api.json", true); // Requisição Web

    xhr.onreadystatechange = function () { // Serve para garantir que a função só execute quando o xhr estiver pronto.
        if (xhr.readyState === 4 && xhr.status === 200) {
            // O status 200 indica que a solicitação foi bem-sucedida

            const jsonData = JSON.parse(xhr.responseText);

            // Iterar sobre cada objeto no array
            let foiEncontrado = false; 
            for (let i = 0; i < jsonData.length; i++) {
                const livro = jsonData[i];
                if (livro.isbn === pesquisa) {
                    const resultadoElement = document.getElementById("resultado");
                    resultadoElement.innerHTML = `
                        <img src="${livro.cover_url}" alt="Capa do livro" style="width: 50vw">
                        <div>
                        <h1 style="margin: 20px">Título: ${livro.title}</h1>
                        <p>ISBN: ${livro.isbn}</p>
                        <p>Autor(es): ${livro.authors.join(', ')}</p>
                        <p>Editora: ${livro.publisher}</p>
                        <p>Sinopse: ${livro.synopsis}</p>
                        <p>Ano de Publicação: ${livro.year}</p>
                        <p>Formato: ${livro.format}</p>
                        <p>Número de Páginas: ${livro.page_count}</p>
                        <p>Assuntos: ${livro.subjects.join(', ')}</p>
                        <p>Localização: ${livro.location}</p>
                        <p>Dimensões: ${livro.dimensions.width} x ${livro.dimensions.height} ${livro.dimensions.unit}</p>
                        </div>
                    `;
                    foiEncontrado = true
                }
            }
            if (foiEncontrado == false){
                const resultadoElement = document.getElementById("resultado");
                resultadoElement.innerHTML = `
                <h1 style="margin: 20px">Livro não encontrado.</h1>
                `
            }
        }
    };

    xhr.send(); // Inicia a solicitação
});