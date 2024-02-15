const User = require('../model/user');

// 회원가입
exports.signup = async (req, res) => {
    console.log(req.body);
    const result = await User.signup(req.body);
    console.log('signup', result);
    res.json({ result: true });
};

// 로그인
exports.login = async (req, res) => {
    const result = await User.login(req.body);
    console.log('lgoin', result);
    if (result.length >= 1) {
        res.json({ result: true, message: '로그인 성공', id: result[0].id});
    } else {
        res.json({ result: false, message: '로그인 실패', id: null });
    }
};
// 회원정보 조회
exports.info = async (req, res) => {
    const result = await User.info(req.params.id);
    console.log('info', result);
    if (result.length >  0) {
        res.json({ result: true, info: reuslt[0], message: '회원존재' });
    } else {
        res.json({ result: false, info: null, message: '존재하는 회원없음'});
    }
};
// 회원정보 수정
exports.update = async (req, res) => {
    const result = await User.update(req.body);
    console.log('update', result);
    res.json({ result: true });
};
// 회원정보 삭제
exports.delete = async (req, res) => {
    const result = await User.delete(req.body);
    res.json({ result: true });
};