const { words, Word } = require('../model/word.js'); 

exports.getHome = (req, res, next) => {
    const navbarTitle = 'DEUTSCH';
    const headTitle = 'Learn Deutsch | Startseite';
    res.render('index', { 
        navbarTitle,
        headTitle,
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

let currentIndex = 0;

exports.getUbungen = (req, res, next) => {
    const navbarTitle = 'Übungen';
    const headTitle = 'Learn Deutsch | Übungen';
    const currentWord = words.length > 0 ? words[currentIndex] : '';
    res.render('ubungen', {
        navbarTitle,
        headTitle,
        currentWord,
        title: 'Übungen',
        path: '/ubungen',
        isAdmin: false
    });
};


exports.postUbungen = (req, res, next) => {
    let userAnswer = req.body.answer ? req.body.answer.toLowerCase().trim() : '';
    let correctAnswer = words[currentIndex] && words[currentIndex].answer ? words[currentIndex].answer.toLowerCase() : '';

    function redirect() {
        if (userAnswer === correctAnswer) {
            currentIndex++;
            if (currentIndex >= words.length) {
                currentIndex = 0;
            }
        }

        res.redirect('/ubungen');
    }

    setTimeout(redirect, 2000);
};


