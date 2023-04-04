const orm = require('../connection/orm');
const Banner = require('../entity/banner');

orm.sync().then(() => {
    for (let i = 1; i <= 10; i++) {
        Banner.create({
            title: 'Segunda do papoco zenir '+i,
            description: 'a melhor explosao de ofertas',
            image: 'img.jpg'
        });
    }
});



