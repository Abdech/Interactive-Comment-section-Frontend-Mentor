let reply = document.querySelector(".reply")
let comments = document.querySelector(".comments")
let comment = document.querySelector(".comment")
let votes = document.querySelector(".votes")
let votesCount = document.querySelector(".votes-count")
let commentText = document.querySelector(".comment-text")
let imgProfile = document.querySelector(".avatar-img")
let container = document.querySelector(".container")
let replyTo = document.querySelector('.replyTo')


let amybroson = document.querySelector('.comment-amybroson')
let maxblagun = document.querySelector('.comment-maxblagun')
let replyToMax1 = document.querySelector('.comment-reply')
let replyToMax2 = document.querySelector('.comment-reply1')
let currentUserComment = document.querySelector('.current-user')
let replyToAmyrobson = document.querySelector('#reply-to-amyrobson')
let amyrobsonText = document.querySelector('#amyrobson-text')
let replyRam = document.querySelector('.reply-ram')
let newSec = document.querySelector('.new')
let sendBtn = document.querySelector('.send-btn')
let newMaxblagunReply = document.querySelector('.new-maxblagun')


 let state = {
    countMablagun: 0,
    countAmyrobson: 0 
}

 function replyAmyrobson() {
    currentUserComment.classList.toggle('current-user')  
}
sendBtn.addEventListener("click", () => {
    
    let replyMaxText = document.querySelector('#replyMaxText')

        
    let newComment = document.createElement('div')
    newComment.classList.add("comment")
    let newVotes = document.createElement('div')
    newVotes.classList.add('votes')
    let newVoteCount = document.createElement('div')
    newVoteCount.classList.add('votes-count')
    newVoteCount.innerHTML = 10;
    let newImgPlus = document.createElement('img')
    newImgPlus.classList.add('cursor')
    newImgPlus.src = "images/icon-plus.svg"
    let newImgMinus = document.createElement('img')
    newImgMinus.src = 'images/icon-minus.svg'
    newImgMinus.classList.add('cursor')

    let mainComment = document.createElement('div')
    mainComment.classList.add("main-comment")
    let profile = document.createElement('div')
    profile.classList.add("profile")
    let nameDate = document.createElement('div')
    nameDate.classList.add("name-date")
    
    let namePic = document.createElement('div')
    namePic.classList.add("name-pic")
    let dateText = document.createElement('p')
    dateText.classList.add('date')
    dateText.innerHTML = "5 days ago"
    let userPic = document.createElement('img')

     let delBtn = document.createElement('button')
    delBtn.classList.add('del-btn')
    delBtn.innerText = "Delete"

    let replyImg = document.createElement('img')
    replyImg.src = "images/icon-reply.svg"

    let span = document.createElement('span')
    span.classList.add('reply-comment')
    span.classList.add('cursor')
    span.textContent = 'Reply'
    span.onClick= replyAmyrobson()
    
    
    let you = document.createElement('p')
    you.classList.add('you')
    you.innerHTML = 'you'
   
   
    userPic.src = "images/avatars/image-juliusomo.png"
    userPic.classList.add('avatar-img')
    let h6 = document.createElement('h6')
    h6.classList.add('person')
    h6.innerHTML = 'juliusomo'


    let commentText = document.createElement("div")
    commentText.classList.add('comment-text')
    commentText.innerHTML = ` <span class="mention" >@amyrobson </span> 
    ${replyMaxText.value}`

    span.appendChild(replyImg)
    span.appendChild(delBtn)
    newComment.appendChild(newVotes)
    newVotes.appendChild(newImgPlus)
    newVotes.appendChild(newVoteCount)
    newVotes.appendChild(newImgMinus)
    newComment.appendChild(mainComment)
    mainComment.appendChild(profile)
    profile.appendChild(nameDate)
    profile.appendChild(span)
    nameDate.appendChild(namePic)
    nameDate.appendChild(dateText)
    namePic.appendChild(userPic)
    namePic.appendChild(h6)
    namePic.appendChild(you)
    mainComment.appendChild(commentText)
    newMaxblagunReply.appendChild(newComment)
    
   
})








