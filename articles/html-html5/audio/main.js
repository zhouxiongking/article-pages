$(function()
{
	//加载歌曲列表
	songList();
	
	//audio播放器对象
	var audio = document.getElementById("myAudio");
	//将单曲循环设为false
	audio.loop = false;
	//循环列表播放
	audio.addEventListener("ended", function()
	{
		//自动播放下一首
		doPreOrNext("next");
	}, false);
	
	/*-------默认显示第一首歌的歌词-------*/
	synLrc(0);
	
	//按空格键实现播放、暂停
	$(document).keyup(function(e)
	{
		var key = e.which;
		if(key == 32)
		{
			playOrPause();
		}
	})
	
	//点击按钮，实现播放、暂停
	$(".play").click(function()
	{
		playOrPause();
	})
	
	//自动播放第一首歌
	changeMusic(0);
	
	//切换播放模式
	changeMod();
	
	//播放和暂停歌曲
	function playOrPause()
	{
		getTotalTime();
		var play_a = $(".play a");
		if(play_a.attr("class") == "play-a")
		{
			//改变按钮的样式
			play_a.removeClass("play-a").addClass("stop-a");
			$(".play").attr("title", "播放[空格键]");
			//暂停
			audio.pause();
			clearInterval(interval);
		}
		else
		{
			//改变按钮的样式
			play_a.removeClass("stop-a").addClass("play-a");
			$(".play").attr("title", "暂停[空格键]");
			//播放
			audio.play();
			//定时器自动获取当前播放时间
			interval = setInterval(doPlay, 1000);
		}
	}
	
	//双击播放歌曲
	$(".ui-reelList-row").each(function(index)
	{
		$(this).dblclick(function()
		{
			changeMusic(index);
			synLrc(index);
			scrollToTop();
			//隐藏歌手div
			$(".artist-status").hide();
			$(".view-expand").hide();
		})
	})
	
	//上一首
	$(".prev a").click(function()
	{
		doPreOrNext("prev");
	})
	
	//下一首
	$(".next a").click(function()
	{
		doPreOrNext("next");
	})
	
	//快进、快退
	/**
	$("#progressSlider").click(function(e)
	{
		if(!e)
		{
			e = window.event;
		}
		//更新到指定的时间
		var percent = e.offsetX / $(this).width();
		audio.currentTime = audio.duration * percent;
		//更新进度栏
		$(".ui-slider-range-schedule").css("width", percent * 100 + "%");
		$(".ui-schedule").css("left", percent * 100 + "%");
	})
	*/
	
	//静音
	var curVolume;
	var lastVolume = 1;
	$(".mute").click(function()
	{
		if($(this).attr("class").indexOf("muted") > 0)
		{
			curVolume = lastVolume;
			$(this).removeClass("muted");
		}
		else
		{
			$(this).addClass("muted");
			curVolume = 0;
		}
		//改变播放器声音与进度条显示
		changeVolume(curVolume);
	})
	
	//改变音量
	$(".vol-slider-wrapper").click(function(e)
	{
		if(!e)
		{
			e = window.event;
		}
		var percent = e.offsetX / $(this).width();
		lastVolume = percent;
		changeVolume(percent);
	})
	
	//根据传入的参数，改变播放器的声音与进度条显示
	function changeVolume(curVolume)
	{
		audio.volume = curVolume;
		//改变声音进度条
		$(".ui-slider-range-volume").css("width", curVolume * 100 + "%");
		$(".ui-volume").css("left", curVolume * 100 +  "%");
	}
	
	//播放下一首
	function doPreOrNext(type)
	{
		//先判断播放模式，分随机播放，单曲循环，列表循环
		var speIndex;
		$(".right-panel .playmod li a").each(function(index)
		{
			if($(this).attr("class").indexOf("currentMod") > 0)
			{
				//判断是歌曲列表的播放模式还是按照歌手播放模式
				var playType = $("#singerOrList").val();
				if("list" == playType)
				{
					if(index == 0)
					{
						//随机播放
						speIndex = Math.floor(Math.random() * 21);
					}
					else if(index == 1)
					{
						//单曲循环
						speIndex = parseInt($("#curIndex").val());
					}
					else
					{
						//列表循环
						var curIndex = parseInt($("#curIndex").val());
						var total = $(".ui-reelList-row").size() - 1;
						if(type == "next")
						{
							speIndex = curIndex == total ? 0 : curIndex + 1;
						}
						else
						{
							speIndex = curIndex == 0 ? total : curIndex - 1;
						}
					}
				}
				else
				{
					//进入按照歌手播放的模式
					var currIndex = parseInt($("#curIndex").val());
					if(currIndex < 5)
					{
						//陈奕迅的歌，5首
						if(index == 0)
						{
							//随机播放
							speIndex = Math.floor(Math.random() * 4);
						}
						else if(index == 1)
						{
							//单曲循环
							speIndex = parseInt($("#curIndex").val());
						}
						else
						{
							//列表循环
							var curIndex = parseInt($("#curIndex").val());
							var total = 4;
							if(type == "next")
							{
								speIndex = curIndex == total ? 0 : curIndex + 1;
							}
							else
							{
								speIndex = curIndex == 0 ? total : curIndex - 1;
							}
						}
					}
					else
					{
						speIndex = parseInt($("#curIndex").val());
					}
				}
			}
		})
		
		//改变歌曲
		changeMusic(speIndex);
		//改变成对应的歌词
		synLrc(speIndex);
		//让显示歌词的div滚动条滚动到最顶端
		scrollToTop();
	}
	
	/**-------跟歌手有关的操作--------***/
	//鼠标划过div，显示出一个播放的图表，单击会显示出相应的歌曲列表
	var lastIndex;
	$(".page-local-artist .items-container .view-grid-canvas .view-item").each(function(index)
	{
		$(this).hover(function()
		{
			$(".artist-play", this).show();
		}, function()
		{
			$(".artist-play", this).hide();
		}).click(function()
		{
			var totalItem = $(".page-local-artist .items-container .view-grid-canvas .view-item").size() - 1;
			//一行出现的div个数
			var size = rowSize();
			if(index < totalItem)
			{
				$("#singerIndex").val(index);
				//显示或者隐藏div
				if($(".view-expand").css("display") == "none")
				{
					$(".view-expand").show();
				}
				else
				{
					if(lastIndex || lastIndex == 0)
					{
						if(lastIndex == index)
						{
							$(".view-expand").hide();
						}
					}
				}
				lastIndex = index;
				//判断div应该出现的位置
				var rows = totalItem % size == 0 ? totalItem / size : parseInt(totalItem / size) + 1;
				var topParam = -195 * (rows - 1 - parseInt(index / size));
				$(".view-expand").css("top", topParam + "px");
				//改变指定当前歌手的向上的箭头的位置
				var leftParam = 60 + (index % size) * 160;
				$(".view-expand-corner").css("left", leftParam + "px");
				//div上的内容为对应的歌手的歌曲信息
				addSingerInfo(index);
				songListEvent();
			}
		})
	})
	
	/*-----显示歌手的歌曲的div，点击右上角的叉，关闭div-----*/
	$(".view-expand-close").click(function()
	{
		$(".page-local-artist .items-container .view-grid-canvas .view-expand").hide();
	})
	
	/*-------左侧选项，单击后显示相应的内容------*/
	var lastList = $(".leftbar .list:eq(0)");
	$(".leftbar .list").each(function(index)
	{
		$(this).click(function()
		{
			//隐藏或者显示
			if(index == 0)
			{
				$(".page-local-artist").hide();
				$(".tab-main").show();
				$("#singerOrList").val("list");
				$(".view-expand").hide();
			}
			else
			{
				$(".tab-main").hide();
				$(".page-local-artist").show();
				$("#singerOrList").val("singer");
			}
			//改变样式
			if(lastList)
			{
				lastList.removeClass("playing");
			}
			$(this).addClass("playing");
			lastList = $(this);
		})
	})
	
	/*------歌手头像旁边的播放按钮，点击后播放该歌手的第一首歌------*/
	var lastListSinger;
	$(".view-item .artist-cover .artist-play").each(function(index)
	{
		$(this).click(function()
		{
			if($(".view-expand").css("display") == "block")
			{
				$(".view-expand").css("display", "block");
			}
			else
			{
				$(".view-expand").css("display", "none");
			}
			
			//播放歌曲
			$("#singerIndex").val(index);
			var playIndex = index == 0 ? 0 : 4 + index;
			$("#curIndex").val(playIndex);
			
			changeMusic(playIndex);
			synLrc(playIndex);
			scrollToTop();
			
			//该歌手图片上显示播放的小图片
			if(lastListSinger)
			{
				lastListSinger.hide();
			}
			$(".artist-status").hide();
			$(".artist-status:eq(" + index + ")").show();
			lastListSinger = $(".artist-status:eq(" + index + ")");
		})
	})
})
	
