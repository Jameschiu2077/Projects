var mapdata = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,3,2,2,3,2,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,2,2,0,2,2,3,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,2,2,0,9,0,2,0,4,4,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,4,4,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];
    var mapgridelement = [];
    var plotStory =[[],[['When you open your eyes,',"null"],
                        ["You see that you're sitting in front of a flaming campfire,","null"],
                        ['and the campfire is burning in the dark night sky.',"null"],
                        ['In the dark, you can vaguely see a brown horse and a medieval-style carriage.','null'],
                        ['Hello, human',"person","▯▯▯","red"],
                        ['You see the horse, who looks really strange, is talking to you','null'],
                        ["Now, the horse looks like it's being possessed.",'null'],
                        ['choice',"Where am I?","Who are you?"],
                        ["You don't need to know","person","▯▯▯","red"],
                        ['I think knowing how to survive will be more important to you.',"person","▯▯▯","red"],
                        ['You see the horse sneer, not like any animal.','null'],
                        ['Try to be a great businessman, in this dangerous world.',"person","▯▯▯","red"],
                        ['You see the horse sneering again, but this time','null'],
                        ["its laughter makes you shiver even more.",'null'],
                        ["Be Careful of the wolf, the monster and the ▯▯▯.","person","▯▯▯","red"],//
                        ["You can't hear what the last word is.",'null'],
                        ["but that word make you feel uncomfortable.","null"],
                        ["prompt","San - 1<br>because you heard something you shouldn't have."],
                        ["So...","person","you"],
                        ['choice',"What should I do?","How do I get home?"],
                        ["Don't be so anxious.","person","▯▯▯","red"],
                        ["Now, just go to the nearest village.","person","▯▯▯","red"],
                        ["Go there, and I will tell you next thing you must do.","person","▯▯▯","red"],
                        ["The person who is possessed in the horse looks to leave.","null"],//not person
                        ["You go find what is in the carriage.","null"],//new picture
                        ["prompt","You find...<br>something you can use for camping, some money and a sword"],
                        ["Hmm...","person","you"],
                        ["Now...","person","you"],
                        ['choice',"Set off","Let me think one second."],
                        ["... .... ...","null"],
                        ["Why are you still in here?","person","▯▯▯","red"],
                        ["Suddenly, the horse starts to talk again.","null"],
                        ["Now, go to the village.","person","▯▯▯","red"],
                        ["Abruptly, your body moves by itself.","null"],
                        ["Next time, you see your body on the carriage and drive it away.","null"],
                        "END"],
                        [['',"null"],
                        ["Who are you? Say your name.","person","guard"],
                        ["fafdaf","null"],
                        ["fa4664fdaf","null"]
                        ,"END"]]
const travelWindow = document.createElement("div");
const plotTextwindow = document.createElement('div');
const mapWindow = document.createElement('div');
const gameStartbutton = document.createElement("button");
const mapMask = '<img src="/picture/mapMask.png" alt="mask">';
const plotperson_name = document.createElement("div");
const mapplayer = document.createElement("div");
const travelWindow_date = document.createElement("p");
const mainBox = document.getElementById('mainBox');
const plotperson = document.createElement('div');
const plotTextwindow_next = document.createElement("div");
const plottext = document.createElement("p");
const mapgrid_thing_teast = document.createElement("div");
const plottext_button1 = document.createElement("button");
const plottext_button2 = document.createElement("button");
// promptWindow
const promptWindow = document.createElement("div")
const promptWindow_text = document.createElement("p")
const promptWindow_next =  document.createElement("div");
// village
const villageWindow = document.createElement("div");
const villageWindow_wholesaler_button = document.createElement("button");
const villageWindow_task_button = document.createElement("button");
const villageWindow_social_button = document.createElement("button");
const villageWindow_goout_button = document.createElement("button");
const villageWindow_Equipmentshop_button = document.createElement("button");
const villageWindow_Propshop_button = document.createElement("button");
const villageWindow_Inn_button = document.createElement("button");
const villageWindow_villagename = document.createElement("p"); 
//village window popup
const VWsec_window = document.createElement("div")
const VW_PS_window = document.createElement("div")
const VW_INN_window = document.createElement("div")
const VW_BT_window = document.createElement("div")
const VW_PZ_window = document.createElement("div")

