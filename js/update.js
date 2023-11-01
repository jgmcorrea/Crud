let url_string = window.location.href; 
let url = new URL(url_string);
let id = url.searchParams.get("id");       
fetch("http://cafepradev.com.br:21020/animals/search/" + id, {      
    method : "GET",
    headers : {
        "Content-type" : "application/json; charset=UTF-8"
    },
}) 


.then(response => response.json())                                                    
.then( (animal) => {            
    document.querySelector('input[name="name"]').value = animal.name;
    document.querySelector('input[name="species"]').value = animal.species;
    document.querySelector('input[name="color"]').value = animal.color;
    document.querySelector('input[name="size"]').value = animal.size;
})
.catch(erro => {
    console.log(erro)
})



document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
    event.preventDefault(); 
    let formulario = new FormData(event.target)


    let url_string = window.location.href; 
    let url = new URL(url_string);
    let id = url.searchParams.get("id");

    fetch("http://cafepradev.com.br:21020/animals/update", {
        method : "PUT",
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        },
    
        body : JSON.stringify({
            id: id,
            name: formulario.get("name"),
            species: formulario.get("species"),
            color: formulario.get("color"),
            size: formulario.get("size")
        })
    })
    
    .then(response => response.json())                                                     
    .then( (res) => {
        if(res.error){
            alert(res.error.message);                                                 
        } else {
            alert(res.message);
            window.location.href = "index.html";
        }
    
    })
    .catch(erro => {
        console.log(erro)
    })
  });