/*-----判断一行可以放几张照片------*/
function rowSize()
{
	var divWidth = $(".view-grid-canvas").width();
	return parseInt(divWidth / 160);
}

/*--------点击歌手名称，下面的div相应显示对应的歌曲-------*/
function addSingerInfo(index)
{
	//获得所有歌手信息
	var list = doGetList();
	var curObj = $(".page-local-artist .items-container .view-grid-canvas .view-item:eq(" + index + ")");
	//歌手名称
	var singerName = $(".artist-name a span:eq(0)", curObj).text();
	$(".artist-name-b").text(singerName);
	//歌曲信息
	var ulList = $(".songlist-wrap .songlist");
	ulList.empty();
	var content = [];
	for(var i = 0; i < list.length; i++)
	{
		if(singerName == list[i].singer)
		{
			content.push("<li><div class='left-cells'><div class='cell1'>");
			content.push("<span>" + list[i].songname + "</span></div>");
			content.push("<div class='cell2'><span>《" + list[i].special + "》</span></div>");
			content.push("</div></li>");
		}
	}
	ulList.append(content.join(""));
}

//鼠标划过某个歌手的歌曲列表，div改变样式
function songListEvent()
{
	$(".songlist-wrap .songlist li").each(function(index)
	{
		$(this).hover(function()
		{
			$(this).addClass("playing");
		}, function()
		{
			$(this).removeClass("playing");
		}).dblclick(function()
		{
			$(".artist-status").hide();
			var name = $(".artist-name-b").text();
			$(".page-local-artist .items-container .view-grid-canvas .view-item .artist-cover").each(function()
			{
				if(name == $(".artist-name a span:eq(0)", this).text())
				{
					$(".artist-status", this).show();
				}
			})
			//改变当前歌曲的索引
			var singerIndex = parseInt($("#singerIndex").val());
			var fiIndex = singerIndex == 0 ? index : 4 + singerIndex;
			$("#curIndex").val(fiIndex);
			changeMusic(fiIndex);
			synLrc(fiIndex);
			scrollToTop();
		})
	})
}

