let listaPizzas = null;
const getAllPizzas = (url) => {
    url;
    axios.get(url)
        .then(res => {
            console.log(res);
            const tablaPizzas = document.getElementById("tablaPizzas");
            listaPizza = res.data.pizzas;
            res.data.pizzas.forEach(element => {
                const fila = document.createElement("tr");
                fila.innerHTML = `<th>${element.id}</th>
                            <td>${element.Nombre}</td>
                            <td>ARS$${element.Importe}</td
                            <td>ARS$${element.Descripcion}</td> 
                            <td>🍕</td> `
                tablaPizzas.appendChild(fila);
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
          })
    }

getAllPizzas("http://localhost:5000/pizza");
