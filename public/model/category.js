const Categories = [
    {id: 1 , name: "news", description: "Die Nachrichten"},
    {id: 2 , name: "information", description: "Wie lernt man deutsch?"}
];

module.exports = class Category {
    constructor(name, description) {
        this.id = (Categories.length + 1).toString();
        this.name = name;
        this.description = description;
    }

    saveCategory() {
        Categories.push(this);
    }

    static getAllCategories() {
        return Categories;
    }

    static getById(id) {
        return Categories.find(i => i.id === id);
    }

    static update(category) {
        const index = Categories.findIndex(i => i.id === category.id);
        if (index !== -1) {
            Categories[index].name = category.name;
            Categories[index].description = category.description;
        }
    }

    static deleteById(id) {
        const index = Categories.findIndex(i => i.id === id);
        if (index !== -1) {
            Categories.splice(index, 1);
        }
    }
};
