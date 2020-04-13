/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webSocketService;

import com.google.gson.Gson;
import entity.Uppercase;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import javax.websocket.OnClose;
import javax.websocket.OnMessage;
import javax.websocket.OnOpen;
import javax.websocket.Session;
import javax.websocket.server.ServerEndpoint;

/**
 *
 * @author Marcel
 */
@ServerEndpoint("/ws")
public class WebSocketUppercaseServer {

    //Open connections from clients:
    private static Set<Session> sessions = new HashSet<Session>();

    // Is is empty beacuse we do no receive messages from clients
    @OnMessage
    public void onMessage(String message, Session session)
            throws IOException, SQLException {

    }

    @OnOpen
    public void onOpen(Session session) {
        sessions.add(session);
        System.out.println("new session: " + session.getId());
    }

    @OnClose
    public void onClose(Session session) {
        System.out.println("closed session: " + session.getId());
        sessions.remove(session);
    }

    public static void sendSentences(List<Uppercase> lu) {

        System.out.println("send to all web server !!!!!!!!!!!!!!!!!!!!!!!!!!");
        Gson gson = new Gson();
        // Convert the list to JSON
        String jsonListUpper = gson.toJson(lu);

        try {
            /* Send the notification to all open WebSocket sessions */
            ArrayList<Session> closedSessions = new ArrayList<>();

            for (Session session : sessions) {

                if (!session.isOpen()) {
                    System.out.println("Closed session: " + session.getId());
                    closedSessions.add(session);
                } else {
                    // Send the list in JSON format
                    // The remote onMessage method will be automatically
                    // called upon reception
                    session.getBasicRemote().sendText(jsonListUpper);
                    System.out.println("Sending: " + jsonListUpper
                            + "\nto session_Id:" + session.getId());

                }
            }
            sessions.removeAll(closedSessions);

        } catch (Throwable e) {
            e.printStackTrace();
        }
    }

}
