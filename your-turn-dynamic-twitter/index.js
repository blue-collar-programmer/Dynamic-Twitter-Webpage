

//fetch('https://unsplah.it/600/400')

let getTwitterUser1 = (url)=>{
return fetch(url)
.then(response => {
   //if(response.ready === )
   return  response.json()})
.then(userObjs => {
    console.log(userObjs);
    const user1 = userObjs[0];// what if I wanted to reuse this code?
    return  user1;
})

}

getTwitterUser1('users.json')
.then(elon => {
    console.log('test=>', elon)
    let activeTabContentContainer = document.getElementById('activeTabContentContainer')
    let headerContainer = document.getElementById("headerContainer");
    let coverPhoto = document.getElementById("coverPhoto");
    let profileDetails = document.getElementById("profileDetails");
    let tweetsArray = elon.tweets;
    headerContainer.innerHTML = `
    <div class = "header-flex-container">
    <div class = "back-arrow"></div>
    <div class = "displayName-and-tweets-container">
    <div class = "displayName">${elon.displayName}</div>
    <div class = "tweetCount">${elon.tweetCount} Tweets</div>
    </div>
    </div>
    `
    coverPhoto.innerHTML = `
    <img class = "coverImage" src= ${elon.coverPhotoURL} alt ="An image of the earth in 4 versions">
    <div class= "avatarContainer">
    <img class= "avatarImage" src= ${elon.avatarURL}  alt= "image of Elon Musk">
    </div>
    `
    profileDetails.innerHTML = `
    <div class= "widget-button-section">
    <div class= "optionsWidget">
    ...
    </div>
    <div class= "followButton">
    Following
    </div>
    </div>
    <div class= "profileDetails-section">
    <div class= "displayName name">
    ${elon.displayName}
    </div>
    <div class="userName">
    ${elon.userName}
    </div>
    <div class="joinedDate">
    Joined ${elon.joinedDate}
    </div>
    <div class="followContainer">
    <div class="followingCount">
    ${elon.followingCount} <span class = "followText">Following</span>
    </div>
    <div class="followersCount">
    ${elon.followerCount} <span class = "followText">Followers</span>
    </div>
    </div>
    </div>
    `
    let tab0Content = document.createElement('div');
    tab0Content.id = "tab0c";
    activeTabContentContainer.appendChild(tab0Content);

    let tab0c = document.getElementById("tab0c");
    console.log(tab0c, "id test")
    tab0c.classList.add('tab0-content');
    
    for(let i =0; i < tweetsArray.length; i++){// why is this not creating the same amount of conntainers as tweets in the array but only one?
        console.log('e test',elon.tweets[i])
        let outterTweetContainer = document.createElement('div');
        outterTweetContainer.classList.add("outterTweetContainer");
        
        outterTweetContainer.innerHTML =

        `
        <img src = ${elon.avatarURL}  class = "avatarImage avatarImageMini" >
            <div class = "tweet-container">
            <div class = "user-info-flex-container">
            <div class = "left-section-flex">
            <div class = "displayName2 displayName">${elon.displayName}</div>
            <div class = "userName userName2">${elon.userName}</div>
            <div class = "timeStamp">${elon.tweets[i].timestamp}</div>
            </div>
            <div class = "widget2Container">
            <div class = "optionsWidget2  ">...</div>
            </div>
            <div>
            </div>
            </div>
            <div class = tweetText>${elon.tweets[i].text}</div>
            <div class= "tweet-options-container">
            <section class = "comments-section" >
            <img class = "commentsImg" src ="assets/icons-twitter-comments.png" >
            </section>
            <section class = "retweet">
            <img  class = "retweetImg" src ="assets/icon-retweet.png" >
            </section>
            <section class = "likes">
            <img class = "likesImg" src ="assets/icon-tweet-like-heart.png">
            </section>
            <section class = "share">
            <img class="shareImg" src = "assets/icons-twitter-share.png">
            </section>
            </div>
            `  
            tab0c.appendChild(outterTweetContainer);
        }
    
})

/*
create tweets template
    1.main container 
    2.upper content outer flex-container
    inside=> avatar (inner flex container=>)image, displayname, userName, timestamp
    lastly the tweet at the bottom
    3. lastly the reactions flex container

create the container template first example:
note the things that never change, 
1. avatar photo and position, display name, username 
, and the widget options on the far right and the tweet, and timestamp
 which is the
only content that actually changes in the template



    */ 

//tweets.addEventListener('click', (e)=>{
//})
