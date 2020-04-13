
wmad upperCase example

/****************************************************************
*****************************************************************

FOLLOW INSTRUCTIONS IN THIS FILE CAREFULLY

*****************************************************************
****************************************************************/

===================================================================
USE NETBEANS 8.1 (NETBEANS 8.2 AND ABOVE HAVE A JAVASCRIPT BUG)
===================================================================


-----------------------------------------------------------------

upperCase WEB is an full solved example of the web REST paradigm.

The code is fully commented if will help you learn how the
REST paradigm works and also ``vanilla'' JAVASCRIPT

The applicacion is very simple the user enters a sentence
and the server stores the sentence in UPPPERCASE characters.
It also returns a list of all previous sentences submitted!

It consists of 3 projects

1) upperCaseRESTJSWebSocket

This is the SERVER. It also containsa JAVASCRIPT front end
interface that runs in the browser.

2) upperCaseRESTClient

This is a JAVA Swing client that uses a PULL strategy to
retrieve the sentences

2) upperCaseRESTJSWebSocketClient

This is a JAVA Swing client that uses a PUSH strategy to
retrieve the sentences through the use of web Sockets

----------------------------------------------------------------





=================================================================

To Run the examples in upperCase Web

=================================================================

BEFORE STARTING IMPORTANT !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

a) USE NETBEANS 8.1

b) IN CHROME INSTALL THE NETBEANS CONNECTOR




/****************************************************************
*****************************************************************

SET UP STEPS

*****************************************************************
****************************************************************/


================================================================
SERVER AND JAVASCRIPT CLIENT
================================================================

1) Unzip the file  upperCaseWeb.rar

2) Import the data base

    a) Open the MySQL Workbench
    
    b) In MANAGEMENT Go to DataImport/Restore:

              - Check Import from Self-Contained file

              - Use the ... buttons to browse to the
                folder upperCaseRESTJSWebSocket.

              - Choose the "sentence" file of type SQL Text File

              - Press Start Import  bottom right corner

              - Right click in schemas then Refresh All 
                and check there is a schema "sentence" with 
                table "uppercase"

3) Go to Netbeans and Open Project upperCaseRESTJSWebSocket

4) If there are errors in the WEb Pages -> WEB-INF -> js folder:

   a) open the files where there are errors
   b) press Alt-Enter on the error and click the first option
      ``Filter out JS parsing ... ''
   c) To make the error go away completely sometimes is 
      necessary to make a small change and save the file, so
      type a blank space at the END of any line and save.

5) If an small yellow triangle appears in the blue globe symbol.

    a) Right click the project name
    
    b) and Go to  Resolve Data Source Problems
    
    c) In the box that appears click the button Add Connection ...
    
    d) as you can see it uses our ecomm user,
     the password I use is ecomm,
      (If you have another password put it here)
    
    e) Very Important!!!! Check Remember Password

    f) and Test Connection
    
    g) Hopefully you will get Connection Succeeded!! :)

    h) Click Next, then Next, then Finish


6) Run the upperCaseRESTJSWebSocket project

7) A Chrome window will appear

    a) You will get a pop up message

      localhost:44841 says
      [error] undefined

      (The number I get is localhost:44841 says ).
      You will get a different one because your server port
      is different from mine.

8) You need to change the port in the upperCaseRESTJSWebSocket
   application to the Glassfish server port which is the one
   that appeared in the pop up alert.

   - Go to Netbeans
   - In the upperCaseRESTJSWebSocket project
     Go to folder Web Pages -> folder js -> open file comms.js

     in var path change the number 32185 to your server port number
     In your case it is probably 8080 or some other.
     
     (In my case is in my case is 44841)
     
     
     
     ------------------------------------------------------------------
     
     To see the port number:
        - right click the project upperCaseRESTJSWebSocket and go to
          Properties -> Run and see Server. Remember the name.
        - Close the window.
        - Then Go to Services -> Servers.
        - Right click on the server and go to Properties
        - The HTTP Port is the port number.

    ------------------------------------------------------------------

9) Save the file and run the project again

10) In Chrome go to More Tools -> Developer Tools
    The Developer Tools will appear at your browsers
    right hand side.

    In the bottom right there is a Console.

11) You can enter a sentence and submit it.

    You will see application traces in the console
    at the bottom of the Developer Tools.





================================================================
WEB SOCKET CLIENT - upperCaseRESTJSWebSocketClient
================================================================


1) Open Project  upperCaseRESTJSWebSocketClient.

2) Go to the file Comms.java in the folder apiREST

   - in String PATH change the port 32185 to your port AS BEFORE
     and save the file

3) Run the project.

4) A Swing window will appear. You can submit a sentence now.
   Check that changes are also made in the Chrome browser.


================================================================
PULL CLIENT - upperCaseRESTClient
================================================================


1) Open Project  upperCaseRESTClient.

2) Go to the file Comms.java in the folder apiREST

   - in String SERVER_REST change the port 32185 
     to your port AS BEFORE

3) Run the project.

4) A Swing window will appear. You can submit a sentence now.
   Check that changes are also made in the Chrome browser.

5) In this case since it is pull to see changes you have to 
   press the Refresh button.

---------------------------------------------------------------



*****************************************************************
*****************************************************************
*****************************************************************

YOU CAN RUN THE THREE DIFFERENT CLIENTS AT THE SAME TIME !!

(In fact 4, can also run the Android app)

*****************************************************************
*****************************************************************
*****************************************************************


-----------------------------------------------------------------
Why netbeans connector

https://stackoverflow.com/questions/3319951/
netbeans-code-changes-to-javascript-css-files-
are-not-reflected-in-browser-af/24125902

----------------------------------------------------------------



================================================================
ANDROID  (Check with Professor)

1) Import Project

2) Go to the Comms.java file in apiREST

3) Change the port in the String PATH as before

4) Run the application

=================================================================



