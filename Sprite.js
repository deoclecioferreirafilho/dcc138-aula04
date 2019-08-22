function Sprite(exemplo = {}) {
    var {
        x = 10,
        y = 100,
        w = 10,
        vx = 0,
        vy = 0,
        color = "blue"
    } = exemplo;

    this.x = x;
    this.y = y;

    this.w = w;

    this.vx = vx;
    this.vy = vy;

    this.color = color;
}

Sprite.prototype = new Sprite({});
Sprite.constructor = Sprite;

Sprite.prototype.desenhar = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.strokeStyle = "black";
    ctx.fillRect(this.x, this.y, this.w, this.w);
}

Sprite.prototype.mover = function (dt) {
    this.x = this.x + this.vx * dt;
    this.y = this.y + this.vy * dt;
}

Sprite.prototype.colidiuCom = function (alvo) {
    if (alvo.x + alvo.w < this.x) return false;
    if (alvo.x > this.x + this.w) return false;

    if (alvo.y + alvo.w < this.y) return false;
    if (alvo.y > this.y + this.w) return false;

    return true;

}

Sprite.prototype.perseguir = function (opcoes) {
    this.vx = 40 * Math.sign(opcoes.alvo.x - this.x);
    this.vy = 40 * Math.sign(opcoes.alvo.y - this.y);
}

Sprite.prototype.controlePorTeclas = function (opcoes) {
    if (opcoes.teclas.esquerda) { this.vx = -50; }
    if (opcoes.teclas.direita) { this.vx = 50; }
    if (!opcoes.teclas.esquerda && !opcoes.teclas.direita)
        this.vx = 0;
    if (opcoes.teclas.cima) { this.vy = -50; }
    if (opcoes.teclas.baixo) { this.vy = 50; }
    if (!opcoes.teclas.cima && !opcoes.teclas.baixo)
    this.vy = 0;
}