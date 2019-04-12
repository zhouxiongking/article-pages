var currentIndex = 0;
var songList = [{
    singer: '陈奕迅',
    songname: '不要说话'
}, {
    singer: '陈奕迅',
    songname: '爱情呼叫转移'
}, {
    singer: '陈奕迅',
    songname: '淘汰'
}, {
    singer: '陈奕迅',
    songname: '十年'
}, {
    singer: '陈奕迅',
    songname: '好久不见'
}];
$(function () {
    //audio播放器对象
    var audio = document.getElementById('myAudio');
    //将单曲循环设为false
    audio.loop = false;
    //循环列表播放
    audio.addEventListener('ended', function () {
        //自动播放下一首
        doPreOrNext('next');
    }, false);

    //按空格键实现播放、暂停
    $(document).keyup(function (e) {
        var key = e.which;
        if (key == 32) {
            playOrPause();
        }
    });

    //点击按钮，实现播放、暂停
    $('.play').click(function () {
        playOrPause();
    });

    //自动播放第一首歌
    changeMusic(currentIndex);

    //上一首
    $('.prev a').click(function () {
        doPreOrNext('prev');
    });

    //下一首
    $('.next a').click(function () {
        doPreOrNext('next');
    });

    //静音
    var curVolume;
    var lastVolume = 1;
    $('.mute').click(function () {
        if ($(this).attr('class').indexOf('muted') > 0) {
            curVolume = lastVolume;
            $(this).removeClass('muted');
        }
        else {
            $(this).addClass('muted');
            curVolume = 0;
        }
        //改变播放器声音与进度条显示
        changeVolume(curVolume);
    });

    //改变音量
    $('.vol-slider-wrapper').click(function (e) {
        if (!e) {
            e = window.event;
        }
        var percent = e.offsetX / $(this).width();
        lastVolume = percent;
        changeVolume(percent);
    });

    //根据传入的参数，改变播放器的声音与进度条显示
    function changeVolume(curVolume) {
        audio.volume = curVolume;
        // 如果不是0,则表示开启声音,需要将静音的图标去掉
        if (curVolume) {
            $('.volume .mute').removeClass('muted');
        }
        //改变声音进度条
        $('.ui-slider-range-volume').css('width', curVolume * 100 + '%');
        $('.ui-volume').css('left', curVolume * 100 + '%');
    }
});

//播放和暂停歌曲
function playOrPause() {
    var audio = document.getElementById('myAudio');
    var play_a = $('.play a');
    if (play_a.attr('class') == 'play-a') {
        //改变按钮的样式
        play_a.removeClass('play-a').addClass('stop-a');
        $('.play').attr('title', '播放[空格键]');
        //暂停
        audio.pause();
        clearInterval(interval);
    }
    else {
        //改变按钮的样式
        play_a.removeClass('stop-a').addClass('play-a');
        $('.play').attr('title', '暂停[空格键]');
        //播放
        audio.play();
        //定时器自动获取当前播放时间
        interval = setInterval(doPlay, 1000);
    }
}

// 上一首/下一首通用处理
function doPreOrNext(type) {
    if (type === 'prev') {
        currentIndex = currentIndex ? currentIndex - 1 : 4;
    } else {
        currentIndex = currentIndex === 4 ? 0 : currentIndex + 1;
    }
    changeMusic(currentIndex);
}


//切换歌曲，多出公用的方法
function changeMusic(index) {
    var audio = document.getElementById('myAudio');
    //切换歌曲
    audio.src = 'music/music-0000' + (index + 1) + '.mp3';
    audio.autoplay = 'autoplay';
    // 改变歌手和歌名
    var song = songList[index];
    $('.title .songname').text(song.songname);
    $('.title .artist').text(song.singer);
    //将播放按钮显示为播放状态
    $('.play a').removeClass('stop-a').addClass('play-a');
    interval = setInterval(doPlay, 1000);
}

//播放时，时间和进度栏的变化
function doPlay() {
    /*------时间的变化------*/
    var audio = document.getElementById('myAudio');
    var curTime = parseInt(audio.currentTime);
    var minute = parseInt(curTime / 60);
    var second = curTime % 60;
    var ttime = (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
    $('.curTime').text(ttime);

    /*------进度栏的变化-----*/
    var totalTime = parseInt(audio.duration);
    var percent = curTime / totalTime;
    $('.ui-slider-range-schedule').css('width', percent * 100 + '%');
    $('.ui-schedule').css('left', percent * 100 + '%');

    //总时间
    getTotalTime();
}

//总共时间
function getTotalTime() {
    var audio = document.getElementById('myAudio');
    $('.totalTime').text('00:00');
    var total = parseInt(audio.duration);
    var minute = parseInt(total / 60);
    var second = total % 60;
    var time = (minute < 10 ? '0' + minute : minute) + ':' + (second < 10 ? '0' + second : second);
    $('.totalTime').text(time);
}
