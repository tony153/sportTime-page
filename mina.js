// JavaScript Document
var count_time=30;
var Anim_mode=0.1;
var Only_Break=false;
var Aout_timing=false;
var Sport_mode=true;
var timing=false;
var Count_Backwards=false;
var vibrate=true;


$("#start").on("click",function(){
	resetTimingTimer();
	stopVibrate();
	$("#start").prop('disabled', true);
	timing=true;
	idtfOnlyBreak();
	
	
});


function idtfOnlyBreak(){
	if(Only_Break){
		count_time = $("#Break_time").val();
	}else{
		if(Sport_mode){
			count_time = $("#Sport_time").val();
		}else{
			count_time = $("#Break_time").val();
		}
		Sport_mode=!Sport_mode;
	}
	timingTimer(count_time,Anim_mode);
}

function changeSportModeCSS(){
	if(!Sport_mode){
		$("#start").removeClass("sport").addClass("break").html("Break");
	}else{
	   $("#start").removeClass("break").addClass("sport").html("Sport"); 
	}
}

$("#skip").on("click",function(){
	resetTimingTimer();
	stopVibrate();
	if(!Only_Break){
		if(timing){
			if(Sport_mode){
				$("#start").removeClass("break").addClass("sport").html("Sport"); 
				count_time = $("#Sport_time").val();
			}else{
				$("#start").removeClass("sport").addClass("break").html("Break");
				count_time = $("#Break_time").val();
			}		
		}else{
			if(Sport_mode){
				$("#start").removeClass("sport").addClass("break").html("Break");
				count_time = $("#Break_time").val();
			}else{	
				$("#start").removeClass("break").addClass("sport").html("Sport"); 
				count_time = $("#Sport_time").val();
			}
			Sport_mode=!Sport_mode;
		}
	}

	timing=false;
	$("#start").prop('disabled', false);
});

$("#timing_page_button").on("click",function(){
	$(".timing_page").show();
	$(".setting_page").hide();
	
	
	if(Only_Break){
		$("#start").removeClass("sport").addClass("break").html("Break");
	   }else{
		   $("#start").removeClass("break").addClass("sport").html("Sport"); 
		   Sport_mode=true;
	   }
	
});

$("#setting_page_button").on("click",function(){
	$(".timing_page").hide();
	$(".setting_page").show();
	stopVibrate();
	
	if (timing){
		alert("stop timing");
		resetTimingTimer();
		timing =false;
		$("#start").prop('disabled', false);
	}
	
	
	
});


$("#Timing_Animation_mode").on("click",function(){
	if($("#Timing_Animation_mode").html()=="Smooth"){
		$("#Timing_Animation_mode").html("Inverval");
		Anim_mode=1;
		
	}else if($("#Timing_Animation_mode").html()=="Inverval"){
		$("#Timing_Animation_mode").html("Smooth");	
		Anim_mode=0.1;
			 }
});


$("#Only_Break").on("click",function(){
	if($("#Only_Break").html()=="OFF"){
		$("#Only_Break").html("ON");
		Only_Break=true;
		
		$("#Aout_timing").html("OFF");
		$("#Aout_timing").prop('disabled', true);
		Aout_timing=false;
		$("#skip").html("Skip →");
		
	}else if($("#Only_Break").html()=="ON"){
		$("#Only_Break").html("OFF");	
		Only_Break=false;
		
		$("#Aout_timing").prop('disabled', false);
			 }
});

$("#Aout_timing").on("click",function(){
	if($("#Aout_timing").html()=="OFF"){
		$("#Aout_timing").html("ON");
		Aout_timing=true;
		
		$("#Only_Break").html("OFF");
		$("#Only_Break").prop('disabled', true);
		
		$("#skip").html("Stop/Skip");
		
	}else if($("#Aout_timing").html()=="ON"){
		$("#Aout_timing").html("OFF");	
		Aout_timing=false;
		
		$("#Only_Break").prop('disabled', false);
		
		$("#skip").html("Skip →");
			 }
});


$("#Count_Backwards").on("click",function(){
	if($("#Count_Backwards").html()=="OFF"){
		$("#Count_Backwards").html("ON");
		Count_Backwards=true;
	}else if($("#Count_Backwards").html()=="ON"){
		$("#Count_Backwards").html("OFF");	
		Count_Backwards=false;
			 }
});

$("#vibrate").on("click",function(){
	if($("#vibrate").html()=="OFF"){
		$("#vibrate").html("ON");
		vibrate=true;
	}else if($("#vibrate").html()=="ON"){
		$("#vibrate").html("OFF");	
		vibrate=false;
			 }
});


