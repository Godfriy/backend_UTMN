const ApiError = require("../error/ApiError.js");
const {
    Students,
    Docs,
    EntryDocs,
    Groups,
    StudentGroups,
    PrepDirs,
    StudentJobs,
    Companies,
} = require("../models/index.js");

require("dotenv").config();

class ContentController {
    // POST
    async addZayavki(req, res, next) {
        try {
            const { source, name_org, work, square, name, email, phone} = req.body;

            await Zayavki.create({
                source, name_org, work, square, name, email, phone, date: new Date()
            })

            res.json({mess: 'OK'});
        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что то пошло не так", e));
        }
    }

    async addZayavkiVakansii(req, res, next) {
        try {
            const {source, vakansia, name, email, phone} = req.body;

            await ZayavkiVakansii.create({
                source, vakansia, name, email, phone, date: new Date()
            })

            res.json({mess: 'OK'});
        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что то пошло не так", e));
        }
    }

    // GET
    async getShopCategoria(req, res, next) {
        try {
            await ShopCategoria.find({}).then( 
                async(categoria) => {
                    res.json(categoria);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }

    async getShops(req, res, next) {
        try {
            await Shop.find({}).then( 
                async(shops) => {
                    res.json(shops);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }

    async getPromoAndEvents(req, res, next) {
        try {
            await PromoAndEvents.find({}).then( 
                async(promoAndEvents) => {
                    res.json(promoAndEvents);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }

    async getShopCenterMap(req, res, next) {
        try {
            await ShopCenterMap.find({}).then( 
                async(shopCenterMap) => {
                    res.json(shopCenterMap);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }

    async getMapPositions(req, res, next) {
        try {
            await MapPositions.find({}).then( 
                async(mapPositions) => {
                    res.json(mapPositions);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }

    async getContacts(req, res, next) {
        try {
            await Contacts.find({}).then( 
                async(contacts) => {
                    res.json(contacts);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }

    async getVakansii(req, res, next) {
        try {
            await Vakansii.find({}).then( 
                async(vakansii) => {
                    res.json(vakansii);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }
    
    async getBussines(req, res, next) {
        try {
            await Bussines.find({}).then( 
                async(bussines) => {
                    res.json(bussines);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }
    
    async getArenda(req, res, next) {
        try {
            await Arenda.find({}).then( 
                async(arenda) => {
                    res.json(arenda);
                }
            )

        } catch (e) {
            console.log(e);
            return next(ApiError.forbidden("Что-то пошло не так", e));
        }
    }

}

module.exports = new ContentController();
