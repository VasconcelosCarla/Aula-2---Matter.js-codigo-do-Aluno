// Pegando as ferramentas principais do Matter.js
var Engine = Matter.Engine;
var Render = Matter.Render;
var Runner = Matter.Runner;
var Bodies = Matter.Bodies;
var Composite = Matter.Composite;

// Criando o cérebro da física
var engine = Engine.create();

// Pegando o mundo da física
var world = engine.world;

// Criando a tela do jogo
var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: 900,
    height: 500,
    wireframes: false,
    background: "#dff6ff"
  }
});

// Criando o chão fixo
var ground = Bodies.rectangle(450, 480, 900, 40, {
  isStatic: true,
  render: {
    fillStyle: "#6b4f2a"
  }
});

// Criando objetos do jogo usando nossas classes
var bird = new Bird(150, 350);
var pig = new Pig(700, 350);

var box1 = new Box(650, 430, 50, 80);
var box2 = new Box(750, 430, 50, 80);
var box3 = new Box(700, 370, 160, 30);

// Colocando o chão no mundo
Composite.add(world, ground);

// Colocando os objetos no mundo
bird.addToWorld(world);
pig.addToWorld(world);
box1.addToWorld(world);
box2.addToWorld(world);
box3.addToWorld(world);

// Rodando a tela
Render.run(render);

// Rodando o motor da física
var runner = Runner.create();
Runner.run(runner, engine);