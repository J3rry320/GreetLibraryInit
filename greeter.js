(
    //Whole Function Is Wrapped inside IIFE for safe code structure
    function (global, jquery) {
        //Function Which is bieng called returns a function constructor
        var greeter = function (firstName, lastName, language, isLogged) {
            return new greeter.init(firstName, lastName, language, isLogged)
        }
        //Variables which are not accessible 
        var languages = ["en", "hindi"]
        var formalGreetings = {
            en: "Greetings",
            hindi: "Swagatam"
        }
        var informalGreetings = {
            en: "Hello",
            hindi: "Namaste"
        }
        var logMessages = {
            en: "Logged In",
            hindi: "Aap Logged In He"
        }
//Prototype Methods set up here 
        greeter.prototype = {
            fullName: function () {
                return this.firstName + " " + this.lastName;
            },
            formalGreeting: function () {
                return formalGreetings[this.language] + " " + this.fullName();
            },
            informalGreeting: function () {
                return informalGreetings[this.language] + " " + this.fullName();
            },
            greet: function (formal) {
                var message;
                if (formal) {
                    message = this.formalGreeting()
                } else {
                    message = this.informalGreeting()
                }
                if (console) {
                    console.log(message);

                }
                return this
            },
            validate: function () {
                if (languages.indexOf === -1) {
                    throw "Invalid Languages"
                }
            },
            setLang: function (language) {
                this.language = language;
                this.validate()
                return this
            },
            log: function () {
                if (console) {
                    console.log(logMessages[this.language] + ":" + this.fullName())
                }
                return this;
            },
            isLoggedIn: function () {

                if (this.isLogged === true) {
                    this.log()
                } else {
                    console.log("Not Logged In ")
                }
                return this;
            },
            GreetOut:function(selector,formal){
                if(!jquery){
                    throw "No Jquery Found Add Jquery"
                }
                if(!selector){
                    throw "Cannot Find a selector to add the method to"
                }
                var msg;
                if (formal){
                    msg=this.formalGreeting()
                }
                else{
                    msg=this.informalGreeting()
                }
                $(selector).html(msg);
                return this;

            }
}
//Init Function to begin things up Constructor returns new object 
        greeter.init = function (firstName, lastName, language, isLogged) {
            var self = this;
            self.firstName = firstName || " ";
            self.lastName = lastName || " ";
            self.language = language || "en";
            self.isLogged = isLogged || false;
            self.validate();


        }
        //changes proto
        greeter.init.prototype = greeter.prototype;
        //So that we can write G$ just for calling the greeter function 
        global.greeter = global.G$ = greeter;

    }
    (window, jQuery))