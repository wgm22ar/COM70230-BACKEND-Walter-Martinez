//const express = require("express");
import { Router } from "express";
//const CartManager = require("../managers/cart-manager.js");
//const cartManager = new CartManager("./src/data/carts.json"); 
const router = Router(); 

//1) La ruta raíz POST / deberá crear un nuevo carrito

router.post("/api/cart", async (req, res) => {
    try {
        const nuevoCarrito = await cartManager.crearCarrito();
        res.send(nuevoCarrito);
    } catch (error) {
        res.status(500).send("Error interno del servidor");
    }
})

//2) La ruta GET /:cid deberá listar los productos que pertenezcan al carrito con el parámetro cid proporcionados.

router.get("/api/cart/:cid", async (req, res) => {
    let carritoId = parseInt(req.params.cid); 

    try {
        const carritoBuscado = await cartManager.getCarritoById(carritoId); 

        res.json(carritoBuscado.products); 
    } catch (error) {
        res.status(500).send("Error interno del servidor");
    }
})


//3) La ruta POST  /:cid/product/:pid deberá agregar el producto al arreglo “products” del carrito seleccionado

router.post("/:cid/product/:pid", async (req, res) => {
    const carritoId = parseInt(req.params.cid); 
    const productId = parseInt(req.params.pid); 
    const quantity = req.body.quantity || 1; 

    try {
        const carritoActualizado = await cartManager.agregarProductoAlCarrito(carritoId, productId, quantity);
        res.json(carritoActualizado.products); 
    } catch (error) {
        res.status(500).send("Error interno del servidor");
    }
})

export default router
//module.exports = router; 