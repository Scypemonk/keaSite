$(document).ready(function(){
	$("#studentName, #studentMsg").focus(function(){
       $(this).css("background", "pink"); 
    });

    $("#studentName, #studentMsg").blur(function(){
        $(this).css("background", "white"); 
     });

     $("#sendMsg").click(function(){
        var studentName = $("#studentName").val();
        var studentMsg = $("#studentMsg").val();
        
        var msg = "<p class='msg'>" + studentName + ": " + studentMsg + "</p>";

        $("#messageBox").append(msg);
    }); 
});