const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files với MIME type đúng
app.use(express.static(__dirname, {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
        if (filePath.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
        if (filePath.endsWith('.png')) {
            res.setHeader('Content-Type', 'image/png');
        }
        if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
            res.setHeader('Content-Type', 'image/jpeg');
        }
    }
}));

// CHỈ catch HTML routes, KHÔNG catch static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// THÊM: Catch-all cho SPA routing (nếu cần)
app.get('*', (req, res) => {
    // Chỉ serve index.html cho requests không phải static files
    if (!req.path.includes('.')) {
        res.sendFile(path.join(__dirname, 'index.html'));
    } else {
        res.status(404).send('File not found');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});