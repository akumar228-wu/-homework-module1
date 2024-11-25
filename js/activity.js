$(document).ready(function () {
    $("td").click(function () {
        var content = $(this).text(); 

        if (content != "Not Available") { 
            $(this).toggleClass("tdhighlight"); 

            if ($(this).hasClass("tdhighlight")) { 
                var colIndex = $(this).index(); 
                var cliffSite = $("thead th").eq(colIndex).text(); 

                $('#displaySelected').css("visibility", "visible"); 
                $('#displaySelected').css("margin-top", "2em"); 
                $('#result').append(`<p>${content} at ${cliffSite}</p>`); 
            } else { 
                var colIndex = $(this).index(); 
                var cliffSite = $("thead th").eq(colIndex).text(); 
                $('#result p:contains(' + content + ' at ' + cliffSite + ')').remove(); 

                if ($('#result').has('p').length == false) { 
                    $('#displaySelected').css("visibility", "hidden"); 
                    $('#displaySelected').css("margin-top", "0"); 
                }
            }
        }
    });
});
