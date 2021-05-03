const PostModel = require("../../models/PostModel");

module.exports = updatePost = async (req, res, next) => {
    try {
        const updatePost = req.body;
        const post = await PostModel.findOneAndUpdate({ _id: updatePost._id }, updatePost, { new: true });
        await post.save();
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ error: error });
    }
};
