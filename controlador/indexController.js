

exports.PaginaPrincipal = (req, res) => {
  res.render('inicio', { 
    title: 'Inicio',
    nombre: 'Bienvenida Sosa Rosario',
    imagen: 'img/bienvenida.jpg',
    activePage: 'inicio'
 });
}

exports.AcercaDeMi = (req, res) => {
  res.render('horario_clase', {
    title: 'Página de Bienvenida',
    nombre: 'Bienvenida Sosa Rosario',
    imagen: './bienvenida.jpg',
    datos: {
      nacimiento: 'Santo Domingo',
      pais: 'República Dominicana',
      residencia: 'Prados de San Luis',
      bachillerato: 'Instituto Politécnico de Hainamosa (INPHA)',
      estudio: 'paquete office',
      instEducacion: 'INFOTEP',
      trabajo: 'Secretaria',
      carrera: 'Licenciatura en Informática',
      institucion: 'Universidad Autónoma de Santo Domingo (UASD)'
    },
    horarios: [
      {
        instructor: 'Radhames S. Gonzalez',
        donde: 'Lab-103',
        dia: 'Miércoles',
        hora: '7:00 am - 8:50 am',
        seccion: '01',
        asignatura: 'Lab Lenguaje de Program III - INF 5170'
      },
      {
        instructor: 'Luis S. Moquete Ulloa',
        donde: 'Virtual',
        dia: 'Miércoles',
        hora: '6:00 pm - 7:50 pm',
        seccion: 'w09',
        asignatura: 'Matemática Discr para Computac'
      },
      {
        instructor: 'Jose M. Amado P',
        donde: 'Lab-102',
        dia: 'Miércoles',
        hora: '2:00 pm - 3:50 pm',
        seccion: 'Z02',
        asignatura: 'Base de Datos II - INF 5200'
      }
    ],
      activePage: 'horario_clase',
    anio: new Date().getFullYear() // Se añade la variable anio
  });
}



