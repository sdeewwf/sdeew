const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator');
const Todo = require('../models/Todo');

//@route POST /api/todo
//@desc добавление записей
router.post('/', [
    check('text', 'укажите, что нужно сделать').not().isEmpty()
], async (req,res) =>{
    //валидация запроса
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }

    try {
        //создание объекта поста
        const newtodo = new Todo({
            text: req.body.text
        });
        //соsхранение постав в БД
        const todo = await newtodo.save();
        //ответ сервера
        res.json(todo);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
})

//@route GET /api/todo
//@desc вывод всех сообщений из базы отсортированные по дате
router.get('/', async (req,res) => {
    try {
        const todo = await Todo.find().sort({date:-1 });
        res.json(todo);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }
});

module.exports = router;