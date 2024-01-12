$('td > p').on('click', function () {
    console.log(this);

    // 날짜만 가져오기
    console.log($(this).text());
})