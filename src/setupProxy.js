const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        proxy('/testimonial',{
            target: 'http://wknd-take-home-challenge-api.herokuapp.com',
            changeOrigin: true
        })
    )
    app.use(
        proxy('/help-tips',{
            target: 'http://wknd-take-home-challenge-api.herokuapp.com',
            changeOrigin: true
        })
    )
}
