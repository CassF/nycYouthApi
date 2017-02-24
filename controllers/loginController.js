const hash = require('password-hash');
const password = process.env.PW;

class LoginController {
    static verifyPassword(req, res){
        let checkedPassword = hash.verify(password, req.body.password);
        checkedPassword ? res.status(200).send(checkedPassword) : res.status(400).send('error');
    }
}

module.exports = LoginController;