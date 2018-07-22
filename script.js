var windowHeight = window.innerHeight;

function initScrollHandler() {
  var fadeInSections = [].map.call(document.getElementsByClassName('fade-in'), function(el) {
    return {
      el: el,
      y: el.getBoundingClientRect().top,
      visible: false,
    };
  });

  window.addEventListener('scroll', function scrollHandler(e) {
    var scrollY = window.scrollY;

    fadeInSections.forEach(function(section, i) {
      if (!section.visible && scrollY + windowHeight > section.y + 300) {
        section.el.className += ' visible';
        section.visible = true;
        if (i === fadeInSections.length - 1) {
          window.removeEventListener('scroll', scrollHandler);
        }
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initScrollHandler);