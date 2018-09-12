/* JS for ModalJS version 2.0.0.*/

function ModalJS(title, idDiv, size, position, type) {
    this.id = idDiv;
    this.posY = position;
    $("#" + idDiv).css("width", size);
    $("#" + idDiv).css("top", position+"px");
    $("body").prepend("<div id='back_mJS_"+idDiv+"' class='back_mJS'></div>");
    var cave = "<div class='head_mJS'><div class='image_mJS'></div><div class='title_mJS'>" + title + "</div>";


    switch(type)
    {
        case  1 :
            cave = cave + "<div class='btnX_mJS' id='X"+idDiv+"'>X</div>";       
        break;
        case  2 :
            cave = cave + "<div class='cent_mJS'></div>";
            $("#" + idDiv).append("<div class='conBtnAcpCan_mJS'><div><div class='btnAccept_mJS' id='acp" + idDiv + "'>Aceptar</div></div></div>");
        break;
        case 3 :
            cave = cave + "<div class='cent_mJS'></div>";
            $("#" + idDiv).append("<div class='conBtnAcpCan_mJS'><div><div class='btnAccept_mJS' id='acp" + idDiv + "'>Si</div><div class='btnCancel_mJS' id='can" + idDiv + "'>No</div></div></div>");
        break;
    }

    cave = cave + "</div>";
    $("#" + idDiv).prepend(cave);
    if (type == 1) {
        $("#X"+idDiv).click(function () {
            CloseModalJS(idDiv);
        });

    }
    else {
        $("#acp"+idDiv).click(function () {
            CloseModalJS(idDiv);
        });
    }
}
ModalJS.prototype.Show = function () {
    $("#back_mJS_" + this.id).css("display", "block");
    $("#back_mJS_" + this.id).animate({
        opacity: 1
    }, 500);
    var scroll = $(window).scrollTop();
    scroll = scroll + this.posY;
    $("#" + this.id).css("top", scroll+"px");
    $("#"+this.id).css("display", "block");
    $("#"+this.id).animate({
        opacity: 1
    }, 500);
}
ModalJS.prototype.Close = function () {
    CloseModalJS(this.id);
}
ModalJS.prototype.BtnAccept_text = function (text) {
    $('#acp'+this.id).empty();
    $('#acp'+this.id).append(text);
}

function CloseModalJS(idC){
    $("#back_mJS_" + idC).animate({
        opacity: 0.1
    }, 500, function () {
        $("#back_mJS_" + idC).css("display", "none");
    });
    $("#back_mJS_" + idC).css("display", "none");
    $("#" + idC).animate({
        opacity: 0.1
    }, 500, function () {
        $("#" + idC).css("display", "none");
    });
}
