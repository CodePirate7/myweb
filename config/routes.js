/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */
module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': ( req , res ) => {
    res.view('homepage',{title: '项目流程体验平台',login: req.session.login,user: req.session.user})
  },
  'GET /reg':( req , res ) => {
    res.view('reg',{title: '注册',login: req.session.login,user: req.session.user})
  },
  'GET /login':( req , res ) => {
    res.view('login',{title: '登录',login: req.session.login,user: req.session.user})
  },
  'GET /news':( req , res ) => {
    res.view('news',{title: '新闻中心',login: req.session.login,user: req.session.user})
  },
  'GET /forum':( req , res ) => {
    res.view('forum',{title: '站内论坛',login: req.session.login,user: req.session.user})
  },
  'GET /person': ( req , res ) => {
    res.view('person',{title: '个人中心',login: req.session.login,user: req.session.user})
  },
  'GET /projectlist': ( req , res ) => {
    res.view('projectlist',{title: '项目分类',login: req.session.login,user: req.session.user})
  },
  'GET /projectdetail': ( req , res ) => {
    res.view('projectdetail',{title: '项目详情',login: req.session.login,user: req.session.user})
  },
  'GET /nr/:id': 'ArticleController.view',
  'GET /logout': 'UserController.logout',
  'POST /login': 'UserController.login',
  'POST /reg': 'UserController.reg',
  'POST /commentview' : 'ArticleController.commentview'
  
  

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
