$(document).ready(function () {
    const $cells = $("#activities-table tbody td").not(function () {
        return $(this).text() === "Not Available" || $(this).closest("tr").find("th").length;
    });

    $cells.css("cursor", "pointer");

    $cells.on("click", function () {
        $(this).toggleClass("selected");
    });

    $("<style>")
        .prop("type", "text/css")
        .html(`
            #activities-table td.selected {
                background-color: #1ccd24;
                color: white;
                font-weight: bold;
            }
        `)
        .appendTo("head");
});