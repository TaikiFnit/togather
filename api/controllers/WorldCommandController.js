/**
 * WorldCommandController
 *
 * @description :: Server-side logic for managing worldcommands
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  // command method
	go: (req, res) => {
    console.log('command command : ' + req.param('direction'))
  },
  break: (req, res) => {

  },
  search: (req, res) => {

  },
};

