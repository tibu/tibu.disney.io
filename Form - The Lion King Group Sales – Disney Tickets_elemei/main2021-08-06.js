function show_number(obj) {
    var uid = obj.options[obj.selectedIndex].getAttribute('data-label');
    if(uid == 1) {
        jQuery(".type-student").show();
        jQuery(".type-teachers").show();
        jQuery(".type-all").hide();
    }
    else {
        jQuery(".type-all").show();
        jQuery(".type-student").hide();
        jQuery(".type-teachers").hide();
    }
}

function show_other(obj) {
    var uid = obj.options[obj.selectedIndex].getAttribute('data-extra');
    if(uid == 1) {
        jQuery(".type-extra").show();
    }
    else {
        jQuery(".type-extra").hide();
    }
}


function show_vip_calendar(obj){
    var showslug = obj.options[obj.selectedIndex].getAttribute('value');
    jQuery('.dtgf-date').find('.showcal-rejilla').removeClass("showcal-rejilla");
    jQuery('.dtgf-date').find('.showcal-lista').removeClass("showcal-lista");
    jQuery('.rejilla.show-'+showslug).addClass("showcal-rejilla");
    jQuery('.lista.show-'+showslug).addClass("showcal-lista");
    if (showslug==""||showslug==null){
        jQuery('#contact .dtgf-date').hide('slow');
    }else{
        jQuery('#contact .dtgf-date').show('slow');
        jQuery(".month1").show();
        jQuery(".month2").hide();
        jQuery(".month3").hide();
        jQuery(".month4").hide();
        jQuery(".month5").hide();
        jQuery(".month6").hide();
        jQuery(".month7").hide();
        jQuery(".month8").hide();
        jQuery(".month9").hide();
        jQuery(".month10").hide();
        jQuery(".month11").hide();
        jQuery(".month12").hide();
        jQuery(".month13").hide();
        jQuery(".month14").hide();
        jQuery(".month15").hide();
        jQuery(".month16").hide();
        jQuery(".month17").hide();
        jQuery(".month18").hide();
        
    }
}

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

