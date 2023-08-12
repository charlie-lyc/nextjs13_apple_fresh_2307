// import styles from './page.module.css'
/**
 * 리액트 기초 문법 : HTML 처럼 작성(JSX 이용)하되 다음의 사항 주의
 * 1. 함수형 컴포넌트의 리턴값은 반드시 1개의 부모 컴포넌트로 묶여있어야 함(<></> 또는 <div></div> 등)
 * 2. 각 컴포넌트는 <Example></Example> 또는 <Example /> 형태로 작성, 즉 (self) closing tag 꼭 작성
 * 3. class 속성은 className 으로 작성
 * 4. 그 외의 속성은 2단어 이상일 경우 camelCase로 표기 (ex: onchange -> onChange)
 * 5. 컴포넌트 내에서 Javascript Expression을 사용할 경우 { } 내에 작성
 * 6. CSS 파일을 이용하지 않고 style 속성을 직접 작성할 경우 { } 내에 객체 형태로 작성
 * 7. style 속성의 이름들 중에 '-'가 포함된 경우 camelCase로 표기 (ex: font-size -> fontSize)
 * 8. { } 내에서 반복문을 사용해야할 경우 Array.prototype.map() 을 이용
 * 9. { } 내에서 조건문을 사용해야할 경우 binary( ~ && ~) 또는 ternary operator( ~ ? ~ : ~ ) 을 이용
 */



export default function HomePage() {
    const number = 23
    const name = 'Charlie'
    const link = 'https://google.com'
    return (
        <div>
            <h2 className="title">애플 프레쉬 { number }</h2>
            <p className="title-sub">by { name }</p>
            {/* <a style={{ color: 'white' }} href={ link }>구글 링크</a> */}
        </div>
    )
}
