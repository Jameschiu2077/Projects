console.log("script start")

function Datething(dateAdd){
    date = date + dateAdd
    if(date%4>1){
        DS = "PM"
    }else{
        DS = "AM"
    }
    travelWindow_date.innerHTML = `day ${parseInt(date/4)} ${dateTime[date%4]} ${DS}`;
}
function nextbuttonanimation_promptWindow(){
    if(promptnow){
        if(promptnow_n_m){
            promptWindow_next.style.marginTop='10px';
            promptnow_n_m = false;
            setTimeout(nextbuttonanimation_promptWindow,500);
            
        }
        else{
            promptWindow_next.style.marginTop='20px';
            promptnow_n_m  = true;
            setTimeout(nextbuttonanimation_promptWindow,500);
            
        }
    }
    else{
        promptWindow_next.style.marginTop = '15px';
    }
}
function srartButtononmouseover(){
    gameStartbutton.innerHTML = "αρχή"  ;
    gameStartbutton.style.color = 'black';
    gameStartbutton.style.backgroundColor = 'white';
    gameStartbutton.style.fontWeight = '700';
    
}
function srartButtononmouseout(){
    gameStartbutton.innerHTML = "start"  ;
    gameStartbutton.style.color = 'white';
    gameStartbutton.style.backgroundColor = 'black';
    gameStartbutton.style.fontWeight = '500';
}

function map_keycode_EventListener(event){
    if(travel_Start){
        if(event.keyCode == 37) {
            // console.log("Left")
            travel(startPlacex-1,startPlacey,"left");
            // alert('Left was pressed');;
        }
        else if(event.keyCode == 39) {
            // console.log("Right")
            travel(startPlacex+1,startPlacey,"right");
            // alert('Right was pressed');
        }
        else if(event.keyCode == 40) {
            //  console.log("Down")
            travel(startPlacex,startPlacey+1,"dwon");
            //alert('Down was pressed');
        }
        else if(event.keyCode == 38) {
            // console.log("Up")//
            travel(startPlacex,startPlacey-1,"up");
            //alert('UP was pressed');
        }

        console.log(event.keyCode)
    }
    if(event.keyCode == 66){
        openbackpack = !openbackpack
        if(openbackpack){
            if(travel_Start){
                backpack(-630)
            }else{
                backpack(-510)
            }

        }else{
            backpack_close()
        }
    }
}
document.addEventListener('keydown', unevent);
function unevent(event){
    if(event.keyCode == 66){
        openbackpack = !openbackpack
        if(openbackpack){
            if(travel_Start){
                backpack(-630)
            }else{
                backpack(-510)
            }

        }else{
            backpack_close()
        }
    }
}

function VW_switchWindowController(villagenumber,optionnumber){
    openvillagewindow = true
    mapWindow.style.display = 'none';
    travelWindow.style.display = 'none';
    villageWindow.style.display = 'none';
    VWsec_window.style.display = 'block';
    VWsec_WT.innerHTML = VWsecOptions[villagenumber][optionnumber];
    if(VWsecONN[villagenumber][optionnumber]==0){
        console.log("SEC none")
        for(a=0;a<20;a++){
            document.getElementById(`secbutton|${a}`).style.display = 'none'
        }
    }
    else if(VWsecONN == 20){
        console.log("SEC all")
        for(p=0;p<20;p++){
            document.getElementById(`secbutton|${p}`).style.display = 'inline-block'
            document.getElementById(`secbutton|${p}`).innerHTML = VWsecIN[villagenumber][optionnumber][p]
        }
    }else{
        console.log("SEC some")
        for(t=0;t<VWsecONN[villagenumber][optionnumber];t++){
            document.getElementById(`secbutton|${t}`).style.display = 'inline-block'
            document.getElementById(`secbutton|${t}`).innerHTML = VWsecIN[villagenumber][optionnumber][t]
        }
        for(u=VWsecIN[villagenumber][optionnumber].length;u<20;u++){
            document.getElementById(`secbutton|${u}`).style.display = 'none'
        }
    }
    ok()
}


