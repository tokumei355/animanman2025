const category1 = "その他漫画";
const category2 = "アニメ";
const category3 = "その他ゲーム・ソシャゲ";
const category4 = "その他ジャンル(二次元以外)";
const category6 = "作品別";
const category7 = "その他話題";
const category8 = "ウマ娘・競馬";
const category9 = "型月(Fate・FGO・月姫など)";
const category10 = "ポケモン";
const category11 = "ジャンプ漫画(集英社系)";
const category12 = "小説(ラノベ・web小説など)";
const category13 = "アイドルマスター";
const category14 = "鬼滅の刃";
const category15 = "呪術廻戦";
const category16 = "ワンピース";
const category17 = "ワールドトリガー";
const category18 = "進撃の巨人";
const category19 = "ヒロアカ";
const category20 = "安価系";
const category21 = "実況";
const category22 = "特撮ヒーロー";
const category23 = "創作全般(絵・小説・ゲ制など)";
const category24 = "VTuber・2.5次元";
const category25 = "カードゲーム(TCG・DCG)";
const category26 = "NARUTO・BORUTO";
const category27 = "TOUGH(タフ)";
const category28 = "チャンピオン漫画(秋田書店系)";
const category29 = "";

$(function() {

	let href =location.href;
	let getTitle = $('title').html();

	let snsUrl = encodeURIComponent(href);
	let snsTitle = encodeURIComponent(getTitle);

	$('div.btn').on("click",function(){
		$(this).css({'background-color':'var(--amm3)'});
		$(this).children('i').css({'color':'var(--amm2)'});
		let btn_a = $(this).attr('id');
		let btn_b = btn_a;
		switch (btn_b){
    			case 'tws_btn':
    			$(this).attr('href','http://twitter.com/share?text='+ snsTitle + '&url='+ snsUrl);
    			break;
  		}
	});
});
