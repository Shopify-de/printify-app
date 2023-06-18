import React from 'react'

import { Card } from '../Card'
import { products, category } from '../../assets/halper/dummyData'

export function Catalog(props) {

    const data = products
    const datacategory = category

    return (
        <div className="main_wrapper">
            <h1 className="title"> Printify's Product Catalog</h1>
            <div className='banner'>
                <div className='banner_content'>
                    <h6 className='banner_title'>Custom inserts now <br /> available</h6>
                    <p className='banner_description'>Tick all the boxes for your brand with Dimona Tee’s custom inserts.</p>
                </div>
            </div>

            <div className='product_grid'>
                <div className='grid_head'>
                    <div className='grid_title'>New Arrivals</div>
                    <a className='grid_link' href="#">
                        See all New Arrivals
                    </a>

                </div>
                <div className='cards'>
                    {data?.map((item, i) => {
                        
                        return item.tag.includes("New arrivals") && i < 2 && <Card key={i} data={item} />
                    })
                    }
                </div>
            </div>
            <div className='print_banner'>
                <div className='banner_content'>
                    <h6 className='banner_title'>Print providers</h6>
                    <p className='banner_description'>Printify is the largest print on demand network</p>
                </div>
            </div>
            <div className='category_banner'>
                {
                    datacategory.map((data) => {
                        return (
                            < a href="#">
                                <div className='cat_item'>
                                    <img className='cat_img' src={data.src} />
                                    <h6 className='cat_title'>{data.title}</h6>
                                </div>
                            </a>
                        )
                    })
                }
            </div>
            <div className='product_grid'>
                <div className='grid_head'>
                    <div className='grid_title'>Eco-friendly</div>
                    <a className='grid_link' href="#">
                        See all Eco-friendly
                    </a>

                </div>
                <div className='cards'>
                    {data?.map((item, i) => {
                        return <Card key={i} data={item} />
                    })
                    }
                </div>
            </div>
            <div className='product_grid'>
                <div className='grid_head'>
                    <div className='grid_title'>AOP Clothing</div>
                    <a className='grid_link' href="#">
                        See all AOP Clothing
                    </a>

                </div>
                <div className='cards'>
                    {data?.map((item, i) => {
                        return <Card key={i} data={item} />
                    })
                    }
                </div>
            </div>
            <div className='product_grid'>
                <div className='grid_head'>
                    <div className='grid_title'>Neck Labels</div>
                    <a className='grid_link' href="#">
                        See all Neck Labels
                    </a>

                </div>
                <div className='cards'>
                    {data?.map((item, i) => {
                        return <Card key={i} data={item} />
                    })
                    }
                </div>
            </div>


        </div>
    )
}
