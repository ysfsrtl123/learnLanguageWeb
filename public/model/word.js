const connection = require('../utility/database');
     
 
 class Word {
     constructor(id, word, answer) {
         this.Word = word;
         this.answer = answer;
     }
 
     static getAllWords() { 
        return connection.execute('SELECT * FROM word'); 
     }
 
     addWord() {
        
     }
 
    static getWordById(id) {
       
     }
 
    static updateWord( updatedWord) {
        
     }
 
    static deleteWord(id) {

    }
        
 }
 
 module.exports = { Word };
 