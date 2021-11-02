const db = require("../models");
const Sensor = db.sensors;

// Create and Save a new Sensor
exports.create = (req, res) => {
    // Validate request
    if (Object.keys(req.body).length === 0) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Sensor
    const sensor = {
        floor_id: req.body.floor_id,
        x_coordinate: req.body.x_coordinate,
        y_coordinate: req.body.y_coordinate,
        flagged_faulty: req.body.flagged_faulty
    };

    // Save Sensor in the database
    Sensor.create(sensor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Sensor."
            });
        });
};

// Retrieve all Sensor from the database.
exports.findAll = (req, res) => {
    Sensor.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving sensors."
            });
        });
};

// Find a single Sensor with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Sensor.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Sensor with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Sensor with id=" + id
            });
        });
};

// Update a Sensor by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Sensor.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Sensor was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Sensor with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Sensor with id=" + id
            });
        });
};

// Delete a Sensor with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Sensor.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num === 1) {
                res.send({
                    message: "Sensor was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Sensor with id=${id}. Maybe Tutorial was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Sensor with id=" + id
            });
        });
};

// Delete all Sensor from the database.
exports.deleteAll = (req, res) => {
    Sensor.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Sensor were deleted successfully!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Sensors."
            });
        });
};