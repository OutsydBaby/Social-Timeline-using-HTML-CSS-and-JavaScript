//Timeline Content
document.addEventListener('DOMContentLoaded', function(){
    const contents = document.querySelectorAll('.content');

    contents.forEach(content => {
        let likeBtn = content.querySelector('#likeBtn');
        let likeCount = content.querySelector('#likeCount');
        let commentBtn = content.querySelector('#commentBtn');
        let commentCount = content.querySelector('#commentCount');
        let commentForm = content.querySelector('#commentForm');
        let commentSubmitBtn = content.querySelector('#commentSubmitBtn')
        let inputComment = content.querySelector('#inputComment')
        let shareBtn = content.querySelector('#shareBtn');
        let shareCount = content.querySelector('#shareCount');

        likeBtn.addEventListener('click', function(event){
            event.preventDefault();
            increaseLike(likeCount);
        })
        commentBtn.addEventListener('click', function(event){
            event.preventDefault();
            commentForm.classList.toggle('commentSection');
        })
        commentSubmitBtn.addEventListener('click', function(event){
            event.preventDefault();
            increaseComment(commentCount);
            commentForm.classList.toggle('commentSection');
            inputComment.value = "";
        })
        shareBtn.addEventListener('click', function(event){
            event.preventDefault();
            increaseShare(shareCount);
        })
    })
})
// To count number of times button is clicked
function increaseLike(count){
    let initialLikes = parseInt(count.textContent) || 0;
    initialLikes++;
    count.textContent = initialLikes;
}
function increaseComment(count){
    let initialComments = parseInt(count.textContent) || 0;
    ++initialComments;
    count.textContent = initialComments;
}
function increaseShare(count){
    let initialShare = parseInt(count.textContent) || 0;
    initialShare++;
    count.textContent = initialShare;
}