## 1.前期准备

### 1.1 动画库：p5.js

官网地址：https://p5js.org/

相关的API地址：https://p5js.org/zh-Hans/reference/

简介：p5.js是一套可视化编程的JavaScript库，具有完整的绘图功能，既可以当做画图软件，也可以支持与各类页面元素交互的库。

### 1.2 项目准备

免费的CDN地址：https://www.bootcdn.cn/

p5.js CDN地址：https://cdn.bootcdn.net/ajax/libs/p5.js/1.4.0/p5.js

创建index.html

```
<body>
  <!-- p5.js的cdn地址 -->
  <script src="https://cdn.bootcdn.net/ajax/libs/p5.js/1.4.0/p5.js"></script>
  <!-- 烟花集合的处理文件 -->
  <script src="./js/particle.js"></script>
  <!-- 单个烟花的处理文件 -->
  <script src="./js/firework.js"></script>
  <!-- p5.js 入口函数 -->
  <script src="./js/sketch.js"></script>
</body>
```

## 2. 编码

### 2.1 创建画布

在sketch.js文件中添加

```
function setup() {
  // 创建画布
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  // 设置背景色
  background(0);
}
```

### 2.2 画出烟花粒子

考虑到后面会有很多的烟花粒子，封装成一个Particle类来实现，在particle.js中添加

```
class Particle {
  // x,y 表示位置
  constructor(x, y) {
    this.pos = createVector(x, y);
  }
  show() {
  	// 以点的形式呈现
    point(this.pos.x, this.pos.y);
  }
}
```

sketch.js的setup()方法进行修改，主要创建一个烟花粒子的实例，然后在draw()方法中展示出来。

```
var particle;
function setup() {
  // 创建画布
  createCanvas(window.innerWidth, window.innerHeight);
  stroke(255);
  strokeWeight(4);
  particle = new Particle(200, 200);
}

function draw() {
  // 设置背景色
  background(0);
  particle.show();
}
```

### 2.3 烟花粒子随机出现在底部

```
// 修改前
particle = new Particle(200, 200);
// 修改后
// width和height是画布的宽度和高度
particle = new Particle(random(width), height);
```

### 2.4 烟花粒子动起来

增加运动的向量，同时增加update()方法，更新例子的位置，particle.js修改为

```
class Particle {
  // x,y 表示位置
  constructor(x, y) {
    this.pos = createVector(x, y);
    // createVector第一个参数表示沿x轴的运动速率，正数向右，负数向左
    // 第二个参数表示沿y轴额运动速率，正数向下，负数向上
    this.vel = createVector(0, -4);
    this.acc = createVector(0, 0);
  }
  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }
  show() {
    point(this.pos.x, this.pos.y);
  }
}
```

sketch.js修改为

```
function draw() {
  // 设置背景色
  background(0);
  particle.update();
  particle.show();
}
```

### 2.5 粒子增加重力效果，向下运动

在particle.js中增加applyForce()方法。

```
// 添加重力效果
applyForce(force) {
	this.acc.add(force);
}
```

在sketch.js的draw()方法中增加调用

```
function draw() {
  // 设置背景色
  background(0);
  // 增加重力效果
  particle.applyForce(gravity);
  particle.update();
  particle.show();
}
```

同时需要调整纵向的移动路径，在particle.js中修改this.vel

```
this.vel = createVector(0, -10);
```

### 2.6 需要很多的烟花粒子

封装一个Firework类，在Firework类内部调用Particle实例的方法。

在firework.js文件中增加以下内容。

```
class Firework {
  constructor() {
    this.firework = new Particle(random(width), height);
  }
  update() {
    this.firework.applyForce(gravity);
    this.firework.update();
  }
  show() {
    this.firework.show();
  }
}
```

同时去掉之前单粒子调用方法，使用数组存储所有产生的粒子，然后循环调用。

sketch.js中的draw()方法优化后如下。

```
let fireworks = [];
function draw() {
  // 设置背景色
  background(0);
  fireworks.push(new Firework());
  for (let i = 0; i < fireworks.length; i++) {
    fireworks[i].update();
    fireworks[i].show();
  }
}
```

同时去掉setup()方法中单个粒子的定义。

```
// particle = new Particle(random(width), height);
```

### 2.7 引入随机因子，修改粒子密集度

