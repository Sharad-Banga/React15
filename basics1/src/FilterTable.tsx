import { useState } from "react";
import type { JSX } from "react/jsx-runtime";

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function FilterTable(){
  return(
    <>
      <FilterableProductTable products = {PRODUCTS} />
    </>
  )
}

function FilterableProductTable({products}:any){
  const [filterText , setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return(
    <>
        <SearchBar filterText={filterText} inStockOnly={inStockOnly} setFilterText={setFilterText} setInStockOnly={setInStockOnly} />
        <ProductTable filterText={filterText} inStockOnly={inStockOnly} products={products}   />
    </>
  )
}

function SearchBar({filterText , inStockOnly ,setInStockOnly,setFilterText}:any){
  return (
    <>
        <input type="text" value={filterText} onChange={e=>{setFilterText(e.target.value)}} />
        <input type="checkbox" checked={inStockOnly} onChange={e=>{setInStockOnly(e.target.checked)}} />
    </>
  )
}


function ProductTable({filterText , inStockOnly ,products}:any){
  let rows: JSX.Element[] = [];
  let lastCategory: any ;

  products.forEach((product:any)=>{

    if(product.name.toLowerCase().indexOf(filterText.toLowerCase())==-1){
      return ;
    }
    if(inStockOnly && !product.stocked){
      return;
    }
    if(product.category != lastCategory){
      rows.push(
        <>
        <ProductCat product={product} />
        <br /></>
      )
    }
    rows.push(
      <>
      <ProductRow product={product} />
      <br />
      </>
    
    )
    lastCategory = product.category;
  })
  return(
    <>
        <h3>Name  ----  Price</h3>
        {rows}
    </>
  )
}

function ProductCat({product}:any){

  return(
    <>
      {product.category}
    </>
  )
}

function ProductRow({product}:any){

  return(
    <>
      {product.name} ----- {product.price}
    </>
  )
}