const VWsec_WT = document.createElement("p")
const VW_PS_WT = document.createElement("p")
const VW_INN_WT = document.createElement("p")
const VW_BT_WT = document.createElement("p")
const VW_PZ_WT = document.createElement("p")
const VWsec_WL = document.createElement("button")
const VW_PS_WL = document.createElement("button")
const VW_INN_WL = document.createElement("button")
const VW_BT_WL = document.createElement("button")
const VW_PZ_WL = document.createElement("button")
// backpack
const backpackWindow = document.createElement("div")
const backpackWindow_text = document.createElement("p")
const backpackWindow_next =  document.createElement("div");  
const backpackWindowInventory = document.createElement("div")
const backpackWindowInventoryItemDescription = document.createElement("div")
let backpacknow_n_m,backpacknow
backPackDivList = [] 
///
let talktext,part,KeycodeN,plotRate,maprow,i,ii,travelx,travely,thing,Mapthing,mapdata_long,startPlacex,startPlacey,DS,date,promptnow,prompt_n_m,mainmission,money;
let textRate = 0;
let nBAMove = true, travel_Start = false,openbackpack = false,openvillagewindow = false,opensecwindow=false;
let typing_text = "";
startPlacex=0;
startPlacey=0;
dateTime = [0,9,2,6]
secondwindowbuttons = []


//玩家資料
inventoryData = [  [ [1, 45],[1, 8],[3, 800],[5, 44],[0, 54] ], [ [0, 0],[0, 0],[0, 0],[0 ,0],[0, 0] ],
                    [ [0,0],[0,0],[0,0],[0,0],[0,0] ],[ [0,0],[0,0],[0,0],[0,0],[0,0] ],
                    [ [0,0],[0,0],[0,0],[0,0],[0,0] ]  ]
ItemData = ["sword","fire","coin","husky","henry","YT","james"]
ItemDataDescription = []



// 新的
// VW 是villagewindow的簡寫
// sec 是次視窗的簡寫
// WT = 字 (<= 選項名稱)
// WL = 離開次視窗
VWsecOptions = [["EquipmentShop","Props shop","Inn","Bulk trade","pizza"],[],[]]//選項名稱
VWsecONN = [[7,3,4,6,2],[]]//選項可購買的不同物件數量
VWsecIN = [ [ 
    ["Sword","armor","gun","ICBM","bullet","knife","dagger"]
    ,["tent","KGB","KFC"]
    ,["tent","F-5E","B-2","ISS"]
    ,["flowr","water","iron","gunpowder","wood","meat"]
    ,["people","child"]
             ], [ ] ]  //選項裡的物件名稱

//init
function init(){
    console.log("initmainBox");
    mainBox.style.backgroundImage = "none";
    starttinitPlot();
    initMap();
    initpromptWindow();
    initvillage();
    Gamestartmenu();
    initbackpackWindow();
    updateinventory()
}

function initpromptWindow(){
    promptWindow.id = "promptWindow";
    promptWindow_text.id = "promptWindow_text";
    promptWindow_next.id = "promptWindow_next";
    mainBox.appendChild(promptWindow);
    promptWindow.appendChild(promptWindow_text);
    promptWindow.appendChild(promptWindow_next);
    promptWindow.style.display = "none";
    promptnow_n_m = true;
}