当前的粒子太过密集，可以通过random()方法产生的随机数来判断是否生成粒子，从而合理控制密集度。

对draw()方法进行优化。

```
if (random(1) < 0.2) {
	fireworks.push(new Firework());
}
```

### 2.8 调整不同粒子快、慢、高、低

现在所有的粒子出现的运动速率和高度是一样的，需要进行调整，实际就是控制纵向的重力值，使用随机值控制。

在particle.js的constructor()方法中修改this.vel变量。

```
this.vel = createVector(0, random(-16, -12));
```

### 2.9 烟花粒子到顶点自动消失

其实就是当 y 轴的作用力没有的时候，清空firework。

那么可以怎么检测 y 轴的作用力呢？

答案是通过`this.firework.vel.y >= 0`来判断。

在firework.js中增加判断逻辑。

```
update() {
  if (this.firework) {
    this.firework.applyForce(gravity);
    this.firework.update();
    // 向上运动是负数，当
    if (this.firework.vel.y >= 0) {
    	this.firework = null;
    }
  }
}
show() {
  if (this.firework) {
	  this.firework.show();
  }
}
```

### 2.10 消失的那一刻，周围爆破效果

爆破时的效果实际也是由同一个Particle类实现的，只是产生的位置是在烟花粒子的最高点。

在Firework类中增加对爆破粒子的存储，并且增加exploded变量表示是否已经完成爆破。

```
class Firework {
  constructor() {
    this.firework = new Particle(random(width), height, true);
    // 存储爆破产生的粒子
    this.particles = [];
    // 是否已经爆破
    this.exploded = false;
  }
  update() {
    // 以是否爆破作为判断的条件
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      // 随着粒子的运动，this.firework.vel的值是时刻变化的
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
    }
  }
  show() {
    if (!this.exploded) {
      this.firework.show();
    }
    for (let i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }
  // 爆破时的方法
  explode() {
    for (let i = 0; i < 100; i++) {
      // 爆破后的粒子出现的位置 = 烟花粒子到达最高点的位置
      const p = new Particle(this.firework.pos.x, this.firework.pos.y, false);
      this.particles.push(p);
    }
  }
}
```

爆破时产生的粒子位置是随机的，所以在定义爆破的粒子的y轴方向引力时，需要进行修改。

```
this.vel = p5.Vector.random2D();
```

对于Particle类的构造方法，需要增加一个变量，表示是否表示的是烟花粒子。因为对于烟花粒子和爆破后产生的粒子，y轴方向引力值是不同的。

```
class Particle {
	/**
   * @param {*} x x轴方向的位置
   * @param {*} y y轴方向的位置
   * @param {*} isFirework 是否是烟花粒子
   */
  constructor(x, y, isFirework) {
    this.isFirework = isFirework;
    this.pos = createVector(x, y);
    // createVector第一个参数表示沿x轴的运动速率，正数向右，负数向左
    // 第二个参数表示沿y轴额运动速率，正数向下，负数向上
    if (this.isFirework) {
      this.vel = createVector(0, random(-20, -10));
    } else {
    	// 爆破后产生的粒子y轴引力值是随机的
      this.vel = p5.Vector.random2D();
    }
    this.acc = createVector(0, 0);
  }	
}
```

### 2.11 随机倍数爆破

在Particle类构造方法中，对于爆破后产生的粒子，y轴引力进行不同倍数的扩大。

```
this.vel = p5.Vector.random2D();
this.vel = this.vel.mult(random(2, 12));
```

### 2.12 修改烟花爆破后太散落的问题

在Particle类的update()方法中，对于爆破后产生的粒子的y轴引力进行缩小。

```
update() {
  if (!this.isFirework) {
  	// 控制爆破后粒子不会太散落
  	this.vel = this.vel.mult(0.9);
  }
  this.vel.add(this.acc);
  // 每次update更新粒子的位置，与引力作用配合使用
  this.pos.add(this.vel);
  this.acc.mult(0);
}
```

### 2.13 淡出效果

增加一个实例变量lifespan，初始值为255，每次update()时，值减去4，直到lifespan值减为0以下。

然后使用stroke()，传入的最后一个参数为负数时，会消失。

对于Particle类的update()和show()方法进行更新。

