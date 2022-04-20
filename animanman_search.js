const google_url = 'https://www.google.com/search?q=';
const s_abbs_url = 'site:bbs.animanch.com/board/';
const enc_s_abbs_url = encodeURIComponent(s_abbs_url);

$(function() {

	let href =location.href;
	let getTitle = $('title').html();

	let snsUrl = encodeURIComponent(href);
	let snsTitle = encodeURIComponent(getTitle);

	$('div.btn').each(function(){
		let btn_a = $(this).attr('id');
		let btn_b = btn_a;
		switch (btn_b){
    			case 'tws_btn':
    			$(this).wrap($('<a>').attr({href:'http://twitter.com/share?text='+ snsTitle + '&url='+ snsUrl,target:'_blank'}));
    			break;

			case 'cps_btn':
			$(this).on("click",function(){
				navigator.clipboard.writeText(getTitle + " " + href);
			});
			break;
  		}

	}).on("click",function(){
		$(this).css({'background-color':'var(--amm3)'});
		$(this).children('i').css({'color':'var(--amm2)'});
	});

	$('main button').on("click",function(){
		let s_query = $('input#q').val();
		let enc_s_query = encodeURIComponent(s_query);
		let category_select = $('select#s_category option:selected').val();
		let category_select_txt = $('select#s_category option:selected').text();
		
		if (category_select.indexOf('category') > -1){
			let enc_category = encodeURIComponent('"'+ category_select_txt +'"');
			window.open(google_url + enc_s_abbs_url + "+" + enc_s_query + "+" + enc_category, '_blank');
			alert("『" + s_query + "』 (カテゴリ『" + category_select_txt + "』) で検索しました");
		}else{
			window.open(google_url + enc_s_abbs_url + "+" + enc_s_query, '_blank');
			alert("『" + s_query + "』で検索しました");
		}
	});

});