function scrollDiv(count, j, clientHeight)
{
	count++;
	if(count == 1)
	{
	    //当播放当前歌词的li到达容器的一半位置时，ul往上移动，让当前歌词的li始终处于中间位置
	 	var speLi = $(".lrc-wrapper ul li:eq(" + j + ")").offset().top;
	 	if(speLi >= clientHeight / 2)
	 	{
	 	 	$(".lrc-wrapper").scrollTop($(".lrc-wrapper").scrollTop() + 31);
	 	}
	 	count = 0;
	}
	return count;
}

//切换歌曲，多出公用的方法
function changeMusic(index)
{
	var audio = document.getElementById("myAudio");
	//播放歌曲的div下面有个div，div随着不同的歌曲top属性不同
	var top = 31 * (index + 1);
	$(".similar-wrapper").css("top", top + "px");
	//其他歌曲的div的top属性会随着改变
	var curIndex = parseInt($("#curIndex").val());
	//首先改变显示的样式
	$(".ui-reelList-row").removeClass("ui-reelList-active");
	$(".ui-reelList-row:eq(" + index + ")").addClass("ui-reelList-active");
	//重新计算各个div的top属性
	$(".ui-reelList-row").each(function(i)
	{
		var dTop;
		if(i <= index)
		{
			dTop = 31 * i;
		}
		else
		{
			dTop = 31 * (i + 1);
		}
		$(this).css("top", dTop + "px");
	})
	
	//显示不同的歌曲名和歌手名称
	var songname = $(".ui-reelList-cell .ui-reelList-songname .songname-txt", ".ui-reelList-row:eq(" + index + ")").text();
	var artist = $(".ui-reelList-cell a .artist-name", ".ui-reelList-row:eq(" + index + ")").text();
	$(".mb-layout-ft .panel .panel-inner .main-panel .title-wrapper .title-inner .title .songname").text(songname);
	$(".mb-layout-ft .panel .panel-inner .main-panel .title-wrapper .title-inner .title .artist").text(artist);
	//改变当前歌曲的索引数
	$("#curIndex").val(index);
	//切换歌曲
	audio.src = "music/music-0000" + (index + 1) + ".mp3";
	audio.autoplay = "autoplay";
	//将播放按钮显示为播放状态
	$(".play a").removeClass("stop-a").addClass("play-a");
	interval = setInterval(doPlay, 1000);
}

