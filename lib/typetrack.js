var camera, scene, renderer,
geometry, material, mesh;

$('document').ready(function() {
  init();
  animate();
});

function init() {

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera( 80, window.innerWidth / window.innerHeight, 1, 10000 );
  camera.position.z = 1000;
  scene.add( camera );

  // Star field
  particles = [];
  initStarField();

  // Add cars
  players = [];
  player1 = new Car(0x0000ff);
  scene.add( player1.getMesh() );
  players.push( player1 );
  
  // Bind key handler
  $(window).bind('keydown',handleKeyDown);

  renderer = new THREE.CanvasRenderer();
  renderer.setSize( window.innerWidth, window.innerHeight );

  document.body.appendChild( renderer.domElement );

}

function animate() {

  // note: three.js includes requestAnimationFrame shim
  requestAnimationFrame( animate );
  render();

}

function render() {

  // Update objects
  for (i in players) {
    players[i].update();
  }
  for (i in particles) {
    particles[i].update();
  }

  renderer.render( scene, camera );

}

function initStarField() {
  for (var zpos = -1000; zpos < 1000; zpos += 20) {
    var p = new Particle(zpos);
    scene.add(p.getMesh());
    particles.push(p);
  }
}

function handleKeyDown(e) {
  dx = dz = 0;
  switch (e.keyCode) {
    case 37:  // left
      dx -= 10;
      break;
    case 38:  // up
      dz -= 100;
      break;
    case 39:  // right
      dx += 10;
      break;
    case 40:  // down
      dz += 100;
      break;
  }
  player1.move(dx,0,dz);
}
