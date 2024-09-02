const words = [
    {id:40, q:"wash" , answer:"yıkamak"}
 ];
     
 
 class Word {
     constructor(id, q, answer) {
         this.id = Math.floor(Math.random() * 99 + 1); 
         this.q = q;
         this.answer = answer;
     }
 
     static getAllWords() { 
         return words; 
     }
 
     addWord() {
         words.push(this);
     }
 
    static getWordById(id) {
         return words.find(word => word.id === id);
     }
 
    static updateWord(id, updatedWord) {
         const index = words.findIndex(word => word.id === id);
         if (index !== -1) {
             words[index] = { ...words[index], ...updatedWord };
             console.log(`${Word.id} güncellendi`);
         }
     }
 
    static deleteWord(id) {
         const index = words.findIndex(word => word.id === id);
         if (index !== -1) {
             words.splice(index, 1);
             console.log(`Kelime ID: ${index} silindi`)
         } else{
             console.log(`Kelime ID: ${index} bulunamadı`);
         }
     }
 }
 
 module.exports = { Word, words };
 