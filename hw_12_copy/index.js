////// конструкторы
///// 1

function Car(name, age) {
    this.getName = function() {
        let newName = name.charAt(0).toUpperCase() + name.substr(1);
        return newName;
    };
    this.getAge = function() {
        var d = new Date();
        return d.getFullYear() - age;
    };
}
const lexus = new Car("lexus", 2);
lexus.getName();
lexus.getAge();

////// 2
function String(str) {
    this.getString = function() {
        return str;
    };
    this.changeString = function() {
        let newStr = str
            .split("")
            .reverse()
            .join("");
        return newStr;
    };
}
const greetings = new String("goodmorning");
greetings.changeString();
greetings.getString();

//////////// ООП

/////////// 1
class Planet {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return `Planet name is + ${this.name}`;
    }
}

class PlanetWithSatelite extends Planet {
    constructor(name, satelliteName) {
        super(name);
        this.satelliteName = satelliteName;
    }

    getName() {
        return `Planet name is ${this.name}. This setellite is ${
      this.satelliteName
    }`;
    }
}

let earth = new PlanetWithSatelite("earth", "moon");
earth.getName();

////////// 2

class Building {
    constructor(name, stages) {
        this.name = name;
        this.stages = stages;
    }
    getStages() {
        return this.stages;
    }
    setStages(newStages) {
        return (this.stages = newStages);
    }
}

class House extends Building {
    constructor(name, stages, flats) {
        super(name, stages);
        this.flats = flats;
    }

    getStages() {
        let obj = {
            stages: this.stages,
            allFlats: this.stages * this.flats
        };

        return obj;
    }
}

class Shop extends Building {
    constructor(name, stages, shops) {
        super(name, stages);
        this.shops = shops;
    }

    getStages() {
        let obj = {
            stages: this.stages,
            allShops: this.stages * this.shops
        };

        return obj;
    }
}
let house = new House("bricks", 5, 7);
house.getStages();
let shop = new Shop("zara", 4, 9);
shop.getStages();

////////////3

function Furniture(name, price) {
    this.name = name;
    this.price = price;
}

Furniture.prototype.getInfo = function() {
    return this.name, this.price;
};

function HomeFurniture(name, price, location) {
    Furniture.call(this, name, price);
    this.location = location;
}

HomeFurniture.prototype = Object.create(Furniture.prototype);
HomeFurniture.prototype.constructor = HomeFurniture;

HomeFurniture.prototype.getName = function() {
    return `Furniture name is ${this.name}. It costs ${
    this.price
  }. Shop is located at ${this.location}`;
};

function OfficeFurniture(name, price, delivery) {
    Furniture.call(this, name, price, delivery);
    this.delivery = delivery;
}

OfficeFurniture.prototype = Object.create(Furniture.prototype);
OfficeFurniture.prototype.constructor = OfficeFurniture;

OfficeFurniture.prototype.getName = function() {
    return `Furniture name is ${this.name}. It costs ${
    this.price
  }. You can order delivery from ${this.delivery}`;
};

let table = new HomeFurniture("wood and glass", 200, "aperolska street");
table.getName();
let chair = new OfficeFurniture("modern", 100, "monday to friday");
chair.getName();

//////// 4
function User(name, date) {
    this.name = name;
    this.date = date;
}

User.prototype.getInfo = function() {
    return ` User's name is ${this.name}. Date of registration is ${this.date}`;
};

function Admin(name, date) {
    User.call(this, name, date);
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.isSuperAdmin = function(a) {
    if (a === "super") {
        let obj = { name: this.name, date: this.date, superadmin: true };
        return obj;
    } else {
        let obj2 = { name: this.name, date: this.date, superadmin: false };
        return obj2;
    }
};

function Guest(name, date) {
    User.call(this, name, date);
}

Guest.prototype = Object.create(User.prototype);
Guest.prototype.constructor = Guest;

Guest.prototype.validDate = function() {
    return this.date + 1;
};

let denis = new Admin("Denis", 2018, "regular Admin");
denis.isSuperAdmin();
let andrew = new Guest("Andrew", 2019);
andrew.validDate();

///////// Классы

// 1

class Component {
    constructor(tagName = "div") {
        this.tagName = tagName;
    }
    node() {
        return document.createElement(tagName);
    }
}

const comp = new Component("span");

// 2

class Component {
    constructor(tagName = "div") {
        this.tagName = tagName;
    }
    node() {
        return document.createElement(tagName);
    }
    set textCont(value) {
        this.node.textContent = value;
    }
}

const comp = new Component("span");

////////3

class Calculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    get value() {
        return "Your numbers are " + this.a + " " + this.b;
    }
    set value(val1) {
        this.a = val1;
    }
    set value(val2) {
        this.b = val2;
    }
    multiply() {
        return this.a * this.b;
    }
    plus() {
        return this.a + this.b;
    }
    minus() {
        return this.a - this.b;
    }
    devide() {
        return this.a / this.b;
    }
}

const newPair = new Calculator(6, 7);
newPair.value;
newPair.multiply();
newPair.plus();
newPair.minus();
newPair.devide();