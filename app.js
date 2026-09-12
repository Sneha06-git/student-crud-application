const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Student = require('./model/Student');

const app = express();

const port = 5000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/studentManagementDB')
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => {
        console.log('DB not connected due to ' + err);
    });


app.get('/', async (req, res) => {

    try {

        let students = await Student.find();

        res.render('index', { students });

    }
    catch (err) {

        console.log(err);

        res.send('Error while fetching students');

    }

});


app.post('/save', async (req, res) => {

    try {

        let { rollNo, name, degree, city } = req.body;

        const data = new Student({
            rollNo: rollNo,
            name: name,
            degree: degree,
            city: city
        });

        await data.save();

        res.redirect('/');

    }
    catch (err) {

        console.log(err);

        res.send('Error while saving student');

    }

});


app.post('/modify', async (req, res) => {

    try {

        let { rollNo, name, degree, city } = req.body;

        await Student.findOneAndUpdate(
            { rollNo: rollNo },
            {
                name: name,
                degree: degree,
                city: city
            }
        );

        res.redirect('/');

    }
    catch (err) {

        console.log(err);

        res.send('Error while modifying student');

    }

});


app.post('/delete', async (req, res) => {

    try {

        let { rollNo } = req.body;

        await Student.findOneAndDelete({ rollNo: rollNo });

        res.redirect('/');

    }
    catch (err) {

        console.log(err);

        res.send('Error while deleting student');

    }

});


app.get('/search', async (req, res) => {

    try {

        let name = req.query.name;

        let student = await Student.findOne({
            name: name
        });

        if (student) {
            res.json(student);
        }
        else {
            res.json(null);
        }

    }
    catch (err) {

        console.log(err);

        res.json(null);

    }

});


app.listen(port, () => {

    console.log(`The server is running on port: ${port}`);

});