let flies = [];
let popu = 25;
let grass;
let rot;
function setup() {
    createCanvas(innerWidth, innerHeight);
    grass = new yard();
    for (let i = 0; i < popu; i++) {
        flies.push(new firefly());
    }
}

function draw() {
    background(5, 10, 25, 225);
    grass.update();
    for (let i = 0; i < flies.length; i++) {
        flies[i].update();
    }
}
function firefly() {
    this.x = 0;
    this.y = 0;

    this.xoff = random(100);
    this.yoff = random(100);

    this.wave = random(5);
    this.rate = random(0.05, 0.01);

    this.roff = random(12);
    this.toff = random(25);

    this.rise = 0;

    this.update = function () {
        this.xoff += 0.0035;
        this.yoff += 0.0035;

        let w = width * 0.25;
        let h = height * 0.25;

        this.rise += 0.001;

        this.x = map(noise(this.xoff), 0, 1,
            -w, width + w);
        this.y = map(noise(this.yoff), 0, 1,
            -h, height + h);
        this.wave += this.rate;

        let flash = abs(sin(this.wave) * 225);

        let falpha = map(flash, 50, 200, 0, 125);

        stroke(flash * 0.5-50, flash * 0.5 - 30, 0, falpha);

        push();
        translate(this.x, this.y);
        this.toff += 0.1;
        let twing = map(noise(this.toff), 0, 1,
            -PI * 0.5, PI * 0.5);
        rotate(twing);

        this.roff += 1;
        let r = map(sin(this.roff), -1, 1,
            -PI * 0.25, PI * 0.25);
        strokeWeight(1);
        let winglen = 9;

        push();
        stroke(225, 100, 50, 125);
        rotate(r);
        line(0, 0, -winglen, 0);
        pop();

        push();
        stroke(255, 200, 0, 125);
        rotate(-r);
        line(0, 0, winglen, 0);
        pop();

        let size = map(flash, 0, 255, 10, 25);
        strokeWeight(size);
        point(0, 0);
        strokeWeight(size * 0.25);
        stroke(255, 255, 0, 255);
        point(0, 0);
        pop();
    }
}

function yard() {
    this.grass = [];
    this.roff = [];
    this.rwave = [];
    this.size = [];
    this.seg = [];
    this.index = 0;
    this.population = 150;
    for (let x = 0; x < width; x += width / this.population) {
        this.index += 1;
        this.grass.push(x);
        this.roff.push((this.index * 0.05) + 0.015);
        this.rwave.push(0);
        this.size.push(random(35, 60));
        this.seg.push(0.85);
    }

    this.update = function () {
        for (let i = 0; i < this.index; i++) {
            let len = this.size[i];

            push();
            translate(this.grass[i], height);
            this.blade(len, i);
            pop();
        }
    }
    this.blade = function (len, ind) {
        if (ind % 2 == 0) {
            this.roff[ind] += 0.0025;
            stroke(0, 115 - (len * 0.5), len * 0.5, 255);
            rot = map(noise(this.roff[ind]), 0, 1,
                -QUARTER_PI * 0.5, QUARTER_PI * 0.5);
        } else if(ind%3==0) {
            this.roff[ind] += 0.0025;
            stroke(175 - (len * 2.5), len * 2.5, 20, 255);
            rot = map(-sin(this.roff[ind]), -1, 1,
                -QUARTER_PI * 0.25, QUARTER_PI * 0.25);
        } else {
            this.roff[ind] += 0.0025;
            stroke(10 - (len * 1.25), len * 1.75, 10, 255);
            rot = map(-sin(this.roff[ind]), -1, 1,
                -QUARTER_PI * 0.15, QUARTER_PI * 0.15);
        }
        strokeWeight(len * 2 * random(0.07, 0.11));
        rotate(rot);
        line(0, 0, 0, -len);
        translate(0, -len);
        if (len > 20) {
            this.blade(len * this.seg[ind], ind);
        }
    }
}