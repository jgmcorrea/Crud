$(function () {

    function listarAnimais() {
        fetch("http://cafepradev.com.br:21020/animals/list", {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(data => {
                $('#carregarAnimais').empty();

                data.forEach(animais => {
                    $('#carregarAnimais').append(`
                    <tr>
                        <td>${animais.id}</td>
                        <td>${animais.name}</td>
                        <td>${animais.species}</td>
                        <td>${animais.color}</td>
                        <td>${animais.size}</td>
                        <td>
                            <a href="#" class="btn btn-danger deletaItem" rel="${animais.id}">Del</a>


                            <button type="button" class="btn btn-warning editarItem" rel="${animais.id}" data-bs-toggle="modal" data-bs-target="#Modal"
                                data-bs-whatever="@getbootstrap">Edit</button>

                            <div class="modal fade" id="Modal" tabindex="-1" aria-labelledby="ModalLabel"
                                aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="ModalLabel">Editar Animal</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <form>
                                                <div class="mb-3">
                                                    <label for="nameAtu"
                                                        class="col-form-label"></label>
                                                    <input type="text" class="form-control" id="nameAtu" placeholder="Nome do Animal:">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="speciesAtu"
                                                        class="col-form-label"></label>
                                                    <input type="text" class="form-control" id="speciesAtu" placeholder="Nome da Espécie:">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="colorAtu"
                                                        class="col-form-label"></label>
                                                    <input type="text" class="form-control" id="colorAtu" placeholder="Cor do Animal:">
                                                </div>
                                                <div class="mb-3">
                                                    <label for="sizeAtu"
                                                        class="col-form-label"></label>
                                                    <input type="text" class="form-control" id="sizeAtu" placeholder="Tamanho do Animal:">
                                                </div>
                                            </form>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger"
                                                data-bs-dismiss="modal">Cancelar</button>
                                            <button type="submit" class="btn btn-warning btnSalvarEdit">Editar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    `
                    );
                });
            })
            .catch(error => console.error(error));
    }

    listarAnimais();

    return false
});