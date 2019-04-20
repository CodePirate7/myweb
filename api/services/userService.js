
module.exports = {
  login: ( req , res ) => {
      const user = req.body
      const username = user.username
      const password = user.password
      User.findOne({username}, (err, data) => {
        if (data) {
          if (data.password === password) {
            //保存登陆状态
            req.session.login = true
            req.session.user = data
            return res.send({
              msg: "登陆成功",
              code: 0
            })
          }
          return res.send({
            msg: "账号或密码错误,请重新输入",
            code: 1
          })
        }
        res.send({
          msg: "用户不存在",
          code: 1
        })
      })
    },
  reg: ( req , res ) => {
    console.log(req.body);
    const user = req.body
    const username = user.username
    const password = user.password
    const major = user.major
    User.findOne({username},(err,data)=>{
      if( data ){
        return res.send({code: 1,msg: "用户已存在,请重新输入"})
      }
      User.create({username,password,major},( err , data )=>{
        if (err) {
          res.send({code: 1,msg: '数据库错误!注册失败!请稍后再试!'})
      }
      res.send({code: 0,msg: "注册成功!"})
      })
    })
    
  },
  logout: ( req , res ) => {
    req.session.destroy()
    res.redirect("/")
  }
}
