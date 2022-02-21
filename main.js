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
let amyrobsonText = document.querySelector('.amyrobson-text')



 let state = {
    countMablagun: 0,
    countAmyrobson: 0 
}


function replyAmyrobson() {
    currentUserComment.classList.toggle('current-user')   

    amyrobsonText.addEventListener('click', () => {

        let textarea = ` 
        <div class="comment-amybroson comment">
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
          <span class="reply-comment" onClick="replyAmyrobson()"><img src="images/icon-reply.svg" alt="" class="icon-reply">
            Reply</span>
        </div>
        <div class="comment-text">
          ${data.comments[0].content}
        </div>
      
      </div>
    </div>`
        currentUserComment.append(textarea)
    })

   
}
function replyMaxblagun() {
    
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
                   <span class="reply-comment" onClick="replyAmyrobson()"><img src="images/icon-reply.svg" alt="" class="icon-reply" > Reply</span>
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
                    
                    <span class="reply reply-comment"><button class="del-btn" > <img src="images/icon-delete.svg" alt=""> Delete</button> <img src="images/icon-reply.svg" alt=""> Reply</span>
                </div>
                <div class="comment-text">
                 <span class="mention" >@${data.comments[1].replies[1].replyingTo}</span> ${data.comments[1].replies[1].content}
                </div>
    
            </div>
        `
        currentUserComment.innerHTML = `
       
         <img class="avatar-send" src="images/avatars/image-ramsesmiron.png" alt="">
            <textarea name="comment" id="current-comment" cols="10" rows="2" placeholder="Add a comment"></textarea>
            <div class="send">
                <button class="send-btn">SEND</button>
            </div>
        `
        
      })