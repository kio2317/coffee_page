      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
  
      function onYouTubeIframeAPIReady() {
        new YT.Player('player', {
      
          videoId: 'AV5na_QOcX8', // 최초 재생할 유튜브 영상 ID
          playerVars: {
            autoplay: true, 
            loop: true,
            playlist: 'AV5na_QOcX8' // 반복 재생할 유튜브 영상 ID
          },
          events: {
            // 영상이 준비 되어 있을 때
            onReady: function (event) {
              event.target.mute()//음소거
            }
          }
        });
      }