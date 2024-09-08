function pesquisar() {

    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById('campo-pesquisa').value.trim().toLowerCase();

    if (campoPesquisa == "") {

        section.innerHTML = '<p class="texto-nada-encontrado"> Nada foi encontrado </p>'

        return
    }

    let resultados = "";

    for (let dado of dados) {

        if (dado.titulo.trim().toLowerCase().includes(campoPesquisa)) {

            resultados += `
            
                        <div class="item-resultado">
            
                            <h2>
            
                                <a href="#" target="_blank">${dado.titulo}</a>
            
                            </h2>
            
                            <p class="descricao-meta">${dado.descricao}</p>
            
                            <a href="${dado.link}" target="_blank">Mais informações</a>

                            <br>
                            <br>

                            <img src="${dado.imagem}" alt="Imagem de ${dado.titulo}" class="item-imagem">
            
                        </div>
            
            
            `
        }

    }

    section.innerHTML = resultados;

}
