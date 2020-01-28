var timer;
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
scoredata.scores=[
    {
        date:'2019-2020 1',
        code:'TX870601',
        id:'TX870601.02',
        name:'大学生生涯规划与就业指导',
        type:'通识选修课程创新创业与就业指导类',
        credit:'2',
        testScore:'95',
        usualScore:'98',
        overallScore:'96',
        experimentScore:'',
        finalScore:'96',
        GPA:'4.6'
    },
    {
        date:'2019-2020 1',
        code:'TS6405010',	
        id:'S6405010.A3',
        name:'军训',
        type:'实践环节',
        credit:'2',
        testScore:'优秀',
        usualScore:'',
        overallScore:'优秀',
        experimentScore:'',
        finalScore:'优秀',
        GPA:'4'
    },
    {										
        date:'2019-2020 1',
        code:'X2403010',
        id:'X2403010.01',
        name:'C/C++程序设计',
        type:'学科基础课程',
        credit:'4',
        testScore:'93',
        usualScore:'100',
        overallScore:'95',
        experimentScore:'',
        finalScore:'95',
        GPA:'4.5'
    }
];