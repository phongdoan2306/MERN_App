const PostModel = require("../../models/PostModel");

module.exports = getPosts = async (req, res, next) => {
    try {
        const posts = await PostModel.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};