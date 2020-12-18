var Post = require("../src/post");

// Display list of all posts.
exports.index = function (req, res, next) {
  Post.find({}).exec(function (err, list_posts) {
    if (err) {
      return next(err);
    }
    // Successful, so render
    res.render("posts", { title: "Post List", post_list: list_posts });
  });
};

// Handle book create on POST.
exports.create = function (req, res, next) {
  sanitizeBody("*").trim().escape();

  // Create a post object
  // Improve: Use promises with .then()
  var post = new Post({ content: req.body.content, author: req.body.author });

  post.save(function (err) {
    if (err) {
      return next(err);
    }
    // Successful - redirect to new book record.
    res.redirect("/posts");
  });
};
