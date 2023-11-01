document.getElementsByTagName("form")[0].addEventListener("submit", (event) => {
    event.preventDefault(); 
    let formulario = new FormData(event.target)

    fetch("http://cafepradev.com.br:21020/animals/insert", {
        method : "POST",
        headers : {
            "Content-type" : "application/json; charset=UTF-8"
        },
    
        body : JSON.stringify({
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


