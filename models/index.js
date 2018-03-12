const express = require('express');
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});
//quiets the terminal logging


const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false},
    urlTitle: {
        type: Sequelize.STRING,
        get(){
            return '/wiki/' + this.getDataValue('page');
        },
        allowNull: false},
        //what url name to be passed second
    content: {
        type: Sequelize.TEXT, 
        allowNull: false},
    status: {
        type: Sequelize.ENUM('open', 'closed')},
    date: {
        type: Sequelize.TEXT,
        defaultValue: Sequelize.NOW
    }
})

const User = db.define('user', {
    name: {
        type: Sequelize.STRING, 
        allowNull: false},
    email: {
        type: Sequelize.STRING, 
        allowNull: false,
        validate: {
            isEmail:true
        }
    }
})
//what is: sequelize.NOW?


module.exports = {
    db: db,
    Page: Page,
    User: User
  };
