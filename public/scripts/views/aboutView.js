'use strict';
// This is where we define the view for the "About" page

(function(module) {
  //all the codez
  const aboutView = {}

  aboutView.init = function() {
    $('#contacts').empty();

    $('#content').text('Representing the a-boot page for our Canadian friends.');
  }

  module.aboutView = aboutView;
})(window);