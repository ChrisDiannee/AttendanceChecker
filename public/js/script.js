/** arrayform.com **/
$(function(){
    var sys_show_popup_login = $(".sys_show_popup_login"),
        sys_popup_common = $("#sys_popup_common");
	/* Open popup when click to: Register, Login
	---------------------------------------------------------- */
    sys_show_popup_login.on("click",function(){
        sys_popup_common.fadeIn();
        $("body").on("keydown.closePopup",function(e){
            var getCode = e.keyCode ? e.keyCode : e.which;
            if(getCode == 27) {
                sys_popup_common.find(".closePopup").trigger("click");
            }
        });
        return false;
    });
    sys_popup_common.on("click.closePopup",".closePopup,.overlay-bl-bg",function(){
        sys_popup_common.fadeOut(function(){
            $("body").off("keydown.closePopup");
        });
    });
    sys_popup_common.on("click",".main-content",function(e){
        e.stopPropagation();
    });
});