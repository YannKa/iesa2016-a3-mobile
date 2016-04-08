var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },

    uneConstante: 123,

    uneAutre: [12, 23, 777],

    a: {uneConstante: 123},
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        ///Find contact
        var findContacts = function() {


            $('#findButton').click(function() {

                var finder = $('#find').val();
                // $('#name').html(finder);

                function onSuccess(contacts) {
                    $('#name').html(contacts[0].name.givenName+' '+contacts[0].name.familyName);
                    alert('Found ' + contacts.length + ' contacts.');
                };

                function onError(contactError) {
                    alert('onError!');
                };

                // find contact 
                var options = new ContactFindOptions();
                options.filter= finder; 
                var fields = ["displayName", "name"];
                navigator.contacts.find(fields, onSuccess, onError, options);

            });
        }

        findContacts();


        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();