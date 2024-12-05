const Productoapp = Vue.createApp({
    data() {
        return {
            producto: null, 

        };
    },
    methods: {
        cargarProducto() {
            const productoGuardado = localStorage.getItem("productoSeleccionado");
            if (productoGuardado) {
                this.producto = JSON.parse(productoGuardado);
            } else {
                alert("No hay producto seleccionado.");
                window.location.href = "index.html"; 
            }
        },
        aumentarCantidad(producto) {
            if (producto.cantidad < 6) {
                producto.cantidad++;
            }
        },
        disminuirCantidad(producto) {
            if (producto.cantidad > 1) {
                producto.cantidad--;
            }
        },
        regresar() {
            const posicionScroll = localStorage.getItem("scrollPosicion");
            window.location.href = "index.html";
            if (posicionScroll) {
                setTimeout(() => window.scrollTo(0, posicionScroll), 100);
            }
        },
    },
    created() {
        this.cargarProducto(); // 
    },
});

Productoapp.mount("#producto-contenedor");
