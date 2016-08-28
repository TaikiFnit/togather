/**
 * WorldController
 *
 * @description :: Server-side logic for managing worlds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  new: (req, res) => {
    return res.view("world/new.ejs")
  },
  view: (req, res) => {
    return res.view('world/view.ejs')
  },
  command: (req, res) => {
    console.log('id:' + req.param('id'))
    console.log('command1:' + req.param('command1'))
    console.log('command2:' + req.param('command2'))
  }
};

