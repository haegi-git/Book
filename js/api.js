$.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",
    data: { query:"미움받을 용기" },
    headers:{Authorization:"KakaoAK 2fb1901f06859a6cf9ae30d8f47dcd16"}
  })    
    .done(function( msg ) {

      const newData = msg.documents

      // 슬라이드 이벤트에 사진 3개만 넣게끔 반복문3개
      for(i = 0; i < 3; i++){
        const slideImg = msg.documents[i].thumbnail
        
        const addSlide = `<div class="swiper-slide">
        <a href="#" class="slide-img">
        <img src="${slideImg}" />
        </a>
        </div>`
        $('.swiper-wrapper').append(addSlide)
        
      }

      newData.forEach((el,i) => {
        console.log(el)
        console.log(i)
        // books 화면에 뿌릴 내용 담은 변수
        const bookTitle = `
            <div class="book">
            <img class="book_img" src="${el.thumbnail}"/>
            <h4 class="book_title">${el.title}</h4>
            <p class="book_price">${el.price} 원</p>
            </div>
            `
// modal창 안에 들어갈 내용 담은 변수
            const modalBook = `
            <div class="book-modal-left">
            <img class="book-modal_img" src="${el.thumbnail}"/>
            <h4 class="book-modal_title">${el.title}</h4>
            <p class="book-modal_price">${el.price} 원</p>
            </div>
            <div class="book-modal-right">
            <h4>줄거리</h4>
            <p class="book-modal_summary">${el.contents}</p>
            </div>
            `
            // books에 내용넣기
            $(".books").append(bookTitle);

            // 책 이름에 클릭이벤트 > modal-book 공간 . text('')로 비운후
            //  append로 클릭한 책의 요소로 채우기
            // addClass로 display를 줘서 display block속성 준 뒤 모달창띄움

            
            $('.book_title').eq(i).on('click',function(){ // 책 타이틀 클릭이벤트
              $('.modal-book').text('');
              $('.modal-bg').addClass('display')
            $('.modal-book').append(modalBook)


// 어두운 배경 눌러도 닫히게끔 만든 클릭이벤트
            $('.modal-bg').on('click',function(e){
              if(e.target == document.querySelector('.modal-bg')){
                $('.modal-bg').removeClass('display')
              }
            })
// 닫기 버튼 이벤트
      $('.close').on('click',function(){
        $('.modal-bg').removeClass('display')
      })
            }) // 책 타이틀 클릭이벤트 끝

            
            
      });
      // newData 반복문 끝
    
      
      
    
    
    }); // ajax done 끝자락
