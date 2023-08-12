'use client'
import { useState } from 'react'

// import './page.module.css' // - XXX -
import styles from './page.module.css'

/**
 * 이미지 최적화
 * 1. lazy loading
 * 2. optimizing size
 * 3. prevent layout shift
 */
import Image from 'next/image'
import tomatoes from '@/public/images/food0.png'
import pasta from '@/public/images/food1.png'
import coconut from '@/public/images/food2.png'


export default function ListPage () {
    const products = ['Tomatoes', 'Pasta', 'Coconut']
    const prices = [30, 40, 50]
    const images = [tomatoes, pasta, coconut]

    const [ quantities, setQuantities ] = useState([0, 0, 0])
    const addHandle = (idx) => {
        const updatedQuantities = [ ...quantities ]
        updatedQuantities[idx] ++
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        // const updatedQuantities = quantities.map((quantity, index) => idx === index ? quantity + 1 : quantity)
        /////////////////////////////////////////////////////////////////////////////////////////////////////////
        setQuantities(updatedQuantities)
    }
    const subtractHandle = (idx) => {
        const updatedQuantities = [ ...quantities ]
        if (updatedQuantities[idx] > 0) {
            updatedQuantities[idx] --
        }
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // const updatedQuantities = quantities.map((quantity, index) => idx === index && quantity > 0 ? quantity - 1 : quantity)
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        setQuantities(updatedQuantities)
    }

    return (
        <div>
            <h3 className="title">상품목록</h3>

            {
                products.map((product, idx) => 
                    <div key={idx} className={styles.food}>
                        {/* <img src={`/images/food${idx}.png`} alt={product} /> */}
                        <Image 
                            // 내부(public 폴더) 이미지 
                            src={images[idx]} 
                            alt={product}
                            // 스타일
                            className={styles.foodImg}
                        />
                        <h4>
                            상품{idx + 1} {product} ${prices[idx]}
                        </h4>
                        {/* -------- useState, onClick 기능 추가 -------- */}
                        <span>{ quantities[idx] }</span>&nbsp;
                        <button 
                            onClick={() => addHandle(idx) }
                            style={{ width: '1.5rem'}}
                        >
                        + </button>
                        <button 
                            onClick={() => subtractHandle(idx) }
                            style={{ width: '1.5rem'}}
                        >
                        - </button>
                        {/* ------------------------------------------ */}
                    </div>
                )
            }

            <Image 
                // 이미지 링크(경로) 예시
                src="https://s3.amazonaws.com/my-bucket/profile.png"
                // 링크(경로)를 통해 이미지를 가져올 경우 width, height 속성이 꼭 필요
                width={500} height={500}
                alt="Picture of the author"
                // 그리고 외부 링크일 경우 next.config.js 파일에서 설정도 필요 
                // 이러한 번거로움으로 인해 이미지는 <img />가 오히려 편할 수도 있음 
            />

            {/* /////////////////////////////////////////////// */}

            {/* <div className="food"> - in globals.css - */}
            {/* <div className={styles.food}>
                <h4>
                    상품1 { products[0] } $30
                </h4>
            </div> */}

            {/* <div className="food"> - in globals.css - */}
            {/* <div className={styles.food}>
                <h4>
                    상품2 { products[1] } $40
                </h4>
            </div> */}

            {/* <div className="food"> - in globals.css - */}
            {/* <div className={styles.food}>
                <h4>
                    상품3 { products[2] } $50
                </h4>
            </div> */}

        </div>
    )
}