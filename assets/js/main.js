window.onscroll = function(e) {
  h = document.getElementById('header');
  c = document.getElementById('project-content');
  if (document.body.scrollTop > h.offsetTop) {
    if (document.body.scrollTop > c.offsetTop) {
      h.className = 'sticky';
    } else {
      h.className = 'sticky in-header';
    }
  }

  if (document.body.scrollTop < 240) {
    h.className = '';
  }
}

$(document).foundation("magellan", {threshold: 150});


$(document).ready(function() {
  $('.magellan a').on('click', function(){
      var elementID = $(this).attr('href').substring(1);
      var pos = $("[data-magellan-destination="+elementID+"]").offset().top - 65;
      console.log("scrolling to",pos);
      $.scrollTo({ endY: pos });
      return false;
  });
});
