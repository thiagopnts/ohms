(function () {
  const Circle = function (x, y, r, color, ctx) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.ctx = ctx;
    this.draw = () => {
      this.ctx.beginPath();
      this.ctx.fillStyle = this.color;
      this.ctx.arc(
        this.x + this.r * 2 + 1,
        this.y + this.r * 2 + 1,
        this.r,
        0,
        Math.PI * 2,
        false
      );
      this.ctx.fill();
    };
    return this;
  };

  const canvas = document.getElementById("canvas");
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  const ctx = canvas.getContext("2d");
  const dots = 115;
  // dots * 3 because each dot is radius + radius(a dot) + radius again (the space between dots)
  // probably wrong against some edges case but who cares :)
  const radius = Math.ceil(window.innerWidth / (dots * 3));
  const diameter = radius * 2;

  for (let i = 0; i < dots * 3; i++) {
    for (let j = 0; j < dots * 3; j++) {
      c1 = new Circle(
        (diameter + radius) * i,
        (diameter + radius) * j,
        radius,
        "white",
        ctx
      );
      c1.draw();
    }
  }
  //115 x 115?
})();
