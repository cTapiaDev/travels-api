const express =  require('express');
const { describe } = require('node:test');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the travels API!!",
        status: "success"
    });
});

app.get('/es/tour', (req, res) => {
    const tourES = [
        {
            id: 1,
            nombre: "San Pedro de Atacama",
            ubicacion: "Región de Antofagasta",
            descripcion: "Pueblo desértico famoso por sus paisajes únicos y cielos despejados ideales para astronomía.",
            atracciones: "Valle de la Luna, Geysers del Tatio,etc...",
            clima: "Árido y seco",
            imagen: "https://i.ibb.co/rFtsG8k/san-pedro-atacama.jpg"
        },
        {
            id: 2,
            nombre: "Valparaíso",
            ubicacion: "Región de Valparaíso",
            descripcion: "Ciudad portuario con arquitectura colorida y arte urbano. Patrimonio de la Humanidad.",
            atracciones: "Cerro Concepción, Puerto de Valparaíso, etc...",
            clima: "Mediterráneo costero",
            imagen: "https://i.ibb.co/Qf8Z0Q3/valparaiso.jpg"
        },
        {
            id: 3,
            nombre: "Torres del Paine",
            ubicacion: "Región de Magallanes",
            descripcion: "Parque Nacional de montañas, lagos y glaciares, ideal para aventura extrema.",
            atracciones: "Torres del Paine, Glaciar Grey, etc...",
            clima: "Frío y ventoso",
            imagen: "https://i.ibb.co/zxQ3tN7/torres-paine.jpg"

        },
        {
            id: 4,
            nombre: "Isla de Pascua (Rapa Nui)",
            ubicacion: "Región de Valparaíso (Isla en el Océano Pacífico)",
            descripcion: "Isla remota famosa por los moáis y su cultura polinésica.",
            atracciones: "Ahu Tongariki, Playa Anakena, etc...",
            clima: "Tropical",
            imagen: "https://i.ibb.co/kgTdtZ8/rapa-nui.jpg"
        },
        {
            id: 5,
            nombre: "Chiloé",
            ubicacion: "Región de Los Lagos",
            descripcion: "Archipiélago de mitos y paisajes únicos, con iglesias de madera. Patrimonio Mundial.",
            atracciones: "Iglesias de Castro, Parque Nacional Chiloé, etc...",
            clima: "Templado oceánico",
            imagen: "https://i.ibb.co/bzPtRsj/chiloe.jpg"
        }, 
        {
            id: 6,
            nombre: "Pucón",
            ubicacion: "Región de La Araucanía",
            descripcion: "Capital del turismo de aventura, situada al pie del volcán Villarrica.",
            atracciones: "Lago Villarrica, Termas Geométricas, etc...",
            clima: "Templado lluvioso",
            imagen: "https://i.ibb.co/Jkc6n9t/pucon.jpg"
        },
        {
            id: 7,
            nombre: "Viña del Mar",
            ubicacion: "Región de Valparaíso",
            descripcion: "Ciudad costera famosa por sus playas y el Festival de Viña del Mar.",
            atracciones: "Reloj de Flores, Playa Reñaca, etc...",
            clima: "Mediterráneo costero",
            imagen: "https://i.ibb.co/Dpj3kkF/vina-del-mar.jpg"
        },
        {
            id: 8,
            nombre: "La Serena",
            ubicacion: "Región de Coquimbo",
            descripcion: "Ciudad colonial con cielos despejados, ideal para la astronomía.",
            atracciones: "Faro Monumental, Observatorio Mamalluca, etc...",
            clima: "Semiárido",
            imagen: "https://i.ibb.co/L51Fv1f/la-serena.jpg"
        },
        {
            id: 9,
            nombre: "Frutillar",
            ubicacion: "Región de Los Lagos",
            descripcion: "Ciudad con influencia alemana, famosa por su Festival de Música Clásica.",
            atracciones: "Teatro del Lago, Museo Alemán, etc...",
            clima: "Templado y lluvioso",
            imagen: "https://i.ibb.co/tCVHM0Q/frutillar.jpg"
        },
        {
            id: 10,
            nombre: "Valle del Elqui",
            ubicacion: "Región de Coquimbo",
            descripcion: "Valle de viñedos y cielos claros, famoso por la producción de pisco.",
            atracciones: "Pisco Elqui, Observatorio Mamalluca, etc...",
            clima: "Semiárido",
            imagen: "https://i.ibb.co/xCvzGXf/valle-elqui.jpg"
        },
        {
            id: 11,
            nombre: "Puerto Varas",
            ubicacion: "Región de Los Lagos",
            descripcion: "Ciudad con vistas al lago Llanquihue y al volcán Osorno.",
            atracciones: "Saltos del Petrohué, Lago Llanquihue, etc...",
            clima: "Templado lluvioso",
            imagen: "https://i.ibb.co/1bzjWWv/puerto-varas.jpg"
        },
        {
            id: 12,
            nombre: "Antofagasta",
            ubicacion: "Región de Antofagasta",
            descripcion: "Ciudad costera y minera en el desierto de Atacama, famosa por su Arco de La Portada.",
            atracciones: "La Portada, Playa Paraíso, etc...",
            clima: "Árido",
            imagen: "https://i.ibb.co/8Y9hwB7/antofagasta.jpg"
        }
    ];
    res.json(tourES);
});

