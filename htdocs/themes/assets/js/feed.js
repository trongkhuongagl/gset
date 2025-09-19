setTimeout(function () {
	var setURL = 'https://gset.co.jp/themes/assets/js/feed.php';
	var setNUM = 5;
	var setID = 'feed';
	xmlLoad(setURL, setID, setNUM);
}, 2000);
function xmlLoad(_xmlUrl,_id,_num){
	DD = new Date();HH = DD.getHours();MM = DD.getMinutes();SS = DD.getSeconds();
	var xmlUrl = _xmlUrl+"?"+HH+MM+SS;
	var main = this;
	$.ajax({
		url: xmlUrl,
		type: 'GET',
		dataType: 'xml',
		timeout: 2000,
		error: function(){
			_msg = 'error';
			xmlOpen(_msg,_id,_num);
		},
		success: function(_xml){
			main.xml = _xml;
			_msg = 'load';
			xmlOpen(_msg,_id,_num);
		}
	});
	return;
}
var xmlOpen = function(_msg,_id,_num){
	var main = this;
	var html = '';
	var ID = _id;
	var Num = _num;
	var userAgent = window.navigator.userAgent.toLowerCase();
	if(_msg == 'load'){
		xml = main.xml;
		var channelData = $(xml).find('channel')[0];
		$(channelData).find('item').each(function(i){
			if(i < Num){
				postTitle = $(this).find('title').text();//記事タイトル取得
				postLink = $(this).find('link').text();  //記事リンク取得
				publishedDate = $(this).find('pubDate').text();//日付の取得
				var pdate = new Date(publishedDate); //Dateクラス
				var pyear = pdate.getFullYear();   //年
				var pmonth = pdate.getMonth() + 1; //月
				var pday = pdate.getDate();        //日
				if (pyear < 2000) pyear += 1900; //日付を2桁表示に変更
				if (pmonth < 10) {pmonth = "0" + pmonth;}
				if (pday < 10) {pday = "0" + pday;}
				var postDate = pyear + "." + pmonth + "." + pday + " ";
				var description = $(this).find('description')[0].firstChild.nodeValue; //サムネイル画像の取得
				var thumbnails = description.match(/<img[^>]+>/gi);
				thumbnail = thumbnails[0];
				html += '<li class="swiper-slide">';
				html += '<a href="' + postLink + '" target="_blank">';
				html += '<div class="img mh">' + thumbnail + '</div>';
				html += '<div class="slider_academy_txt match_txt">';
				html += '<time class="slider_academy_day">' + postDate + '</time>';
				html += '<h3 class="slider_academy_ttl">' + postTitle + '</h3></div></a></li>';
			}
		});
	}else{
		html += '<li>RSSデータが検出できませんでした。再度更新をお願いいたします。</li>'; //エラー時の表示
	}
	$("#"+ID).html(html);
}