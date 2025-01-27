const Test = (req, res, next)=>{
    console.log("Running test from controller!");
    next();
}


module.exports = Test;