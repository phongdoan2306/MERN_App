const AccountModel = require('../../models/AccountModel');
const jwt = require('jsonwebtoken');

module.exports = signInAccount = async (req, res, next) => {
    try {
        const account = req.body;
        await AccountModel.findOne({
            username: account.username,
            password: account.password
        })
            .then(async (data) => {
                if(data) {
                    console.log(data);
                    let token = await jwt.sign({ _id: data._id }, 'password_secret');
                    res.status(200).json({ token: token });
                } else {
                    res.status(300).json("Account khong dung");
                }
            })
            .catch((err) => {
                res.status(500).json("loi roi",{ error: err });
            })
    } catch (error) {
        res.status(500).json({ error: error });
    }
}