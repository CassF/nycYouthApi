const hash = require('password-hash');
const password = process.env.PW;
const username = process.env.USERNAME;

class LoginController {
    static verifyPassword(req, res){
        if(req.body.username == username){
            let hashedPassword = hash.generate(req.body.password);
            let checkedPassword = hash.verify(password, hashedPassword);
            checkedPassword ? res.status(200).send(checkedPassword) : res.status(400).send('error');
        }else{
            console.log("sec");
            res.status(400).send('error');
        }
    }
}

module.exports = LoginController;