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
xmlhttp.send();

function changeYears(v){
    if(v==-1) {
        document.getElementById('term').style.display='none';
        scoredata.scores=datajson.year[0].term[0].scores;
        for(var i=1;i<7;++i){
            for(var j=1;j<2;++j){
                scoredata.scores=scoredata.scores.concat(datajson.year[i].term[j].scores);
            }
        }
    }else{
        document.getElementById('term').style.display='block';
        scoredata.scores=datajson.year[Number(v)].term[Number(inputs.terms)].scores;
    }
}
function changeTerms(v){
    scoredata.scores=datajson.year[Number(inputs.years)].term[Number(v)].scores;
}