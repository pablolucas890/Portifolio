//FUNCTION TO GET AND AUTO PLAY YOUTUBE VIDEO FROM DATATAG
function autoPlayYouTubeModal(){
  var trigger = $("body").find('[data-toggle="modal"]');
  trigger.click(function() {
    var theModal = $(this).data( "target" ),
    videoSRC = $(this).attr( "data-theVideo" ),
    imgSRC = $(this).attr( "data-theImg" ),
    videoSRCauto = videoSRC+"?start=1&autoplay=1",
    title = $(this).attr( "data-theTitle" );

    $(theModal + ' .modal-title').text(title);

    if(imgSRC == null) {
      $(theModal + ' iframe').attr('src', videoSRCauto);
      $(theModal).on('hidden.bs.modal', function () {
        $(theModal + ' iframe').removeAttr('src');
      });
    } else {
      $(theModal + ' img').attr('src', imgSRC);
      $(theModal).on('hidden.bs.modal', function () {
        $(theModal + ' img').removeAttr('src');
      });
    }

  });
}

$(document).ready(function(){
  autoPlayYouTubeModal();
});