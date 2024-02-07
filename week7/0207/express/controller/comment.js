const commentsModel = require('../model/comment');

// 방법1
// exports.main = (req, res) => {
//     res.render('index');
// };

// exports.comments = (req, res) => {
//     res.render('comments', { list: comments });
// };

// exports.comment = (req, res) => {
//     console.log(req.params);
//     console.log(typeof req.params.page);
//     const page = Number(req.params.page);
//     //comments 배열의 요소에 접근 => 즉, 객체 하나
//     res.render('comment', { data: comments[page - 1] });
// };

//방법2
const main = (req, res) => {
    res.render('index');
};

const comments = (req, res) => {
    res.render('comments', { list: commentsModel });
};

const comment = (req, res) => {
    console.log(req.params);
    console.log(typeof req.params.page);
    const page = Number(req.params.page);
    //comments 배열의 요소에 접근 => 즉, 객체 하나
    res.render('comment', { data: commentsModel[page - 1] });
};

module.exports = { main: main, comments, comment };
