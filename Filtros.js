document.addEventListener('DOMContentLoaded', function() {
    fetch('Lista.json')
        .then(response => response.json())
        .then(data => {
            const tabla = document.getElementById('Indicadores_tabla');
            const cuerpoTabla = tabla.querySelector('tbody');

            cuerpoTabla.innerHTML = '';

            data.forEach(producto => {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${producto.IdProducto}</td>
                    <td>${producto.NombreProducto}</td>
                    <td>${producto.Proveedor}</td>
                    <td>${producto.Categoría}</td>
                    <td>${producto.CantidadPorUnidad}</td>
                    <td>${producto.PrecioUnidad}</td>
                    <td>${producto.UnidadesEnExistencia}</td>
                    <td>${producto.UnidadesEnPedido}</td>
                    <td>${producto.NivelNuevoPedido}</td>
                    <td>${producto.Suspendido}</td>
                `;
                cuerpoTabla.appendChild(fila);
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});

let ultimoProveedorFiltrado = 'Todos';

function FiltroProveedor() {
    const selectedProvider = document.getElementById('proveedores').value;
    if (selectedProvider === ultimoProveedorFiltrado) {
        return; 
    }
    ultimoProveedorFiltrado = selectedProvider;
    const tabla = document.getElementById('Indicadores_tabla').querySelector('tbody');
    tabla.innerHTML = '';

    fetch('Lista.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(producto => {
                if (selectedProvider === 'Todos' || producto.Proveedor === selectedProvider) {
                    const fila = document.createElement('tr');
                    fila.innerHTML = `
                        <td>${producto.IdProducto}</td>
                        <td>${producto.NombreProducto}</td>
                        <td>${producto.Proveedor}</td>
                        <td>${producto.Categoría}</td>
                        <td>${producto.CantidadPorUnidad}</td>
                        <td>${producto.PrecioUnidad}</td>
                        <td>${producto.UnidadesEnExistencia}</td>
                        <td>${producto.UnidadesEnPedido}</td>
                        <td>${producto.NivelNuevoPedido}</td>
                        <td>${producto.Suspendido}</td>
                    `;
                    tabla.appendChild(fila);
                }
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}


function FiltroCategoria() {
    const selectedCategory = document.getElementById('categoria').value;
    const selectedProvider = document.getElementById('proveedores').value;
    const tabla = document.getElementById('Indicadores_tabla').querySelector('tbody');
    tabla.innerHTML = '';

    fetch('Lista.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(producto => {
                if ((selectedProvider === 'Todos' || producto.Proveedor === selectedProvider) &&
                    (selectedCategory === 'Todos' || producto.Categoría === selectedCategory)) {
                    const fila = document.createElement('tr');
                    fila.innerHTML = `
                        <td>${producto.IdProducto}</td>
                        <td>${producto.NombreProducto}</td>
                        <td>${producto.Proveedor}</td>
                        <td>${producto.Categoría}</td>
                        <td>${producto.CantidadPorUnidad}</td>
                        <td>${producto.PrecioUnidad}</td>
                        <td>${producto.UnidadesEnExistencia}</td>
                        <td>${producto.UnidadesEnPedido}</td>
                        <td>${producto.NivelNuevoPedido}</td>
                        <td>${producto.Suspendido}</td>
                    `;
                    tabla.appendChild(fila);
                }
            });
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
}