( function( $ ) {

    //SHOW HIDE

    $("#require-workshop").click(function () {
        if ($(this).is(":checked")) {
            $(".dtcf-workshop").show();
        } else {
            $(".dtcf-workshop").hide();
        }
    });
    //$('.dtcf-selectworkshop input[type="radio"]').click(function () {
    $('#request').click(function () {
        if ($(this).attr("value") == "more-info") {
            $(".dtcf-workshopinfo").hide('slow');
        }
        if ($(this).attr("value") == "request") {
            $(".dtcf-workshopinfo").show('slow');

        }
    });
    var monthsname = ["0", "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December" ];


    //CALENDAR
    jQuery(".calendar .future-event").click(function(event) {
        event.preventDefault();
        var textdate='';
        if (jQuery(".calendar-main").hasClass("calendar-noname")) {
            textdate = jQuery(this).find(".time").text();
            if (textdate==''){
                textdate = jQuery(this).text(); 
            }
        }else{
            textdate = jQuery(this).text(); 
        }
        var noformatday=$(this).closest('td').attr('id');
        noformatday = noformatday.replace('calendar-',''); 
        year=noformatday.substring(0, 4);
        var monthday=noformatday.substring(5,7);
        var month = monthsname[parseInt(monthday)];
        numberday=noformatday.substring(8,10);
        day=numberday+('-')+month+('-')+year;
        $('.topick').text(day.trim()+' '+textdate.trim());
        if ($('.first-date').hasClass('topick')){
            $('.first-date').removeClass('topick');
            $('.first-date').removeClass('empty');
            $(this).addClass('first-pick');
            if ($('.second-date').hasClass('empty')){
                $('.second-date').addClass('topick');
                $('.second-date').text('Pick a date');
            }else if ($('.third-date').hasClass('empty')){
                $('.third-date').addClass('topick');
                $('.third-date').text('Pick a date');
            }else{
                $('.third-date').addClass('topick');
            }
        }else if($('.second-date').hasClass('topick')){
            $('.second-date').removeClass('topick');
            $('.second-date').removeClass('empty');
            $(this).addClass('second-pick');
            if ($('.third-date').hasClass('empty')){
                $('.third-date').addClass('topick');
                $('.third-date').text('Pick a date');
            }else{
                $('.third-date').addClass('topick');
            };
        }else{
            $('.third-date').removeClass('empty');
            $('.third-pick').removeClass('third-pick');
            $(this).addClass('third-pick');
        }
    });
    jQuery(".list .future-event").click(function(event) {
        event.preventDefault();
        //var text = jQuery(this).children(".summary").text(); 
        if (jQuery(".calendar-main").hasClass("calendar-noname")) {
            var text = jQuery(this).children(".summary").children(".time").text(); 
        }else{
            var text = jQuery(this).children(".summary").text(); 
        }
        var noformatday=$(this).closest('li').attr('id');
        noformatday = noformatday.replace('list-',''); 
        year=noformatday.substring(0, 4);
        var monthday=noformatday.substring(5,7);
        var month = monthsname[parseInt(monthday)];
        numberday=noformatday.substring(8,10);
        day=numberday+('-')+month+('-')+year;
        //var day=jQuery(this).closest('strong').children(".mc-text-button").text();
        $('.topick').text(day.trim()+' '+text.trim());
        if ($('.first-date').hasClass('topick')){
            $('.first-date').removeClass('topick');
            $('.first-date').removeClass('empty');
            $(this).addClass('first-pick');
            if ($('.second-date').hasClass('empty')){
                $('.second-date').addClass('topick');
                $('.second-date').text('Pick a date');
            }else if ($('.third-date').hasClass('empty')){
                $('.third-date').addClass('topick');
                $('.third-date').text('Pick a date');
            }else{
                $('.third-date').addClass('topick');
            }
        }else if($('.second-date').hasClass('topick')){
            $('.second-date').removeClass('topick');
            $('.second-date').removeClass('empty');
            $(this).addClass('second-pick');
            if ($('.third-date').hasClass('empty')){
                $('.third-date').addClass('topick');
                $('.third-date').text('Pick a date');
            }else{
                $('.third-date').addClass('topick');
            };
        }else{
            $('.third-date').removeClass('empty');
            $('.third-pick').removeClass('third-pick');
            $(this).addClass('third-pick');
        }
    });
    jQuery(".delete-date").click(function(){
        $(this).siblings().text('').addClass('empty');
        if ($('.first-date').hasClass('empty')){
            $('.first-date').addClass('topick');
            $('.first-date').text('Pick a date');
            $('.second-date').removeClass('topick');
            $('.third-date').removeClass('topick');
            $('.first-pick').removeClass('first-pick');
            if($('.second-date').hasClass('empty')){
                $('.second-pick').removeClass('second-pick');
                $('.second-date').text('');
            }
            if($('.third-date').hasClass('empty')){
                $('.third-date').text('');
                $('.third-pick').removeClass('third-pick');
            }
        }else if($('.second-date').hasClass('empty')){
            $('.second-date').addClass('topick');
            $('.second-date').text('Pick a date');
            $('.second-pick').removeClass('second-pick');
            $('.third-date').removeClass('topick');
            if($('.third-date').hasClass('empty')){
                $('.third-date').text('');
                $('.third-pick').removeClass('third-pick');
            }
        }else{
            $('.third-date').text('Pick a date');
            $('.third-pick').removeClass('third-pick');
        };
    });
    jQuery(".goto1").click(function(event) {
        jQuery(".month1").show();
        jQuery(".month2").hide();
    });
    jQuery(".goto2").click(function(event) {
        jQuery(".month2").show();
        jQuery(".month1").hide();
        jQuery(".month3").hide();
    });
    jQuery(".goto3").click(function(event) {
        jQuery(".month3").show();
        jQuery(".month2").hide();
        jQuery(".month4").hide();
    });
    jQuery(".goto4").click(function(event) {
        jQuery(".month4").show();
        jQuery(".month5").hide();
        jQuery(".month3").hide();
    });
    jQuery(".goto5").click(function(event) {
        jQuery(".month5").show();
        jQuery(".month4").hide();
        jQuery(".month6").hide();
    });
    jQuery(".goto6").click(function(event) {
        jQuery(".month6").show();
        jQuery(".month5").hide();
        jQuery(".month7").hide();
    });
    jQuery(".goto7").click(function(event) {
        jQuery(".month7").show();
        jQuery(".month8").hide();
        jQuery(".month6").hide();
    });
    jQuery(".goto8").click(function(event) {
        jQuery(".month8").show();
        jQuery(".month7").hide();
        jQuery(".month9").hide();
    });
    jQuery(".goto9").click(function(event) {
        jQuery(".month9").show();
        jQuery(".month10").hide();
        jQuery(".month8").hide();
    });
    jQuery(".goto10").click(function(event) {
        jQuery(".month10").show();
        jQuery(".month11").hide();
        jQuery(".month9").hide();
    });
    jQuery(".goto11").click(function(event) {
        jQuery(".month11").show();
        jQuery(".month12").hide();
        jQuery(".month10").hide();
    });
    jQuery(".goto12").click(function(event) {
        jQuery(".month12").show();
        jQuery(".month11").hide();
        jQuery(".month13").hide();
    });
    jQuery(".goto13").click(function(event) {
        jQuery(".month13").show();
        jQuery(".month12").hide();
        jQuery(".month14").hide();
    });
    jQuery(".goto14").click(function(event) {
        jQuery(".month14").show();
        jQuery(".month15").hide();
        jQuery(".month13").hide();
    });
    jQuery(".goto15").click(function(event) {
        jQuery(".month15").show();
        jQuery(".month14").hide();
        jQuery(".month16").hide();
    });
    jQuery(".goto16").click(function(event) {
        jQuery(".month16").show();
        jQuery(".month17").hide();
        jQuery(".month15").hide();
    });
    jQuery(".goto17").click(function(event) {
        jQuery(".month17").show();
        jQuery(".month18").hide();
        jQuery(".month16").hide();
    });
    jQuery(".goto18").click(function(event) {
        jQuery(".month18").show();
        jQuery(".month17").hide();
    });

    //Change VIP
    if(window.location.href.indexOf("show") > -1){
        jQuery('#contact .dtgf-date').show();
		var selected=getUrlParameter("show");
		console.log(selected);
        jQuery('#vip_show_select').val(selected).prop('selected', true); 
		//jQuery("#vip_show_select").attr("disabled", true);
		//jQuery("#vip_show_select").parent().addClass("disabled");
        jQuery('.dtgf-date').find('.showcal-rejilla').removeClass("showcal-rejilla");
        jQuery('.dtgf-date').find('.showcal-lista').removeClass("showcal-lista");
        jQuery('.rejilla.show-'+selected).addClass("showcal-rejilla");
        jQuery('.lista.show-'+selected).addClass("showcal-lista");  
	}
}( jQuery ) );


