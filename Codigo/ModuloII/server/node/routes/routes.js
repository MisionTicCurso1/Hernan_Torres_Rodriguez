module.exports = (app)=>{
    app.get('/clase', (req, res) =>{
        res.send('holi');
    });
};