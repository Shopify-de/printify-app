
import React from 'react';
import { products } from '../assets/halper/dummyData';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';



export default function Details() {
    const [searchParams] = useSearchParams();
    const [product, setProducts] = useState([])
    const [productSrc, setProductSrc] = useState('')
    const item = products
    let id = searchParams.get('id')

    useEffect(() => {
        const data = item.filter((x) => {
            let obj = x.id === id
            return obj
        })
        setProducts(data[0])
        setProductSrc(data[0].featureImage)

    }, [searchParams])



    console.log("product", product);

    return (
        <div style={{ background: "#fff", padding: "30px 0 50px 0" }}>
            <div className="container_main" >
                <div className='product_wrapper'>
                    <div className='media_container'>
                        <div className='media_carousal'>
                            {
                                product?.media?.map((x) => {
                                    return (
                                        <img width={80} src={x.src} />
                                    )
                                })
                            }
                        </div>
                        <img className='main_image' src={productSrc} alt="p"></img>
                    </div>
                    <div className='details_container'>
                        <div className='details_wrapper'>
                            <p className='detail_cat'>{product.category}</p>
                            <h1 className='detail_title'>{product.title}</h1>
                            <p className='detail_tagLine'>{product.tagline}</p>
                            <ul className='detail_desctiption'>
                                <li>Medium fabric (5.3 oz/yd² (180 g/m²))</li>
                                <li>Classic fit</li>
                                <li>Runs true to size</li>
                                <li>100% cotton (fiber content may vary for different colors)</li>
                                <li>Tear-away label</li>
                            </ul>
                            <a href="#details" className='read_more'>
                                Read more
                            </a>
                        </div>
                    </div>
                </div>
                <div className='product_content' id='details'>
                    <div className='content_wrapper'>
                        <h5 className='content_heading'>
                            About
                        </h5>
                        <div className='content_details'>
                            <span className='content_desc'>
                                {product.about}
                            </span>
                        </div>
                    </div>
                    <div className='content_wrapper'>
                        <h5 className='content_heading'>
                            Key features
                        </h5>
                        <div className='content_details'>
                            <div className='features'>
                                {
                                    product?.KeyFeatures?.map((c) => {
                                        return (
                                            <div className='features_item'>
                                                <img width={40} className='feature_img' src={c.src} />
                                                <h6 className='feature_title'>{c.title}</h6>
                                                <p className='feature_des'>{c.des}</p>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                    <div className='content_wrapper'>
                        <h5 className='content_heading'>
                            Care instructions
                        </h5>
                        <div className='content_details'>
                            <span className='content_desc'>
                                {product.instructions}
                            </span>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
}
