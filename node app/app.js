///const  fss  = require('fs')
//fss.writeFileSync ('node_day1.txt','be positive')



//console.log( fss.readFileSync ('node_day1.txt'). toString())
//const y = require('./func')
//console.log('y(3,8)')



//const  validator  = require ('validator')
//console.log(validator .isEmail('omar'))
//console.log(validator .isEmail('sdsd@ccs'))


const yargs =require('yargs')
yargs.command({
    command:'add',
    describe:'add node',
    builder: {
        title:{
            describe:"this is the title",
            demandOption: true,
            type:'string',

        },
        body:{
            describe:"this is the body",
            demandOption: true,
            type:'string',

        },
    },
    handler :() => {
        console.log('add note',argv.title)
        console.log('add note',argv.body)
    }

})
yargs.command({
    command:'read',
    describe:'read node',
    builder: {
        title:{
            describe:"this is the title",
            demandOption: true,
            type:'string',

        },
    },
    handler :(argv) => {
        console.log('read note', argv.title)
    },

})
yargs.command({
    command:'list',
    describe:'list node',
  
    handler :(argv) => {
        console.log('list note',
        argv.title)
    },

});
console.log(yargs.argv)
//yargs.parse()

