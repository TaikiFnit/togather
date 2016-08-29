/**
 * WorldCommandController
 *
 * @description :: Server-side logic for managing worldcommands
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	command: (req, res) => {
    console.log('command command : ' + req.param('direction'))
  }
};

