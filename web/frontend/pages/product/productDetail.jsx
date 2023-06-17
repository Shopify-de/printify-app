import '../pages.css'

import React  from 'react';
import { useSearchParams } from 'react-router-dom';  



export default function ProductsDetails() {
    const [searchParams] = useSearchParams();
    let id = searchParams.get('id')
    console.log("authorization", id);
    return (
        <div className="container_main">
            id : {id}
        </div >
    );
}
