const url="http://localhost:3000/pizza";
const getAllPizzas = () => {
    axios.get(url)
        .then(res => {
            const tablaPizzas = document.getElementById("tablaPizzas");
            const listaPizza = res.data;
            listaPizza.forEach(element => {
                const fila = document.createElement("tr");
                fila.innerHTML = `<th>${element.Id}</th>
                            <td>${element.Nombre}</td>
                            <td>ARS$${element.Importe}</td>
                            <td>${element.Descripcion}</td>
                            <td>${element.LibreGluten ? "Si" : "No"}</td>  `
                tablaPizzas.appendChild(fila);
            });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
          })
    }
    function searchFunction() {
        // Declare variables
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("inp");
        filter = input.value.toUpperCase();
        table = document.getElementById("table");
        tr = table.getElementsByTagName("tr");
  
        // Loop through all table rows, and hide those who don't match the search query
        for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = "";
            } else {
              tr[i].style.display = "none";
            }
          }
        }
      }