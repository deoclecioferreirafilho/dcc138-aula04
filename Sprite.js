function Sprite() {
    this.x = 0;
    this.y = 0;

    this.w = 30;

    this.vx = 0;
    this.vy = 0;
}

Sprite.prototype = new Sprite();
Sprite.constructor = Sprite;

Sprite.prototype.desenhar = function(ctx) {
    ctx.fillStyle = "blue";
    ctx.strokeStyle = "black";
    ctx.fillRect(this.x, this.y, this.w, this.w);
}

Sprite.prototype.mover = function(dt) {
    this.x = this.x + this.vx*dt;
    this.y = this.y + this.vy*dt;
}