/*
 * (From http://javascript.info)
 * 
 * Fetch: 
 * 
 *  send network requests to the server and load 
 *  new information whenever it’s needed.
 * 
 * The basic syntax is:
 *
 *    - let promise = fetch(url, [options])
 *         - url – the URL to access.
 *         - options – optional parameters: method, headers etc.
 *                     Without options, that is a simple GET request, 
 *                     downloading the contents of the url.
 * 
 *                                         
 * The browser starts the request right away and returns a promise 
 * that the calling code should use to get the result.
 * 
 * Getting a response is usually a two-stage process.
 * 
 *     - First, the promise, returned by fetch, resolves with an object of the
 *       built-in Response class AS SOON AS THE SERVER RESPONDS WITH HEADERS.
 *      
 *             - At this stage we can check HTTP status, 
 *               to see whether it is successful or not, check headers, 
 *               but don’t have the body yet.
 *       
 *     - Second, to get the response body, 
 *       we need to use an additional method call.
 *       
 *          - Response provides multiple promise-based methods 
 *            to access the body in various formats:
 *            
 *                - response.text() – read the response and return as text,
 *                - response.json() – parse the response as JSON,
 * 
 * Example:
 *     
 *    let response = await fetch(url);
 *    let answer = await response.json(); //read response body and parse as JSON
 *    console.log(JSON.stringify(answer));// print answer in console
 *    
 *    This is the same as:
 *   
 *    fetch(messageAddr)
 *    .then(res => res.json()) // or res.text()
 *    .then(res => console.log(res));
 */

function submitSentence(){
    console.log("executing submit sentence " 
                                 + document.getElementById("submitsentence"));
    
    // We retrieve the form as a reference to a JS Object
    let submitForm = document.getElementById("submitsentence");
    // We assign a listener that will execute when the user submits the form
    submitForm.onsubmit = async (e) => {

        console.log("executing submit sentence listener");
        // Prevents default execution. IS NEEDED!!
        e.preventDefault();

        let data = new FormData(submitForm);
        // To inspect dataForm object
        //logFormData(data);

        // Temporary object to hold the FormData
        let tmp = {};
        // Populate the temp object with the user input, 
        // converted to uppercase!
        data.forEach((value, key) => {tmp[key] = value.toUpperCase()});
        
        // Prepare the data in JSON format to be posted
        let jsonToPost = JSON.stringify(tmp);
        //Example of jsonToPost :  {"content":"YES"}
        
        /*
        * Fetch: 
        * 
        *  send/retrieve network requests to/from the server

        *    - let promise = fetch(url, [options])
        *         - url – the URL to access.
        *         - options – optional parameters: method, headers etc.
        */
        let response = await fetch(restAddress, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonToPost
        });
        // we do not expect any reply the executed method signature
        /* The associated method called in the server is :
            @POST
            @Override
            @Consumes({MediaType.APPLICATION_XML, MediaType.APPLICATION_JSON})
            public void create(Uppercase entity) {
                super.create(entity);
            }
        
        Note that the Uppercase class in the server side 
            public class Uppercase implements Serializable {
                private Integer iduppercase;
                private String content;
         
                // more code ...
            }
        
            Has the attribute 'content' and that is why the jsonToPost object
            has the property {"content":"uppercase sentence"}
        */
       
       // Finally clear <input type="text" id="inputsentenceid" ...  > 
       document.getElementById('inputsentenceid').value = '';

    };
}
