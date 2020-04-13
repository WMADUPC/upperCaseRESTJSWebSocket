
/*
 * From javascript.info:
 * 
 * The regular {...} syntax allows to create one object. 
 * But often we need to create many similar objects.
 * 
 * That can be done using constructor functions and the "new" operator.
 * 
 * Constructor function
 * 
 * Constructor functions technically are regular functions. 
 * There are two conventions though:
 * 
 *     They are named with capital letter first.
 *     They should be executed only with "new" operator.
 *     
 * For instance:
 * 
       function User(name) {
            this.name = name;
            this.isAdmin = false;
        }

        let user = new User("Jack");

        alert(user.name); // Jack
        alert(user.isAdmin); // false
 */
let socket = new WebSocket(webSocketAddress);

socket.onopen = function(e) {
  console.log("WebSocket [open] Connection established");

};

// Automatically called whenever something is received from the server
socket.onmessage = function(event) {
    console.log("WebSocket onmessage");
    /*
     * https://stackoverflow.com/questions/47067319/back-tick-vs-single-quote-in-js
     * 
     * Back ticks(``) are called template literals. 
     * They are part of ES6. Difference is:

        var name = "world";
        var greetES5 = 'Hello '+name;//using single quote
        var greetES6 = `Hello ${name}`;//using ticks
     */
    console.log(`${event.data}`);
    updateList(JSON.parse(`${event.data}`));
    //alert(`[message] Data received from server: ${event.data}`);
    
};

socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
  alert(`[error] ${error.message}`);
};


function updateList(newContent){
    // Reference to the list  <ul id="sentences"></ul>
    let ulist = document.getElementById('sentences');
    
    // Fist we empty the list
    while (ulist.firstChild){
        ulist.removeChild(ulist.firstChild);
    }
    
    console.log("updateList list length : "+newContent.length);
    for (var i = 0; i < newContent.length; i++){
        let item = newContent[i];
        console.log("updateList item : "+JSON.stringify(item));
        // We create a list item 
        let li = document.createElement('li');
        
        /*
         * Example of the item format in JSON format 
         * {"content":"HELLO","iduppercase":5}
         * It is a JSON representation of the server class
         * 
         *  public class Uppercase implements Serializable {
                private Integer iduppercase;
                private String content;
         
                // more code ...
            }
        */
        
        // We access the content property and append it to the unordered list
        li.appendChild(document.createTextNode(item.content));
        ulist.appendChild(li);
    }
}