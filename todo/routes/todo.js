const router = require('express').Router();  //o  

const Todo = require('../models/todo');   


//list all todo

router.get('/', (req, res) => {                       
    Todo.find().exec((err, todos) => {                  

        if (err) {
            return res.json({ error: err });     // why use json         
        }
        return res.json({ data: todos });     
    });
});

router.post('/create', (req, res) => {      

    // console.log(req.body);
    const todo = Todo({

        title: req.body.title,
        content: req.body.content,  
    })


    todo.save((err, todo) => {
        if (err) {
            return res.json({ error: err });
        }
        return res.json({ data: todo });        //key value
    });
});
router.put('/:id', (req, res) => {        //why :id what it does?
    Todo.findById(req.params.id)              // id ma je num aavse e param
        .exec((err, todo) => {                           //exec   // pela error and pachi data
            if (err) {
                return res.json({ errrr: err });
            }
            todo.title = req.body.title ?? todo.title;      //todo. point karse   //?         //?? means je vastu ne update nai kariye aene aem j rkhine update marse
            todo.content = req.body.content ?? todo.content; //default content nakhase    
            todo.completed = req.body.completed ?? todo.completed;
            todo.save((err, todo) => {

                if (err) {
                    return res.json({ errrr: err });
                }
                return res.json({ data: todo });
            })

        })

});

router.delete('/:id', (req, res) => {                //delete req method

    Todo.remove({            
        _id: req.params.id
    }).exec((err, result) => {

        if (err) {
            return res.json({ error: err });
        }
        if (result.deletedCount == 0) {
            return res.json({ data: 'no data for deleting' })
        }
        return res.json({ data: 'deletd successfullt' });
    })
});

module.exports = router;    
