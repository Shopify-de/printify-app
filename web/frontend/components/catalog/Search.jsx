import React, { useEffect, useState } from 'react'
import { Card } from '../Card'
import { products } from '../../assets/halper/dummyData'

export function Search(props) {
    const data = props.data
    const productData = products
    const [filter, setFilter] = useState(productData)

    useEffect(() => {
        const filterData = productData.filter((p) => {
            const items = p.title.toLocaleLowerCase().includes(data)
            return items
        })
        setFilter(filterData)
    }, [data])
    // console.log("items",filter);

    return (
        <div className='search_wrapper'>
            <div className="main_wrapper">
                <h6 className="search_result"> Results for {`'${data}'`}</h6>
                <div className='search_content'>
                    <div className='search_filter'>Filters</div>
                    <div className='results_wrapper'>

                    
                {
                    filter.length > 0 ?
                        <div className='cards'>
                            {
                                filter?.map((item, i) => {
                                    return <Card key={i} data={item} />
                                })
                            }
                        </div>
                        :
                        <div className='not_found'> <span>We could not find any matches for {`"${data}"`}.
                        Please check your spelling or try another search term.</span></div>
                }
                </div>
                </div>
            </div>
        </div>
    )

}
