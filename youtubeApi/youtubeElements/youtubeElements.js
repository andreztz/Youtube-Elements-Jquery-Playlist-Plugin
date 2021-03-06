(function($){
	$.fn.youtubeElements = function(options){
		var
		defaults = {
			key: "",
			playlistId: "",
			playerWidth: "640",
			playerHeight: "360",
			playerSkin: "youtube",
			defaultPath: "youtubeElements",
			autoPlay: false
		},
		settings = $.extend({}, defaults, options);
		var targetVideo = $(this);

		/* creating src tag for mediaPlayer */
		var jQueryElement=document.createElement('script');
		jQueryElement.type = 'text/javascript';
		jQueryElement.src = settings.defaultPath +'/playerSkins/mediaelement-and-player.js';
		document.getElementsByTagName('head')[0].appendChild(jQueryElement);
		$("head").prepend("<link rel='stylesheet' type='text/css' href='"+settings.defaultPath+"/playerSkins/mediaelementplayer.css' />");
		$("head").append("<link rel='stylesheet' type='text/css' href='"+settings.defaultPath+"/playerSkins/mejs-skins.css' />");
		if(settings.playlistId.length != 0)
		{	// TODO (verificar a funcionalidade da variavel playListURL)
			//var playListURL = 'http://gdata.youtube.com/feeds/api/playlists/'+settings.playlistId+'?v=2&alt=json&callback=?';
			var videoURL= 'http://www.youtube.com/watch?v=';
			var embedUrlStrap = 'http://www.youtube.com/embed/';
			var templateShare = '<div id="thetutlage_slide_share_options"><div id="thetutlage_slide_share_header">' +
						'<div id="thetutlage_slide_share_title">Share' +
						'</div><!-- end thetutlage_slide_share_title -->' +
						'<div id="thetutlage_slide_share_content">' +
							'<div id="thetutlage_slide_share_facebook" class="thetutlage_slide_share_item">' +
								'<a href="http://www.facebook.com/sharer.php?u=' + $(location).attr('href') + '" target="_blank"><span>Share on facebook </span></a>' +
							'</div><!-- end thetutlage_slide_share_item -->' +
							'<div id="thetutlage_slide_share_twitter" class="thetutlage_slide_share_item">' +
								'<a href="http://twitter.com/share?text=' + document.title +'&url='+ $(location).attr('href') +'" target="_blank"><span> Share on twitter </span></a>' +
							'</div><!-- end thetutlage_slide_share_item -->' +
							'<div id="thetutlage_slide_share_google" class="thetutlage_slide_share_item">' +
								'<a href="https://plus.google.com/share?url=' + $(location).attr('href') +'" target="_blank"><span> Share on Google+ </span></a>' +
							'</div><!-- end thetutlage_slide_share_item -->' +
							'<div id="thetutlage_slide_share_linkedin" class="thetutlage_slide_share_item">' +
								'<a href="http://www.linkedin.com/shareArticle?mini=true&url=' + $(location).attr('href') + '&title=' + document.title +'&source=' + $(location).attr('href') +'" target="_blank"><span> Share on Linkedin </span></a>' +
							'</div><!-- end thetutlage_slide_share_item -->' +
							'<div id="thetutlage_slide_share_email" class="thetutlage_slide_share_item">' +
								'<a href="mailto:?subject=' + document.title +'&body= ' + $(location).attr('href') +'" target="_blank"><span> Share via Email </span></a>' +
							'</div><!-- end thetutlage_slide_share_item -->' +
						'</div><!-- end thetutlage_slide_share_content -->' +
					'</div><!-- end thetutlage_slide_share_header --></div>';
			var playListTemplate = '<div id="youtubeElements_wrapper" class="light">' +
			'<div id="youtubeElements_innerWrapper">' +
			'<div id="youtubeElements_playlistBar">' +
				'<div id="youtubeElements_playlistBarWrapper">' +
					'<span id="youtubeElements_playlistBarInfo">' +
						'<span class="youtubeElements_playlistButtonBar">' +
							'<a href="#" class="youtubeElements_Button has-tooltip" id="youtubeElements_prevTrack" title="Previous Video">' +
								'<span class="youtubeElements_iconWrapper">' +
									'<img src="'+settings.defaultPath+'/icons/prevTrack.png" />' +
								'</span>' +
							'</a>' +
							'<span class="youtubeElements_videoCount">' +
								'<span class="youtubeElements_videoCurrentCount"></span>' +
								'/' +
								'<span class="youtubeElements_videoTotalCount"></span>' +
							'</span>' +
							'<a href="#" class="youtubeElements_Button" id="youtubeElements_nextTrack">' +
								'<span class="youtubeElements_iconWrapper">' +
									'<img src="'+settings.defaultPath+'/icons/nextTrack.png" />' +
								'</span>' +
							'</a>' +
						'</span>' +
					'</span>' +
					'<span class="youtubeElements_playlistName">' +
						'<span class="youtubeElements_playlistButtonBar">' +
							'<a href="#" class="youtubeElements_Button" id="playlistNameUnqiue">' +
							'</a>' +
						'</span>' +
					'</span>' +
					'<span class="youtubeElements_togglePlayList">' +
						'<span class="youtubeElements_elementButtonBar">' +
							'<a href="#" class="youtubeElements_Button togglePlaylistChild shrink">' +
							'</a>' +
						'</span>' +
					'</span>' +
					'<span class="youtubeElements_share">' +
						'<span class="youtubeElements_elementButtonBar">' +
							'<a href="#" class="youtubeElements_shareButton">' +
								'<img src="'+settings.defaultPath+'/icons/share.png" />' +
							'</a>' +
						'</span>' +
					'</span>' +
				'</div><!-- end playlistBar wrapper -->' +
			'</div><!-- end playlistBar -->' +
			'<div id="youtubeElements_playlistScroller">' +
				'<div id="youtubeElements_playlistTray">' +
					'<a href="#" id="youtubeElements_videoPrev">' +
					'<img src="'+settings.defaultPath+'/icons/prev.png" />' +
					'</a>' +
					'<a href="#" id="youtubeElements_videoNext">' +
						'<img src="'+settings.defaultPath+'/icons/next.png" />' +
					'</a>' +
					'<div id="youtubeElements_playlistVideos">' +
						'<div id="youtubeElements_playlistFloats">' +
							'<ol>' +
							'</ol>' +
						'</div><!-- end playlistFloats -->' +
					'</div><!-- end playlistVideos -->' +
				'</div><!-- end playListTray -->' +
			'</div><!-- end youtubeElements_playlistScroller -->' +
		'</div><!-- end inner_wrapper -->' +
	'</div><!-- end wrapper -->';

	$('body').append(playListTemplate);
		// Pega titulo playlist
		$.get(
			"https://www.googleapis.com/youtube/v3/playlists", {
				part: 'snippet',
				id: settings.playlistId,
				key: settings.key,
				}, function (data) {
					$.each(data.items, function(i, item) {
						console.log(item);
						console.log('titulo >> ' + item.snippet.title);
						settings.playlistTitle = item.snippet.title;
						});
					}
				);
		// Pega videos da playlist
		var x = 1;
		$.get(
			"https://www.googleapis.com/youtube/v3/playlistItems", {
				part: 'snippet',
				maxResults: 50,
				key: settings.key,
				playlistId: settings.playlistId,
				}, function (data) {

				var playlistTitle = settings.playlistTitle;

				$.each(data.items, function(i, item) {
					console.log(item);
					var feedTitle = item.snippet.title;
					// var feedURL = item.link[1].href;
					// var fragments = feedURL.split("/");
					var videoID = item.snippet.resourceId.videoId;;
					var url = videoURL + videoID;
					var embedUrl = embedUrlStrap + videoID;

					if (settings.playerSkin == 'youtube') {
						$('#youtubeElements_playlistFloats ol').append('<li><a href="#"><span class="youtubeElements_videoThumb"><img width="106" data-thumb="//i4.ytimg.com/vi/'+ videoID +'/default.jpg" data-thumb-manual="true" alt="Php :- Import CSV data to mysql database" src="//i4.ytimg.com/vi/wfahu3ggy8c/default.jpg"></span><span class="youtubeElements_videoCount">'+ x + '</span><span class="youtubeElements_currentItem">Now Playing</span><span class="youtubeElements_videoDescription">'+ feedTitle +'</span></a><input type="hidden" value="'+ embedUrl + '" id="videoSrcReference"></li>');
					}
					else {
						$('#youtubeElements_playlistFloats ol').append('<li><a href="#"><span class="youtubeElements_videoThumb"><img width="106" data-thumb="//i4.ytimg.com/vi/'+ videoID +'/default.jpg" data-thumb-manual="true" alt="Php :- Import CSV data to mysql database" src="//i4.ytimg.com/vi/wfahu3ggy8c/default.jpg"></span><span class="youtubeElements_videoCount">'+ x + '</span><span class="youtubeElements_currentItem">Now Playing</span><span class="youtubeElements_videoDescription">'+ feedTitle +'</span></a><input type="hidden" value="'+ url + '" id="videoSrcReference"></li>');
					}
					x++;
				});
				$('.youtubeElements_videoTotalCount').html(x - 1);
				$('#playlistNameUnqiue').html(playlistTitle);
				$('.youtubeElements_share').append(templateShare);
				// autoPlaying First Video
				if (settings.autoPlay == true) {
					$('.youtubeElements_videoCurrentCount').html(1);
					var urlAfterAction = $('#youtubeElements_playlistFloats li').first().find('#videoSrcReference').val();
					$('#youtubeElements_playlistFloats li a').css("opacity","0.4");
					$('#youtubeElements_playlistFloats li .youtubeElements_currentItem').css("opacity","0");
					$('#youtubeElements_playlistFloats li').first().find('.youtubeElements_currentItem').css("opacity","1");
					$('#youtubeElements_playlistFloats li').first().find('a').css("opacity","1");
					$('#youtubeElements_playlistFloats li').removeClass('activePlayingMedia');
					$('#youtubeElements_playlistFloats li').first().addClass('activePlayingMedia');
					if (settings.playerSkin == 'youtube')	{
						$(targetVideo).html('<iframe width="'+settings.playerWidth+'" height="'+settings.playerHeight+'" src="'+urlAfterAction+'" frameborder="0" allowfullscreen></iframe>');
					}
					else {
						$(targetVideo).html('<video width="'+settings.playerWidth+'" height="'+settings.playerHeight+'" id="youtubeElements_PlayerApiCallback"><source type="video/youtube" src="'+ urlAfterAction + '" /></video>');
						$('#youtubeElements_PlayerApiCallback').mediaelementplayer();
					}
				}
				else {
					$('.youtubeElements_videoCurrentCount').html(0);
				}
		});
	}
	else {
		alert('Pass in your playlist id');
	}

	$('#youtubeElements_videoNext').live("click",function(){
		var lastItem = $('#youtubeElements_playlistFloats').find('li').last().offset().left;
		var lastItemWidth = $('#youtubeElements_playlistFloats').find('li').last().width();
		var lastItemDifference = parseInt(lastItem) + parseInt(lastItemWidth);
		var lastElement = $('#youtubeElements_videoNext').offset().left;
		if (lastItemDifference >= lastElement){
			var parentLeft = $('#youtubeElements_playlistFloats').css("left");
			var childWidth = $('#youtubeElements_playlistFloats').find('li').width();
			moveToLeft = parseInt(parentLeft) - parseInt(childWidth);
			$('#youtubeElements_playlistFloats').animate({
				left:moveToLeft
			});
		}
		return false;
	});

	$('#youtubeElements_videoPrev').live("click",function() {
		var lastItem = $('#youtubeElements_playlistFloats').find('li').first().offset().left;
		var lastItemWidth = $('#youtubeElements_playlistFloats').find('li').first().width();
		var lastItemDifference = parseInt(lastItem) - 10;
		var lastElement = $('#youtubeElements_videoPrev').offset().left;
		var safeLeft = parseInt(lastItemWidth) + parseInt(lastItemDifference);
		if (safeLeft >= 28) {
			$('#youtubeElements_playlistFloats').animate({
				left: 0
			});
		}
		else if (lastItemDifference <= lastElement) {
			var parentLeft = $('#youtubeElements_playlistFloats').css("left");
			var childWidth = $('#youtubeElements_playlistFloats').find('li').width();
			moveToLeft = parseInt(parentLeft) + parseInt(childWidth);
			$('#youtubeElements_playlistFloats').animate({
				left:moveToLeft
			});
		}
		return false;
	});

	$('#youtubeElements_playlistFloats li').live("click",function(){
		var urlAfterAction = $(this).find('#videoSrcReference').val();
		$('#youtubeElements_playlistFloats li a').css("opacity","0.4");
		$('#youtubeElements_playlistFloats li .youtubeElements_currentItem').css("opacity","0");
		$(this).find('.youtubeElements_currentItem').css("opacity","1");
		$(this).find('a').css("opacity","1");
		$('#youtubeElements_playlistFloats li').removeClass('activePlayingMedia');
		$(this).addClass('activePlayingMedia');
		$('.youtubeElements_videoCurrentCount').html($(this).find('.youtubeElements_videoCount').html());
		if (settings.playerSkin == 'youtube') {
			$(targetVideo).html('<iframe width="'+settings.playerWidth+'" height="'+settings.playerHeight+'" src="'+urlAfterAction+'" frameborder="0" allowfullscreen></iframe>');
		}
		else {
			$(targetVideo).html('<video width="'+settings.playerWidth+'" height="'+settings.playerHeight+'" id="youtubeElements_PlayerApiCallback"><source type="video/youtube" src="'+ urlAfterAction + '" /></video>');
			$('#youtubeElements_PlayerApiCallback').mediaelementplayer();
		}
		if ($(window).scrollTop() > $(targetVideo).offset().top) {
			var midHeight = settings.playerHeight / 4;
			var targetTop = parseInt($(targetVideo).offset().top) - parseInt(midHeight);
			$(window).scrollTop(targetTop);
		}
		return false;
	});

	$('#youtubeElements_nextTrack').live("click",function(){
		if(parseInt($('.youtubeElements_videoCurrentCount').html()) < parseInt($('.youtubeElements_videoTotalCount').html()))
		{
			if($('#youtubeElements_playlistFloats li').hasClass('activePlayingMedia')){
				$('#youtubeElements_playlistFloats li.activePlayingMedia').removeClass('activePlayingMedia').find('a').css("opacity","0.4").find('.youtubeElements_currentItem').css("opacity","0").closest('li').next('li').addClass('activePlayingMedia').find('a').css("opacity","1").find('.youtubeElements_currentItem').css("opacity","1");
				$('.youtubeElements_videoCurrentCount').html(parseInt($('.youtubeElements_videoCurrentCount').html()) + 1);
				var urlAfterAction = $('#youtubeElements_playlistFloats li.activePlayingMedia').find('#videoSrcReference').val();
				var currentPlayingVideoTrackPos = $('#youtubeElements_playlistFloats li.activePlayingMedia').offset().left;
				var lastElementPos = $('#youtubeElements_playlistFloats').offset().left;
				var currentPlayingVideoTrackWidth = $('#youtubeElements_playlistFloats li.activePlayingMedia').width();
				if(currentPlayingVideoTrackPos >= lastElementPos)
				{
					var lastItem = $('#youtubeElements_playlistFloats').find('li').last().offset().left;
					var lastItemWidth = $('#youtubeElements_playlistFloats').find('li').last().width();
					var lastItemDifference = parseInt(lastItem) + parseInt(lastItemWidth);
					var lastElement = $('#youtubeElements_videoNext').offset().left;
					if(lastItemDifference >= lastElement)
					{
						var moveToLeft = parseInt(currentPlayingVideoTrackPos) - parseInt(lastElementPos);
						var moveToLeft = parseInt(moveToLeft);
						$('#youtubeElements_playlistFloats').animate({
							left: -moveToLeft
						});
					}
				}
				if(settings.playerSkin == 'youtube')
				{
					$(targetVideo).html('<iframe width="'+settings.playerWidth+'" height="'+settings.playerHeight+'" src="'+urlAfterAction+'" frameborder="0" allowfullscreen></iframe>');
				}
				else
				{
					$(targetVideo).html('<video width="'+settings.playerWidth+'" height="'+settings.playerHeight+'" id="youtubeElements_PlayerApiCallback"><source type="video/youtube" src="'+ urlAfterAction + '" /></video>');
					$('#youtubeElements_PlayerApiCallback').mediaelementplayer();
				}
			}
		}
		if($(window).scrollTop() > $(targetVideo).offset().top)
		{
			var midHeight = settings.playerHeight / 4;
			var targetTop = parseInt($(targetVideo).offset().top) - parseInt(midHeight);
			$(window).scrollTop(targetTop);
		}
		return false;
	});

	$('#youtubeElements_prevTrack').live("click",function(){
		if(parseInt($('.youtubeElements_videoCurrentCount').html()) >= 2)
		{
			if($('#youtubeElements_playlistFloats li').hasClass('activePlayingMedia')){
				$('#youtubeElements_playlistFloats li.activePlayingMedia').removeClass('activePlayingMedia').find('a').css("opacity","0.4").find('.youtubeElements_currentItem').css("opacity","0").closest('li').prev('li').addClass('activePlayingMedia').find('a').css("opacity","1").find('.youtubeElements_currentItem').css("opacity","1");
				$('.youtubeElements_videoCurrentCount').html(parseInt($('.youtubeElements_videoCurrentCount').html()) - 1);
				var urlAfterAction = $('#youtubeElements_playlistFloats li.activePlayingMedia').find('#videoSrcReference').val();
				var currentPlayingVideoTrackPos = $('#youtubeElements_playlistFloats li.activePlayingMedia').offset().left;
				var lastElementPos = $('#youtubeElements_playlistFloats').offset().left;
				var currentPlayingVideoTrackWidth = $('#youtubeElements_playlistFloats li.activePlayingMedia').width();
				if(currentPlayingVideoTrackPos >= lastElementPos)
				{
					var moveToLeft = parseInt(currentPlayingVideoTrackPos) - parseInt(lastElementPos);
					var moveToLeft = parseInt(moveToLeft);
					$('#youtubeElements_playlistFloats').animate({
						left: -moveToLeft
					});
				}
				if(settings.playerSkin == 'youtube')
				{
					$(targetVideo).html('<iframe width="'+settings.playerWidth+'" height="'+settings.playerHeight+'" src="'+urlAfterAction+'" frameborder="0" allowfullscreen></iframe>');
				}
				else
				{
					$(targetVideo).html('<video width="'+settings.playerWidth+'" height="'+settings.playerHeight+'" id="youtubeElements_PlayerApiCallback"><source type="video/youtube" src="'+ urlAfterAction + '" /></video>');
					$('#youtubeElements_PlayerApiCallback').mediaelementplayer();
				}
			}
		}
		if($(window).scrollTop() > $(targetVideo).offset().top)
		{
			var midHeight = settings.playerHeight / 4;
			var targetTop = parseInt($(targetVideo).offset().top) - parseInt(midHeight);
			$(window).scrollTop(targetTop);
		}
		return false;
	});
	$('.youtubeElements_shareButton').live("click",function(){
		$('#thetutlage_slide_share_options').toggle();
		return false;
	});
	$('.togglePlaylistChild').live("click",function(){
		if($(this).hasClass('expand'))
		{
			$(this).removeClass('expand').addClass('shrink');
			$('#youtubeElements_wrapper').animate({
				bottom:"0px"
			});
		}
		else
		{
			$(this).removeClass('shrink').addClass('expand');
			$('#youtubeElements_wrapper').animate({
				bottom:"-85px"
			});
		}
		return false;
	});
	$('#playlistNameUnqiue').live("click",function(){
		return false;
	});
}
})(jQuery);
