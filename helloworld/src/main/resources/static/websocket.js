let stompClient = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    let socket = new SockJS('/websocket-demo');
    stompClient = Stomp.over(socket);



    stompClient.connect({
        "user" : $("#login").val()
    }, function (frame) {
        setConnected(true);
        console.log('Connected: ' + frame);

        stompClient.subscribe('/user/queue/user-reply', function(message) {
            console.log('Message Received: ' + message.body);
            showDirectMessages(message.body);
        });

        stompClient.subscribe('/topic/notification', function (message) {
            console.log('Message Received: ' + message.body);
            showGreeting(JSON.parse(message.body));
        });

        stompClient.subscribe('/topic/group-name', function (message) {
            // to something..
            console.log('Group Message Received: ' + message.body);
            alert(message.body);
        });
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendNotification() {
    const payload = $("#notification").val();
    stompClient.send("/app/notification", {}, payload );
}

function sendToUser() {
    stompClient.send("/app/hello", {
    }, JSON.stringify({
        'sender': $("#login").val(),
        'receiver' : $("#receiver").val()
    }));
}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message.type + "</td>" +"<td>" + message.payload + "</td></tr>");
}

function showDirectMessages(message) {
    $("#direct-messages").append("<tr><td>" + message + "</td></tr>");
}

$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendNotification(); });
    $( "#sendToUser" ).click(function() { sendToUser(); });
});