amyrobsonText.addEventListener('click', () => {
//Am creating the HTMl that will be appended to the dom after the user reply comment "it too long hope there is an easier way"
     let replyText = document.querySelector('#reply-textarea')


    let newComment = document.createElement('div')
    newComment.classList.add("comment")
    let newVotes = document.createElement('div')
    newVotes.classList.add('votes')
    let newVoteCount = document.createElement('div')
    newVoteCount.classList.add('votes-count')
    newVoteCount.innerHTML = 10;
    let newImgPlus = document.createElement('img')
    newImgPlus.classList.add('cursor')
    newImgPlus.src = "images/icon-plus.svg"
    let newImgMinus = document.createElement('img')
    newImgMinus.src = 'images/icon-minus.svg'
    newImgMinus.classList.add('cursor')

    let mainComment = document.createElement('div')
    mainComment.classList.add("main-comment")
    let profile = document.createElement('div')
    profile.classList.add("profile")
    let nameDate = document.createElement('div')
    nameDate.classList.add("name-date")
    
    let namePic = document.createElement('div')
    namePic.classList.add("name-pic")
    let dateText = document.createElement('p')
    dateText.classList.add('date')
    dateText.innerHTML = "5 days ago"
    let userPic = document.createElement('img')

     let delBtn = document.createElement('button')
    delBtn.classList.add('del-btn')
    delBtn.innerText = "Delete"

    let replyImg = document.createElement('img')
    replyImg.src = "images/icon-reply.svg"

    let span = document.createElement('span')
    span.classList.add('reply-comment')
    span.classList.add('cursor')
    span.textContent = 'Reply'
    span.onClick= replyAmyrobson()
    
    
    let you = document.createElement('p')
    you.classList.add('you')
    you.innerHTML = 'you'
   
   
    userPic.src = "images/avatars/image-juliusomo.png"
    userPic.classList.add('avatar-img')
    let h6 = document.createElement('h6')
    h6.classList.add('person')
    h6.innerHTML = 'juliusomo'


    let commentText = document.createElement("div")
    commentText.classList.add('comment-text')
    commentText.innerHTML = `<span class="mention" >@amyrobson </span> ${replyText.value}`  

    span.appendChild(replyImg)
    span.appendChild(delBtn)
    newComment.appendChild(newVotes)
    newVotes.appendChild(newImgPlus)
    newVotes.appendChild(newVoteCount)
    newVotes.appendChild(newImgMinus)
    newComment.appendChild(mainComment)
    mainComment.appendChild(profile)
    profile.appendChild(nameDate)
    profile.appendChild(span)
    nameDate.appendChild(namePic)
    nameDate.appendChild(dateText)
    namePic.appendChild(userPic)
    namePic.appendChild(h6)
    namePic.appendChild(you)
    mainComment.appendChild(commentText)
    newSec.appendChild(newComment)
    
   
    
    })

function replyMaxblagun() {
    
}
function commentToRam(){
    replyRam.style.display = 'flex'

    
}
function votesIncrement() {
    alert("is it only alert that works")
    state.countAmyrobson++
    console.log(state.countAmyrobson)
}
function voteDecrement() {
    alert("is it only alert that works")
}
function deleteOwnComment() {
    alert('hello delete')
}


