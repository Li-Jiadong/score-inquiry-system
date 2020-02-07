var timer;
var datajson;
function showdata(item){
    //document.getElementById('').style.backgroundImage=
    var list=item.nextElementSibling;
    //alert(list.style.display);
    if(list.style.height=='0px'){
        clearInterval(timer);
        timer=setInterval(function(){listmove(list,30,260);},7);
        item.style.backgroundImage='url(./image/down.png)';
    }else{
        clearInterval(timer);
        timer=setInterval(function(){listmove(list,-30,0);},7);
        item.style.backgroundImage='url(./image/back.png)';
    }
}
function listmove(item,step,end){
    item.style.height=(item.offsetHeight+step)+'px';
    if(Math.abs(item.offsetHeight-end)<Math.abs(step)){
        clearInterval(timer);
        if(end==0)
        item.style.height='0px';
        else
            item.style.height='auto';
    }
}
//--------------------------------------------
var xmlhttp=new XMLHttpRequest();
if(window.XMLHttpRequest){
    xmlhttp=new XMLHttpRequest();
}else{
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange=function(){
    if(xmlhttp.readyState==4&&xmlhttp.status==200){
        datajson=JSON.parse(xmlhttp.responseText);
        // alert(datajson.year[0].term[0].scores[0].name);
        // document.getElementById('test').innerHTML=xmlhttp.responseText;
        scoredata.scores=datajson.year[0].term[0].scores;
    }
}
xmlhttp.open("GET",'https://www.easy-mock.com/mock/5e33f0970840101ffbc0a94b/scores/',true);
//xmlhttp.open("GET",'http://localhost:8888/serverTest/cstext.json',true);
xmlhttp.send();

function changeYears(v){
    if(v==-1) {
        //document.getElementById('term').style.display='none';
        inputs.terms='-1';
        inputs.disabledterm=true;
        scoredata.scores=datajson.year[0].term[0].scores;
        for(var i=1;i<7;++i){
            for(var j=1;j<2;++j){
                scoredata.scores=scoredata.scores.concat(datajson.year[i].term[j].scores);
            }
        }
    }else{
        //document.getElementById('term').style.display='block';
        inputs.terms='0';
        inputs.disabledterm=false;
        scoredata.scores=datajson.year[Number(v)].term[Number(inputs.terms)].scores;
    }
}
function changeTerms(v){
    if(v==-1) {
        if(!inputs.disabledterm){
            scoredata.scores=datajson.year[Number(inputs.years)].term[0].scores;
            scoredata.scores=scoredata.scores.concat(datajson.year[Number(inputs.years)].term[1].scores);
        }
        
    }
    else
    scoredata.scores=datajson.year[Number(inputs.years)].term[Number(v)].scores;
}

function resetli(){
    var lilist=document.getElementById('scoredata').getElementsByTagName("li");
    for(var i=1;i<lilist.length;++i){
        lilist[i].getElementsByTagName("div")[1].style.height='0px';
        lilist[i].getElementsByTagName("div")[1].style.backgroundImage='url(./image/back.png)';
    }
}
function getjson(){
    try {
        //xmlhttp.open("GET",'http://localhost:8888/serverTest/cstext.json',false);
        xmlhttp.open("GET",'https://www.easy-mock.com/mock/5e33f0970840101ffbc0a94b/scores/',false);
        xmlhttp.send();
        vant.Toast('刷新成功');
    } catch (error) {
        vant.Toast('刷新失败');
    }
    
}