//播放时，时间和进度栏的变化
function doPlay()
{
	/*------时间的变化------*/
	var audio = document.getElementById("myAudio");
	var curTime = parseInt(audio.currentTime);
	var minute = parseInt(curTime / 60);
	var second = curTime % 60;
	var ttime = (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second);
	$(".curTime").text(ttime); 
	
	/*------进度栏的变化-----*/
	var totalTime = parseInt(audio.duration);
	var percent = curTime / totalTime;
	$(".ui-slider-range-schedule").css("width", percent * 100 + "%");
	$(".ui-schedule").css("left", percent * 100 + "%");
	
	//总时间
	getTotalTime();
}

//总共时间
function getTotalTime()
{
	var audio = document.getElementById("myAudio");
	$(".totalTime").text("00:00"); 
	var total = parseInt(audio.duration);
	var minute = parseInt(total / 60);
	var second = total % 60;
	var time = (minute < 10 ? "0" + minute : minute) + ":" + (second < 10 ? "0" + second : second);
	$(".totalTime").text(time); 
}

//歌曲和歌词同步
function synLrc(index)
{
	var audio = document.getElementById("myAudio");
	var musicLrc = "music-0000" + (index + 1) + ".lrc";

	/**
	 *	发送请求，从服务器端获取到歌词
	 */
	 $.ajax(
	 {
	 	 type: "POST",
		 url: "music-json/doGetMusicLrcAction.action",
		 data: 
		 {
		 	 "musicLrc": musicLrc
		 },
		 dataType: "json",
		 success: function(result)
		 {
			 var text = result.songText;
			 var lyric = parseLyric(text);
			 //将歌词显示在页面上
			 showLyric(lyric);
			 var j = 0;
			 var count = 0;
			 var lastLi = $(".lrc-wrapper ul li:eq(0)");
			 audio.ontimeupdate = function(e)
			 {
			 	 //显示屏的高度
			 	 var clientHeight = document.body.clientHeight; 
			 	 //唱到那一句，改变该句歌词的样式
			 	 for(var i = 0; i < lyric.length; i++)
			 	 {
			 	 	 if(i < lyric.length - 1)
			 	 	 {
			 	 	 	 if(audio.currentTime >= lyric[i][0] && audio.currentTime < lyric[i + 1][0])
				 	 	 {
				 	 		 if(i > 0)
				 	 		 {
				 	 		     lastLi.removeClass("ui-lrc-current");
				 	 		 }
				 	 		 $(".lrc-wrapper ul li:eq(" + i + ")").addClass("ui-lrc-current");
				 	 		 lastLi = $(".lrc-wrapper ul li:eq(" + i + ")");
				 	 		 j = i;
				 	 		 count = scrollDiv(count, j, clientHeight);
				 	 	 }
			 	 	 }
			 	 	 else
			 	 	 {
			 	 	 	 if(audio.currentTime >= lyric[i][0])
				 	 	 {
				 	 		 lastLi.removeClass("ui-lrc-current");
				 	 		 $(".lrc-wrapper ul li:eq(" + i + ")").addClass("ui-lrc-current");
				 	 		 j = i;
				 	 		 count = scrollDiv(count, j, clientHeight);
				 	 	 }
			 	 	 }
			 	 }
			 }
		 }
	 })
}

/*----解析歌词----*/
function parseLyric(text)
{
	//将文本分隔成一行一行，存入数组
    var lines = text.split('\n'),
        //用于匹配时间的正则表达式，匹配的结果类似[xx:xx.xx]
        pattern = /\[\d{2}:\d{2}.\d{2}\]/g,
        //保存最终结果的数组
        result = [];
    //去掉不含时间的行
    while (!pattern.test(lines[0])) 
    {
        lines = lines.slice(1);
    };
    //上面用'\n'生成生成数组时，结果中最后一个为空元素，这里将去掉
    lines[lines.length - 1].length === 0 && lines.pop();
    lines.forEach(function(v /*数组元素值*/ , i /*元素索引*/ , a /*数组本身*/ ) 
    {
        //提取出时间[xx:xx.xx]
        var time = v.match(pattern),
            //提取歌词
            value = v.replace(pattern, '');
        //因为一行里面可能有多个时间，所以time有可能是[xx:xx.xx][xx:xx.xx][xx:xx.xx]的形式，需要进一步分隔
        time.forEach(function(v1, i1, a1) 
        {
            //去掉时间里的中括号得到xx:xx.xx
            var t = v1.slice(1, -1).split(':');
            //将结果压入最终数组
            result.push([parseInt(t[0], 10) * 60 + parseFloat(t[1]), value]);
        });
    });
    //最后将结果数组中的元素按时间大小排序，以便保存之后正常显示歌词
    result.sort(function(a, b) {
        return a[0] - b[0];
    });
    return result;
}

