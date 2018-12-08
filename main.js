//
// Please write a script so that clicking
// one of the "Show" elements will display
// all of the matching elements below and
// hide the others.
//
// You may change the markup as needed.
//
$(document).ready(function() {
      $('button').click(function() {
            $('.state-content').hide();
            $('.' + $(this).val()).show();
      });
});
