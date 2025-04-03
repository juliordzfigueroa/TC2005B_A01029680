// Esperamos a que todo el contenido del DOM se haya cargado
document.addEventListener('DOMContentLoaded', function() {

    // 1. Mostrar la posición del mouse en el documento
    // Se añade un listener al evento 'mousemove' en el documento
    document.addEventListener('mousemove', function(event) {
      // Obtenemos la posición X e Y del mouse
      const x = event.clientX;
      const y = event.clientY;
      // Actualizamos el contenido del párrafo con id "mousePosition"
      const mousePosElement = document.getElementById('mousePosition');
      mousePosElement.textContent = `Posición del mouse: ${x}, ${y}`;
    });
  
    // 2. Obtener nombre y apellido al dar click en el botón y mostrar el nombre completo
    // Seleccionamos el formulario por su id "form1"
    const form1 = document.getElementById('form1');
    form1.addEventListener('submit', function(event) {
      // Prevenimos el comportamiento por defecto del formulario (recarga de página)
      event.preventDefault();
      // Obtenemos el valor de los inputs de nombre y apellido
      const firstName = document.getElementById('form-fname').value;
      const lastName = document.getElementById('form-lname').value;
      // Concatenamos el nombre completo
      const fullName = `${firstName} ${lastName}`;
  
      // Creamos un nuevo elemento párrafo para mostrar el nombre completo
      const fullNameElement = document.createElement('p');
      fullNameElement.textContent = `Nombre completo: ${fullName}`;
  
      // Agregamos el nuevo elemento al final del formulario
      form1.appendChild(fullNameElement);
    });
  
    // 3. Agregar una fila o una columna a la tabla "sampleTable"
  
    // Funcionalidad para insertar una nueva fila
    const btnInsertRow = document.getElementById('btn-insert-r');
    btnInsertRow.addEventListener('click', function() {
      const table = document.getElementById('sampleTable');
      // Insertamos una nueva fila al final de la tabla
      const newRow = table.insertRow(-1);
      // Obtenemos el número de columnas de la primera fila
      const numCols = table.rows[0].cells.length;
      // Calculamos el índice de la nueva fila (para mostrarlo en el contenido)
      const rowIndex = table.rows.length;
      // Creamos y añadimos una celda por cada columna existente
      for (let i = 0; i < numCols; i++) {
        const newCell = newRow.insertCell(i);
        newCell.textContent = `Row ${rowIndex} column ${i + 1}`;
      }
    });
  
    // Funcionalidad para insertar una nueva columna
    const btnInsertCol = document.getElementById('btn-insert-c');
    btnInsertCol.addEventListener('click', function() {
      const table = document.getElementById('sampleTable');
      // Por cada fila, agregamos una nueva celda al final
      for (let i = 0; i < table.rows.length; i++) {
        const row = table.rows[i];
        // El nuevo índice de la columna será el número actual de celdas + 1
        const newColIndex = row.cells.length + 1;
        const newCell = row.insertCell(-1);
        newCell.textContent = `Row ${i + 1} column ${newColIndex}`;
      }
    });
  
    // 4. Actualizar el contenido de la tabla "myTable" según la posición y texto ingresado
  
    // Añadimos un listener al botón "btn-change"
    const btnChange = document.getElementById('btn-change');
    btnChange.addEventListener('click', function() {
      // Obtenemos los valores de los inputs: posición de fila, columna y nuevo contenido
      const rowIndexInput = document.getElementById('rowIndex').value;
      const colIndexInput = document.getElementById('colIndex').value;
      const newValue = document.getElementById('newValue').value;
      // Convertimos los índices a números; asumimos que el usuario ingresa índices basados en 1
      const rowIndex = parseInt(rowIndexInput, 10) - 1;
      const colIndex = parseInt(colIndexInput, 10) - 1;
      const table = document.getElementById('myTable');
      
      // Verificamos si la fila y columna existen en la tabla
      if (table.rows[rowIndex] && table.rows[rowIndex].cells[colIndex]) {
        // Actualizamos el contenido de la celda en la posición indicada
        table.rows[rowIndex].cells[colIndex].textContent = newValue;
      } else {
        // Si la posición es inválida, informamos al usuario
        alert("Posición inválida. Por favor, ingresa índices válidos.");
      }
    });
  
    // 5. Agregar o quitar elementos a la lista de opciones (select)
  
    // Función para generar un color aleatorio en formato hexadecimal
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
    // Listener para agregar un color a la lista de opciones
    const btnAddColor = document.getElementById('btn-add-color');
    btnAddColor.addEventListener('click', function() {
      const select = document.getElementById('colorSelect');
      // Creamos un nuevo elemento option
      const newOption = document.createElement('option');
      // Generamos un color aleatorio
      const randomColor = getRandomColor();
      // Asignamos el color generado como texto y valor de la opción
      newOption.textContent = randomColor;
      newOption.value = randomColor;
      // Agregamos la nueva opción al select
      select.appendChild(newOption);
    });
  
    // Listener para quitar la última opción de la lista
    const btnRemoveColor = document.getElementById('btn-rmv-color');
    btnRemoveColor.addEventListener('click', function() {
      const select = document.getElementById('colorSelect');
      // Si existen opciones, removemos la última opción
      if (select.options.length > 0) {
        select.remove(select.options.length - 1);
      }
    });
  
    // 6. Cambiar el tamaño de la imagen al pasar el mouse sobre ella
  
    // Seleccionamos la imagen por su id "imagenGato"
    const imagenGato = document.getElementById('imagenGato');
    imagenGato.addEventListener('mouseenter', function() {
      // Generamos números aleatorios entre 300 y 600 para width y height
      const randomWidth = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
      const randomHeight = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
      // Se cambia el atributo src de la imagen usando "https" para evitar problemas de contenido mixto
      imagenGato.src = `https://placecats.com/${randomWidth}/${randomHeight}`; // Se tuvo que modificar la liga para las nuevas imagenes por un error
    });
  });

  