const textBox = $('.modal-comment-text-box')

const LOCAL_COMMENT_USER = 'comment-user'
const LOCAL_COMMENT_TEXT = 'comment-text'

const COMMENT_USER = localStorage.getItem('user');


let Commentarr = [];

$('#comment-form').on('submit',function(e){
    e.preventDefault();
    console.log($('#comment-input').val())
    const commentVal = $('#comment-input').val()

    const CommentObj = {
      id : Date.now(),
      comments : commentVal,
      user : localStorage.getItem('user'),
    }

    const comment = `
    <div class="modal-comment-text-box" id="${CommentObj.id}">
                  <div class="comment-user">${localStorage.getItem('user')}</div>
                  <div class="comment">${commentVal}</div>
                  <div class="delete"><i class="fas fa-times"></i></div>
                </div>
    `
    $('.modal-comment-text').append(comment)
    

    // Commentarr에 어레이형식으로 id와 코맨트를 따로 저장
    // id : Date.now()는 랜덤으로 숫자가 지정이됨 클릭했을때 다른거랑 구분가능
    



    // input에 내용지우기
    $('#comment-input').val('');

    Commentarr.push(CommentObj)
    localStorage.setItem(LOCAL_COMMENT_TEXT,JSON.stringify(Commentarr))

    
    // 삭제버튼
    $('.delete').on('click',function(e){
      // 변수 delBtn에 e.currentTarget의 부모요소 선택 > <div class="modal-comment-text-box">
      const delBtn = e.currentTarget.parentElement
      // 부모요소 통째로 삭제
      delBtn.remove();
      Commentarr = Commentarr.filter((e) => e.id !== parseInt(delBtn.id));
      localStorage.setItem(LOCAL_COMMENT_TEXT,JSON.stringify(Commentarr))
    })
})

const localCommentData = localStorage.getItem(LOCAL_COMMENT_TEXT)

if(localCommentData !== null){
  const parseComment = JSON.parse(localCommentData);
  Commentarr = parseComment;

  parseComment.forEach((data) => {

    
    const comment = `
    <div class="modal-comment-text-box" id=${data.id}>
                  <div class="comment-user">${COMMENT_USER}</div>
                  <div class="comment">${data.comments}</div>
                  <div class="delete"><i class="fas fa-times"></i></div>
                </div>
    `
    $('.modal-comment-text').append(comment)
    
  });
}


$('.delete').on('click',function(e){
  const delBtn = e.currentTarget.parentElement
  delBtn.remove();
  Commentarr = Commentarr.filter((e) => e.id !== parseInt(delBtn.id));
  localStorage.setItem(LOCAL_COMMENT_TEXT,JSON.stringify(Commentarr))
})