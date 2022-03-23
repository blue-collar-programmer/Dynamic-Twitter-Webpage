

//fetch('https://unsplah.it/600/400')

let getTwitterUsers = (url)=>{
    return fetch(url)
    .then(response => {
        //if(response.ready === )
        return  response.json()})
        .then(users => {
    /* write the query string logic here
    
    BRAIN STORMING:
       -if userObjs[0] return userObj[0] (i.e) elon
       -else return userObj[1] (i.e) bill 
        -- or any other user which means that the iter num[] has to be incrementable based on the users array length
       let queryStr = ?user=user1 => this should look something like :
          let queryStr = window.location.search =>>>>> the value here will obviously be ?user=user1 etc.
          --- 
        if( === usersObj[i])   
       const user1 = userObjs[0];// what if I wanted to reuse this code?
    */

       
    console.log(users);
    // this value will be determined base don what input into the web browser url
// The entire query string value is stored in this variable, i.e. anything after ?
    let queryStr = window.location.search;

/* I split the value of the queryStr parameter (i.e anything after the = is a value, and before is the parameter)
then I stored the second half (found in the index place [1]) in this variable--- expected out: either user0 or user1
and so on if the users array obj was bigger
*/
    let paramValue = queryStr.split("=")[1]

// declared a global scope (in context of current promise obj that I am working in)    
    let user;

// this variable will hold the results of the test below and and ultimately return the user obj found to be rendered to the html    
    let currentUser;

/*This loops all current user obj in the users obj array, and matches the queryStr "value" i.e. user1 or user0 not the param    
if its a match, then it is a signal that the current user obj being iterated over is the same name/value being inputed into the query
str in the url, how? because the same i incrementer that is combined with the user variable name is the same one being used 
to increment and count the current iteration that the loop is on.     
*/
for(let i = 0; i < users.length; i++){
       user = "user" + i;/* the first iter this will be user0 and so also the data will also be that of
       userObj[0] even though it is not explicitly defined it is implied because element in the  users[i] current index is the same
       numbered index as the user name being compared to the query str*/
       
       if(paramValue === user){
           // this test the value of the queryStr param to the user variable stored value 

           //if test is passed assign the current user objected being iterated over as the value
        currentUser = users[i];

//purpose of this if else staement is: just incase no such object is found, the page still reneders a deafault obj, in this case, it's elon musks        
           } else if(paramValue === undefined || paramValue === null || paramValue !== user ) {
        currentUser = users[0];       
           }
    }

    return currentUser;
})

}

getTwitterUsers('users.json')
.then(user => {
    console.log('test=>', user)
    let activeTabContentContainer = document.getElementById('activeTabContentContainer')
    let headerContainer = document.getElementById("headerContainer");
    let coverPhoto = document.getElementById("coverPhoto");
    let profileDetails = document.getElementById("profileDetails");
    let tweetsArray = user.tweets;
    headerContainer.innerHTML = `
    <div class = "header-flex-container">
    <div class = "back-arrow"></div>
    <div class = "displayName-and-tweets-container">
    <div class = "displayName">${user.displayName}</div>
    <div class = "tweetCount">${user.tweetCount} Tweets</div>
    </div>
    </div>
    `
    coverPhoto.innerHTML = `
    <img class = "coverImage" src= ${user.coverPhotoURL} >
    <div class= "avatarContainer">
    <img class= "avatarImage" src= ${user.avatarURL} >
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
    ${user.displayName}
    </div>
    <div class="userName">
    ${user.userName}
    </div>
    <div class="joinedDate">
    Joined ${user.joinedDate}
    </div>
    <div class="followContainer">
    <div class="followingCount">
    ${user.followingCount} <span class = "followText">Following</span>
    </div>
    <div class="followersCount">
    ${user.followerCount} <span class = "followText">Followers</span>
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
        console.log('e test',user.tweets[i])
        let outterTweetContainer = document.createElement('div');
        outterTweetContainer.classList.add("outterTweetContainer");
        
        outterTweetContainer.innerHTML =

        `
        <img src = ${user.avatarURL}  class = "avatarImage avatarImageMini" >
        <div class = "tweet-container">
        <div class = "user-info-flex-container">
            <div class = "left-section-flex">
            <div class = "displayName2 displayName">${user.displayName}</div>
            <div class = "userName userName2">${user.userName}</div>
            <div class = "timeStamp">${user.tweets[i].timestamp}</div>
            </div>
            <div class = "widget2Container">
            <div class = "optionsWidget2  ">...</div>
            </div>
            <div>
            </div>
            </div>
            <div class = tweetText>${user.tweets[i].text}</div>
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
add functionality to the tabs
change mil and thou integers to k or m
finish project specifications


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
