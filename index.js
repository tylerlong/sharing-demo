$(function(){
  $('#markdown-textarea').on('input propertychange paste', function() {
    const markdown = $(this).val();
    const html = mdc.render(markdown);
    $('.markdown-body').html(html);
  });
});