```
update() {
  if (!this.isFirework) {
    this.vel = this.vel.mult(0.9);
    this.lifespan -= 4;
	}
  this.vel.add(this.acc);
  // 每次update更新粒子的位置，与引力作用配合使用
  this.pos.add(this.vel);
  this.acc.mult(0);
}
show() {
	// 如果是粒子节点，线条稍粗些
  if (this.isFirework) {
    strokeWeight(4);
    stroke(255);
  } else {
  	// 如果是爆破后的粒子，线条稍细些
    strokeWeight(2);
    // 当最后一个值为负数时，粒子会消失
    stroke(255, this.lifespan);
  }
  point(this.pos.x, this.pos.y);
}
```

### 2.14 消失的烟花粒子移除

在淡出效果时，实际只是粒子不可见了，但是依然会占据空间，所以这一步我们会将已经消失的粒子从数组中完全移除，回收内存空间。

首先是对于Particle类增加done()方法，通过lifespan值判断爆破效果是否已经完成，需要消失。

```
// 爆破效果是否已经完成
done() {
	return this.lifespan < 0;
}
```

然后在Firework类的update()方法中增加判断，如果单粒子已经完成，则从particles数组中进行移除。

```
update() {
// 以是否爆破作为判断的条件
  if (!this.exploded) {
    this.firework.applyForce(gravity);
    this.firework.update();
    // 随着粒子的运动，this.firework.vel的值是时刻变化的
    if (this.firework.vel.y >= 0) {
      this.exploded = true;
      this.explode();
    }
  }
  // 这里需要使用索引倒序，因为使用splice会改变未处理的数据的索引
  for (let i = this.particles.length - 1; i >= 0; i--) {
    this.particles[i].applyForce(gravity);
    this.particles[i].update();
    // 如果粒子爆破效果完成，则将粒子进行移除
    if (this.particles[i].done()) {
    	this.particles.splice(i, 1);
    }
  }
}
```

同时对Firework类增加done()方法，如果粒子完成整个效果，则将初始粒子移除数组。

```
done() {
  if (this.exploded && !this.particles.length) {
    return true;
  }
	return false;
}
```

在sketch.js中对draw()方法进行优化，将已经完成的初始粒子移除出数组。

```
function draw() {
  // 设置背景色
  background(0);
  if (random(1) < 0.2) {
    fireworks.push(new Firework());
  }
  // 这里需要使用索引倒序，因为使用splice会改变未处理的数据的索引
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    // 对已经完成的初始化粒子进行移除
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
```

### 2.15 让烟花粒子更有连续感

在sketch.js的draw()方法中，设置colorMode()。

```
function draw() {
  // 设置背景色
  colorMode(RGB);
  background(0, 0, 0, 25)
  if (random(1) < 0.2) {
    fireworks.push(new Firework());
  }
  // 这里需要使用索引倒序，因为使用splice会改变未处理的数据的索引
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    // 对已经完成的初始化粒子进行移除
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
```

### 2.16 设置烟花的颜色

绘制烟花的时候使用HSB格式，只需要对其中的H进行修改，就可以得到不同的颜色。

对Particle类的构造方法增加表示H的值。

```
class Particle {
	// colorH HSB颜色系的H值，H(hues)表示色相，S(saturation)表示饱和度，B（brightness）表示亮度
	constructor(x, y, isFirework, colorH) {
		this.colorH = colorH;
	}
}
```

对于show()方法，在执行stroke()时，传入HSB格式的颜色值。

```
show() {
	colorMode(HSB);
  // 如果是粒子节点，线条稍粗些
  if (this.isFirework) {
  strokeWeight(4);
    stroke(this.colorH, 255, 255);
  } else {
    // 如果是爆破后的粒子，线条稍细些
    strokeWeight(2);
    // 当最后一个值为负数时，粒子会消失
    stroke(this.colorH, 255, 255, this.lifespan);
  }
  point(this.pos.x, this.pos.y);
}
```

### 2.17 烟花密集度调整

通过修改sketch.js的draw()方法中的random()判断条件来控制烟花的密集度。

```
function draw() {
  // 设置背景色
  colorMode(RGB);
  background(0, 0, 0, 25);
  // 控制烟花密集度从核心
  if (random(1) < 0.2) {
    fireworks.push(new Firework());
  }
  // 这里需要使用索引倒序，因为使用splice会改变未处理的数据的索引
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    // 对已经完成的初始化粒子进行移除
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
```