//javascript Document
$("#chagecolor").on("click",function(){
	setTimingTimerProperty("#DDFF00","50px");
	
});

var intervalID;
$("#testButton").on("click",function(){
	timingTimer(30,1);
	
});

$("#stopButton").on("click",function(){
	resetTimingTimer();
	intervalID=undefined;
})

function setTimingTimerProperty(color,width){
	$(".circle").css("border-color",color);
	$(".halfcircle").css("border-color",color);
	$(".circle").css("border-width",width);
	$(".halfcircle").css("border-width",width);
}

function timingTimer(time,Animtime){
	let deg=0;
	let timingtime=0;
	if(Count_Backwards){timingtime = parseInt(time);}
	let degadd=(360/time*Animtime);
	
	intervalID = setInterval(function(){
		deg=deg+degadd;
		$(".right").css({ WebkitTransform: 'rotate('+deg+'deg)'});
		
		if(Count_Backwards){	
			timingtime= timingtime-(Animtime);	
		}else{
			timingtime= timingtime+(Animtime);
		}
		if(timingtime<0){ $("#timingtime").html("0s");
		}else{
		$("#timingtime").html(timingtime.toFixed(0)+"s");
		}
					
		
		if (deg>=180){
			deg=0;
			clearInterval(intervalID);
			$(".right").hide();
			$(".halfcircle").show();
				
			intervalID = setInterval(function(){
					deg=deg+degadd;
					$(".left").css({ WebkitTransform: 'rotate('+deg+'deg)'});
				
					if(Count_Backwards){	
						timingtime= timingtime-(Animtime);	
					}else{
						timingtime= timingtime+(Animtime);
					}					
					if(timingtime<0){ $("#timingtime").html("0s");
					}else{
						$("#timingtime").html(timingtime.toFixed(0)+"s");
					}
							
					if(deg>=180){
						clearInterval(intervalID);
						$(".left").hide();
						deg=0;
						
						if(!Only_Break){changeSportModeCSS();}
						
						if(Aout_timing){
							resetTimingTimer();
							idtfOnlyBreak();
						}else{
							$("#start").prop('disabled', false);	
							timing=false;
							if(vibrate){timingStopVibrate($("#vibrateDuration").val(),$("#vibrateInterval").val());}
						}

						
						
						}
			},Animtime*1000);
			
			}
	},Animtime*1000);	
}

function resetTimingTimer(){
	$(".left").show();
	$(".left").css({ WebkitTransform: 'rotate(0deg)'});
	$(".right").show();
	$(".right").css({ WebkitTransform: 'rotate(0deg)'});
	$(".halfcircle").hide();
	$("#timingtime").html("0s");
	clearInterval(intervalID);
	
}


//function SoundAlarm{
//	
//}