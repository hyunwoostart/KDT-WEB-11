const main = (req, res) => {
    res.render('index');
};

const post = (req, res) => {
    res.render('post'); //전체 글 페이지
};

const datail = (req, res) => {
    res.render('datail'); // 상세 페이지
};

module.exports = { main, post, detail };