//SUBMIT FORM
function submitContactForm() {
    var requiredchequed = 1;
    var reg = /^[A-Z0-9._%+-]+@([A-Z0-9-]+.)+[A-Z]{2,4}$/i;
    
    /*Base*/
    var title = jQuery("#contact h1").text();
    var formid = jQuery("#contactform").attr('val');
    var type = jQuery("#contactform").attr('data-type');
    var name = jQuery("#inputNa").val();
    var email = jQuery("#inputEm").val();
    var phone = jQuery("#inputPh").val();
    var hname = jQuery("#inputName").val();
    var hemail = jQuery("#inputEmail").val();
    var hphone = jQuery("#inputPhone").val();
    var message = jQuery(".dtfc-comment").val();
    
    var enquiry,tickets,ticketsteachers,selectworkshop,tourcity,datetime,ticketsreference,studentsworkshop,yeargroup,organisation,postcode,workshopmorning,workshopafternoon,workshophall,firstdate,seconddate,thirddate,messageworkshop,requireworshop,groupname,workshopoption,number_of_tickets,seatingrequirements,affiliation_show,affiliation_other,guest_name,vip_show_select,workshop_show_select,workshop_type_select,typewselected,workshopdate;
    
    var haveworkshop=false;
    var requireworshop=false;
    var selectworkshop=false;
    /*Tickets*/
    if (type=="priority1"){
        var optionselected = document.getElementById("enquiry_type").selectedOptions;
        var enquiry=jQuery(optionselected).val();
        var tickets = jQuery("#number_of_tickets").val();
        if ((tickets=="")||(tickets==null)){
            var tickets = jQuery("#number_of_ticketsstudents").val();
        }
        var ticketsteachers = jQuery("#number_of_teachers").val();
        var haveworkshop = jQuery("#contactform").attr('data-ws');
        /*if (haveworkshop==true){
            var requireworshop =jQuery('#require-workshop').is(":checked");
        }*/
        var groupname=jQuery("#groupname").val();
    }
    /*Workshop*/
    if ((type=="priority2")||(haveworkshop==true)||(type=="priority5")){
        requireworshop =jQuery('#more-info').is(":checked");
        selectworkshop=jQuery('#request').is(":checked");//jQuery('input:radio[name=dtcf-selectworkshop]:checked').val();
        if (selectworkshop==true){
            if ((type=="priority2")||(type=="priority5")){
                //var tourcity = jQuery("#tourcity").val();
                var datetime = jQuery("#datetime").val();
                var ticketsreference = jQuery("#ticketsreference").val();
            }
            var studentsworkshop = jQuery("#studentsworkshop").val();
            var yeargroup = jQuery("#yeargroup").val();
            var organisation = jQuery("#organisation").val();
            var postcode = jQuery("#postcode").val();
            var workshopmorning =jQuery('#workshop-morning').is(":checked");
            var workshopafternoon =jQuery('#workshop-afternoon').is(":checked");
            //var workshophall =jQuery('#workshophall').is(":checked");
            var messageworkshop = jQuery(".dtfc-commentws").val();
            var optionwselected = document.getElementById("workshopoption").selectedOptions;
            var workshopoption = jQuery(optionwselected).val();
            if (type=="priority5"){
                var workshop_show_select = document.getElementById("vip_show_select").selectedOptions;
                var  show_select= jQuery(workshop_show_select).val();
                var  workshop_type_select= document.getElementById("workshoptype").selectedOptions;
                var typewselected = jQuery(workshop_type_select).val();
                var workshopdate= jQuery("#date").val();
            }
        }
    }
    /*Exchange*/
    if (type=="priority3"){
        var ticketsreference = jQuery("#bookingreference").val();  
    }  
    /*VIP*/
    if (type=="priority4"){
        var tickets = jQuery("#number_of_tickets").val();
        var seatingrequirements = jQuery("#seating-requirements").val(); 
        var affiliation_show = jQuery("#affiliation_show").val();
        var affiliation_other = jQuery("#affiliation_other").val(); 
        var guest_name = jQuery("#guest_name").val(); 
        var show_select = jQuery("#vip_show_select").val();
    } 
    /*Date*/
    if ((type=="priority1")||(type=="priority3")||(type=="priority4")){
        var firstdate=jQuery('.first-date').text();
        var seconddate=jQuery('.second-date').text();
        var thirddate=jQuery('.third-date').text();
    }
    /*Callback*/
    if(window.location.href.indexOf("callback") > -1){
        var callback=getUrlParameter("callback");
    }else{
        var callback="";
    }

    /*Legal*/
    var checkstatus = [];
    var checksoks = true;
    var dataofcheks = "";
    var numcheck = 0;
    for (var i = 0; i < Object.keys(objcheckCF).length; i++) {
        checkstatus[i] = new Array(3);
        var namech = (checkstatus[i][0] = Object.keys(objcheckCF)[i]);
        if (jQuery("#" + namech).is(":checkbox")) {
            checkstatus[i][1] = document.getElementById(namech).checked;
            checkstatus[i][2] = objcheckCF[namech].required;
            if (checkstatus[i][2]) {
                checksoks = checksoks && checkstatus[i][1];
                dataofcheks += "&chek" + numcheck + "=" + namech;
                numcheck = numcheck + 1;

                if (!checkstatus[i][1]) {
                    jQuery(".status" + namech).html(fng_script_vars.field);
                    jQuery("#" + namech).focus();
                } else {
                    jQuery(".status" + namech).html("");
                }
            }
        }
    }
    dataofcheks += "&numchek=" + numcheck;
    /*Check errors*/
    if (name.trim() == "") {
        jQuery(".statusname").html(fng_script_vars.name);
        jQuery("#inputNa").focus();
    } else {
        jQuery(".statusname").html("");
    }
    if (email.trim() == "") {
        jQuery(".statusemail").html(fng_script_vars.memail);
        jQuery("#inputEm").focus();
    } else if (email.trim() != "" && !reg.test(email)) {
        jQuery(".statusemail").html(fng_script_vars.validemail);
        jQuery("#inputEm").focus();
    } else if (email.trim() != "" && reg.test(email)) {
        jQuery(".statusemail").html("");
    }
    if ((type=="priority1")||(type=="priority3")||(type=="priority4")){
        if (phone.trim() == "") {
            jQuery(".statusphone").html(fng_script_vars.phone);
            jQuery("#inputPh").focus();
        } else {
            jQuery(".statusphone").html("");
        }
    }
    if ((type=="priority1")||(type=="priority3")||(type=="priority4")){
        if ((firstdate.trim() == "")||(firstdate.trim() == "Pick a date")) {
            jQuery(".statusdate").html(fng_script_vars.medate);
            jQuery(".first-date").focus();
        } else {
            jQuery(".statusdate").html("");
        }
    }
    if (type=="priority1"){
        if (tickets.trim() == "") {
            jQuery(".statustickets").html(fng_script_vars.metickets);
            jQuery(".statusticketss").html(fng_script_vars.metickets);          
            jQuery("#number_of_tickets").focus();
        } else {
            jQuery(".statustickets").html("");
            jQuery(".statusticketss").html("");
        }
        if (enquiry.trim() == "") {
            jQuery(".statusgrouptype").html(fng_script_vars.megrouptype);
            jQuery(".enquiry_type").focus();
        } else {
            jQuery(".statusgrouptype").html("");
        }
    }
    if (type=="priority4"){
        if (tickets.trim() == "") {
            jQuery(".statustickets").html(fng_script_vars.metickets);
            jQuery("#number_of_tickets").focus();
        } else {
            jQuery(".statustickets").html("");
        }
        if (affiliation_show.trim() == "") {
            jQuery(".statusaffiliationshow").html(fng_script_vars.meaffiliationshow);
            jQuery("#affiliation_show").focus();
        } else {
            jQuery(".statusaffiliationshow").html("");
        }
        if (guest_name.trim() == "") {
            jQuery(".statusguestname").html(fng_script_vars.meguestname);        
            jQuery("#guest_name").focus();
        } else {
            jQuery(".statusguestname").html("");
        }
        if (show_select.trim() == "") {
            jQuery(".statusvipshowselect").html(fng_script_vars.mevipshowselect);
            jQuery("#vipshowselect").focus();
        } else {
            jQuery(".statusvipshowselect").html("");
        }
    }
    if (((type=="priority2")&&(selectworkshop==true))||((type=="priority5")&&(selectworkshop==true))){
        if (ticketsreference.trim() == "") {
            jQuery(".statusticketsreference").html("<span class='text-danger  dtcf-not-valid-tip'>"+fng_script_vars.meticketsreference+"</span>");         
            jQuery("#ticketsreference").focus();
        } else {
            jQuery(".statusticketsreference").html("");
        }
    }
    if (type=="priority5"){
        if (show_select.trim() == "") {
            jQuery(".statusvipshowselect").html(fng_script_vars.mevipshowselect);
            jQuery("#vipshowselect").focus();
        } else {
            jQuery(".statusvipshowselect").html("");
        }
    }
    /*Captcha*/
    if ((utag.gdpr.getCookieValues().c38 == "1")&&(jQuery(".g-recaptcha").html().length > 0)){
        var response = grecaptcha.getResponse();
        if (response.length == 0) {
            jQuery(".statusrecaptcha").html(fng_script_vars.recaptcha);
        } else {
            jQuery(".statusrecaptcha").html("");
        }
    }else{
        var response=true;
    }
    //The field is required.
    jQuery(".statusNew").html("");
    jQuery(".statusMsg").html("");
    if (
        response.length == 0 ||
        !checksoks ||
        name.trim() == "" ||
        hname.trim() != "" ||
        hphone.trim() != "" ||
        hemail.trim() != "" ||
        !reg.test(email) ||
        (((type=="priority1")||(type=="priority3")||(type=="priority4"))&&((firstdate.trim() == "")||
        (firstdate.trim() == "Pick a date")))||
        (((type=="priority1")||(type=="priority3"))&&(phone.trim() == ""))||
        ((type=="priority1")&&(tickets.trim() == ""))||
        ((type=="priority1")&&(enquiry.trim() == ""))||
        ((type=="priority2")&&(selectworkshop==true)&&(ticketsreference.trim() == "") )||
        ((type=="priority4")&&((tickets.trim() == "")||(affiliation_show.trim() == "")||(guest_name.trim() == "")||(vip_show_select.trim() == "")))
    ) {
        return false;
    } else {
        //Send mail
        jQuery.ajax({
            type: "POST",
            url:
                //"https://disney-tickets.staging.fichub.com/wp-content/themes/disney-tickets-gf/functions/submit_form.php",
                "https://view.comms.disney.com/l/953913/2022-01-19/2l43",
            data: { 
                'name': name,
                'title': title,
                'email':email,
                'formid':formid,
                'type':type,
                'phone':phone,
                'message':message,
                'enquiry':enquiry,
                'tickets':tickets,
                'ticketsteachers':ticketsteachers,
                'groupname':groupname,
                'requireworshop':requireworshop,
                'selectworkshop':selectworkshop,
                'firstdate':firstdate,
                'seconddate':seconddate,
                'thirddate':thirddate,
                'datetime':datetime,
                'ticketsreference':ticketsreference,
                'studentsworkshop':studentsworkshop,
                'yeargroup':yeargroup,
                'organisation':organisation,
                'postcode':postcode,
                'workshopmorning':workshopmorning,
                'workshopafternoon':workshopafternoon,
                'workshopoption':workshopoption,
                'messageworkshop':messageworkshop,
                'affiliationshow':affiliation_show,
                'guestname':guest_name,
                'vipshowselect':show_select,
                'affiliationother':affiliation_other,
                'seatingrequirements':seatingrequirements,
                'callback':callback,
                'typewselected':typewselected,
                'workshopdate':workshopdate
            },
            beforeSend: function () {
                jQuery(".sendcontactform").attr("disabled", "disabled");
                jQuery(".sendcontactform").addClass("is-active");
                jQuery(".sendcontactform").html("Sending");
            },
            success: function (msg) {
                if (msg == '{"message":"Message sent."}') {
                    jQuery("#inputNa").val("");
                    jQuery("#inputEm").val("");
                    jQuery("#inputMessage").val("");
                    jQuery("#inputTitle").val("");
                    jQuery("#inputPh").val("");
                    jQuery("#inputCountry").val("");
                    jQuery("#inputEnquiry").val("");
                    for (var i = 0; i < Object.keys(objcheckCF).length; i++) {
                        jQuery("#" + checkstatus[i][0]).prop("checked", false);
                    }
                    if((thankspage!="")&&(thankspage!=null) ){
                        window.location.href = thankspage;
                    }else{
                        jQuery(".statusMsg").html(
                            '<span style="color:green;">' +
                                fng_script_vars.sentmessage +
                                '</span></br><span style="color:green;">' +
                                fng_script_vars.thankyoumessage +
                                "</span>"
                        );
                        jQuery(".sendcontactform").removeAttr("disabled");
                        jQuery(".sendcontactform").removeClass("is-active");
                        jQuery(".sendcontactform").html("Send Enquiry");
                    }
                } else {
                    jQuery(".statusMsg").html(
                        '<span style="color:red;">' +
                            fng_script_vars.problemsmessage +
                            "</span>"
                    );
                    jQuery(".sendcontactform").removeAttr("disabled");
                    jQuery(".sendcontactform").removeClass("is-active");
                    jQuery(".sendcontactform").html("Send Enquiry");
                }
            },
        });
    }
}


/*Logo replace*/
/*
var checkExist = setInterval(function() {
    logoelement=document.getElementById("goc-logo-replace");
    if(typeof(logoelement) != 'undefined' && logoelement != null){
        var logo=logoelement.getAttribute('data-logo-replace');
        logoelement.style.backgroundImage ="url("+logo+")";
        var logoelementmob=document.getElementById("goc-logo");
        logoelementmob.style.backgroundImage ="url("+logo+")";
        clearInterval(checkExist);
    }
}, 100);*/
