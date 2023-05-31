const Router = require("express");
const contentController = require("../сontrollers/contentController.js");

const router = new Router();

router.get("/getShops", contentController.getShops);
router.get("/getShopCategoria", contentController.getShopCategoria);
router.get("/getPromoAndEvents", contentController.getPromoAndEvents);
router.get("/getShopCenterMap", contentController.getShopCenterMap);
router.get("/getMapPositions", contentController.getMapPositions);
router.get("/getVakansii", contentController.getVakansii);
router.get("/getBussines", contentController.getBussines);
router.get("/getArenda", contentController.getArenda);
router.get("/getContacts", contentController.getContacts);

router.post("/addZayavki", contentController.addZayavki);
router.post("/addZayavkiVakansii", contentController.addZayavkiVakansii);

module.exports = router;
