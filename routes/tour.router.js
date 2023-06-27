const tourController = require("../controllers/tour.controller");

const tourRouter = require("express").Router();

tourRouter.get("/", tourController.getTours);

tourRouter.get("/:id", tourController.getTourById);

tourRouter.post("/", tourController.postTour);

tourRouter.patch("/:id", tourController.updateTour);

tourRouter.delete("/:id", tourController.deleteTourById);

module.exports = tourRouter;
