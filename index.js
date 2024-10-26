const express =  require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the travels API!!",
        status: "success"
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})