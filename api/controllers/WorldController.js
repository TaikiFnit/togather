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

  register: (req, res) => {
    let data = {
      playerId: req.param('playerId'),
      worldId: req.param('id'),
      position: {
        x: 0,
        y: 0
      },
      score: 0
    };

    sails.models.player.create(data).then((player) => {
      return res.json({status: true});
    }).catch((err) => {
      return res.json({status: false});
    });
  },
  join: (req, res) => {

  },
};

