import './pages.css'

import React from 'react';
import { Select } from '@shopify/polaris';
import { Checkbox } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import { EditMajor , OrdersMajor, MobileVerticalDotsMajor} from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';


export default function Products() {

  const [search, setSearch] = useState('')
  const [updated, setUpdated] = useState('');
  const [print, setPrint] = useState('');
  const [brand, setBrand] = useState('');
  const [status, setStatus] = useState('');


  const optionsUpdated = [
    { label: 'Recently update', value: 'recentlyUpdate' },
    { label: 'Recently added', value: 'recentlyAdded' },
  ];
  const optionsStatus = [
    { label: 'Publish', value: 'publish' },
    { label: 'Draft', value: 'draft' },
  ];
  const optionsPrint = [
  ];

  const optionsBrand = [
  ];
  const products = [
    {
      id: "0001",
      productTitle: "Unisex Garment-Dyed Hoodie",
      brand: 'Comfort Colors 1567',
      inventory: 'All in stock',
      status: 'Published',
      url: 'https://images.printify.com/mockup/646a2a0d947ef4614e0d04e3/98514/87002/unisex-garment-dyed-hoodie.jpg?camera_label=front&s=320&t=1684963396359'
    },
    {
      id: "0002",
      productTitle: "Unisex Garment-Dyed Hoodie",
      brand: 'Comfort Colors 1567',
      inventory: 'All in stock',
      status: 'Published',
      url: 'https://images.printify.com/mockup/646a255d01bd727dae08be56/96831/89283/unisex-pocket-tee.jpg?camera_label=front&s=320&t=1684678084901'
    },
    {
      id: "0003",
      productTitle: "Unisex Garment-Dyed Hoodie",
      brand: 'Comfort Colors 1567',
      inventory: 'All in stock',
      status: 'Published',
      url: 'https://images.printify.com/mockup/646a255d01bd727dae08be56/96831/89283/unisex-pocket-tee.jpg?camera_label=front&s=320&t=1684678084901'
    },
    {
      id: "0004",
      productTitle: "Unisex Garment-Dyed Hoodie",
      brand: 'Comfort Colors 1567',
      inventory: 'All in stock',
      status: 'Published',
      url: 'https://images.printify.com/mockup/646a255d01bd727dae08be56/96831/89283/unisex-pocket-tee.jpg?camera_label=front&s=320&t=1684678084901'
    },
  ];
  const [checked, setChecked] = useState(false);
  const showChecked = () => setChecked(!checked);
  const [checkedAll, setCheckedAll] = useState(false);
  const showCheckedAll = () => setCheckedAll(!checkedAll);

  return (
    <div className="container_main">
      <div className='page_header'>
        <h1 className='page_title'>My Products</h1>
        <button className='header_btn' onClick={((e) => { console.log("import") })}>Import Product</button>
      </div >
      <div className='page_content'>
        <div className='Search'>
          <input type='text' className='input_search' placeholder='Search...' value={search} onChange={((e) => setSearch(e.target.value))} />
        </div>
        <div className='filter_box'>
          <Select
            placeholder="Print Provider"
            options={optionsPrint}
            onChange={((e) => setPrint(e.target.value))}
            value={print}
          />
          <Select
            placeholder="Brand"
            options={optionsBrand}
            onChange={((e) => setBrand(e.target.value))}
            value={brand}
          />
          <Select
            className='select_filter'
            placeholder="Status"
            options={optionsStatus}
            onChange={((e) => setStatus(e.target.value))}
            value={status}
          />
          <Select
            placeholder='Recently Updated'
            options={optionsUpdated}
            onChange={((e) => setUpdated(e.target.value))}
            value={updated}
          />
        </div>
        <div className='gridProduct'>
          <div className='Row'>
            <Checkbox
              label="Select All"
              checked={checkedAll}
              onChange={showCheckedAll}
            />
            <p className='row_title'> Produts</p>
            <p className='row_title'> Inventory</p>
            <p className='row_title'> Status</p>
            <p className='row_title'> </p>
          </div>
          {products.map((item) => (
            <div key={item.id} className='Row align_top' style={{marginTop: 20}}>
              <div className='images'>
                <Checkbox
                  checked={checked}
                  onChange={showChecked}
                />
                <img className='p_image' width={110} src={item.url} alt='' />
              </div>
              <div className='p_info'>
                <p className='p_title'> {item.productTitle}</p>
                <span className='p_brand'>{item.brand}</span>
              </div>
              <span className='p_inventory'>{item.inventory}</span>
              <span className='p_status'>{item.status}</span>
              <div className='actions'>
                <Icon
                  source={EditMajor}
                  color="base"
                />
                <Icon
                  source={OrdersMajor}
                  color="base"
                />
                <Icon
                  source={MobileVerticalDotsMajor}
                  color="base"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  );
}
