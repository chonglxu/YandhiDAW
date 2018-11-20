
var grid_on_or_off;
var rows;
var cols

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

    rows = 8;
    cols = 18;
    $( "#grid" ).append( generateGrid( rows, cols) );

    $( "td" ).click(function() {
        var index = $( "td" ).index( this );
        var row = Math.floor( ( index ) / cols);
        var col = ( index % rows );
        //$( "span" ).text( "That was row " + row + " and col " + col );

        if (grid_on_or_off[row][col] == true) {
            $( this ).css( 'background-color', 'transparent' );
            grid_on_or_off[row][col] = false;
        }
        else {
            $( this ).css( 'background-color', 'green' );
            grid_on_or_off[row][col] = true;
        }

        console.log($(this))
    });

})

function generateGrid( rows, cols ) {

    grid_on_or_off = new Array(rows).fill(new Array(cols).fill(false))

    var grid = "<table>";
    for ( row = 1; row <= rows; row++ ) {
        grid += "<tr>"; 
        for ( col = 1; col <= cols; col++ ) {      
            grid += "<td></td>";
        }
        grid += "</tr>"; 
    }
    return grid;
}
