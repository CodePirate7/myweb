module.exports = {
  view: (req, res) => {
    let id = req.params.id
    Article.findOne({
      id
    }).populate('author').populate('comments').exec((err, data) => {
      console.log(data);
      let views = data.views + 1
      Article.update({id},{views}).exec((err,msg)=>{
        res.view('article', {
          title: data.title,
          login: req.session.login,
          user: req.session.user,
          data
        })
      }) 
    })
  },
  commentview:( req , res ) => {
    Comment.find({article: req.body.id}).populate('author').exec((err,data)=>{
      res.send(data)
    })
  }
}
