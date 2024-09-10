const connection = require('../utility/database'); // Veritabanı bağlantısını model başında require ediyoruz

class Word {
    constructor(id, word, answer) {
        this.id = id;
        this.word = word;
        this.answer = answer;
    }

    // Tüm kelimeleri veritabanından çek
    static getAllWords() {
        return connection.execute('SELECT * FROM word');
    }

    // Yeni bir kelime ekle
    static addWord(word, answer) {
        return connection.execute('INSERT INTO word (word, answer) VALUES(?, ?)', [word, answer]);
    }

    // Belirli bir ID ile kelimeyi getir
    static getWordById(id) {
        return connection.execute('SELECT * FROM word WHERE id = ?', [id]);
    }

    // Kelimeyi güncelle
    static updateWord(id, updatedWord) {
        return connection.execute(
            'UPDATE word SET word = ?, answer = ? WHERE id = ?',
            [updatedWord.word, updatedWord.answer, id]
        );
    }
    

    // Kelimeyi sil
    static deleteWord(id) {
        return connection.execute('DELETE FROM word WHERE id = ?', [id]);
    }
}

module.exports = { Word };
