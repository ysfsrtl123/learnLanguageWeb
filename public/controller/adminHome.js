const { Word,words } = require('../model/word.js');

exports.getAdminHome = (req, res, next) => {
    const navbarTitle = 'Admin Login';
    res.render('index', {
        navbarTitle,
        title: 'Admin Login',
        path: '/admin',
        isAdmin: true
    });
};

exports.getAdminAbout = (req, res, next) => {
    const navbarTitle = 'Admin über uns'; 
    res.render('about', {
        navbarTitle,
        title: 'Admin Login',
        path: '/admin/about', 
        isAdmin: true
    });
};

exports.getAdminUbungen = (req, res, next) => {
    const navbarTitle = 'Admin Übungen';
    const words = Word.getAllWords(); 
    res.render('add', {
        navbarTitle,
        words,
        title: 'Admin Übungen',
        path: '/admin/ubungen',
        isAdmin: true 
    });
};

exports.postaddword = (req, res, next) => {
    const word = new Word(
        null, 
        req.body.q,
        req.body.addAnswer
    );

    console.log('Kelime:', req.body.q);
    console.log('Cevap:', req.body.addAnswer);

    word.addWord();
    console.log('Eklenen Kelime:', JSON.stringify(word, null, 2));
    res.redirect('/admin/ubungen');
};

exports.postDeleteWord = (req,res,next) => {
    const wordId = parseInt(req.params.id); 

    Word.deleteWord(wordId);
    res.redirect('/admin/ubungen');
};

exports.getUpdateWord = (req, res, next) => {
    const wordId = parseInt(req.params.id);
    const word = Word.getWordById(wordId); 
    const navbarTitle = 'Admin Update';
    if (!word) {
        return res.status(404).render('404', { title: 'Kelime Bulunamadı' });
    }
    res.render('update', { title: 'Kelime Güncelle', navbarTitle, word: word });
};

exports.postUpdateWord = (req, res, next) => {
    const wordId = parseInt(req.params.id);
    const updatedWord = {
        q: req.body.q,
        answer: req.body.answer
    };

    Word.updateWord(wordId, updatedWord); 
    res.redirect('/admin/ubungen');
};
