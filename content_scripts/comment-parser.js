var CommentParser = function($comments) {
    // Save the $comments as state!
    this.$comments = $comments;
};

CommentParser.prototype.filter = function() {
  for (var i = 0; i < this.$comments.length; i++) {
    var $topLevel = $(this.$comments[i]);
    var $childComments = $topLevel.children('.child').
        children('.sitetable').
        children('.thing');

    $childComments.removeClass('noncollapsed');
    $childComments.addClass('collapsed');
  }
};