function starttinitPlot(){ //first plot start
    plotperson_name.className = 'plotperson_name';
    plotperson.appendChild(plotperson_name);
    plottext_button1.className = "plottext_button";
    plottext_button2.className = "plottext_button";
    plottext_button1.id = "plottext_button1";
    plottext_button2.id = "plottext_button2";
    plotTextwindow.appendChild(plottext_button1);
    plotTextwindow.appendChild(plottext_button2);
    plottext_button1.style.display = 'none';
    plottext_button2.style.display = 'none';
    plotperson.className = 'plotperson';
    plotperson.id = 'plotperson';
    mainBox.appendChild(plotperson);
    plotTextwindow.className = 'textwindow';
    plotTextwindow.id = 'plotTextwindow';
    mainBox.appendChild(plotTextwindow);
    plottext.id = 'plottext';
    plotTextwindow.appendChild(plottext);
    plotTextwindow_next.className = 'textwindow_next';
    plotTextwindow_next.id = 'plotTextwindow_next';
    plotTextwindow.appendChild(plotTextwindow_next);
    plottext.className = 'plottext';
    plotperson.style.display = 'none';
    plotTextwindow.style.display = 'none';
}

function initMap(){
    travelWindow.id = 'travelWindow';
    travelWindow.className = 'travelWindow';
    mapWindow.id = 'mapWindow';
    mapWindow.className = 'mapWindow';
    mapgrid_thing_teast.className = 'mapgrid_thing_teast';
    travelWindow_date.id = "mapWindow_date";
    mainBox.appendChild(mapWindow);
    mainBox.appendChild(travelWindow);
    travelWindow.appendChild(travelWindow_date);
    travelWindow_date.innerHTML = "100.10.10"
    mapplayer.className = "mapplayer";
    mapplayer.id = "mapplayer";

    for(i=0;i<12;i++){
        mapWindow.innerHTML += `<div class="maprow" id="x|${i}"></div>`;
        maprow = document.getElementById(`x|${i}`);
        mapgridelement.push([])
        for(ii=0;ii<30;ii++){
           //maprow.innerHTML += `<div class="mapgrid" id="xy|${i}|${ii}" ></div>`;
           mapgridelement[i][ii] = document.createElement("div");
           mapgridelement[i][ii].id = `xy|${i}|${ii}`;
           mapgridelement[i][ii].className = "mapgrid";
           maprow.appendChild(mapgridelement[i][ii])
            
        }
    }
    //mapWindow.innerHTML = mapMask;
    mapWindow.style.display = 'none';
    travelWindow.style.display = 'none';

}

