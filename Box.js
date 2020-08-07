class Box {
    //properties and function which you want to give it to
    //an object.
    //all properties should be inside the constructor
    constructor() {
            //this is a keyword->it helps you to point to an object
            var options = {
                restitution: 1.0
            };
            this.boxBody = Bodies.rectangle(200, 200, 50, 50, options);
            World.add(eWorld, this.boxBody);
        }
        //function -> to display the object
    display() {
        var pos = this.boxBody.position;
        rectMode(CENTER);
        rect(pos.x, pos.y, 50, 50);
    }
}