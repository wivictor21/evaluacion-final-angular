import { Plato } from "src/plato";

export const COMIDA: Plato[] = [
    {
        id: 1,
        nombre: "Lasagna",
        descripcion: "La lasaña es un tipo de pasta. Se suele servir en láminas superpuestas intercaladas con capas de ingredientes al gusto, más frecuentemente carne en salsa boloñesa y bechamel. Su origen es italiano y el plato preparado usualmente con carne suele llamarse lasaña al horno.​",
        imagen: "https://assets.unileversolutions.com/recipes-v2/232080.jpg",
        procesoPreparacion: "La pasta debe consumirse entre 3 y 5 días después de haberla introducido en la nevera, según Healthline. Pero ¡ojo! Normalmente, la pasta que guardamos viene acompañada de una salsa o salteada con ingredientes que pueden estropearse antes.",
        video: "https://www.youtube.com/watch?v=6ADNGrVFLS8",
        culturaGastronomica: [1]
    },

    {
        id: 2,
        nombre: "Carbonara",
        descripcion: "Carbonara o Carbonata es un plato de pasta originario de Roma o de los Estados-Unidos​. La receta original se basa en huevos, queso, aceite de oliva virgen extra, pancetta o guanciale y pimienta negra. Los espaguetis son la pasta generalmente utilizada; sin embargo, también se pueden utilizar rigatoni o bucatini.​.​",
        imagen: "https://i.blogs.es/8819e1/carbonara-rec/1366_2000.jpg",
        procesoPreparacion: "En el caso de la pasta carbonara variará según el ingrediente que hayamos empleado para hacer la salsa: si es de huevo, como máximo debería estar 2 días, mientras que si es de nata puede aguantar hasta 3. Estos plazos no son una cuestión baladí.",
        video: "https://www.youtube.com/watch?v=OIs9tgALGNU",
        culturaGastronomica: [1]
    },

    {
        id: 3,
        nombre: "Pizza margarita",
        descripcion: "La pizza margarita es una típica pizza napolitana elaborada con tomate, mozzarella, albahaca fresca, sal y aceite. Se trata de la pizza napolitana más popular, junto con la marinera.​",
        imagen: "https://www.annarecetasfaciles.com/files/pizza-margarita-1-scaled.jpg",
        procesoPreparacion: "Es el queso italiano para pizzas por excelencia. De textura grasa y fundente, este rico queso fresco italiano tiene multitud de variantes. Nuestra recomendación: la mozzarella Fior di latte, una “flor de leche” elaborada con leche de vaca.",
        video: "https://www.youtube.com/watch?v=Nw02F1GEQYo",
        culturaGastronomica: [1]
    },

    {
        id: 4,
        nombre: "Tacos al Pastor",
        descripcion: "Los tacos al pastor son un plato típico de la comida mexicana que consiste en finas rebanadas de carne de cerdo marinadas en achiote y especias, cocidas en un trompo vertical y servidas en tortillas de maíz con cebolla, cilantro, piña y salsa.",
        imagen: "https://www.comedera.com/wp-content/uploads/2017/08/tacos-al-pastor-receta.jpg",
        procesoPreparacion: "1. Marinar la carne de cerdo en achiote y especias. 2. Cocinar la carne en un trompo vertical. 3. Cortar finas rebanadas de carne cocida. 4. Servir en tortillas de maíz con cebolla, cilantro, piña y salsa.",
        video: "https://www.youtube.com/watch?v=F7N3l6XGn-0",
        culturaGastronomica: [3]
    },
    {
        id: 5,
        nombre: "Tamales",
        descripcion: "Los tamales son un platillo tradicional de la cocina mexicana. Consisten en masa de maíz rellena de carne, chiles, verduras o frijoles, envuelta en hojas de maíz o de plátano y cocida al vapor.",
        imagen: "https://www.goya.com/media/3716/mexican-cheese-and-chile-tamales1.jpg?quality=80",
        procesoPreparacion: "1. Preparar la masa de maíz con manteca y caldo. 2. Extender una porción de masa sobre una hoja de maíz. 3. Agregar el relleno deseado. 4. Envolver la hoja de maíz alrededor de la masa y el relleno. 5. Cocinar al vapor durante aproximadamente 1 hora. 6. Servir caliente con salsa y crema.",
        video: "https://www.youtube.com/watch?v=Eelw3UEFDPI",
        culturaGastronomica: [3]
    },
    {
        id: 6,
        nombre: "Croissant",
        descripcion: "El croissant es un famoso bollo de masa hojaldrada originario de Francia. Es conocido por su textura crujiente por fuera y suave por dentro, y se suele disfrutar en el desayuno o como acompañamiento en diversas comidas.",
        imagen: "https://www.hogarmania.com/archivos/202101/cocina-recetas-como-hacer-croissants-cruasanes-caseros-XxXx80.jpg",
        procesoPreparacion: "1. Mezclar harina, levadura, azúcar y sal. 2. Extender la masa en capas finas. 3. Cortar en triángulos. 4. Enrollar y dar forma de media luna. 5. Hornear hasta que estén dorados.",
        video: "https://www.youtube.com/watch?v=QFTbZTv3wjo",
        culturaGastronomica: [2]
    },
    {
        id: 7,
        nombre: "Ratatouille",
        descripcion: "Ratatouille es un platillo provenzal de la cocina francesa que combina diversas verduras como berenjenas, tomates, pimientos, calabacines y hierbas aromáticas. Es un plato saludable y delicioso.",
        imagen: "https://www.allrecipes.com/thmb/F1rucOY3FQT5Ic0oyxdLoqU_yKc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/222006-disneys-ratatouille-DDMFS-4x3-36eb15843ab548a79e7aab761dac92e1.jpg",
        procesoPreparacion: "1. Cortar las verduras en rodajas finas. 2. Cocinar en una sartén con aceite de oliva y hierbas. 3. Servir caliente como acompañamiento o plato principal.",
        video: "https://www.youtube.com/watch?v=OeCUsncUPfo",
        culturaGastronomica: [2]
    },
    {
        id: 8,
        nombre: "Coq au Vin",
        descripcion: "El Coq au Vin es un guiso francés tradicional que se elabora con pollo cocinado lentamente en vino tinto, champiñones, cebolla, y tocino. Es un plato lleno de sabores y aromas.",
        imagen: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2022/05/27/62908f8f16215.jpeg",
        procesoPreparacion: "1. Dorar el pollo y el tocino. 2. Agregar cebolla, champiñones y ajo. 3. Verter vino tinto y caldo. 4. Cocinar a fuego lento hasta que el pollo esté tierno y la salsa espese.",
        video: "https://www.youtube.com/watch?v=bIf8jzU9uIE",
        culturaGastronomica: [2]
    },
    {
        id: 9,
        nombre: "Crème Brûlée",
        descripcion: "La Crème Brûlée es un postre francés clásico que consiste en una crema de vainilla con una capa crujiente de azúcar caramelizado en la parte superior. Es conocido por su contraste de texturas.",
        imagen: "https://assets.elgourmet.com/wp-content/uploads/2023/03/creme_ym8t9WVSMv2RrYHQwxgEZlTphPjJz3.png",
        procesoPreparacion: "1. Preparar una crema de vainilla con yemas de huevo y azúcar. 2. Verter en recipientes individuales. 3. Caramelizar la capa superior con un soplete de cocina o grill.",
        video: "https://www.youtube.com/watch?v=zl0qYiAT5D0",
        culturaGastronomica: [2]
    },
    {
        id: 10,
        nombre: "Escargots",
        descripcion: "Los Escargots son caracoles de tierra que se cocinan en mantequilla y ajo, una delicia culinaria de la gastronomía francesa. Se sirven en conchas de caracol y son un manjar delicado.",
        imagen: "https://saboryestilo.com.mx/wp-content/uploads/2020/12/escargot-superaba.jpg",
        procesoPreparacion: "1. Limpiar y cocinar los caracoles en una salsa de mantequilla y ajo. 2. Servir en las conchas de caracol. 3. Acompañar con pan crujiente.",
        video: "https://www.youtube.com/watch?v=nhiigLgmYGw",
        culturaGastronomica: [2]
    },

    {
        id: 11,
        nombre: "Paella",
        descripcion: "La paella es un plato emblemático de la cocina mediterránea, originario de España. Se prepara con arroz y una mezcla de mariscos, pollo, conejo, verduras y azafrán, lo que le da su característico color amarillo.",
        imagen: "https://www.recetasnestle.com.py/sites/default/files/srh_recipes/876038bcd1cf5abcaa28e86d9705eaf6.jpg",
        procesoPreparacion: "1. Sofreír ajo, cebolla y pimiento en aceite de oliva. 2. Agregar el arroz y el azafrán. 3. Añadir caldo caliente y los ingredientes seleccionados. 4. Cocinar a fuego lento hasta que el arroz esté tierno.",
        video: "https://www.youtube.com/watch?v=2M_T0Gpsv7g&t=1s",
        culturaGastronomica: [4]
    },
    {
        "id": 12,
        "nombre": "Tzatziki",
        "descripcion": "El tzatziki es una salsa cremosa y refrescante originaria de Grecia. Está hecha de yogur, pepino rallado, ajo, eneldo y aceite de oliva. Se sirve como acompañamiento o dip.",
        "imagen": "https://www.allrecipes.com/thmb/VVZqBxmBoQXJCqYrDoA0XJHU8AA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/145409_GreekTzatziki_ddmfs_3x4_3903-1475fff213ec4190bb847213c7b5011a.jpg",
        "procesoPreparacion": "1. Rallar el pepino y escurrir el exceso de líquido. 2. Mezclar con yogur, ajo picado, eneldo y aceite de oliva. 3. Refrigerar antes de servir.",
        "video": "https://www.youtube.com/watch?v=3GHlUSVYscE",
        "culturaGastronomica": [4]
    },
    {
        "id": 13,
        "nombre": "Falafel",
        "descripcion": "El falafel es una preparación a base de garbanzos o habas mezclados con especias y hierbas. Se forman en pequeñas bolas o hamburguesas y se fríen hasta que estén doradas. Es un plato común en la cocina de Oriente Medio.",
        "imagen": "https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS1sui-Gq7nGYDTxkycSxjBVaacNZOnOi_DFWXoIQHwePShZcQqE0qDNqhUZ4JAUruJ",
        "procesoPreparacion": "1. Mezclar garbanzos o habas con cilantro, comino, ajo y otras especias. 2. Formar bolas u hamburguesas. 3. Freír hasta que estén doradas y crujientes.",
        "video": "https://www.youtube.com/watch?v=RiCMXlEsOZc",
        "culturaGastronomica": [4]
    },
    {
        "id": 14,
        "nombre": "Tabule",
        "descripcion": "El tabule es una ensalada fresca de origen libanés. Está hecha principalmente de perejil picado, tomate, cebolla, bulgur, aceite de oliva, y limón. Es conocida por su sabor ligero y saludable.",
        "imagen": "https://imag.bonviveur.com/tabule.jpg",
        "procesoPreparacion": "1. Remojar el bulgur en agua caliente. 2. Mezclar con perejil, tomate, cebolla, aceite de oliva, y limón. 3. Dejar reposar antes de servir.",
        "video": "https://www.youtube.com/watch?v=7yK1XeLTlCs",
        "culturaGastronomica": [4]
    },
    {
        "id": 15,
        "nombre": "Moussaka",
        "descripcion": "La moussaka es un plato tradicional de Grecia. Consiste en capas de berenjenas, carne picada (generalmente cordero o ternera), tomate, cebolla y una bechamel de queso gratinada. Es similar a una lasaña mediterránea.",
        "imagen": "https://www.mygreekdish.com/wp-content/uploads/2013/05/Moussaka-recipe-Traditional-Greek-Moussaka-with-Eggplants.jpg",
        "procesoPreparacion": "1. Freír las berenjenas y dorar la carne picada. 2. Armar capas alternas de berenjenas, carne y tomate. 3. Cubrir con una capa de bechamel y queso rallado. 4. Gratinar en el horno hasta que esté dorado.",
        "video": "https://www.youtube.com/watch?v=ANJ4GoSqd5s",
        "culturaGastronomica": [4]
    },
    {
        "id": 16,
        "nombre": "Enchiladas",
        "descripcion": "Las enchiladas son un plato mexicano que consiste en tortillas de maíz rellenas de carne (generalmente pollo, res o cerdo), queso, frijoles o verduras. Se bañan en una salsa de chile y se sirven con crema, queso y cebolla.",
        "imagen": "https://www.gourmet.cl/wp-content/uploads/2021/08/foto-istock-enchilada-tama%C3%B1o-web.jpg",
        "procesoPreparacion": "1. Rellenar las tortillas con la carne o el relleno deseado. 2. Enrollar las tortillas. 3. Bañar con la salsa de chile. 4. Servir con crema, queso rallado y cebolla picada.",
        "video": "https://www.youtube.com/watch?v=MOI4-aFFy1Q",
        "culturaGastronomica": [3]
    },
    {
        "id": 17,
        "nombre": "Pozole",
        "descripcion": "El pozole es un platillo tradicional mexicano, una sopa espesa a base de maíz hominy y carne (generalmente cerdo o pollo). Se sirve con rábanos, lechuga, cebolla, orégano, chiles y limón.",
        "imagen": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhxxwF1UHvcB9s_z6fQ2Bg7ZP6_dfHeSJS1Q&usqp=CAU",
        "procesoPreparacion": "1. Cocinar el maíz hominy y la carne en caldo. 2. Servir caliente con los acompañamientos de rábanos, lechuga, cebolla, orégano, chiles y limón.",
        "video": "https://www.youtube.com/watch?v=7hoK_K3KX9Q",
        "culturaGastronomica": [3]
    },

    {
        "id": 18,
        "nombre": "Sushi",
        "descripcion": "El sushi es un plato japonés icónico que consiste en arroz sazonado con vinagre, acompañado de pescado fresco, mariscos, verduras y otros ingredientes. Se sirve con salsa de soja, wasabi y jengibre encurtido.",
        "imagen": "https://assets.unileversolutions.com/recipes-v2/237341.jpg",
        "procesoPreparacion": "1. Cocinar el arroz y sazonarlo con vinagre y azúcar. 2. Cortar el pescado y otros ingredientes en tiras o láminas. 3. Enrollar el arroz y los ingredientes en alga nori. 4. Cortar en porciones y servir con salsa de soja, wasabi y jengibre encurtido.",
        "video": "https://www.youtube.com/watch?v=IGCIX3kLzLw",
        "culturaGastronomica": [5]
    },
    {
        "id": 19,
        "nombre": "Ramen",
        "descripcion": "El ramen es una sopa japonesa con fideos, que se sirve en un caldo sabroso y se complementa con carne (por lo general cerdo), huevo, brotes de bambú y cebolla verde. Es un plato reconfortante y popular.",
        "imagen": "https://editorialtelevisa.brightspotcdn.com/65/5d/27e36e4c48d287e403b002e6da63/ramen.jpg",
        "procesoPreparacion": "1. Cocinar los fideos en caldo. 2. Preparar el caldo con ingredientes como huesos de cerdo, miso o salsa de soja. 3. Servir caliente con los ingredientes deseados.",
        "video": "https://www.youtube.com/watch?v=bhi74---e_k",
        "culturaGastronomica": [5]
    },
    {
        "id": 20,
        "nombre": "Tempura",
        "descripcion": "La tempura es una técnica japonesa de fritura en la que los alimentos (generalmente mariscos y verduras) se sumergen en una masa ligera y crujiente y se fríen hasta que estén dorados. Se sirve con salsa de inmersión.",
        "imagen": "https://i0.wp.com/www.sushilab.cl/wp-content/uploads/2023/05/BLOG.jpg?fit=1920%2C1080&ssl=1",
        "procesoPreparacion": "1. Preparar una masa ligera con harina de tempura y agua fría. 2. Sumergir los alimentos en la masa y freír en aceite caliente hasta que estén dorados. 3. Servir con salsa de inmersión.",
        "video": "https://www.youtube.com/watch?v=1AuWBrLpknA",
        "culturaGastronomica": [5]
    },
    {
        "id": 21,
        "nombre": "Okonomiyaki",
        "descripcion": "El okonomiyaki es una especie de panqueque japonés que contiene repollo, cerdo, mariscos u otros ingredientes, y se cocina en una plancha. Se cubre con salsa okonomiyaki y mayonesa japonesa.",
        "imagen": "https://www.museodelasculturas.mx/wp-content/uploads/2021/08/233740853_2944882075733396_6179271978572270544_n.jpg",
        "procesoPreparacion": "1. Mezclar repollo rallado, cerdo, harina y huevo en una masa. 2. Cocinar en una plancha hasta que ambos lados estén dorados. 3. Servir con salsa okonomiyaki y mayonesa.",
        "video": "https://www.youtube.com/watch?v=Gsvk6CemNFo",
        "culturaGastronomica": [5]
    },
    {
        "id": 22,
        "nombre": "Sashimi",
        "descripcion": "El sashimi es una preparación japonesa que consiste en finas láminas de pescado crudo, generalmente servidas sobre hielo. Se come con salsa de soja, wasabi y jengibre encurtido.",
        "imagen": "https://monstersushi.es/blog/wp-content/uploads/2022/06/Sushi-Clasic-Completo-scaled.jpg",
        "procesoPreparacion": "1. Cortar el pescado en láminas finas. 2. Disponerlas en un plato sobre hielo. 3. Servir con salsa de soja, wasabi y jengibre encurtido.",
        "video": "https://www.youtube.com/watch?v=Kv7hVcPYXvc",
        "culturaGastronomica": [5]
    }
    

]