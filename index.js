const $ = require('jquery');
const mdc = require('markdown-core/markdown-core-node');
require('./index.css');


$(function(){
  $('#markdown-textarea').on('input propertychange paste', function() {
    const markdown = $(this).val();
    const html = mdc.render(markdown);
    $('.markdown-body').html(html);
  });
});
