
import React from 'react';
import { products } from '../assets/halper/dummyData';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';



export default function Details() {
    const [searchParams] = useSearchParams();
    const [product, setProducts] = useState([])
    const [productSrc, setProductSrc] = useState('')
    const [media, setMedia] = useState([])
    const item = products
    let id = searchParams.get('id')

    useEffect(() => {
        const data = item.filter((x) => {
            let obj = x.id === id
            return obj
        })
        setProducts(data[0])
        setProductSrc(data[0].featureImage)
        setMedia( data[0].media)
    }, [searchParams])
    console.log("product", product);
    console.log("product", media);

    return (
        <div className="container_main">
            <div className='product_wrapper'>
                <div className='media_container'>
                    <div className='media_carousal'>
                        {
                        //     // JSON.stringify(product.media)
                        //   media?.map((x)=>{
                        //         return(
                        //             <img src={x.src} onClick={setProductSrc(x.src)} alt="a" ></img>
                        //         )
                        //     })
                        }
                    </div>
                    <img src={productSrc} alt="p"></img>
                </div>
                <div className='details_container'>

                </div>
            </div>
        </div >
    );
}
