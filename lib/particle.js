function Particle (zpos) {
  this.color = 0xffffff;
  this.geometry = new THREE.CubeGeometry( 200, 200, 100 );
  this.material = new THREE.MeshBasicMaterial( { color: this.color, program: this.particleRender } );
  this.mesh = new THREE.Mesh( this.geometry, this.material );

  this.mesh.position.x = Math.random()*800-400;
  this.mesh.position.y = Math.random()*800-400;
  this.mesh.position.x = (this.mesh.position.x > 0) ? 
    100 + this.mesh.position.x : -100 + this.mesh.position.x;
  this.mesh.position.y = (this.mesh.position.y > 0) ? 
    100 + this.mesh.position.y : -100 + this.mesh.position.y;
  this.mesh.position.z = zpos;
  this.mesh.scale.x = .1;
  this.mesh.scale.y = .1;
  this.mesh.scale.z = .1;

  Particle.prototype.particleRender = function(context) {
    context.beginPath();
    context.arc(0,0,1,0,Math.PI*2,true);
    context.fill();
  }

  Particle.prototype.setZ = function(zpos) {
    this.mesh.position.z = zpos;
  }

  Particle.prototype.getMesh = function() {
    return this.mesh;
  }

  Particle.prototype.update = function() {
    this.mesh.position.z += 20;
    if (this.mesh.position.z > 1000) this.mesh.position.z = -1000;
  }
}
