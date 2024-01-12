module.exports.home = function(req, res){
    return res.render('home', {
        title: "home"
    });
}

module.exports.lol = function(req, res){
    return res.end('<h1>lol</h1>');
}