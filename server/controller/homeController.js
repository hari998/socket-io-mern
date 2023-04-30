// console.log("controller- homeController");
const fs = require("fs");

const { recipes } = require("../data");
const { getDb } = require("../database/connect");

module.exports = {
  apiHome: async function apiHome(req, res) {
    try {
      let response = { result: "at route /api index" };
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  },
  home: async function home(req, res) {
    try {
      let response = { result: "hello from controller" };
      res.status(200).json(response);
    } catch (error) {
      console.log(error);
    }
  },
};
