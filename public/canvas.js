window.addEventListener("DOMContentLoaded", () => {
  let canvas = document.querySelector("canvas");
  let c = canvas.getContext("2d");

  // canvas.height = window.innerHeight;
  // canvas.width = window.innerWidth;

  class Circle {
    constructor(x, y) {
      this.x = x;
      this.y = y;

      this.radius = Math.random() * 35 + 3;
      this.sAngle = 0;
      this.eAngle = 2 * Math.PI;

      this.dx = Math.random() * 0.2;
      this.dy = Math.random() * 0.2;

      this.colorArray = ["#013644", "#8f1a1d", "#d3623a", "#fba92e", "#008a93"];
      this.index = Math.floor(Math.random() * this.colorArray.length);
    }

    draw() {
      c.beginPath();
      c.fillStyle = this.colorArray[this.index];
      c.strokeStyle = this.colorArray[this.index];
      c.arc(this.x, this.y, this.radius, this.sAngle, this.eAngle);
      c.stroke();
      c.fill();
    }

    update() {
      this.draw();
      this.collision();
      this.x += this.dx;
      this.y += this.dy;
    }

    collision() {
      if (this.x < 0 || this.x > innerWidth) {
        this.dx *= -1;
      } else if (this.y < 0 || this.y > innerHeight) {
        this.dy *= -1;
      }
    }
  }

  //Clear the screen
  function clearScreen() {
    c.fillStyle = "#FFFFFF";
    c.fillRect(0, 0, innerWidth, innerHeight);
  }

  //Array of circles
  var circle = [];

  for (i = 0; i < 8; i++) {
    circle.push(
      new Circle(
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight
      )
    );
  }

  function resizeCanvasToDisplaySize(canvas) {
    // look up the size the canvas is being displayed
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    // If it's resolution does not match change it
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
      return true;
    }

    return false;
  }
  function drawLines() {
    var temp = [];
    c.beginPath();
    c.strokeStyle = "#959595";
    if (circle[0] != null) {
      c.moveTo(circle[0].x, circle[0].y);
    }

    for (var i = 1; i < circle.length; i++) {
      c.lineTo(circle[i].x, circle[i].y);
    }
    c.stroke();
  }

  function animate() {
    requestAnimationFrame(animate);
    resizeCanvasToDisplaySize(canvas);
    clearScreen();
    drawLines();
    for (var i = 0; i < circle.length; i++) {
      circle[i].update();
    }
  }

  animate();
});
