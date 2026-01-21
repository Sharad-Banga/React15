import { useState } from "react";

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function FilterTable(){
  return (
    <>
      <FilterableProductTable products={PRODUCTS} />
    </>
  )
}

function FilterableProductTable({products}:any){
  const [filterText , setFilterText] = useState('');
  const [ inStockOnly , setInStockOnly] = useState(false);
  return(
    <>
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} setFilterText={setFilterText} setInStockOnly={setInStockOnly} />
      <ProductTable filterText={filterText} inStockOnly={inStockOnly} products={products} />
    </>
  )
}


function SearchBar({filterText, inStockOnly,setFilterText , setInStockOnly}:any){
  return (
    <>
    <input type="text" value={filterText} id="" onChange={(e) => {setFilterText(e.target.value)}} />
    <input type="checkbox" checked={inStockOnly} id="" onChange={(e) => {setInStockOnly(e.target.checked)}} />
    </>
  )
}

function ProductTable({filterText, inStockOnly,products}:any){

  const filtered = products.filter((p:any)=>{

    if(p.name.startsWith(filterText)){
      if(inStockOnly && p.stocked){
        return true;
      }
      else if(!inStockOnly ){
        return true;
      }
    }
    else{
      false;
    }

  })

  return(
    <>
    {
      filtered.map((p:any)=>{
        return(
          <ul>
            <li>
              {p.name} -- {p.price}
            </li>
          </ul>

        )
      })

    }
    </>
  )
}