exports.EtiquetasHtml = (req, res) => {
  const initial = 1;   
  const step = 2;      
  const count = 10;    

   let index = [];
  for (let i = initial; index.length < count; i += step) {
    index.push(i);
  }

    res.render('etiquetas', {
     title: 'Etiquetas Html',
    nombre: 'Etiquetas Html',
    index:'index',
    activePage: 'etiquetas',
    etiquetas : [ {
      nombre: "<html></html>",
      descripcion: "Indica el comienzo y final del código HTML.",
      ejemplo: "<!DOCTYPE html>\n<head>\n</head>\n<body>\n</body>\n</html>"
    },
    {
      nombre: "<body></body>",
      descripcion: "Define la sección del cuerpo de la página web, donde se incluyen todos los elementos que se mostrarán en la página.",
      ejemplo: "<!DOCTYPE html>\n<head>\n</head>\n<body>\n<p>hola mundo</p>\n</body>\n</html>"
    },
    {
      nombre: "<title></title>",
      descripcion: "Describe el significado o título de la página.",
      ejemplo: "<!DOCTYPE html>\n<head>\n<title>102 Etiquetas</title>\n</head>\n</html>"
    },
    {
      nombre: "<b></b>",
      descripcion: "Se utiliza para resaltar o poner en negrita el nombre de una persona.",
      ejemplo: "<p><b>Pedro Mir</b> escribió 'Hay un país en el mundo'</p>\n<b>Pedro Mir</b>"
    },
    {
      nombre: "<input>",
      descripcion: "Describe los diferentes tipos de elementos de entrada en HTML.",
      ejemplo: "<input type='text'>\n<input type='button'>\n<input type='checkbox'>\n<input type='imagen'>"
    },
    {
      nombre: "<img>",
      descripcion: "Se utiliza para insertar una imagen en una página HTML.",
      ejemplo: "<img src='img_girl.jpg'>"
    },
    {
      nombre: "<hr>",
      descripcion: "Define un cambio de tema en una página HTML mediante una línea horizontal.",
      ejemplo: "<p>Pedro Mir era novelista.</p>\n<hr>\n<p>Pedro Martinez era jugador de Beisbol</p>"
    },
    {
      nombre: "<br>",
      descripcion: "Inserta saltos de línea individuales en un texto.",
      ejemplo: "<p>Pedro Mir era novelista.</p>\n<br>\n<p>Pedro Martinez era jugador de Beisbol</p>"
    },
    {
      nombre: "<p></p>",
      descripcion: "Se utiliza para definir uno o varios párrafos de texto.",
      ejemplo: "<p>hola mundo</p>"
    },
    {
      nombre: "<small>",
      descripcion: "Define un texto de tamaño más pequeño.",
      ejemplo: "<p>hola mundo</p>\n<small>hola mundo</small>"
    },
    {
      nombre: "<footer></footer>",
      descripcion: "Representa un pie de página que contiene información sobre el autor, derechos de autor o enlaces relacionados.",
      ejemplo: "<footer>\n  <p>Companía SR, República Dominicana</p>\n</footer>"
    },
    {
      nombre: "<a>",
      descripcion: "Define un hipervínculo para enlazar a otra página o recurso.",
      ejemplo: "<a href='http://www.html.com'>Enlace</a>"
    },
    {
      nombre: "<caption></caption>",
      descripcion: "Define el título de una tabla.",
      ejemplo: "<caption>Horario</caption>\n<table></table>"
    },
    {
      nombre: "<table></table>",
      descripcion: "Permite organizar datos en filas y columnas en una página web.",
      ejemplo: "<table></table>"
    },
    {
      nombre: "<tr></tr>",
      descripcion: "Define una fila de celdas en una tabla HTML.",
      ejemplo: "<table>\n  <tr></tr>\n</table>"
    },
    {
      nombre: "<th></th>",
      descripcion: "Define una celda de encabezado en una tabla HTML.",
      ejemplo: "<table>\n  <th>Escuela</th>\n</table>"
    },
    {
      nombre: "<td></td>",
      descripcion: "Define una celda de datos estándar en una tabla HTML.",
      ejemplo: "<table>\n  <th>Escuela</th>\n  <td>Se pone el contenido</td>\n</table>"
    },
    {
    nombre: "<!-- -->",
    descripcion: "Permiten a los desarrolladores dejar notas dentro del código que no serán visibles para los usuarios finales.",
    ejemplo: "<!-- es un comentario -->"
  },
  {
    nombre: "<thead>",
    descripcion: "Indica que forman el encabezado de una tabla con información sobre las columnas de la tabla.",
    ejemplo: "<thead> ... </thead> <tbody> <td> ... </td> </tbody>"
  },
  {
    nombre: "<background-color>",
    descripcion: "Establece el color de fondo de elementos como h1, p, body, etc.",
    ejemplo: "<h1 style=\"background-color: powderblue;\"></h1>"
  },
  {
    nombre: "<dl>",
    descripcion: "Representa una lista descriptiva.",
    ejemplo: "<dl><dt>Beast of Bodmin</dt><dd>A large feline inhabiting Bodmin Moor.</dd></dl>"
  },
  {
    nombre: "<dt>",
    descripcion: "Especifica un término en una descripción o lista de definiciones.",
    ejemplo: "<dl><dt>Beast of Bodmin</dt><dd>A large feline inhabiting Bodmin Moor.</dd></dl>"
  },
  {
   nombre: "<dd>",
   descripcion: "Se utiliza para describir un término o nombre en una lista de descripciones.",
   ejemplo: "<dl><dt>Beast of Bodmin</dt><dd>A large feline inhabiting Bodmin Moor.</dd></dl>"
  },
  {
    nombre: "<!DOCTYPE html>",
    descripcion: "Indica al navegador que el documento está basado en el estándar HTML5.",
    ejemplo: "<!DOCTYPE html> <html>"
  },
  {
    nombre: "<meta>",
    descripcion: "Se usa para definir otros metadatos.",
    ejemplo:"<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">"
  },
  {
    nombre: "<main>",
    descripcion: "Define el contenido principal del documento.",
    ejemplo: "<main><p>después de header</p></main>"
  },
  {
    nombre: "<aside>",
    descripcion: "Suele alojarse el contenido adicional de la web.",
    ejemplo: "<aside><p>hola, ¿cómo están?</p></aside>"
  },
  {
    nombre: "<iframe>",
    descripcion: "Sirve para anidar otro documento HTML dentro del documento principal.",
    ejemplo: "<iframe id=\"inlineFrameExample\" title=\"Inline Frame Example\" width=\"300\" height=\"200\" src=\"https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083,51.47612752641776,0.00030577182769775396,51.478569861898606&layer=mapnik\"></iframe>"
  },
  {
    nombre: "<embed>",
    descripcion: "Se usa para integrar una aplicación o contenido interactivo externo que no suele ser HTML.",
    ejemplo: "<embed type=\"video/mp4\" src=\"/media/cc0-videos/flower.mp4\" width=\"250\" height=\"200\" />"
  },
  {
    nombre: "<object>",
    descripcion: "Utilizada para llamar a un recurso externo de la web.",
    ejemplo: "<object type=\"application/pdf\" data=\"/media/examples/In-CC0.pdf\" width=\"250\" height=\"200\"></object>"
  },
  {
    nombre: "<svg>",
    descripcion: "Se utiliza para mostrar imágenes vectorizadas.",
    ejemplo: "<svg width=\"100\" height=\"100\"><circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"green\" stroke-width=\"4\" fill=\"yellow\" /></svg>"
  },
  {
    nombre: "<source>",
    descripcion: "Permite especificar archivos alternativos de video, audio o imagen que el navegador puede elegir.",
    ejemplo:"<video width=\"320\" height=\"240\" controls><source src=\"movie.mp4\" type=\"video/mp4\"><source src=\"movie.ogg\" type=\"video/ogg\">Your browser does not support the video tag.</video>"
  },
  {
    nombre: "<area>",
    descripcion: "Define un área dentro de un mapa de imagen que tiene zonas cliqueables predefinidas.",
    ejemplo: "<map name=\"infographic\"><area shape=\"poly\" coords=\"129,0,260,95,129,138\"></map>"
  },
   {
    nombre: "<video>",
    descripcion: "Se utiliza para incrustar contenido de vídeo en un documento. Define hipervínculo.",
    ejemplo: "<video width=\"320\" height=\"240\" controls>\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  <source src=\"movie.ogg\" type=\"video/ogg\">\n  Your browser does not support the video tag.\n</video>"
  },
  {
    nombre: "<fieldset>",
    descripcion: "Se utiliza para agrupar elementos relacionados en un formulario.",
    ejemplo: "<form action=\"/action_page.php\">\n  <fieldset>....</fieldset>\n</form>"
  },
  {
    nombre: "<figcaption>",
    descripcion: "Define un título para la foto.",
    ejemplo: "<figcaption>Fig.1 - hdjdj, Italy.</figcaption>"
  },
  {
    nombre: "<noscript>",
    descripcion: "Define un contenido alternativo que se mostrará a los usuarios que tienen scripts deshabilitados o usan navegadores que no admiten scripts.",
    ejemplo: "<script></script>\n<noscript>Your browser does not support JavaScript!</noscript>"
  },
  {
    nombre: "<samp>",
    descripcion: "Se utiliza para definir la salida de muestra de un programa informático.",
    ejemplo: "<samp>Keyboard not found - Press F1 to continue</samp>"
  },
  {
    nombre: "<acronym>",
    descripcion: "Define una abreviatura o acrónimo.",
    ejemplo: "<acronym title=\"World Wide Web\">WWW</acronym>"
  },
  {
    nombre: "<kbd>",
    descripcion: "Define algún texto como entrada de teclado en un documento.",
    ejemplo: "<p>Press <kbd>Ctrl</kbd> + <kbd>C</kbd> to copy text (Windows).</p>"
  },
  {
    nombre: "<tt>",
    descripcion: "Crea texto en línea que se presenta utilizando la fuente monoespaciada predeterminada del agente de usuario.",
    ejemplo: "<p><tt>Local Echo is on</tt></p>"
  },
  {
    nombre: "<var>",
    descripcion: "Se utiliza para definir una variable en programación o en una expresión matemática; el contenido se muestra normalmente en cursiva.",
    ejemplo: "<p>Local <var>Echo</var> is on</p>"
  }
  ]
     })
    };

