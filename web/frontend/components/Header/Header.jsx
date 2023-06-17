import './header.css'
import { useState, useCallback } from 'react';
import { NavLink, Link } from "react-router-dom";
import { logo } from '../../assets'

export function Header() {
    const pages = [
        {
            id: 1,
            Title: 'My Products',
            Link: 'product/products/'
        },
    
    {
        id: 2,
        Title: 'Orders',
        Link: '/orders'
    },
    {
        id: 4,
        Title: 'Details',
        Link: 'product/productDetail'
    },

];
    const settings = [
        {
            id: 1,
            Title: 'Dashboard',
            Link: '/'
        },
        {
            id: 2,
            Title: 'My account',
            Link: '/'
        },
        {
            id: 3,
            Title: 'Setting',
            Link: '/'
        },
    ];
     //TOGGLE sidebar component
     const [setting, setSetting] = useState(false);
     const showSettings = () => setSetting(!setting);

    return (
        <div className='Header flex align-center'>

            <div className='Header_content flex space-between align-center'>
                <div className='leftContent flex '>
                    <div className='branding flex align-center'>
                        <Link to='/'><img width={130} src={logo} alt="logo" /></Link>
                    </div>
                    <div className='navigation'>
                        {pages.map((page) => (
                            <div key={page.id} className='nav_item flex align-center '>
                                <NavLink  to={page.Link}>{page.Title}</NavLink>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='userAction flex align-center'>
                    <p className='tag_line'>The Hype Print</p>
                    <button onClick={showSettings} className='avatar'>
                        H
                    </button>
                    <div className={setting ? 'setting active' : 'setting close'}>
                        <div className='account_info'>
                            <p className='account-title'>Jinhyeok (FRANK) Choi</p>
                            <span className="account-email">fchoi-kanji@hotmail.com</span>
                        </div>
                        <hr />
                        <div className='setting_link'>
                        {settings.map((s) => (
                            <div key={s.id} className='setting_item flex align-center '>
                                <NavLink to={s.Link}>{s.Title}</NavLink>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
