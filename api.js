document.getElementById("button").addEventListener("click", () => {
    const search = document.getElementById("pesquisa").value;
    const apiUrl = `https://brasilapi.com.br/api/isbn/v1/${search}`;

    // Fazendo a consulta usando fetch()
    const livros = [
        {
            "isbn": "9788501117687",
            "cover_url": "https://imageswscdn.wslojas.com.br/files/8608/todas-as-suas-imperfeicoes-colleen-hoover-192022751.jpg"
        },
        {
            "isbn": "9788576831303",
            "cover_url": "https://upload.wikimedia.org/wikipedia/pt/3/3d/Diario_de_um_banana1.jpg"
        },
        {
            "isbn": "9788595081512",
            "cover_url": "https://www.garamond.com.br/wp-content/uploads/2019/02/Capa_principe_sites.jpg"
        },
        {
            "isbn": "8575421131",
            "cover_url": "https://livrariacirkula.com.br/static/844384.png"
        },
        {
            "isbn": "9788544001820",
            "cover_url": "https://www.antofagica.com.br/wp-content/uploads/2021/06/ATF_3OrgulhoPreconceito_2CadastroSite.png"
        },
        {
            "isbn": "9788501115553",
            "cover_url": "https://m.media-amazon.com/images/I/913FVnW0yQL._AC_UL320_.jpg"
        },
        {
            "isbn": "8501117846",
            "cover_url": "https://img.travessa.com.br/livro/GR/5f/5fe30e1c-3460-4e5c-80f8-654cf7a4a04a.jpg"
        },
        {
            "isbn": "8501114782",
            "cover_url": "https://d1pkzhm5uq4mnt.cloudfront.net/imagens/capas/25b865bc58583992582f49bc2a98195f90afe12c.jpg"
        },
        {
            "isbn":"9788533613379",
            "cover_url": "https://m.media-amazon.com/images/I/81MZ8OjmQrL._SY466_.jpg"
        },
        {
            "isbn":"9788501112514",
            "cover_url": "https://m.media-amazon.com/images/I/81jqGtBE2qL._SL1500_.jpg"

        }
    ];

    // Criar um objeto `isbnImagensEspecificas` com base nos dados dos livros
    const isbnImagensEspecificas = {};
    livros.forEach(livro => {
        isbnImagensEspecificas[livro.isbn] = livro.cover_url;
      
    });

    // Exemplo de como usar o objeto `isbnImagensEspecificas` em uma consulta da API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Não foi possível obter os dados da API');
            }
            
            return response.json();
        })
        .then(data => {
            const resultadoElement = document.getElementById("resultado");
            const isbn = data.isbn;
            console.log(isbn);
            console.log(isbnImagensEspecificas[8595081514])
            let imagemUrl;

            if (isbnImagensEspecificas[isbn]) {
                imagemUrl = isbnImagensEspecificas[isbn];
            } else {
                imagemUrl = "https://cdn-icons-png.flaticon.com/256/3145/3145765.png";
            }


            resultadoElement.innerHTML = `
    <img src="${imagemUrl}" alt="Capa do livro" style="width: 50vw">
    <div>
        <h1 style="margin: 20px">Título: ${data.title}</h1>
        <p>ISBN: ${isbn}</p>
        <p>Autor(es): ${data.authors ? data.authors.join(', ') : 'Não disponível'}</p>
        <p>Editora: ${data.publisher ? data.publisher : 'Não disponível'}</p>
        <p>Sinopse: ${data.synopsis ? data.synopsis : 'Não disponível'}</p>
        <p>Ano de Publicação: ${data.year ? data.year : 'Não disponível'}</p>
        <p>Formato: ${data.format ? data.format : 'Não disponível'}</p>
        <p>Número de Páginas: ${data.page_count ? data.page_count : 'Não disponível'}</p>
        <p>Assuntos: ${data.subjects ? data.subjects.join(', ') : 'Não disponível'}</p>
        <p>Localização: ${data.location ? data.location : 'Não disponível'}</p>
        <p>Dimensões: ${data.dimensions ? `${data.dimensions.width} x ${data.dimensions.height} ${data.dimensions.unit}` : 'Não disponível'}</p>
    </div>
`;
        })
        .catch(error => {
            console.error('Erro:', error);
        });

});