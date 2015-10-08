// JavaScript Document
var mapArray = [
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0],
[0,0,0,0,0]
];

var pathArray = [];
var adjacentX = false;
var adjacentY = false;
var theCount = 0;
var prevX = 0;
var prevY = 0;

function drawMap(){
	for(var i = 0; i < mapArray.length; i++){
		$('#container').append('<div id="row'+i+'"></div>');
		for(var j = 0; j < mapArray[i].length; j++){
				var theID = "x"+i+"y"+j;
				var yPos = i;
				var xPos = j;
				var theName = "hex"+theCount;
				theCount++;
				//$('#container').append('<div id='+theID+' xPos='+xPos+' yPos='+yPos+' class="open" name="'+theName+'">'+theName+'</div>');
				$('#row'+i).append('<div id='+theID+' xPos='+xPos+' yPos='+yPos+' class="open" name="'+theName+'">'+theName+'</div>');
				
				$('#'+theID).click(function() {
					var currentPath = [];
    		//alert($(this).attr('id')+$(this).css('background-color'));
			var currentX = parseInt($(this).attr('xPos'));
			var currentY = parseInt($(this).attr('yPos'));
			currentPath.push(currentX);
			currentPath.push(currentY);
			currentPath.push($(this).attr('name'));
			pathArray.push(currentPath);
			
			
			if(pathArray.length > 1){
				
			prevX = parseInt(pathArray[pathArray.length-2][0]);
			prevY = parseInt(pathArray[pathArray.length-2][1]);
				//alert("CurX= "+currentX+" PrevX = "+prevX+"CurY="+currentY+" PrevY = "+prevY);
				}
			
			
			switch((currentX - prevX)){
				
				case  1:
				adjacentX = true;
				break;
				case  -1:
				adjacentX = true;
				break;
				default:
				adjacentX = false;
				}
				
				switch((currentY - prevY)){
				
				case  1:
				adjacentY = true;
				break;
				case  -1:
				adjacentY = true;
				break;
				default:
				adjacentY = false;
				}
				
				var _theX = currentX - prevX;
				var _theY = currentY - prevY;
					if(!_theX){
					 _theX = 0;
					 }
					 if(!_theY){
					_theY = 0;
					}	
				if((_theX === 0 && (_theY === 0 || _theY === 1 || _theY === -1)) || (_theY === 0 && (_theX === 1 || _theX === -1)) ){
				$(this).css('background-color', '#333333');
				}else{
					if(pathArray.length > 1){	
					pathArray.pop();		
						}
					}
					
			   });
			}
		}
	}
window.onload = function(){
	drawMap();
	};
