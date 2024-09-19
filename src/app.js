
import express from "express"
const app = express(); 
const PUERTO = 8080;
import productosRouter from "./routes/products.router.js";
import cartRouter from "./routes/carts.router.js";

//Middleware: 
app.use(express.json()); 
app.use(express.urlencoded({extended: true}))

//Rutas
app.use("/", productosRouter);
app.use("/", cartRouter);


app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`); 
})