/**
 * WorldViewController
 *
 * @description :: Server-side logic for managing worldviews
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: (req, res) => {

    sails.models.world.find().then((allWorld) => {
      console.log('success to find all world')
      return res.view('worldView/index.ejs', {allWorld: allWorld})
    }).catch((err) => {
      console.log('faild to find all world')
      return res.send(err)
    })
  },

  show: (req, res) => {
    console.log(req.param('id'))

    sails.models.world.findOne(req.param('id')).then((world) => {

      sails.models.player.find({worldId: req.param('id')}).then((players) => {
        return res.view('worldView/show.ejs', { world: world, players: players });
      }).catch((err) => {
        return res.send(err);
      });
    }).catch((err) => {
      return res.send(err);
    });

  }
};

