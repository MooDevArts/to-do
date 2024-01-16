const Task = require("../models/task");

module.exports.home = function(req, res){
    Task.find()
    .then(tasks => {
        return res.render('home', {
            title: "to do",
            tasks: tasks,
            definition: "All Tasks"
        });
    })
    
}

module.exports.lol = function(req, res){
    return res.end('<h1>lol</h1>');
}

module.exports.addTask = function(req, res){
    console.log(req.body)
    Task.create(
        { 
            task: req.body.task,
            category: req.body.category,
            priority: req.body.priority
        })
    .then(newContact => {
        return res.redirect('back');
    })
    .catch(err => {
        console.log('error in creating contact', err);
        // Handle the error appropriately, e.g., send an error response
    });
}

module.exports.delTask = function(req, res){
    
    async function deleteContactById(id) {
        try {
          await Task.deleteOne({ _id: id });
        } catch (err) {
          console.error(`Error deleting contact: ${err}`);
        }
      }
      deleteContactById(req.params.id);
    res.redirect('back');
}

module.exports.filterTasks = function(req, res){
    console.log(req.query);

    Task.find({ category: req.query.category, priority: req.query.priority }).then(tasks => {
        console.log(tasks);
        return res.render('home', {
            title: "filtered Tasks",
            tasks: tasks,
            definition: `All ${req.query.category} tasks, ${req.query.priority} priority`
        });
      });
}

module.exports.filterCat = function(req, res){
    console.log(req.params);
    Task.find({ category: req.params.category }).then(tasks => {
        console.log(tasks);
        return res.render('home', {
            title: "filtered Tasks",
            tasks: tasks,
            definition: `All ${req.params.category} tasks`
        });
      });
}