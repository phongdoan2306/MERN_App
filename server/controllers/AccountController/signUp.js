const AccountModel = require('../../models/AccountModel');

module.exports = signUpAccount = async (req, res, next) => {
    try {
        const newAccount = req.body;
        await AccountModel.findOne({ username: newAccount.username })
        .then( async (data) => {
            if(data) {
                res.json("username da ton tai");
            } else {
                const account = new AccountModel(newAccount);
                await account.save();
                res.status(200).json(account);
            }
        })
        .catch((err) => {
            res.status(500).json({ error: err });
        });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