/*--------显示歌词--------*/
function showLyric(lyric)
{
	var lyricContainer = $(".lrc-wrapper ul");
	//先清空再添加
	lyricContainer.empty();
	var content = [];
	for(var i = 0; i < lyric.length; i++)
	{
		content.push("<li class='ui-lrc-sentence'>" + lyric[i][1] + "</li>");
	}  
	lyricContainer.append(content.join(""));
}

/*--------切换播放模式-------*/
function changeMod()
{
	var lastObj = $(".right-panel ul .list-mod a");
	$(".right-panel .playmod li a").each(function()
	{
		$(this).click(function()
		{
			lastObj.removeClass("currentMod");
			$(this).removeClass("hoverMod");
			$(this).addClass("currentMod");
			lastObj = $(this);
		}).hover(function()
		{
			if($(this).attr("class").indexOf("currentMod") < 0)
			{
				$(this).addClass("hoverMod");
			}
		}, function()
		{
			if($(this).attr("class").indexOf("currentMod") < 0)
			{
				$(this).removeClass("hoverMod");
			}
		})
	})
}

//让显示歌词的div滚动条滚动到顶端
function scrollToTop()
{
	$(".lrc-wrapper").scrollTop(0);
}

/*-------点击歌曲列表，显示歌曲列表-------*/
function songList()
{
	var list = doGetList();
	var listCanvas = $(".ui-reelList-canvas");
	var content = [];
	var top = 0;
	for(var i = 0; i < list.length; i++)
	{
		if(i == 0)
		{
			content.push("<div class='ui-reelList-row ui-reelList-active even' style='top: " + top + "px;'>");
		}
		else
		{
			//讨论奇偶行
			if(i % 2 == 0)
			{
				content.push("<div class='ui-reelList-row even' style='top: " + top + "px;'>");
			}
			else
			{
				content.push("<div class='ui-reelList-row odd' style='top: " + top + "px;'>");
			}
		}
		top += 31;
		
		content.push("<div class='ui-reelList-cell c0'>");
		content.push("<span class='ui-reelList-songname'><span class='songname-txt'>" + list[i].songname + "</span></span></div>");
		content.push("<div class='ui-reelList-cell c1'><a class='a-link' href='" + list[i].singHref + "' target='_blank'>");
		content.push("<span class='artist-name'>" + list[i].singer + "</span></a></div>");
		content.push("<div class='ui-reelList-cell c2'><a class='a-link' href='" + list[i].speHref + "' target='_blank'>《" + 
				     list[i].special + "》</a></div>");
		content.push("<div class='ui-reelList-cell heartColumn c3'><div class='playlist-heart'></div></div></div>");
	}
	
	listCanvas.append(content.join(""));
}

