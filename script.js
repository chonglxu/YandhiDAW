$(document).ready(function() {
    var modal = document.getElementById('modalOne');
    var span = document.getElementsByClassName("close")[0];

    modal.style.display="block"

    span.onclick = function() {
        modal.style.display = "none";
    }
    
    $("#guitar").click(function() {
        $("#workspaceTable").append("<tr><td><img id='guitarRoll' src='./img/piano.png' style='width: 20%;'></td></tr>");
    });
    
    $("#synth").click(function() {
        $("#workspaceTable").append("<tr><td><img id='synthRoll' src='./img/piano.png' style='width: 20%;'></td></tr>");
    });
    
    $("#drums").click(function() {
        $("#workspaceTable").append("<tr><td><img id='drumsRoll' src='./img/piano.png' style='width: 20%;'></td></tr>");
    });
})
