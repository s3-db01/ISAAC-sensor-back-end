module.exports = app => {
    const sensors = require("../controllers/sensor.controller.js");

    var router = require("express").Router();

    // Create a new Sensor
    router.post("/", sensors.create);

    // Retrieve all Sensor
    router.get("/", sensors.findAll);

    // Retrieve a single Sensor with id
    router.get("/:id/", sensors.findOne);

    // Update a Sensor with id
    router.put("/:id/", sensors.update);

    // Delete a Sensor with id
    router.delete("/:id", sensors.delete);

    // Delete all Sensors
    router.delete("/", sensors.deleteAll);

    app.use('/api/sensors', router);
};