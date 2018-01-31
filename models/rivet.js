'use strict';
module.exports = (sequelize, DataTypes) => {
    var Rivet = sequelize.define('Rivet', {
        title: DataTypes.STRING,
        summary: DataTypes.STRING,
        description: DataTypes.TEXT
    }, {
        classMethods: {
            associate: function(models) {
            }
        }
    });
    return Rivet;
};
