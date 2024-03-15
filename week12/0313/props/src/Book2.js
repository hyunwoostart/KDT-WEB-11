import logo from './logo.svg'

function Book2({book2}) {
    const {title, author, price, type} = book2
    return (
        <div>
            <div>이번주 베스트 셀러</div>
            <img src={logo}  alt="logo"/>
            <p>{title}</p>
            <p>저자: {author}</p>
            <p>판매가: {price}</p>
            <p>구분: {type}</p>
        </div>
    );
}

export default Book2;