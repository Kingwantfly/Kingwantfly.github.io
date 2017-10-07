// 课表日期逻辑
$(document).ready(function(){

	var show_day=new Array('星期一<p id="courselist-today">10:40~12:10 流体力学专选 陈睿 @08-602<br>19:00~21:20 流体力学专选 陈睿 @25-708</p>',
							'星期二<p id="courselist-today">10:40~12:10 机械制图  专选 曹严元 @09-507<br> 14:30~16:00 建筑材料  专选 王峻 @25-913<br> 16:10~17:40 建筑材料  专选 王峻 @08-306</p>',
							'星期三<p id="courselist-today">8:00~9:30 岩土工程施工  专必 程静 @25-708<br>9:40~12:10 金属工艺学  专必 何国斌 @26-304<br> 14:30~16:00 岩石力学专选 刘红俊 @25-704</p>',
							'星期四<p id="courselist-today">10:40~12:10 液压传动  专选 任柯 @09-407<br> 14:30~16:50 金属工艺学  专选 陈坚 @09-404<br> 19:00~20:30  机械制图  专选 曹严元 @25-607</p>',
							'星期五<p id="courselist-today">8:00~10:20 岩土工程施工  专必 程静 @08-608<br>10:40~12:10 岩石力学 专选 刘红俊@08-608</p>',
							'星期六<p id="courselist-today">19:00~20:30  液压传动  专选 任柯 @25-607</p>',
							'星期日<p id="courselist-today">今日无课</p>');
    var time=new Date();
    var year=time.getFullYear();
    var month=time.getMonth();
    var date=time.getDate();
    var day=time.getDay();
    var hour=time.getHours();
    var minutes=time.getMinutes();
    var second=time.getSeconds();

    var wholeTimeMs = time.getTime();
    var beginTerm = new Date("sep 7, 2017 00:00:00");
    var beginTermMs = beginTerm.getTime();
    var thisTermMs = wholeTimeMs - beginTermMs;
	var thisTermWeeksNum = parseInt(thisTermMs/604800000)+1;

		month=month+1;
    month<10?month='0'+month:month;
    hour<10?hour='0'+hour:hour;
    minutes<10?minutes='0'+minutes:minutes;
    second<10?second='0'+second:second;
    if(day==0){day=7};
    var now_time= year+'年'+month+'月'+date+'日'+' '+show_day[day-1];

    $('#courselist-today').html("今天是"+now_time);
    $('#thisWeeksNum').append('(第'+thisTermWeeksNum+'周)');
    $('#thisWeeksNumTips').append('第'+thisTermWeeksNum+'周');
    $('.table-homework').find('tr').eq(thisTermWeeksNum).find('td').eq(0).css({'background-color': '#2C3E50','color': '#FFFFFF'});
})
$('.index-homework').find('p').append(
	"工程测量：练习使用仪器"+"<br>"+
	"岩土工程设计：岩石和土的应力变化"+"<br>"+
	"材料力学：考试"+"<br>"+
	"工程技术经济：作业题"+"<br>"+
	"理论力学:讲解第五章第六章或者书上的对应习题"+"<br>"+
	"测量学B:参照教学方案"
);

// 标签页逻辑
$('#myTab a:first').click(function (e) {
	$('.btn-danger').html('注册');
	$('.btn-danger').removeClass('login');
	$('.btn-danger').addClass('register');
})
$('#myTab a:last').click(function (e) {
  $('.btn-danger').html('登录');
	$('.btn-danger').removeClass('register');
	$('.btn-danger').addClass('login');
})
$('.register').click(function(){
	alert($(this).html()+'成功！');
	$('#myTab a:last').click();
})
$('.login').click(function(){
	alert($(this).html()+'成功！');
})

// 帮助页面标签页逻辑
$('#helpId a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