exports.fotomia =(req,res)=>{
 res.send(`    
    <header>
      <img src="/muje1.png" alt="Logo" width="100"/>
    </header>
`)}
exports.jsonGrafico = (req,res)=>{
 
    res.render('jsoChart', {
     title: 'Gráfico y Tabla con Datos JSON',
    nombre: 'Gráfico y Tabla con Datos JSON',
    activePage: 'jsoChart',    
        datos:[{
             labels : ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
            data: [10, 15, 8, 12, 20]
            }]
 }) };
         

  
 exports.menuJson =(req,res)=> {
  
    res.render('menuJson', {
     title: 'Menu Json',
    nombre: 'Menu Json',
    activePage: 'menujson'
 });

}

 exports.ResumenXml =(req,res)=> {
  
    res.render('ResXml', {
     title: 'XML',
    nombre: 'Lenguaje XML',
    activePage: 'ResXml'
 });

}


 exports.ResumenSpring =(req,res)=> {
  
    res.render('spring', {
     title: 'Spring framework',
    nombre: 'Spring framework',
    activePage: 'spring'
 });

}
 exports.ResumenMvc =(req,res)=> {
  
    res.render('mvc', {
     title: 'Modelo MVC',
    nombre: 'Modelo MVC',
    activePage: 'mvc'
 });


}
 exports.ResumenAjax =(req,res)=> {
  
    res.render('ResAjax', {
     title: 'AJAX',
    nombre: 'Lenguaje AJAX',
    activePage: 'ResAjax'
 });

 }



 

