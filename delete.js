$(function () {
    $(document).on('click', '.deletaItem', function () {

        let relValue = this.getAttribute("rel");
        let item = {
            id: relValue
        };


        fetch("http://cafepradev.com.br:21020/animals/delete", {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },

            body: JSON.stringify(item) 
        })
        setTimeout(function () {
            location.reload();
        }, 100)
    })
    return false;

});