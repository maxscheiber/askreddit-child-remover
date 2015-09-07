var $comments = $('.commentarea > .sitetable > .thing');

window.parser = new CommentParser($comments);
window.parser.filter();

