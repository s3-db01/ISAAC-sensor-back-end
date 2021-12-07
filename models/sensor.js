'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sensor = sequelize.define('Sensor', {
    floor_id: DataTypes.INTEGER,
    x_coordinate: DataTypes.INTEGER,
    y_coordinate: DataTypes.INTEGER,
    flagged_faulty: DataTypes.DATE
  }, {});
  Sensor.associate = function(models) {
    // associations can be defined here
  };
  return Sensor;
};