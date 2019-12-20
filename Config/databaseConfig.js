var Sequelize = require('sequelize')

var sequelize = new Sequelize('APIAssignment','root','test',{
    host:'localhost',
    dialect:'mysql',
    logging: false
});


// var vall = xyz()

// function xyz(){
//     return 10;
// }

sequelize.authenticate()
.then(function(result){
    console.log('Connected!!!!')
})
.catch(function(err){
    console.log(err)
})
module.exports = {
    Sequelize,
    sequelize
}
