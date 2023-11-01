function redirectEditPage(event) {
    const id = event.target.dataset.id;
    window.location.href = "editar.html?id=" + id;
    
}

function listAnimals(){ 

    
    fetch("http://cafepradev.com.br:21020/animals/list", {      
        method : "GET",
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        },
    })

    .then(response => response.json())                                                     
    .then( (animals) => {
        
        let estrutura = '';
        for(pos in animals){
            estrutura += `
            <tr>
                <td>${animals[pos].id}</td>
                <td>${animals[pos].name}</td>
                <td>${animals[pos].species}</td>
                <td>${animals[pos].color}</td>
                <td>${animals[pos].size}</td>
                <td>
                    <button data-id="${animals[pos].id}" onclick="redirectEditPage(event)">E</button>
                    <button data-id="${animals[pos].id}" onclick="deleteAnimals(event)">D</button>
                </td>
            </tr>
            `
        }
        
        let tabela = document.querySelector("#listarAnimais") 
        tabela.innerHTML = estrutura

    })
    .catch(erro => {
        console.log(erro)
    })

}

listAnimals(); 