function ok(){
    console.log("done")
}






function VWsecwindowC(){
    map_intovillage()
}











function travel_start(inx,iny){
    mapdata_long=mapdata.length;
    startPlacex=inx;
    startPlacey=iny;
    console.log(startPlacex,startPlacey)
    travel_Start = true;
    document.addEventListener('keydown',map_keycode_EventListener,true);
    loadmap(inx,iny);
}

function travel(inx,iny,heading){
    console.log(inx,iny)
    if(mapdata[iny+6][inx+14] != 1 && mapdata[iny+6][inx+14] !=  undefined){
        loadmap(inx,iny);
        if(heading == "up"){
            startPlacey--;
        }
        else if(heading == "dwon"){
            startPlacey++;
        }
        else if(heading == "left"){
            startPlacex--;
        }
        else if(heading == "right"){
            startPlacex++;
        }
    }

    if(mapdata[iny+6][inx+14] == 1 && mapdata[iny+6][inx+14] ==  undefined){

    }
    else if(mapdata[iny+6][inx+14] == 0){
        Datething(1)
    }
    else if(mapdata[iny+6][inx+14] == 9){
        Datething(1)

        map_intovillage()

    }
    else if(mapdata[iny+6][inx+14] == 2){
        Datething(2)
    }
    else if(mapdata[iny+6][inx+14] == 3){
        Datething(4)
    }        
    else if(mapdata[iny+6][inx+14] == 4){
        Datething(4)
    }    
   
}
// (4,3)
function map_intovillage(){
    document.removeEventListener('keydown',map_keycode_EventListener,true);
    mapWindow.style.display = 'none';
    travelWindow.style.display = 'none';
    villageWindow.style.display = 'block';
    VWsec_window.style.display = 'none'
    if(startPlacex+14==4 && startPlacey+6 ==3){
        if(mainmission=="firstgotovillage"){
            villageWindow.style.display = 'none';
            part = 2;
            initplot();
            say();
            
        }
        village("testvillage")
        
    }
}

function village(village_where){
    if(village_where == "testvillage"){
        console.log("testvillage123")
        villageWindow_villagename.innerHTML="testvillage";
        villageWindow_goout_button.onclick = village_leave;
        villageWindow_Propsshop_button.onclick = village_propsshop;
    }
}

function village_propsshop(){
    if(startPlacex+14==4 && startPlacey+6 ==3){

    }
}
function village_ES(){
    if(startPlacex+14==4 && startPlacey+6 ==3){

    }
}
function village_leave(){
    villageWindow.style.display = 'none'
    if(startPlacex+14==4 && startPlacey+6 ==3){
        travel_start(-10,-3)
    }
}
//效能待優化
function loadmap(x,y){//xy|6|14
    // console.log(`now you at (${x+14},${y})||${mapdata[x][y]}`);
    openvillagewindow = false
    mapWindow.style.display = 'block';
    travelWindow.style.display = 'block';
    Mapthing = document.getElementById("xy|6|14")
    for(travelx=0;travelx<30;travelx++){
        for(travely=0;travely<12;travely++){
            thing = document.getElementById(`xy|${travely}|${travelx}`)
            // console.log(travelx,travely)
            // console.log(travely,travelx,mapdata[y+(11-(11-travely))][x+(29-(29-travelx))],y+(11-(11-travely)),x+(29-(29-travelx)))
            // console.log(y+travely,y+travely>mapdata_long)
            if(y+travely<0){
                thing.innerHTML = '<div class="mapgrid_thing_outside"></div>';
            }
            else if(y+travely>=mapdata_long){
                thing.innerHTML = '<div class="mapgrid_thing_outside"></div>';
            }
            else if(mapdata[y+travely][x+travelx] == 0){
                thing.innerHTML = '<img src="/picture/map_garss.png" alt="" class="map_picture_teast">';
                    // console.log(0)
            }
            else if(mapdata[y+travely][x+travelx] == 1){
                thing.innerHTML = '<div class="mapgrid_thing_teast"></div>';
                // console.log(1)
            }
            else if(mapdata[y+travely][x+travelx] == 2){
                thing.innerHTML = '<img src="/picture/map_tree.png" alt="" class="map_picture_teast">';
                    // console.log(0)
            }
            else if(mapdata[y+travely][x+travelx] == 3){
                thing.innerHTML = '<img src="picture/map_forest.png" alt="" class="map_picture_teast">';
                    // console.log(0)
            }
            else if(mapdata[y+travely][x+travelx] == 4){
                thing.innerHTML = '<img src="picture/map_mountain.png" alt="" class="map_picture_teast">';
                    // console.log(0)
            }
            else if(mapdata[y+travely][x+travelx] == 9){
                thing.innerHTML = '<img src="picture/map_village.png" alt="" class="map_picture_teast">';
            }
            else if(mapdata[y+travely][x+travelx] == undefined){
                thing.innerHTML = '<div class="mapgrid_thing_outside"></div>';
                // console.log("out")
            }
            
            Mapthing.appendChild(mapplayer);

            //mapgridelement[travelx][travely].innerHTML += '<div></div>';
            // document.getElementById(`xy|0|0`).innerHTML += '<div></div>'
        }
    }
    
}

