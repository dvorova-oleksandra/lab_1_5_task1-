
var hello = document.getElementById('text');
var x = 0;
var y = 0;
var angle = -3;

function animate() {
  x += 0.05;
  angle += 0.05;

  y = 90 * (Math.sin(Math.sqrt(angle)) + Math.cos(Math.sqrt(angle)));

 hello.style.transform = `translate3d(${x}px, ${-y}px, 0)`;


  if (angle >= 1000) {
    angle = -3;
    x = 0
  }

  requestAnimationFrame(animate);
}
animate();