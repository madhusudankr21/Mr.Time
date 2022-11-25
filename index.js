const express = require('express');
const app =express();
const port = process.env.PORT || 80 ;

// EXPRESS STUFFS
app.use('/static' , express.static('./static'));

// PUG STUFFS
app.set('view engine' , 'pug');

// END POINTS
app.get('/' , (req,res)=>{
    res.render('index.pug');
});

// START THE SERVER
app.listen(port);
console.log(`==== (: You are now live :) ====`);