$("document").ready(function(){
    // THis document above, is refer to all document in this JQ. Make use of the ready in your javascript and Jquery.
    
    





    // Dialog box, that is the message you receive you you send a messg or click a button
 $("#button").click(function(){
    $("#dialog").dialog("open");
   })
  
   $("#dialog").dialog({
    title: "Thank you for contacting",
    closeOnEscape: false,
    modal: true,
    autoOpen: false
   })
  































































})