app.get('/es/tour/:id', (req, res) => {
    const idES = [
        {
            id: 1,
            nombre: "San Pedro de Atacama",
            ubicacion: "Región de Antofagasta, Norte de Chile",
            descripcion: "Un pintoresco pueblo enclavado en el desierto de Atacama, el más árido del mundo. San Pedro es famoso por su atractivo natural, que incluye salares, formaciones rocosas únicas y lagunas altiplánicas, además de su cielo claro y sin contaminación, perfecto para la observación astronómica.",
            atracciones: [
                "Valle de la Luna", 
                "Geysers del Tatio", 
                "Laguna Cejar",
                "Salar de Atacama",
                "Termas de Puritama"
            ],
            clima: "Árido y seco, con temperaturas de hasta 30°C en el día y 0°C en la noche.",
            imagen: "https://i.ibb.co/G7RzGHq/atacama-geysers.jpg",
            actividades: [
                "Observación astronómica", 
                "Trekking",
                "Ciclismo",
                "Exploración de Salares",
                "Baños en Termas Naturales"
            ],
            gastronomia: [
                "Quinoa",
                "Cazuela Atacameña",
                "Charqui"
            ],
            acceso: "A 98 km del Aeropuerto Internacional El Loa (Calama), conectado por transporte terrestre."
        },
        {
            id: 2,
            nombre: "Valparaíso",
            ubicacion: "Región de Valparaíso, Costa Central de Chile",
            descripcion: "Ciudad costera y portuaria reconocida por su arquitectura colorida en cerros y su vibrante vida bohemia. El laberinto de calles y escaleras, lleno de murales y arte urbano, le ha valido el reconocimiento de la UNESCO como Patrimonio de la Humanidad.",
            atracciones: [
                "Cerro Concepción",
                "Cerro Alegre",
                "Museo La Sebastiana (Casa de Pablo Neruda)", 
                "Ascensores Históricos", 
                "Puerto de Valparaíso"
            ],
            clima: "Mediterráneo costero, con veranos secos e inviernos moderadamente lluviosos.",
            imagen: "https://i.ibb.co/MBPxNtY/valparaiso-puerto.jpg",
            actividades: [
                "Arte Callejero",
                "Tours Históricos",
                "Paseos en Funicular",
                "Fotografía Urbana"
            ],
            gastronomia: [
                "Calzones Rotos",
                "Mariscos",
                "Pescado Frito",
                "Chorrillana"
            ],
            acceso: "A 120 km de Santiago, la capital, con conexiones por carretera y tren (Merval)."
        },
        {
            id: 3,
            nombre: "Torres del Paine",
            ubicacion: "Región de Magallanes y la Antártica Chilena, Patagonia chilena",
            descripcion: "Parque Nacional de 242,000 hectáreas declarado Reserva de la Biosfera por la UNESCO. Es conocido por sus majestuosas montañas, lagos glaciares y campos de hielo, siendo un destino soñado para quienes buscan experiencias de naturaleza extrema.",
            atracciones: [
                "Torres del Paine", 
                "Cuernos del Paine", 
                "Glaciar Grey", 
                "Lago Nordenskjöld", 
                "Salto Grande"
            ],
            clima: "Frío y ventoso, con variaciones extremas; temperaturas que van desde 0°C hasta 15°C.",
            imagen: "https://i.ibb.co/YDQTXXY/torres-paine-glaciar.jpg",
            actividades: [
                "Trekking (W y Circuito O)", 
                "Senderismo", 
                "Kayak", 
                "Observación de Fauna y Fotografía"
            ],
            gastronomia: [
                "Asado de Cordero", 
                "Calafate (fruta)", 
                "Empanadas de Cordero"
            ],
            acceso: "A 112 km de Puerto Natales, y 312 km del Aeropuerto de Punta Arenas."
        },
        {
            id: 4,
            nombre: "Isla de Pascua (Rapa Nui)",
            ubicacion: "Región de Valparaíso (Isla en el Océano Pacífico)",
            descripcion: "Una de las islas habitadas más remotas del mundo, famosa por sus moáis, estatuas de piedra que representan ancestros sagrados, y su cultura única de origen polinésico.",
            atracciones: [
                "Moáis", 
                "Ahu Tongariki", 
                "Rano Raraku (Cantera de Moáis)", 
                "Playa Anakena", 
                "Orongo"
            ],
            clima: "Tropical, con temperaturas templadas y alta humedad.",
            imagen: "https://i.ibb.co/pd0gQwY/rapa-nui-anakena.jpg",
            actividades: [
                "Buceo", 
                "Exploración de Cuevas", 
                "Turismo Arqueológico", 
                "Snorkel", 
                "Surf"
            ],
            gastronomia: [
                "Poe (Dulce de Taro)", 
                "Umu Pae (Curanto)", 
                "Tunu Ahi (Pescado Asado)"
            ],
            acceso: "Vuelos regulares desde Santiago de Chile (5 horas de vuelo)."
        },
        {
            id: 5,
            nombre: "Chiloé",
            ubicacion: "Región de Los Lagos",
            descripcion: "Una tierra de mitos y leyendas donde se fusionan el ambiente rural y la tradición costera. Chiloé es famosa por sus iglesias de madera, palafitos coloridos y paisajes verdes que contrastan con el cielo nublado.",
            atracciones: [
                "Iglesias de Castro y Dalcahue", 
                "Parque Nacional Chiloé", 
                "Muelle de las Almas", 
                "Faro de Ancud"
            ],
            clima: "Templado oceánico, con alta humedad y frecuentes lluvias.",
            imagen: "https://i.ibb.co/8NHMP6X/chiloe-muelle.jpg",
            actividades: [
                "Recorridos por Palafitos", 
                "Avistamiento de Delfines y Ballenas", 
                "Turismo Cultural", 
                "Exploración de Parques Naturales"
            ],
            gastronomia: [
                "Curanto", 
                "Milcao", 
                "Chapalele"
            ],
            acceso: "A través de un ferry desde el continente o vuelos al Aeropuerto Mocopulli en Castro."
        }, 
        {
            id: 6,
            nombre: "Pucón",
            ubicacion: "Región de La Araucanía, Sur de Chile",
            descripcion: "Pucón es una pequeña ciudad conocida como la 'capital del turismo de aventura' de Chile, situada a orillas del lago Villarrica y al pie del volcán Villarrica. Su entorno de naturaleza prístina incluye ríos, lagos y termas que lo convierten en un destino ideal para el ecoturismo y las actividades al aire libre.",
            atracciones: [
                "Lago Villarrica", 
                "Volcán Villarrica", 
                "Termas Geométricas", 
                "Parque Nacional Huerquehue"
            ],
            clima: "Templado lluvioso, con veranos cálidos e inviernos fríos y lluviosos.",
            imagen: "https://i.ibb.co/1KxwdKG/pucon-volcan.jpg",
            actividades: [
                "Escalada de Volcán", 
                "Rafting", 
                "Termas", 
                "Kayak", 
                "Pesca Recreativa", 
                "Esquí en Invierno"
            ],
            gastronomia: [
                "Trucha y Salmón de Río", 
                "Piñones", 
                "Empanadas de Carne y Queso"
            ],
            acceso: "A 80 km del Aeropuerto de Temuco, con acceso en transporte terrestre y autobús."
        },
        {
            id: 7,
            nombre: "Viña del Mar",
            ubicacion: "Región de Valparaíso, Costa Central de Chile",
            descripcion: "Conocida como la 'Ciudad Jardín', Viña del Mar es un destino turístico famoso por sus playas, jardines, parques y un ambiente cultural vibrante. El Festival Internacional de la Canción de Viña del Mar atrae a artistas y espectadores de todo el mundo.",
            atracciones: [
                "Reloj de Flores", 
                "Playa Reñaca", 
                "Quinta Vergara", 
                "Museo Fonck", 
                "Castillo Wulff"
            ],
            clima: "Mediterráneo costero, con inviernos templados y veranos agradables.",
            imagen: "https://i.ibb.co/H2jvQz9/vina-del-mar-reloj.jpg",
            actividades: [
                "Festival Internacional de la Canción", 
                "Paseos por la Playa", 
                "Visitas a Museos", 
                "Exploración de Jardines y Castillos"
            ],
            gastronomia: [
                "Machas a la Parmesana", 
                "Empanadas de Mariscos", 
                "Pastel de Jaiba"
            ],
            acceso: "A solo 120 km de Santiago, conectado por la Ruta 68."
        },
        {
            id: 8,
            nombre: "La Serena",
            ubicacion: "Región de Coquimbo, Norte de Chile",
            descripcion: "La Serena es una ciudad colonial y turística famosa por su arquitectura neocolonial, sus largas playas y su cercanía al Valle del Elqui. Es conocida también por su atractivo como destino astronómico gracias a sus cielos despejados.",
            atracciones: [
                "Faro Monumental", 
                "Valle del Elqui", 
                "Observatorio Mamalluca", 
                "Iglesia San Francisco"
            ],
            clima: "Semiárido, con clima templado y soleado durante casi todo el año.",
            imagen: "https://i.ibb.co/H7dxPwS/la-serena-faro.jpg",
            actividades: [
                "Observación Astronómica", 
                "Tours de Viñedos", 
                "Deportes Acuáticos", 
                "Paseos por el Centro Histórico"
            ],
            gastronomia: [
                "Papayas de La Serena", 
                "Queso de Cabra", 
                "Empanadas de Mariscos"
            ],
            acceso: "A 475 km al norte de Santiago, con vuelos directos al Aeropuerto La Florida."
        },
        {
            id: 9,
            nombre: "Frutillar",
            ubicacion: "Región de Los Lagos, Sur de Chile",
            descripcion: "Frutillar es una pequeña ciudad con influencia alemana ubicada a orillas del Lago Llanquihue. Es conocida por su música, cultura y por ser la sede del Festival Internacional de Música Clásica.",
            atracciones: [
                "Teatro del Lago", 
                "Museo Colonial Alemán", 
                "Lago Llanquihue",
                "Playa Frutillar"
            ],
            clima: "Templado y lluvioso, con veranos suaves e inviernos fríos.",
            imagen: "https://i.ibb.co/XVhymfK/frutillar-muelle.jpg",
            actividades: [
                "Turismo Cultural", 
                "Conciertos", 
                "Festivales", 
                "Senderismo", 
                "Paseos en Bote"
            ],
            gastronomia: [
                "Kuchen de Manzana", 
                "Chucrut", 
                "Salchichas Alemanas", 
                "Cervezas Artesanales"
            ],
            acceso: "A 28 km de Puerto Varas y 45 km del Aeropuerto El Tepual en Puerto Montt."
        },
        {
            id: 10,
            nombre: "Valle del Elqui",
            ubicacion: "Región de Coquimbo, Norte de Chile",
            descripcion: "Valle de clima templado famoso por sus viñedos de pisco y sus cielos despejados, ideal para la astronomía. Además, se considera un lugar energético, atrayendo a quienes buscan experiencias místicas.",
            atracciones: [
                "Pisco Elqui", 
                "Observatorio Cerro Mamalluca", 
                "Viñedos", 
                "Embalse Puclaro"
            ],
            clima: "Semiárido con cielos despejados durante la mayor parte del año.",
            imagen: "https://i.ibb.co/5FwVMVK/valle-elqui-vicuna.jpg",
            actividades: [
                "Tours de Pisco", 
                "Observación Astronómica", 
                "Visitas a Viñedos", 
                "Trekking"
            ],
            gastronomia: [
                "Pisco Sour", 
                "Empanadas de Pino", 
                "Pastel de Choclo"
            ],
            acceso: "A 100 km de La Serena por carretera."
        },
        {
            id: 11,
            nombre: "Puerto Varas",
            ubicacion: "Región de Los Lagos, Sur de Chile",
            descripcion: "Con arquitectura de influencia alemana y rodeado de montañas, Puerto Varas ofrece vistas increíbles al Lago Llanquihue y al volcán Osorno.",
            atracciones: [
                "Saltos del Petrohué", 
                "Lago Llanquihue", 
                "Parque Nacional Vicente Pérez Rosales"
            ],
            clima: "Templado lluvioso, con lluvias frecuentes y temperaturas frescas.",
            imagen: "https://i.ibb.co/xjvMtcz/puerto-varas-travel.jpg",
            actividades: [
                "Senderismo", 
                "Fotografía de Paisajes", 
                "Deportes Acuáticos", 
                "Visitas a Cascadas"
            ],
            gastronomia: [
                "Kuchen de Frutos Rojos",
                "Empanadas de Mariscos",
                "Cervezas Artesanales",
                "Chuleta Ahumada"
            ],
            acceso: "A 45 km del Aeropuerto El Tepual, en Puerto Montt, y con acceso por la Ruta 225."
        },
        {
            id: 12,
            nombre: "Antofagasta",
            ubicacion: "Región de Antofagasta, Norte de Chile",
            descripcion: "Ciudad costera conocida como la 'Perla del Norte', Antofagasta se destaca por su entorno desértico y su importante rol en la minería del cobre. Su costa en contraste con el desierto de Atacama la convierte en un lugar único para la exploración de paisajes y la observación de cielos despejados.",
            atracciones: [
                "La Portada",
                "Playa Paraíso",
                "Ruinópolis"
            ],
            clima: "Árido desértico, con temperaturas cálidas durante el día y frescas por la noche, y casi sin lluvias durante el año.",
            imagen: "https://i.ibb.co/jLtGy0v/antofagasta-mano.jpg",
            actividades: [
                "Exploración de Paisajes Costeros",
                "Visitas a Sitios Históricos",
                "Observación Astronómica"
            ],
            gastronomia: [
                "Empanadas de Mariscos",
                "Cazuela de Mariscos",
                "Chupe de Loco",
                "Pescados Frescos"
            ],
            acceso: "A través del Aeropuerto Andrés Sabella, con conexiones nacionales e internacionales."
        }
    ];

    const element = parseInt(req.params.id);
    const tour = idES.find(e => e.id === element);

    if (tour) {
        res.json(tour);
    } else {
        res.status(404).json({message: "Tour not found 404"});
    }
});


const port = 3000;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});