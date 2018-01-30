'use strict'
var SequelizeMock = require('sequelize-mock')
var dbMock = new SequelizeMock()

module.exports = function(sequelize, DataTypes){
    return dbMock.define('Rivet', {
        title: 'Copper',
        summary: 'Copper rivet',
        description: 'Copper mined from the hills of South Dakota, forged in the factories of Detroit, Michigan.'
    })
}
