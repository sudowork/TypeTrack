function Car(color) {
  this.color = (color) ? 0xff000 : color;
  this.geometry = new THREE.CubeGeometry( 200, 200, 100 );
  this.material = new THREE.MeshBasicMaterial( { color: this.color, wireframe: true } );
  this.mesh = new THREE.Mesh( this.geometry, this.material );

  Car.prototype.getMesh = function() {
    return this.mesh;
  }

  Car.prototype.rotate = function(dx,dy) {
    this.mesh.rotation.x += (dx) ? dx : 0;
    this.mesh.rotation.y += (dy) ? dy : 0;
  }

  Car.prototype.move = function(dx,dy,dz) {
    this.mesh.position.x += (dx) ? dx : 0;
    this.mesh.position.y += (dy) ? dy : 0;
    this.mesh.position.z += (dz) ? dz : 0;
  }

  Car.prototype.update = function() {
    this.rotate(.01,.02);
  }
}
