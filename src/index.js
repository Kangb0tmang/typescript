"use strict";
exports.__esModule = true;
var isOpen = false;
var myName = 'Jon';
var myAge = 28;
var numList = [0, 1, 2, 3];
var person = ['Jon', 28, false];
var Job;
(function (Job) {
    Job[Job["Dev"] = 0] = "Dev";
    Job[Job["UI"] = 1] = "UI";
    Job[Job["UX"] = 2] = "UX";
    Job[Job["Producer"] = 3] = "Producer";
})(Job || (Job = {}));
var job = Job.Dev;
var phone = 'Google Pixel 2 XL';
var android = 11;
var saySomething = function (something) {
    console.log(something);
    return something;
};
saySomething('Hiyo');
var sayWord = function (word) {
    console.log(word || 'Hello');
    return word || 'Hello';
};
sayWord();
var speak = function (word) {
    if (word === void 0) { word = 'Greetings'; }
    var otherThings = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherThings[_i - 1] = arguments[_i];
    }
    console.log(otherThings);
    return word;
};
speak('Michael', 'Mike');
var newName = 'Ichigo';
newName = 'Rukia';
var newNameTwo = newName;
var makeMargin = function (x) {
    return "margin: " + x + "px";
};
makeMargin(10);
makeMargin('10');
var dog = 'Bolt';
dog = null;
dog = 'Peanut';
dog = undefined;
dog = 'Kevin';
var sayName = function (_a) {
    var name = _a.name, age = _a.age;
    console.log(name);
    return name;
};
sayName({ name: 'Nathan Drake', age: 30 });
var Type;
(function (Type) {
    Type[Type["Video"] = 0] = "Video";
    Type[Type["BlogPost"] = 1] = "BlogPost";
    Type[Type["Quiz"] = 2] = "Quiz";
})(Type || (Type = {}));
var createContent = function (contentType) { };
createContent(Type.Quiz);
console.log('Type.Quiz', Type.Quiz);
var SomeType;
(function (SomeType) {
    SomeType["Video"] = "VIDEO";
    SomeType["BlogPost"] = "BLOG_POST";
    SomeType["Quiz"] = "QUIZ";
})(SomeType || (SomeType = {}));
var createMoreContent = function (contentType) { };
createMoreContent(SomeType.Quiz);
console.log('SomeType.Quiz', SomeType.Quiz);
var Team = (function () {
    function Team(teamName) {
        this.teamName = teamName;
    }
    Team.prototype.score = function () {
        console.log(this.teamName);
        return 'AND 1!';
    };
    return Team;
}());
var lakers = new Team('Los Angeles Lakers');
lakers.score();
lakers.teamName;
