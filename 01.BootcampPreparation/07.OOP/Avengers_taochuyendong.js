function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function () {
        this.left += 10;

        console.log('ok: ' + this.left);
    }
    this.moveCross=function () {
        this.left +=10;
        this.top +=10;
        console.log('ok:'+this.left +','+this.top);
    }
} 

var hero = new Hero('captain.png', 0, 0, 100);
var kc1 =window.innerWidth - hero.size;
var kc2 =window.innerHeight - hero.size;
function start() {
    if (hero.left < kc1) {
        hero.moveRight();
    } 
    if (hero.left<kc1 && hero.top<kc2) {
        hero.moveCross();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)
}
start();