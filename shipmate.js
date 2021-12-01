/*
ShipMate by ndekesyiri
v1.1 - PartyNextDoor🥳
New:
---Plyr Video Customization
*/
/*Plyr customization*/
function initializePlayer() {
  if ($('#player').length) {
    const player = new Plyr('#player');
  } else {
    return false;
  }
  return false;
}
$(window).on('load', initializePlayer());