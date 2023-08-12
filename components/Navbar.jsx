import Link from "next/link"


export default function Navbar() {
    return (
        <div className="navbar">
            <Link href="/">홈</Link>
            <Link href="/list">상품목록</Link>
            <Link href="/cart">장바구니</Link>
        </div>
    )
}
