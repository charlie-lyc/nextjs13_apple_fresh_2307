
export default function ({ item }) {
    return (
        <div className="cart-item">
            <p>{item.product}</p>
            <p>$ {item.price}</p>
            <p>{item.quantity} 개</p> 
        </div>
    )
}

// const CartItem = (props) => {
//     return (
//         <div className="cart-item">
//             <p>{props.product}</p>
//             <p>$ {props.price}</p>
//             <p>{props.quantity} 개</p>
//             {/* 
//                 <p>상품명</p>
//                 <p>$40</p>
//                 <p>1개</p>
//             */}
//         </div>
//     )
// }