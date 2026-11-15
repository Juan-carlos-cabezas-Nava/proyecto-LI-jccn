// Desplazamiento suave a una sección
function scrollToSection(id) {
    const elemento = document.getElementById(id);
    if (elemento) elemento.scrollIntoView({ behavior: 'smooth' });
}

// Filtrar testimonios
function filtrarTestimonios() {
    const busqueda = document.getElementById('buscador').value.toLowerCase();
    const testimonios = document.querySelectorAll('.testimonio');
    
    testimonios.forEach(t => {
        const texto = t.textContent.toLowerCase();
        t.style.display = texto.includes(busqueda) ? 'block' : 'none';
    });
}

// Enviar formulario de adhesión
function enviarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const exito = document.getElementById('mensaje-exito');
    const error = document.getElementById('mensaje-error');
    
    // Ocultar mensajes anteriores
    exito.style.display = 'none';
    error.style.display = 'none';
    
    if (nombre === '') {
        error.style.display = 'block';
    } else {
        exito.style.display = 'block';
        document.getElementById('nombre').value = '';
        // Ocultar mensaje luego de 4s
        setTimeout(() => exito.style.display = 'none', 4000);
    }
}

// Generar tarjeta personalizada
function generarTarjeta() {
    const frase = document.getElementById('frase-tarjeta').value.trim();
    const textoTarjeta = document.getElementById('texto-tarjeta');
    
    if (frase === '') {
        textoTarjeta.innerHTML = 'Nunca más el silencio.<br>Memoria, Verdad y Justicia.<br><em>Siempre.</em>';
    } else {
        textoTarjeta.innerHTML = frase + '<br><br>— Memoria Activa';
    }
}