/*----获取歌手详细信息-----*/
function doGetList()
{
	var list = [];
	//添加歌曲信息
	list.push({"songname": "不要说话", "singer": "陈奕迅", "special": "不要说话", 
		       "singHref": "http://music.baidu.com/artist/1077?pst=musicartistd_list", "speHref": "http://music.baidu.com/album/556112"});
	list.push({"songname": "爱情转移", "singer": "陈奕迅", "special": "1997-2007跨世纪国语精选",
		 	   "singHref": "http://music.baidu.com/artist/1077?pst=musicartistd_list", "speHref": "http://music.baidu.com/album/7311420"});
	list.push({"songname": "淘汰", "singer": "陈奕迅", "special": "1997-2007跨世纪国语精选", 
			   "singHref": "http://music.baidu.com/artist/1077?pst=musicartistd_list", "speHref": "http://music.baidu.com/album/7311420"});
	list.push({"songname": "十年", "singer": "陈奕迅", "special": "The Best Moment",
			   "singHref": "http://music.baidu.com/artist/1077?pst=musicartistd_list", "speHref": "http://music.baidu.com/album/1101844"});
	list.push({"songname": "好久不见", "singer": "陈奕迅", "special": "The 1St Eleven Years",
		       "singHref": "http://music.baidu.com/artist/1077?pst=musicartistd_list", "speHref": "http://music.baidu.com/album/70721"});
	list.push({"songname": "爱很简单", "singer": "陶喆", "special": "Ultrasound 乐之路 1997-2003",
			   "singHref": "http://music.baidu.com/artist/1104?pst=sug", "speHref": "http://music.baidu.com/album/931571"});
	list.push({"songname": "不浪漫罪名", "singer": "王杰", "special": "浪子之声",
			   "singHref": "http://music.baidu.com/artist/1090", "speHref": "http://music.baidu.com/album/70238304"});
	list.push({"songname": "趁早", "singer": "张宇", "special": "男人的好",
			   "singHref": "http://music.baidu.com/artist/1210?pst=sug", "speHref": "http://music.baidu.com/album/115171"});
	list.push({"songname": "今夜二十岁", "singer": "杨坤", "special": "今夜二十岁",
			   "singHref": "http://music.baidu.com/artist/1380", "speHref": "http://music.baidu.com/album/123057263"});
	list.push({"songname": "你是我的眼", "singer": "林宥嘉", "special": "爱星光精选 昨天今天明天",
			   "singHref": "http://music.baidu.com/artist/1454", "speHref": "http://music.baidu.com/album/2473185"});
	list.push({"songname": "天后", "singer": "陈势安", "special": "再爱一遍．天后陈势安",
			   "singHref": "http://music.baidu.com/artist/84343", "speHref": "http://music.baidu.com/album/10324859"});
	list.push({"songname": "我想大声告诉你", "singer": "樊凡", "special": "我想大声告诉你",
			   "singHref": "http://music.baidu.com/artist/1611", "speHref": "http://music.baidu.com/album/14463549"});
	list.push({"songname": "月半小夜曲", "singer": "李克勤", "special": "Purple Dream",
			   "singHref": "http://music.baidu.com/artist/8485", "speHref": "http://music.baidu.com/album/7322813"});
	list.push({"songname": "追梦赤子心", "singer": "GALA乐队", "special": "追梦赤子心",
			   "singHref": "http://y.baidu.com/artist/100004", "speHref": "http://music.baidu.com/album/5409405"});
	list.push({"songname": "不再见", "singer": "陈学冬", "special": "不再见",
			   "singHref": "http://music.baidu.com/artist/146801388", "speHref": "http://music.baidu.com/album/121515350"});
	list.push({"songname": "关于青春", "singer": "张阳阳", "special": "关于青春",
			   "singHref": "http://music.baidu.com/artist/92456666", "speHref": "http://music.baidu.com/album/125637767"});
	list.push({"songname": "时间煮雨", "singer": "郁可唯", "special": "时间煮雨",
			   "singHref": "http://music.baidu.com/artist/1581?pst=sug", "speHref": "http://music.baidu.com/album/48733347"});
	list.push({"songname": "有你真好", "singer": "小虫", "special": "有你真好",
			   "singHref": "http://music.baidu.com/artist/1520?pst=sug", "speHref": "http://music.baidu.com/album/34450840"});
	list.push({"songname": "灰色头像", "singer": "许嵩", "special": "寻雾启示",
			   "singHref": "http://music.baidu.com/artist/1557", "speHref": "http://music.baidu.com/album/68929"});
	list.push({"songname": "我怀念的", "singer": "萧敬腾", "special": "爱的时刻自选辑 (Love Moments)",
			   "singHref": "http://music.baidu.com/artist/9257?pst=sug", "speHref": "http://music.baidu.com/album/66800"});
	list.push({"songname": "青花瓷", "singer": "周杰伦", "special": "K情歌10",
			   "singHref": "http://music.baidu.com/artist/7994", "speHref": "http://music.baidu.com/album/34543871?pst=musicalbumd_list"});
	list.push({"songname": "父亲", "singer": "筷子兄弟", "special": "父亲",
			   "singHref": "http://music.baidu.com/artist/9295?pst=sug", "speHref": "http://music.baidu.com/album/13568798"});
	
	return list;
}






		
		