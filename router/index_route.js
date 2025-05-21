const { Router } = require ("express");

// Importar el controlador
const indexController = require('../controlador/indexController');

const router = Router();


router.get('/', indexController.PaginaPrincipal);

router.get('/horario_clase',indexController.AcercaDeMi);
router.get('/horario_clase',indexController.fotomia);

router.get('/etiquetas',indexController.EtiquetasHtml);


router.get('/menuJson', indexController.menuJson);

router.get('/ResXml', indexController.ResumenXml);

router.get('/ResAjax', indexController.ResumenAjax);

router.get('/mvc', indexController.ResumenMvc);

router.get('/spring', indexController.ResumenSpring);

router.get('/jsoChart', indexController.jsonGrafico);


module.exports = router;