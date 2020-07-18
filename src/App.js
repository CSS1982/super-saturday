import React, { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import Recetas from './components/Recetas'
import Productos from './components/Productos'
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login'
import Signup from './components/Signup/Signup'
import Forgot from './components/Forgot'
import Carrito from './components/Carrito'
import AccountCreated from "./components/Signup/AccountCreated"
import AddReceta from './components/AddReceta'
import PostsList from './components/PostsList'
import AddPostForm from './components/AddPostForm'
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {

  const carousel = {
    items: [{
      id: "1",
      img: "https://images.unsplash.com/photo-1551818905-29c07d4802d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1728&q=80",
      alt: "Sección de recetas",
      title: "Nuestras recetas",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cta: "Ver recetas",
      link: "/recetas"
    },
    {
      id: "2",
      img: "https://images.unsplash.com/photo-1526470498-9ae73c665de8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1204&q=80",
      alt: "Sección de productos",
      title: "Nuestros productos",
      subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      cta: "Ver productos",
      link: "/productos"
    }]
  }

  const ads = {
    items: [{
      id: "1",
      img: "http://img1",
      link: "http://www.google.com"
    },
    {
      id: "2",
      img: "http://img2",
      link: "http://www.google.com"
    }]
  }

  const noticias = {
    items: [
      {
        id: "1",
        img:
          "https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/07/18/Recortada/20200717-637305883725291135_20200717131506-kw6G-WBFI8V8ALDVBVHL8-992x558@LaVanguardia-Web.jpg",
        title:
          "El Govern responsabiliza a cada ciudadano de que no haya contagios",
        description:
          "Trece ciudades del área metropolitana de Barcelona, 2,6 millones de personas, así como los habitantes de la Noguera y todo el Segrià, han sido impelidos a quedarse en casa todo lo que sea posible durante estos próximos quince días. “No salgan ni se vayan de fin de semana”, recomendaron los tres consellers, Alba Vergés, Meritxell Budó y Miquel Buch, que anunciaron las nuevas medidas de restricción. No participó como se creía la alcaldesa de Barcelona, Ada Colau.",
      },
      {
        id: "2",
        img:
          "https://www.lavanguardia.com/r/GODO/LV/p7/WebSite/2020/07/18/Recortada/img_aservian_20200714-125517_imagenes_lv_terceros_foto_3674677-kvjH-W2B9AA9WD0D9G5GJ-992x558@LaVanguardia-Web.JPG",
        title:
          "El 50% de los españoles no se irá de vacaciones por el virus o la economía",
        description:
          "Está claro que estamos ante un verano diferente. Así de tajante se manifestó ayer Rosario Pedrosa, responsable del área de estrategia comercial y marketing de Aecoc, la asociación de empresas de gran consumo, durante la presentación del estudio anual que realiza para analizar las tendencias de gasto de las familias en esta temporada del año.",
      },
    ],
  }

  const postsInitial = {
    items: [{
      id: "1",
      title: "titulo del post",
      description: "descripcion del post"
    },
    {
      id: "2",
      title: "titulo del post",
      description: "descripcion del post"
    }]
  }

  const [posts, setPosts] = useState(postsInitial)

  const recetasInitial = {
		items: [
			{
				id: '1',
				img:
					'https://recetasderechupete.com/wp-content/uploads/2020/05/Fideuá-de-mariscos-525x360.jpg',
				title: 'Fideuá',
				description:
					'Empezamos preparando el alioli, estás versiones con huevo no son las más puristas (el alioli original no lleva huevo ni limón) pero se prepara rápido cómo una mayonesa y queda muy rico. Ponemos todos los ingredientes del alioli de nueces en el vaso de la batidora. Dejamos el brazo de la batidora tocando el fondo y empezamos a batir sin moverlo. Al poco tiempo empezará a emulsionar, en ese momento empezamos a subir con suavidad y acabamos con movimientos verticales, moviendo de arriba a abajo. Pasamos el alioli a un bol y lo tapamos con papel film. Lo guardamos en el frigorífico hasta el momento de servir. Preparación de la fideuá de pescado y marisco. Troceamos los pimientos, el tomate, la cebolla y los ajos. Si no nos gusta encontrar muchos tropezones lo picamos todo muy fino o usamos una batidora. Troceamos también la sepia y el rape (o pedimos en la pescadería que nos lo preparen ya así para saltarnos este paso). Cocemos los mejillones al vapor o al microondas. No es mala idea preparar más mejillones de los que necesita la fideuá y servirlos cómo aperitivo. Ponemos la paella a fuego medio bajo, si la paella es muy grande necesitaremos un quemador especial, estás pequeñas para cuatro personas funcionan bien en la cocina normal de casa. Echamos un poco de aceite y cuando esté caliente doramos los langostinos un par de minutos por cada lado, no necesitan más tiempo porque se acabarán de hacer cuando acabemos la fideuá. Los sacamos de la paella y reservamos. Doramos también el rape, con 4-5 minutos será suficiente. Lo sacamos de la paella y reservamos. Repetimos el mismo proceso con la sepia. Puede que necesite unos minutos más, lo ideal es que la probemos y cuando esté tierna la sacamos de la paella y reservamos. Añadimos más aceite a la paella. Sofreímos la cebolla y los ajos unos cinco minutos hasta que empiecen a tener color. Añadimos los pimientos y sofreímos otros diez minutos removiendo con frecuencia para que no se queme ningún ingrediente ni se peguen a la paella. Añadimos más aceite si es necesario. Cuando todo esté bien pochado es el momento de añadir el tomate y sal al gusto (sin pasarnos si el caldo de pescado es muy salado). Rehogamos 8-10 minutos más para que todo quede bien cocinado y tenga buen sabor. El sofrito es una parte muy importante de la fideuá y lo que conseguirá que no quede sosa.',
			},
			{
				id: '2',
				img:
					'https://www.recetasderechupete.com/wp-content/uploads/2016/08/Tortilla-de-patatas-525x360.jpg',
				title: 'Tortilla de Patatas',
				description:
					'Pelamos las patatas, las lavamos para quitar restos de suciedad y muy importante, las secamos. Cortamos en láminas semifinas, a mí no me gusta que se deshagan sino que al freírlas se tuesten un poco. Las colocamos en un bol grande, donde luego vamos a mezclar con el huevo y añadimos sal al gusto. Removemos bien y reservamos. Elegimos nuestra sartén más grande y antiadherente. La ponemos al fuego y añadimos un buen aceite de oliva virgen extra. No tengáis miedo en gastaros un poco de dinero en aceite, le va a dar ese punto de sabor que distingue vuestra tortilla de las demás, podéis emplear muchas variedades: arbequina, picual, cornicabra, hojiblanca, royal… el que más os guste, pero de calidad. Introducimos las patatas cortadas y ya saladas y dejamos que se cocinen durante aproximadamente veinte minutos a fuego bajo. El tema del grosor de las patatas también va a gustos. Hay quien prefiere cortarlas a trozos muy pequeños, en láminas muy finas que casi se rompan al freír y o más bien grandes. Mientras se están friendo las patatas, en el bol donde luego vamos a echar las patatas batimos los huevos, reservamos. Pelamos la cebolla y cortamos lo más fino posible. En otra sartén calentamos aceite de oliva y añadimos los trozos de cebolla. Pochamos hasta que tenga un color dorado, que tenga un punto de caramelización pero sin llegar a quemarse. La cebolla se hará antes que las patatas, así que escurrimos y añadimos al bol con el huevo batido.',
			},
		],
	};

  const [recetas, setRecetas] = useState(recetasInitial)

  const comentariosRecetasInitial = {
    items: [{
      id: "1",
      idReceta: "1",
      title: "titulo ddel comentario",
      description: "descripcion del comentario"
    },
    {
      id: "2",
      idReceta: "1",
      title: "titulo ddel comentario",
      description: "descripcion del comentario"
    }]
  }

  const [comentariosRecetas, setComentariosRecetas] = useState(comentariosRecetasInitial)


  const productosInitial = {
    items: [{
      id: "1",
      img: "http://imgdelproducto",
      title: "nombre del producto 1",
      description: "descripcion del producto",
      precio: 10
    },
    {
      id: "2",
      img: "http://imgdelproducto",
      title: "nombre del producto 2",
      description: "descripcion del producto",
      precio: 10
    }]
  }

  const [productos, setProductos] = useState(productosInitial)


  const carritoInitial = {
    items: [{
      productId: "1",
      quantity: 2
    },
    {
      productId: "2",
      quantity: 1
    }]
  }

  const [carrito, setCarrito] = useState(carritoInitial)

  const userInitial = {
    loggedIn: false,
    username: '',
    email: ''
  }

  const [user, setUser] = useState(userInitial)

  return (
    <div>
      <NavBar />
      <Switch>

        <Route exact path="/">
          <Home carouselData={carousel} ads={ads} posts={posts} noticias={noticias} />
        </Route>

        <Route exact path="/recetas">
          <Recetas recetas={recetas} setRecetas={setRecetas} comentarios={comentariosRecetas} setComentarios={setComentariosRecetas} />
        </Route>
        <Route exact path="/productos">
          <Productos productos={productos} setProductos={setProductos} setCarrito={setCarrito} />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/account-created" component={AccountCreated} />
        <Route exact path="/forgot" component={Forgot} />
        <Route exact path="/carrito" component={Carrito} />
        <Route exact path="/posts/add">
          <AddPostForm posts={posts} setPosts={setPosts}/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