fetch('./data.json')
    .then(response => response.json())
    .then(data => {

        let count = 0   
        console.log(data)
        amybroson.innerHTML = `
         <div class="votes">
                <img class="cursor" onClick="votesIncrement()" src="images/icon-plus.svg" alt="">
                <div class="votes-count">${count}</div>
                <img class="cursor" onClick="voteDecrement()" src="images/icon-minus.svg" alt="">
            </div>
            <div class="main-comment">
                <div class="profile">
                    <div class="name-date">
                        <div class="name-pic">
                            <img class="avatar-img cursor" src="${data.comments[0].user.image.png}" alt="">
                            <h6 class="person"> ${data.comments[0].user.username}</h6>
                        </div>
                        <p class="date"> ${data.comments[0].createdAt}</p>
                    </div>
                    <span class="reply-comment" onClick="replyAmyrobson()"><img src="images/icon-reply.svg" alt="" class="icon-reply" > Reply</span>
                </div>
                <div class="comment-text">
                    ${data.comments[0].content}
                </div>
    
            </div>
        `
        maxblagun.innerHTML = `
        <div class="votes">
                <img onClick="votesIncrement()" src="images/icon-plus.svg" alt="">
                <div class="votes-count">12</div>
                <img src="images/icon-minus.svg" alt="">
            </div>
            <div class="main-comment">
                <div class="profile">
                    <div class="name-date">
                        <div class="name-pic">
                            <img class="avatar-img" src="${data.comments[1].user.image.png}" alt="">
                            <h6 class="person">${data.comments[1].user.username}</h6>
                        </div>
                        <p class="date"> ${data.comments[1].createdAt}</p>
                    </div>
                    <div class="reply-comment" onClick="replyMaxblagun()"><img src="images/icon-reply.svg" alt=""> Reply
                    </div>
                </div>
                <div class="comment-text">
                    ${data.comments[1].content}
                </div>
    
    
            </div>
        `
        replyToMax1.innerHTML = `
         <div class="votes">
                <img src="images/icon-plus.svg" alt="">
                <div class="votes-count"></div>
                <img src="images/icon-minus.svg" alt="">
            </div>
            <div class="main-comment">
                <div class="profile">
                    <div class="name-date">
                        <div class="name-pic">
                            <img class="avatar-img" src="${data.comments[1].replies[0].user.image.png} " alt="">
                            <h6 class="person">${data.comments[1].replies[0].user.username}</h6>
                        </div>
                        <p class="date">${data.comments[1].replies[0].createdAt}</p>
                    </div>
                   <span class="reply-comment" onClick="commentToRam()"><img src="images/icon-reply.svg" alt="" class="icon-reply" > Reply</span>
                </div>
                <div class="comment-text">
                   <span class="mention" >@${data.comments[1].replies[0].replyingTo}</span> ${data.comments[1].replies[0].content}
                    
                </div>
    
            </div>
        `
        replyToMax2.innerHTML = `
          <div class="votes">
                <img src="images/icon-plus.svg" alt="">
                <div class="votes-count">${state.countAmyrobson}</div>
                <img src="images/icon-minus.svg" alt="">
            </div>
            <div class="main-comment">
                <div class="profile">
                    <div class="name-date">
                        <div class="name-pic">
                            <img class="avatar-img" src="${data.comments[1].replies[1].user.image.png} " alt="">
                            <h6 class="person">${data.comments[1].replies[1].user.username}</h6>
                            <p class="you"> you </p>
                        </div>
                        <p class="date">${data.comments[1].replies[1].createdAt}</p>
                    </div>
                    
                    <span class="reply reply-comment"><button class="del-btn cursor" onClick= "deleteOwnComment()" >  <img src="images/icon-delete.svg" alt=""> Delete</button> <img src="images/icon-reply.svg" alt=""> Reply</span>
                </div>
                <div class="comment-text">
                 <span class="mention" >@${data.comments[1].replies[1].replyingTo}</span> ${data.comments[1].replies[1].content}
                </div>
    
            </div>
        `
        // currentUserComment.innerHTML = `
       
        //  <img class="avatar-send" src="images/avatars/image-ramsesmiron.png" alt="">
        //     <textarea name="comment" id="current-comment" cols="10" rows="2" placeholder="Add a comment"></textarea>
        //     <div class="send">
        //         <button class="send-btn">SEND</button>
        //     </div>
        // `
       
      })