async function prompt(content){
    console.log(content)
    promptWindow.style.display = "block";
    promptWindow_text.innerHTML = content;
    promptnow = true;
    nextbuttonanimation_promptWindow();
    await waitingKeypress();
    promptnow = false;
    promptWindow.style.display = 'none'
}


//流程
function Gamestartmenu(){ //start menu
    console.log("Gamestartmenu");
    gameStartbutton.className ='startmenubutton';
    gameStartbutton.id = 'gmaeStartbutton'; 
    mainBox.appendChild(gameStartbutton);
    //gameStartbutton.appendChild(gameStartbutton_text);
    gameStartbutton.innerHTML = "start";
    gameStartbutton.onmouseover = srartButtononmouseover;
    gameStartbutton.onmouseout = srartButtononmouseout;
    gameStartbutton.onclick = Gamestart;
    
}
//function Startbuttononclick(){
//    document.getElementById('gmaeStartbutton').background-color = "blue";
//}
function Gamestart(){ //startbutton onclick 
    console.log("startbutton onclick ");
    document.getElementById('gmaeStartbutton').style.display = 'none';
    firstPlot();
    // loadmap(0,0);
    date = 0
    // map_intovillage()
    // travel_start(-13,-5);
    // prompt("123")
    
}
function firstPlot(){
    mainBox.style.backgroundImage = "url('/picture/campfire.png')";
    mainBox.style.backgroundRepeat = 'no-repeat';
    mainBox.style.backgroundAttachment = 'fixed';
    mainBox.style.backgroundSize = '80% 80%';
    console.log("first plot start");
    part = 1;
    initplot();
    say();
    //sSay = setInterval(say("I am Y.T."),500);
}

function PlotEND(){
    if (plotRate === -1){
        if(part === 1){
            console.log("PLOT_1 END")
            mainBox.style.backgroundImage ='none';
            plotTextwindow.style.display = 'none';
            mainmission = "firstgotovillage"
            travel_start(1,1)
        }
        if(part == 2){
            console.log("PLOT_2 END")
            mainBox.style.backgroundImage ='none';
            plotTextwindow.style.display = 'none';
            mainmission = "Infirstvillage"
            map_intovillage();
        } 
    }
    
}


function backpack(x){
    backpackWindow.style.display = "block";
    console.log("working")
    // backpackWindow_text.innerHTML = "_";
    backpacknow = true;
    backpackWindow.style.marginTop= `${x}px`

}
function backpack_close(){
    backpacktnow = false;
    backpackWindow.style.display = 'none'
}

init();
