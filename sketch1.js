const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engineO, eWorld;
var boxOne;

function setup() {
    createCanvas(400, 400);

    engineO = Engine.create();

    eWorld = engineO.world;
    //new: will CREATE AN OBJECT
    boxOne = new Box();
}

function draw() {
    background(0);

    Engine.update(engineO);

    boxOne.display();
}