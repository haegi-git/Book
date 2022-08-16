// 로컬스토리지 헷갈리지않게 변수로 저장
const LOCAL_USER = 'user';

$('#login-form').on('submit',function(e){
    e.preventDefault();
    console.log($('#login').val())
    const inputVal = $('#login').val()
    
    

    // user에 있는 글씨 지우기
    $('.user').text('');

    // user에 input값을 넣기
    $('.user').text(`${inputVal} 님`);
    // input 내용 삭제
    $('#login').val('');

    $('.login-bg').removeClass('display');

    localStorage.setItem(LOCAL_USER,inputVal);
})

const LOCAL_GET_USER = localStorage.getItem(LOCAL_USER)

console.log(LOCAL_GET_USER)

if(LOCAL_GET_USER == null){
    $('.login-bg').addClass('display');
}else{
    $('.login-bg').removeClass('display');
    $('.user').text(`${LOCAL_GET_USER}님`);
}
