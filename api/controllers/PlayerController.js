/**
 * PlayerController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  login: (req, res) => {

    console.log('session: ' + req.session.palyerId)

    sails.models.player.findOne({name: req.param('name'), password: req.param('password')}).then((player) => {
      // login成功
      console.log(player)
      if(typeof player !== 'undefined') {
        console.log('s')
        res.json({status: true})
        console.log('set session : ' + player.id)
        req.session.playerId = player.id
      }
      else {
        console.log('f')
        res.json({status: false})
      }
    }).catch((err) => {
      console.log(err)
    })
  },
  loginForm: (req, res) => {
    console.log('session: ' + req.session.palyerId)
    return res.view('player/loginForm.ejs');
  }
};

