const productos = [
    {
      id: "Kamado-Tanjiro",
      nombre: 'Kamado Tanjiro 20x15 cm',
      descripcion: "Bandai es una de las mayores empresas representantes de la cultura animé en Japón. Con sus juguetes y figuras de acción es una de las preferidas por los más pequeños y por quienes se dedican a coleccionar.",
      stock: 100,
      precio: 45000,
      categoria: "Esculturas",
      imagen: "/img/Catalogo/Kamado-Tanjiro.jpg"
    },
    {
      id: "Goku",
      nombre: 'Son Goku Talking About Krillin Death Statue',
      descripcion: "Bandai – Figuarts Zero – Dragon Ball Z – Son Goku Talking About Krillin Statue",
      stock: 100,
      precio: 25000,
      categoria: "Esculturas",
      imagen: "/img/Catalogo/Goku.jpg"
    },
    {
      id: "Goku-Picollo",
      nombre: 'Goku-Picollo',
      descripcion: "Bandai – Figuarts Zero – Dragon Ball Z – ",
      stock: 10,
      precio: 19000,
      categoria: "Esculturas",
      imagen:  "/img/Catalogo/Goku-picollo.webp"
    },
    {
      id: "Naruto – Naruto Shippuden: Naruto Uzumaki",
      nombre: 'Naruto – Naruto Shippuden: Naruto Uzumaki',
      descripcion: "De la exitosa serie de anime Naruto: Shippuden llega esta figura Effectreme de Naruto Uzumaki! Ha sido recreado con todo lujo de detalles.",
      stock: 10,
      precio: 25000,
      categoria: "Esculturas",
      imagen: "/img/Catalogo/Naruto.jpg"
    },
    {
      id: "Remera-Evangelion",
      nombre: 'Remera-Evangelion',
      descripcion: "Remera-Evangelion",
      stock: 10,
      precio: 25000,
      categoria: "Ropa",
      imagen: "/img/Catalogo/Remera-Eva.jpg"
    },
    {
      id: "Rmera-Venom",
      nombre: 'Rmera-Venom',
      descripcion: "Nuestra remera de Venom sale 100% de los comics de Marvel, pudiendo llevar contigo al simbionte más querido por todos.",
      stock: 10,
      precio: 25000,
      categoria: "Ropa",
      imagen: "/img/Catalogo/Remera-Venom.webp"
    },
    {
      id: "Remera-Dragon-ball",
      nombre: 'Remera-Dragon-ball',
      descripcion: "Remera-Dragon-ball",
      stock: 10,
      precio: 25000,
      categoria: "Ropa",
      imagen: "/img/Catalogo/Remera-Cuatro.webp"
    },
    {
      id: "Manga-Naruto",
      nombre:'Manga Naruto completo',
      descripcion: "Manga Naruto completo",
      stock: 10,
      precio: 25000,
      categoria: "Comics",
      imagen: "/img/Catalogo/Manga-Naruto.jpg"
    },
     
  ];
  
  const obtenerProductos = new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000); 
  });
  
  export default obtenerProductos