function initvillage(){
    villageWindow.id = "villageWindow";
    villageWindow_wholesaler_button.className= "villageWindow_button";
    villageWindow_social_button.className= "villageWindow_button";
    villageWindow_goout_button.className= "villageWindow_button";
    villageWindow_Equipmentshop_button.className= "villageWindow_button";
    villageWindow_Equipmentshop_button.className= "villageWindow_button";
    villageWindow_Propshop_button.className= "villageWindow_button";
    villageWindow_Inn_button.className = "villageWindow_button";
    villageWindow_wholesaler_button.id = "villageWindow_wholesaler_button";
    villageWindow_social_button.id = "villageWindow_social_button";
    villageWindow_goout_button.id = "villageWindow_goout_button";
    villageWindow_Equipmentshop_button.id = "villageWindow_Equipmentshop_button";
    villageWindow_Propshop_button.id = "villageWindow_Propsshop_button";
    villageWindow_Inn_button.id="villageWindow_Inn_button";
    villageWindow_villagename.id = "villageWindow_villagename";

    villageWindow_Equipmentshop_button.onclick = sec0001;  
    villageWindow_Propshop_button.addEventListener('click', sec0002)
    villageWindow_Inn_button.onclick = sec0003;
    villageWindow_wholesaler_button.onclick = sec0004;
    villageWindow_social_button.onclick = sec0005;

    mainBox.appendChild(villageWindow);
    villageWindow.appendChild(villageWindow_villagename);
    villageWindow.appendChild(villageWindow_goout_button);
    villageWindow.appendChild(villageWindow_Equipmentshop_button);
    villageWindow.appendChild(villageWindow_Propshop_button);
    villageWindow.appendChild(villageWindow_Inn_button);
    villageWindow.appendChild(villageWindow_wholesaler_button);
    villageWindow.appendChild(villageWindow_social_button);
    villageWindow_wholesaler_button.innerHTML ='Bulk Trade';
    villageWindow_Equipmentshop_button.innerHTML = 'Equipment shop';
    villageWindow_Propshop_button.innerHTML = 'Props shop';
    villageWindow_Inn_button.innerHTML = "Inn";
    villageWindow_social_button.innerHTML ='piazza';
    villageWindow_task_button.innerHTML ='task'; 
    villageWindow_goout_button.innerHTML = 'leave'
    villageWindow.style.display = 'none';






    VWsec_window.id = "VWsec_window";
    VWsec_WT.id = "VWsec_WT";
    VWsec_WL.className = "VWsec_button";
    mainBox.appendChild(VWsec_window);
    VWsec_window.appendChild(VWsec_WT);
    VWsec_window.appendChild(VWsec_WL);
    for(g = 0;g<20;g++){
        secondwindowbuttons[g] = document.createElement("button")
        secondwindowbuttons[g].className = "VWsec_button"
        secondwindowbuttons[g].id = `secbutton|${g}`
        secondwindowbuttons[g].style.display = 'inline-block';
        VWsec_window.appendChild(secondwindowbuttons[g])
    }
    VWsec_WL.onclick = VWsecwindowC;



    

    VWsec_WL.innerHTML = "leave"

    VWsec_window.style.display = 'none';
    // VWsec_window.style.zIndex = 5;


    // VW_PS_window.id = "VW_PS_window";
    // VW_ES_WT.id = "VW_ES_WT";
    // VW_ES_WL.id = "VWsec_button";
    // mainBox.appendChild(VW_ES_window);
    // VW_ES_window.appendChild(VW_ES_WT);
    // VW_ES_window.appendChild(VW_ES_WL);
    // VW_ES_WL.onclick = VWsecwindowC;
    // villageWindow_Equipmentshop_button.onclick = VWSESwindow;
    // VW_ES_WL.innerHTML = "leave"
    // VW_ES_window.style.display = 'none';
    // VW_ES_window.style.zIndex = 5;
    // VW_ES_WT.innerHTML="EquipmentShop";
    
}

function initbackpackWindow(){
    
    backpackWindow.id = "backpackWindow";
    backpackWindow_text.id = "backpackWindow_text";
    backpackWindow_next.id = "backpackWindow_next";
    backpackWindowInventory.id = "backpackWindowInventory"
    backpackWindowInventoryItemDescription.id = "backpackWindowInventoryItemDescription"
    mainBox.appendChild(backpackWindow);
    // backpackWindow.appendChild(backpackWindow_text);
    // let BPWIA = document.getElementById('backpackWindowInventory')
    backpackWindow.appendChild(backpackWindowInventory);
    for(f = 0;f < 5;f++){
        backpackWindowInventory.innerHTML += `<div class="Invrow" id="invy|${f}"></div>`
        let staticinvrow = document.getElementById(`invy|${f}`)
        backPackDivList.push([])
        for(ff = 0;ff<5;ff++){
            backPackDivList[f][ff] = document.createElement("div");
            backPackDivList[f][ff].id = `invxy|${f}|${ff}`;
            backPackDivList[f][ff].className = "Invgrid";
            staticinvrow.appendChild(backPackDivList[f][ff])
        }
    }
                            
    // for(g = 0;g<5;g++){
    //     for(gg = 0;gg<5;gg++){
    //         let Cpic = document.getElementById(`invxy|${g}|${gg}`)
    //         // Cpic.innerHTML = '<img src="/picture/map_garss.png" alt="" class="map_picture_teast"></img>'
    //     }
    // }
    backpackWindowInventory.appendChild(backpackWindowInventoryItemDescription)
    // backpackWindowInventory.innerHTML = BPWIA
    
    // backpackWindow.appendChild(backpackWindow_next);
    backpackWindow.style.display = "none";
    backpacknow_n_m = true;
    
}