const { Word } = require('../model/word.js');
const Category = require('../model/category.js');

exports.getAdminHome = (req, res, next) => {
    const navbarTitle = 'Admin Login';
    const Categories = Category.getAllCategories();
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
    Word.getAllWords().then(([rows]) => {
        res.render('add', {
            navbarTitle,
            word: rows, // 'word' yerine 'rows' verisini geçiyoruz
            title: 'Admin Übungen',
            path: '/admin/ubungen',
            isAdmin: true
        });
    });
};

    


exports.postaddword = (req, res, next) => {
    const word = req.body.word;
    const answer = req.body.addAnswer;

    

    Word.addWord(word, answer)
    .then(()=> {
    console.log('Kelime:', req.body.word);
    console.log('Cevap:', req.body.addAnswer);
    console.log('Kelime Ve Cevabı Başarı İle Eklendi.');
     res.redirect('/admin/ubungen');
    })
    .catch((err) => {
        console.log('Kelimeler Eklenemedi Bİrşeyler Ters Gitti!'+''+err);
    })
    
};

exports.postDeleteWord = (req,res,next) => {
    const wordId = parseInt(req.params.id); 

    Word.deleteWord(wordId).then(() => {
        console.log('ögeler başarıyla silindi.');
      res.redirect('/admin/ubungen?success=deleted');
    }).catch(err => {
        console.log('Birşeyler ters gitti!');
    });
   
};

exports.getUpdateWord = (req, res, next) => {
    const wordId = parseInt(req.params.id);
    const navbarTitle = 'Admin Update';

    
    Word.getWordById(wordId).then(([rows]) => {
        const word = rows[0]; 

        if (!word) {
            return res.status(404).render('404', { title: 'Kelime Bulunamadı' });
        }
        res.render('update', { title: 'Kelime Güncelle', navbarTitle, word: word });
    }).catch(err => {
        console.log(err);
    });
};


exports.postUpdateWord = (req, res, next) => {
    console.log(req.body);

    const wordId = req.params.id;
    const updatedWord = {
        word: req.body.updateWord,
        answer: req.body.updateAnswer
    };

    Word.updateWord(wordId, updatedWord).then(() => {
        res.redirect('/admin/ubungen?success=updated');
        console.log('veri başarı ile güncellendi!')
    }).catch(err => {
        console.log(err);
    });
};

