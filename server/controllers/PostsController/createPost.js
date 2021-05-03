const PostModel = require("../../models/PostModel");

module.exports = createPost = async (req, res, next) => {
    try {
        const newPost = req.body;
        const post = new PostModel(newPost);
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};