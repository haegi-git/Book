
$('#search-form').on('submit',function(e){
    e.preventDefault();

    $.ajax({
        method: "GET",
        url: "https://dapi.kakao.com/v3/search/book?target=title",
        data: { query: $('#search').val() },
        headers:{Authorization:"KakaoAK 2fb1901f06859a6cf9ae30d8f47dcd16"}
      })    
        .done(function( msg ) {

            console.log(msg)
          
          
          const searchBook = `
            <img src="${msg.documents[0].thumbnail}"/>
            <h4>${msg.documents[0].title}</h4>
            <p>${msg.documents[0].price} 원</p>
            <button class="search-close">닫기</button>
          `
          $('.search-book').removeClass('none')
          $('.search-book').text('');
          $('.search-book').append(searchBook);

          
$('.search-close').on('click',function(){
  $('.search-book').addClass('none');
})
          
    
        }); // ajax done 끝자락

}) // submit 이벤트 끝자락

