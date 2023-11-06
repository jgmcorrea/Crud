$(function () {
    $(document).on('submit', '#cadastraAnimal', function (event) {
        event.preventDefault(); 

        let name = $('#name').val()
        let species = $('#species').val()
        let color = $('#color').val()
        let size = $('#size').val()

        let item = {
            name: name,
            species: species,
            color: color,
            size: size
        };

        fetch("http://cafepradev.com.br:21020/animals/insert", {
            method: "POST",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            
            body: JSON.stringify(item) 
        })
        setTimeout(function () {
            location.reload();
        }, 1000)
    });
    return false
});