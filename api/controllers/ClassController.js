/**
 * ClassController
 *
 * @description :: Server-side logic for managing Classes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	layout: (req,res) => {
    classid = req.params.id
    userid = req.body.userid
    Class.findOne({
      id: classid
    }).populate('members').populate('creater').exec(( err, data)=>{
      if( data.creater.id == userid) 
      {
        console.log(Class)
        Class.destroy({id:classid},(err,data)=>{
          return res.send('成功!')
        })

        
      }else{
        let index = 0
        for( let i = 0; i < data.members.length;i ++){
        if( data.members.id == userid ) index = i
        }
        data.members.splice(index,1)
        Class.update({id:classid},{members:data.members}).exec((err,data)=>{
        res.send('成功!')
      })
      } 
      
    })
  },
  add: ( req, res)=> {
    classid = req.params.id
    userid = req.body.userid
    Class.findOne({
      id: classid
    }).populate('members').exec(( err, data)=>{
      data.members.push(userid)
      Class.update({id:classid},{members:data.members}).exec((err,data)=>{
        res.send(data)
      })
    })
  }
};

