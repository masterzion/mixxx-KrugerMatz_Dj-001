function KrugerMatz001(){}




//KrugerMatz001.currentDeck=1;
// The button that enables/disables scratching
KrugerMatz001.wheelTouch = function (channel, control, value, status, group) {
  if ('[Channel2]' == group) {
      currentDeck = 2;
  } else {
      currentDeck = 1;
  }
    if ((status & 0xF0) === 0x90) {    // If button down
//  if (value === 0x7F) {  // Some wheels send 0x90 on press and release, so you need to check the value
        var alpha = 1.0/8;
        var beta = alpha/32;
        engine.scratchEnable(currentDeck, 128, 15+1/3, alpha, beta);
    } else {    // If button up
        engine.scratchDisable(currentDeck);
    }
}

// The wheel that actually controls the scratching
KrugerMatz001.wheelTurn = function (channel, control, value, status, group) {
  if ('[Channel2]' == group) {
      currentDeck = 2;
  } else {
      currentDeck = 1;
  }
  
  print(group);

    // --- Choose only one of the following!
    
    // A: For a control that centers on 0:
    var newValue;
    if (value < 64) {
        newValue = value;
    } else {
        newValue = value - 128;
    }

    // B: For a control that centers on 0x40 (64):
    var newValue = value - 64;
    
    
    if (currentDeck == 1) {
        newValue = newValue * -1;
    }
    
    // --- End choice
    
    // In either case, register the movement
    if (engine.isScratching(currentDeck)) {
        engine.scratchTick(currentDeck, newValue); // Scratch!
    } else {
        engine.setValue('[Channel'+currentDeck+']', 'jog', newValue); // Pitch bend
    }
}