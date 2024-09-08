const { Word } = require('../model/word.js'); 
const Category = require('../model/category.js');

let currentIndex = 0; 

exports.getHome = (req, res, next) => {
    const navbarTitle = 'DEUTSCH';
    const headTitle = 'Learn Deutsch | Startseite';
    const categories = Category.getAllCategories();
    res.render('index', { 
        navbarTitle,
        headTitle,
        categories,
        title: 'HomePage',
        path: '/', 
        isAdmin: false
    });
};

exports.getUberUns = (req, res, next) => {
    const navbarTitle = 'Über Uns';
    const headTitle = 'Learn Deutsch | Über Uns';
    res.render('about', {
        navbarTitle,
        headTitle,
        title: 'ÜberUns',
        path: '/about', 
        isAdmin: false
    });
};

exports.getUbungen = (req, res, next) => {
    const navbarTitle = 'Übungen';
    const headTitle = 'Learn Deutsch | Übungen';
    const categories = Category.getAllCategories();

    Word.getAllWords().then(([rows]) => {
        let currentWord = null;

        if (currentIndex >= rows.length) {
            currentWord = { message: 'Tebrikler, bitirdiniz!' };
        } else {
            currentWord = rows[currentIndex];
        }

        res.render('ubungen', {
            navbarTitle,
            headTitle,
            currentWord,
            categories,
            title: 'Übungen',
            path: '/ubungen',
            isAdmin: false
        });
    }).catch((err) => {
        console.log(err);
    });
};

exports.resetTest = (req, res, next) => {
    currentIndex = 0;  
    res.redirect('/ubungen');  
};

exports.postUbungen = (req, res, next) => {
    let userAnswer = req.body.answer ? req.body.answer.toLowerCase().trim() : '';

    Word.getAllWords().then(([rows]) => {
        let correctAnswer = rows[currentIndex] && rows[currentIndex].answer.toLowerCase();

        
        if (userAnswer === correctAnswer) {
            currentIndex++;
        }

       
        if (currentIndex >= rows.length) {
            setTimeout(() => {
                res.redirect('/ubungen');
            }, 2000);
        } else {
            setTimeout(() => {
                res.redirect('/ubungen');
            }, 2000);
        }
    }).catch((err) => {
        console.log(err);
    });
};
