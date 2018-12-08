//
// Please write a script so that clicking
// one of the "Show" elements will display
// all of the matching elements below and
// hide the others.
//
// You may change the markup as needed.
//
$(document).ready(function() {
      $('.a-button').on('click', function(){
            $('.a-content').show();
            $('.b-content, .c-content').hide();
      })
      $('.b-button').on('click', function() {
            $('.b-content').show();
            $('.a-content, .c-content').hide();
      })
      $('.c-button').on('click', function() {
            $('.c-content').show();
            $('.a-content, .b-content').hide();
      })
});
