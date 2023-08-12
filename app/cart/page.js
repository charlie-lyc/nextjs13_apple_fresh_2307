/**
 * Server Component
 * - HTML(JSX)에 자바스크립트 기능(클릭이벤트 'onClick' 등) 불가능
 * - useState, useEffect 등 리액트 기능 불가능
 * - 페이지 로딩속도가 빠름(자바스크립트 기능이 거의 없음)
 * - 검색 엔진 노출에 유리(서버에서 렌더링됨)
 */
/**
 * Client Component
 * - 위의 서버컴포넌트에서 불가능했던 것 모두 가능
 * - 페이지 로딩속도가 느림(자바스크립트 기능이 많음, Hydration 과정을 거쳐야 함)
 */
/**
 * 결론
 * - 큰 덩어리의 페이지는 Server Component로 작성하고,
 * - 자바스크립트 기능이 필요한 곳만 따로 Client Component로 작성
 */

// 기본 설정은 Server Component
// 'use client' // 이렇게 명시하면 Client Component 

import CartItem from '@/components/CartItem'
// import { products, prices, quantities } from '@/data/data'
import data from '@/data/data'


/**
 * 비슷한 내용을 반복적으로 사용하게 될 경우 props 를 이용한다.
 */
// function Banner1() { return (<h5>롯데카드 결제 행사중</h5>) }
// function Banner2() { return (<h5>현대카드 결제 행사중</h5>) }
// function Banner3() { return (<h5>삼성카드 결제 행사중</h5>) }
///////////////////////////////////////////////////////////
function Banner({ card }) {
    return (
        <h5>{card}카드 결제 행사중</h5>
    )
}


export default function CartPage() {
    return (
        <div>
            <h3 className="title">Cart</h3>

            <Banner card='롯데' />
            <Banner card='현대' />
            <Banner card='삼성' />

            {/* 
                <Banner1 />
                <Banner2 />
                <Banner3 /> 
            */}

            {/* //////////////////////////////////////////////////////////////////// */}

            {
                data.map((item, idx) => <CartItem key={idx} item={item}/>)
            }

            {/* 
                CartPage 가 부모 컴포넌트라면 CartItem 는 자식 컴포넌트라고 할 수 있다.
                '부모 -> 자식' 방향으로만 데이터를 전달할 수 있는데 이를 위해 'props' 객체를 이용한다.

                아래의 예시에서 props 객체는 product, price, quantity 라는 값들을 모두 포함하며,
                부모 컴포넌트의 props 는 자식 컴포넌트의 parameter 로써 전달된다.

                function CartPage () { <CartItem ...props /> } --> function CartItem(props) { } 
            */}
            {/* {
                products.map((product, idx) => <CartItem key={idx} product={product} price={prices[idx]} quantity={quantities[idx]}/>)
            } */}
        
            {/* 
                <CartItem />
                <CartItem />
                <CartItem />  
            */}

            {/* 
                <div className="cart-item">
                    <p>상품명</p>
                    <p>$40</p>
                    <p>1개</p>
                </div>
                <div className="cart-item">
                    <p>상품명</p>
                    <p>$40</p>
                    <p>1개</p>
                </div>
                <div className="cart-item">
                    <p>상품명</p>
                    <p>$40</p>
                    <p>1개</p>
                </div>  
            */}

        </div>
    )
}

