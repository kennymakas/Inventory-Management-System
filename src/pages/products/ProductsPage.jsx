/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import inventWoman from "/src/assets/images/inventWoman.jpg";
import Spinners from "../../components/Spinners";
// import { useNavigate } from 'react-router-dom';



const ProductsPage = () => {
  // const navigate = useNavigate();
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

  const addProductSubmit = async(e)=>{
    e.preventDefault();
    const productData ={
    name,price,category,brand,description,quantity 
    }

    try {
        const response = await fetch("https://inventorymanagement-systemwithstrapi.onrender.com/api/products", {
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
    } 
    
    catch (error) {
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

  // Delete Product 
  const deleteProduct = async (id) => {
    try {
      const deleteRes = await fetch(`https://inventorymanagement-systemwithstrapi.onrender.com/api/products/${id}`, {
        method: "DELETE",
        mode: "cors",
        headers: {
          "Authorization": "7f977e153287cbd660b179f27403a807d761cb760506a50ba97a5460e3c46deb58f3bbd23daabd8697af10c70c871472376c08a3ac27079242fa4063ba9d36ab5f52ab197b154262e43dc667e927af2b824feb67570f049d12b507bcde12aefcf46c0279491f8aa2c426d142bf720646aabcd8103aa39cd2fbf73f7d92084ebc", // Replace with actual token

          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          identifier: "Watuulo Richard",  // Replace with your Strapi username
          password: "Watuulorichardb54f20#",    // Replace with your Strapi password
        }),
      });
  
      if (deleteRes.status === 404) {
        console.error(`Product with ID ${id} does not exist.`);
        return;
      }
  
      if (!deleteRes.ok) {
        throw new Error(`Failed to delete product with ID ${id}: ${deleteRes.statusText}`);
      }
  
      console.log(`Product with ID ${id} deleted successfully.`);
  
      // Update the products state after successful deletion
      setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        console.error("Error deleting product:", error);
    }
  };
  
  const onDeleteClick = (productId) => {
    const confirm = window.confirm("Are You Sure You Want To Delete This Product?");
    if (!confirm) return;
    deleteProduct(productId);
  };

  

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
              {quantity < 10 && (
                <small className="text-danger">Understocked</small>
              )}
              {quantity > 50 && (
                <small className="text-success">Overstocked</small>
              )}
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

            <button type="submit" className="btn btn-primary mb-3">
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

        <div className="col-md-6">
          <img
            src={inventWoman}
            className="img-fluid rounded-md shadow-lg w-100"
            alt="Product Creation Image"
          />
          <h2 className="fw-bold fs-2 text-primary mt-2">
            Inventory Management: Create, Edit, and Delete
          </h2>
          <p>
            Inventory Management is a crucial aspect of any business, ensuring
            that products{Text}
          </p>
          <button
            onClick={() => setShowFullText((prevState) => !prevState)}
            type="button"
            className="btn btn-outline-primary my-2 p-2 w-100"
          >
            {showFullText ? "Less" : "More"}
          </button>
          <ul className="list-group list-group-flush lh-lg">
            <li className="list-group-item">
              <i className="fas fa-square text-primary"></i>{" "}
              <strong>Creating Inventory Items:</strong> Users can easily create
              new inventory items by providing essential details such as item
              name, description, quantity, and price.
            </li>
            <li className="list-group-item">
              <i className="fas fa-square text-primary"></i>{" "}
              <strong>Editing & Deleting Inventory Items:</strong> Modify Item
              Details: Users can update information such as price, quantity, or
              description whenever changes occur. Also Users can delete obsolete
              or discontinued items from the inventory.
            </li>
          </ul>
        </div>
      </div>

      <hr />

      <table className="table my-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  {product.quantity}
                  {product.quantity < 10 && (
                    <small className="text-danger d-block">Understocked</small>
                  )}
                  {product.quantity > 50 && (
                    <small className="text-success d-block">Overstocked</small>
                  )}
                </td>
                <td style={{ width:"10px", whiteSpace: "nowrap"}}>
                  <button
                    onClick={() => handleEdit(product)}
                    className="btn btn-primary btn-sm">
                    Edit
                  </button>
                  <button
                    onClick={ () => onDeleteClick(product.documentId)}
                    className="btn btn-danger btn-sm mx-1">
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No Products Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsPage;
