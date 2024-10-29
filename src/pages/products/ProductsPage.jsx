/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import inventWoman from "/src/assets/images/inventWoman.jpg";
import Spinners from "../../components/Spinners";


const ProductsPage = (hhdhhe) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);

  const [showFullText, setShowFullText] = useState(false);
  let Text =
    ", raw materials, or resources are tracked, monitored, and managed efficiently. Effective inventory management helps companies maintain a balance between supply and demand, preventing stockouts and overstock situations. Let's explore how the processes of creating, editing, and deleting inventory items work in an inventory management system.";

  if (!showFullText) {
    Text = Text.substring(0, 90) + "......";
  }

  // States for product attributes
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        
          // Fetch from API if not found in localStorage
          const res = await fetch(
            "https://inventorymanagement-systemwithstrapi.onrender.com/api/products"
          );
          const data = await res.json();
          const productData = data.data || [];

          setProducts(productData);
          localStorage.setItem("products", JSON.stringify(productData));
        
      } catch (error) {
        console.log("Error Fetching Data", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };
    fetchProducts();
  }, []);

  const addProductSubmit= async(e)=>{
    e.preventDefault();
    const productData ={
    name,price,category,brand,description,quantity 
    }

    try {
        const response = await fetch("https://inventorymanagement-systemwithstrapi.onrender.com/api/products",{
           method: "POST",
           headers : {
            "Content-Type":"application/json",

           },
           body:JSON.stringify({data:productData})
        })

        if(response.ok){
            const result = await response.json();
            alert("product created")
            console.log("result", result)
        }
    } catch (error) {
        console.error("Error placing order", error)
    }
}

  const handleEdit = (product) => {
    setEditingProduct(product);
    setName(product.name);
    setPrice(product.price);
    setCategory(product.category);
    setBrand(product.brand);
    setDescription(product.description);
    setQuantity(product.quantity); // Added quantity
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    const updatedProducts = products.map((product) =>
      product.id === editingProduct.id
        ? {
            ...product,
            name,
            price,
            category,
            brand,
            description,
            quantity, // Include quantity in the updated product
          }
        : product
    );

    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
    setEditingProduct(null); // Close the editing form
  };

  const onDeleteClick = (productId) => {
    const confirm = window.confirm(
      "Are You Sure You Want To Delete This Product ?"
    );
    if (!confirm) return;

    const updatedProducts = products.filter(
      (product) => product.id !== productId
    );
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));

    deleteProduct(productId);
  };


  const deleteProduct = async(id) =>{
    try {
      
      const response = await fetch(`https://inventorymanagement-systemwithstrapi.onrender.com/api/products/${id}`,{
        method:"Delete"
      });
      
      if(response.ok){
        setProducts(products.filter((product)=>product.id !== id))
        alert("product deleted successfully")
      }else{
        console.error("failed to delete product", response.statusText)
      }
    } catch (error) {
      console.error("Error deleting the product:", error)
      
    }
  }

  if (loading) {
    return <Spinners loading={loading} />;
  }

  return (
    <div className="container p-5 bg-light my-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className="display-5 fw-bold mb-3 text-primary">
            {editingProduct ? "Edit Product" : "Create a New Product"}
          </h1>
          <p className="lead mb-4">
            {editingProduct
              ? "Update the selected product."
              : "Easily add new products to your store with just a few clicks."}
          </p>
          <form onSubmit={editingProduct ? handleUpdate : addProductSubmit}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                className="form-control"
                id="productName"
                placeholder="Enter product name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">
                Price
              </label>
              <input
                type="number"
                className="form-control"
                id="productPrice"
                placeholder="Enter product price"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="brand" className="form-label">
                Product Brand
              </label>
              <input
                type="text"
                className="form-control"
                id="brand"
                placeholder="Enter product brand"
                required
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="productCategory" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                id="productCategory"
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Choose category</option>
                <option value="Agricultural Products">Agricultural Products</option>
                <option value="Grocery Items">Grocery Items</option>
                <option value="Household Essentials">Household Essentials</option>
                <option value="Livestock & Poultry Supplies">Livestock & Poultry Supplies</option>
                <option value="Textiles and Clothing">Textiles and Clothing</option>
                <option value="Hardware and Building Materials">Hardware and Building Materials</option>
                <option value="Fuel & Energy">Fuel & Energy</option>
                <option value="Health and Wellness">Health and Wellness</option>
                <option value="Small Appliances and Tools">Small Appliances and Tools</option>
                <option value="Beverages">Beverages</option>
                <option value="Personal Care and Beauty">Personal Care and Beauty</option>
                <option value="Crafts and Handicrafts">Crafts and Handicrafts</option>
                <option value="Electronic Accessories">Electronic Accessories</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="productQuantity" className="form-label">
                Quantity
              </label>
              <input
                type="number"
                className="form-control"
                id="productQuantity"
                placeholder="Enter quantity"
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            
            </div>

            <div className="mb-3">
              <label htmlFor="productDescription" className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id="productDescription"
                rows="3"
                placeholder="What Does The Product Do...?"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              {editingProduct ? "Update Product" : "Create Product"}
            </button>
            {editingProduct && (
              <button
                type="button"
                className="btn btn-secondary ms-2"
                onClick={() => setEditingProduct(null)}
              >
                Cancel
              </button>
            )}
          </form>
        </div>

       </div>

      
    </div>
  );
};

export default ProductsPage;
