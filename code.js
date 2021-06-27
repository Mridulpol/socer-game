var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var laser1 = createSprite(100, 0,200,5);
var laser2 = createSprite(300, 400,200,5);
var laser3 = createSprite(240, 145,200,5);
var laser4 = createSprite(145, 245,200,5);
var thief  = createSprite(10, 390, 10, 10);
        
laser1.shapeColor = "red";
laser2.shapeColor = "red";
laser3.shapeColor = "red";
laser4.shapeColor = "red";

laser1.velocityY = 2;
laser2.velocityY = 2;
laser3.velocityX = 2;
laser4.velocityX = 2;

function draw() {
background("blue");
fill("white");
shape(390,0,380,10,390,20,400,10);

if (keyDown(RIGHT_ARROW)) {
thief.velocityX = 2;
thief.velocityY = 0;
        
}

if (keyDown(LEFT_ARROW)) {
thief.velocityX = -2;
thief.velocityY = 0; 
        
}

if (keyDown(UP_ARROW)) {
thief.velocityX = 0;
thief.velocityY = -2;
        
}

if (keyDown(DOWN_ARROW)) {
thief.velocityX = 0;
thief.velocityY = 2;    
}

if (laser1.isTouching(thief)||laser2.isTouching(thief)||laser3.isTouching(thief)||laser4.isTouching(thief)) {
text("Thief is caught ",150,200);
laser1.velocityY = 0;
laser2.velocityY = 0;
laser3.velocityX = 0;
laser4.velocityX = 0;
thief.velocityY = 0;
}



createEdgeSprites();laser1.bounceOff(edges);
laser2.bounceOff(edges);thief.bounceOff(edges);
laser3.bounceOff(edges);laser4.bounceOff(edges);
drawSprites();
        
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
