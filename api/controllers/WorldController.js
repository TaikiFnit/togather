/**
 * WorldController
 *
 * @description :: Server-side logic for managing worlds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hi: (req, res) => {
    return res.send('hi there!')
  },
  bye: (req, res) => {
    return res.redirect("http://google.com")
  },
  new: (req, res) => {
    return res.view("world/new.ejs")
  }
};

