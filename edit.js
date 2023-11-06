$(function () {
    $(document).on('click', '.editarItem', function () {
        let relValue = this.getAttribute("rel");
    
        $(document).on('click', '.btnSalvarEdit', function () {
            let idAtu = relValue
            let nameAtu = $('#nameAtu').val()
            let speciesAtu = $('#speciesAtu').val()
            let colorAtu = $('#colorAtu').val()
            let sizeAtu = $('#sizeAtu').val()
    
            let item = {
                id: idAtu,
                name: nameAtu,
                species: speciesAtu,
                color: colorAtu,
                size: sizeAtu
            };
    
            fetch("http://cafepradev.com.br:21020/animals/update", {
                method: "PUT",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(item)
            })
    
            setTimeout(function () {
                location.reload();
            }, 500)
        })
        return false;
    })


    })