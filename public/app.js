const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin'); // Admin route dosyasının yolu
const homeRoutes = require('./routes/user');   // Home route dosyasının yolu

// Path bilgilerini takip etmek için bir middleware
app.use((req, res, next) => {
    console.log(`Path: ${req.path}`);
    next(); // Bir sonraki middleware veya route handler'a geçiş
});

app.use(express.static(path.join(__dirname, 'public'))); // Public dizinini statik olarak ayarlamak
app.set('view engine', 'pug'); // Pug template engine ayarlaması
app.set('views', path.join(__dirname, 'views')); // Views dizini

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/admin', adminRoutes); // Admin rotalarını '/admin' altına ekler
app.use('/', homeRoutes); // Home rotalarını root olarak ekler

app.use((req, res) => {
    res.status(404).render('404', { pageTitle: 'Seite nicht gefunden' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).render('500', { pageTitle: 'Etwas ist schief gelaufen!'})
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
