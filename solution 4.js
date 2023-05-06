(function (window) {  
    var helloSomename = {};
    var Word = "Hello";
    var Word1 = "GoodBye";

    helloSomename.speak = function (names) {
      console.log(Word + " " + names);
      console.log(Word1 + " " + names);
    }
        window.helloSomename = helloSomename;
    })(window);