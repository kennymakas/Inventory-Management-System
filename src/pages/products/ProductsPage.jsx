import { useState, useEffect } from "react";
import inventWoman from "/src/assets/images/inventWoman.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Spinners from "../../components/Spinners";
const productsData = {
  data: [
    {
      id: 2,
      documentId: "c82vezrwpmcpecc9uaeicb2b",
      name: "iphone 16 Pro",
      brand: "Apple Technologies",
      category: "Smart Phone",
      price: "$1,199",
      description:
        "A high-end smartphone with excellent features and performance.",
      createdDate: "2024-07-20",
      createdAt: "2024-10-10T21:07:43.074Z",
      updatedAt: "2024-10-10T21:07:46.971Z",
      publishedAt: "2024-10-10T21:07:46.986Z",
      locale: "en",
      productImage: {
        id: 1,
        documentId: "l2oqscpmxsbhk7gcr5guir95",
        name: "iPhone 16 Pro 256GB (Desert Titanium).png",
        alternativeText: null,
        caption: null,
        width: 1024,
        height: 1024,
        formats: {
          thumbnail: {
            name: "thumbnail_iPhone 16 Pro 256GB (Desert Titanium).png",
            hash: "thumbnail_i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb",
            ext: ".png",
            mime: "image/png",
            path: null,
            width: 156,
            height: 156,
            size: 23.66,
            sizeInBytes: 23655,
            url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728594444/thumbnail_i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb.png",
            provider_metadata: {
              public_id:
                "thumbnail_i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb",
              resource_type: "image",
            },
          },
          medium: {
            name: "medium_iPhone 16 Pro 256GB (Desert Titanium).png",
            hash: "medium_i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb",
            ext: ".png",
            mime: "image/png",
            path: null,
            width: 750,
            height: 750,
            size: 366.75,
            sizeInBytes: 366752,
            url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728594444/medium_i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb.png",
            provider_metadata: {
              public_id:
                "medium_i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb",
              resource_type: "image",
            },
          },
          small: {
            name: "small_iPhone 16 Pro 256GB (Desert Titanium).png",
            hash: "small_i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb",
            ext: ".png",
            mime: "image/png",
            path: null,
            width: 500,
            height: 500,
            size: 164.37,
            sizeInBytes: 164370,
            url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728594444/small_i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb.png",
            provider_metadata: {
              public_id:
                "small_i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb",
              resource_type: "image",
            },
          },
          large: {
            name: "large_iPhone 16 Pro 256GB (Desert Titanium).png",
            hash: "large_i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb",
            ext: ".png",
            mime: "image/png",
            path: null,
            width: 1000,
            height: 1000,
            size: 603.37,
            sizeInBytes: 603372,
            url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728594445/large_i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb.png",
            provider_metadata: {
              public_id:
                "large_i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb",
              resource_type: "image",
            },
          },
        },
        hash: "i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb",
        ext: ".png",
        mime: "image/png",
        size: 121.36,
        url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728594444/i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb.png",
        previewUrl: null,
        provider: "cloudinary",
        provider_metadata: {
          public_id: "i_Phone_16_Pro_256_GB_Desert_Titanium_99af07dcfb",
          resource_type: "image",
        },
        createdAt: "2024-10-10T21:07:25.743Z",
        updatedAt: "2024-10-10T21:07:25.743Z",
        publishedAt: "2024-10-10T21:07:25.752Z",
        locale: null,
      },
      localizations: [],
    },
    {
      id: 5,
      documentId: "getgqqbvhlpvr82tnl0zqb7e",
      name: "Apple AirPods Pro",
      brand: "Apple Technologies",
      category: "Wireless Earbuds ",
      price: "$249.00",
      description:
        "Wireless earbuds with noise cancellation and long battery life.",
      createdDate: "2024-07-21",
      createdAt: "2024-10-10T21:18:14.391Z",
      updatedAt: "2024-10-10T21:18:49.996Z",
      publishedAt: "2024-10-10T21:18:50.022Z",
      locale: "en",
      productImage: {
        id: 2,
        documentId: "fi3elhs7gjnpejx7pnxf2vbe",
        name: "Apple-EarBuds.jpg",
        alternativeText: null,
        caption: null,
        width: 500,
        height: 500,
        formats: {
          thumbnail: {
            name: "thumbnail_Apple-EarBuds.jpg",
            hash: "thumbnail_Apple_Ear_Buds_be88cbabea",
            ext: ".jpg",
            mime: "image/jpeg",
            path: null,
            width: 156,
            height: 156,
            size: 2.36,
            sizeInBytes: 2356,
            url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728595084/thumbnail_Apple_Ear_Buds_be88cbabea.jpg",
            provider_metadata: {
              public_id: "thumbnail_Apple_Ear_Buds_be88cbabea",
              resource_type: "image",
            },
          },
        },
        hash: "Apple_Ear_Buds_be88cbabea",
        ext: ".jpg",
        mime: "image/jpeg",
        size: 11.69,
        url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728595084/Apple_Ear_Buds_be88cbabea.jpg",
        previewUrl: null,
        provider: "cloudinary",
        provider_metadata: {
          public_id: "Apple_Ear_Buds_be88cbabea",
          resource_type: "image",
        },
        createdAt: "2024-10-10T21:18:04.518Z",
        updatedAt: "2024-10-10T21:18:04.518Z",
        publishedAt: "2024-10-10T21:18:04.522Z",
        locale: null,
      },
      localizations: [],
    },
    {
      id: 7,
      documentId: "yzzr9cgocwpibzb6heavlpey",
      name: "Samsung Galaxy Watch",
      brand: "Samsung Technologies",
      category: "Smart Watch",
      price: "$199.99",
      description:
        "A smartwatch with fitness tracking and notification features",
      createdDate: null,
      createdAt: "2024-10-11T06:01:28.852Z",
      updatedAt: "2024-10-11T06:01:31.504Z",
      publishedAt: "2024-10-11T06:01:31.529Z",
      locale: "en",
      productImage: {
        id: 3,
        documentId: "tdsa7xgu2i15kpis3043kmfq",
        name: "Smart-Watch.jpg",
        alternativeText: null,
        caption: null,
        width: 600,
        height: 600,
        formats: {
          thumbnail: {
            name: "thumbnail_Smart-Watch.jpg",
            hash: "thumbnail_Smart_Watch_4962ba6421",
            ext: ".jpg",
            mime: "image/jpeg",
            path: null,
            width: 156,
            height: 156,
            size: 5.79,
            sizeInBytes: 5785,
            url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728626468/thumbnail_Smart_Watch_4962ba6421.jpg",
            provider_metadata: {
              public_id: "thumbnail_Smart_Watch_4962ba6421",
              resource_type: "image",
            },
          },
          small: {
            name: "small_Smart-Watch.jpg",
            hash: "small_Smart_Watch_4962ba6421",
            ext: ".jpg",
            mime: "image/jpeg",
            path: null,
            width: 500,
            height: 500,
            size: 42.04,
            sizeInBytes: 42036,
            url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728626469/small_Smart_Watch_4962ba6421.jpg",
            provider_metadata: {
              public_id: "small_Smart_Watch_4962ba6421",
              resource_type: "image",
            },
          },
        },
        hash: "Smart_Watch_4962ba6421",
        ext: ".jpg",
        mime: "image/jpeg",
        size: 52.31,
        url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728626469/Smart_Watch_4962ba6421.jpg",
        previewUrl: null,
        provider: "cloudinary",
        provider_metadata: {
          public_id: "Smart_Watch_4962ba6421",
          resource_type: "image",
        },
        createdAt: "2024-10-11T06:01:09.946Z",
        updatedAt: "2024-10-11T06:01:09.946Z",
        publishedAt: "2024-10-11T06:01:09.948Z",
        locale: null,
      },
      localizations: [],
    },
    {
      id: 9,
      documentId: "wpzhqkt3rzicn3h3ty7u56vt",
      name: "ASUS TUF Gaming A15 FA507NU – Ryzen 7",
      brand: "ASUS",
      category: "Gaming Laptop",
      price: "$1599.99",
      description:
        "A powerful laptop designed for gamers with a high-refresh-rate display.",
      createdDate: "2023-04-11",
      createdAt: "2024-10-11T06:06:54.587Z",
      updatedAt: "2024-10-11T06:06:56.660Z",
      publishedAt: "2024-10-11T06:06:56.674Z",
      locale: "en",
      productImage: {
        id: 4,
        documentId: "fgvly23gse85y6vts05thovn",
        name: "ASUS.jpg",
        alternativeText: null,
        caption: null,
        width: 500,
        height: 500,
        formats: {
          thumbnail: {
            name: "thumbnail_ASUS.jpg",
            hash: "thumbnail_ASUS_002a3265ff",
            ext: ".jpg",
            mime: "image/jpeg",
            path: null,
            width: 156,
            height: 156,
            size: 4.7,
            sizeInBytes: 4701,
            url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728626808/thumbnail_ASUS_002a3265ff.jpg",
            provider_metadata: {
              public_id: "thumbnail_ASUS_002a3265ff",
              resource_type: "image",
            },
          },
        },
        hash: "ASUS_002a3265ff",
        ext: ".jpg",
        mime: "image/jpeg",
        size: 36.08,
        url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728626808/ASUS_002a3265ff.jpg",
        previewUrl: null,
        provider: "cloudinary",
        provider_metadata: {
          public_id: "ASUS_002a3265ff",
          resource_type: "image",
        },
        createdAt: "2024-10-11T06:06:48.921Z",
        updatedAt: "2024-10-11T06:06:48.921Z",
        publishedAt: "2024-10-11T06:06:48.923Z",
        locale: null,
      },
      localizations: [],
    },
    {
      id: 11,
      documentId: "rumsnqjatffg6zndtkoexosp",
      name: "4K Ultra HD Smart LED TV with HDR",
      brand: "Sony",
      category: "Television",
      price: "$799.99",
      description:
        "A 55-inch 4K Ultra HD TV with smart features and HDR support.",
      createdDate: "2024-07-20",
      createdAt: "2024-10-11T06:10:45.220Z",
      updatedAt: "2024-10-11T06:10:47.131Z",
      publishedAt: "2024-10-11T06:10:47.149Z",
      locale: "en",
      productImage: {
        id: 5,
        documentId: "j8d8aczz7ar3f0b2gw3lvmg8",
        name: "sony.jpg",
        alternativeText: null,
        caption: null,
        width: 974,
        height: 645,
        formats: {
          thumbnail: {
            name: "thumbnail_sony.jpg",
            hash: "thumbnail_sony_050e909de9",
            ext: ".jpg",
            mime: "image/jpeg",
            path: null,
            width: 236,
            height: 156,
            size: 10.42,
            sizeInBytes: 10415,
            url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728627037/thumbnail_sony_050e909de9.jpg",
            provider_metadata: {
              public_id: "thumbnail_sony_050e909de9",
              resource_type: "image",
            },
          },
          medium: {
            name: "medium_sony.jpg",
            hash: "medium_sony_050e909de9",
            ext: ".jpg",
            mime: "image/jpeg",
            path: null,
            width: 750,
            height: 497,
            size: 80.6,
            sizeInBytes: 80597,
            url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728627037/medium_sony_050e909de9.jpg",
            provider_metadata: {
              public_id: "medium_sony_050e909de9",
              resource_type: "image",
            },
          },
          small: {
            name: "small_sony.jpg",
            hash: "small_sony_050e909de9",
            ext: ".jpg",
            mime: "image/jpeg",
            path: null,
            width: 500,
            height: 331,
            size: 39.74,
            sizeInBytes: 39737,
            url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728627037/small_sony_050e909de9.jpg",
            provider_metadata: {
              public_id: "small_sony_050e909de9",
              resource_type: "image",
            },
          },
        },
        hash: "sony_050e909de9",
        ext: ".jpg",
        mime: "image/jpeg",
        size: 119.63,
        url: "https://res.cloudinary.com/daovd5ypy/image/upload/v1728627038/sony_050e909de9.jpg",
        previewUrl: null,
        provider: "cloudinary",
        provider_metadata: {
          public_id: "sony_050e909de9",
          resource_type: "image",
        },
        createdAt: "2024-10-11T06:10:38.504Z",
        updatedAt: "2024-10-11T06:10:38.504Z",
        publishedAt: "2024-10-11T06:10:38.505Z",
        locale: null,
      },
      localizations: [],
    },
  ],
  meta: { pagination: { page: 1, pageSize: 25, pageCount: 1, total: 5 } },
};
const ProductsPage = ({ addProductSubmit }) => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:1337/api/products?populate=*');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log('Error Fetching Data', error);
      } finally {
        setTimeout(()=>{setLoading(false)}, 3000)
      }
      
    }

    fetchProducts();
  }, []);

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productDate, setProductDate] = useState("");
  const [productImage, setProductImage] = useState("");

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newProduct = {
      productName,
      productPrice,
      productCategory,
      productDescription,
      productDate,
      productImage,
    };

    addProductSubmit(newProduct)

    return navigate('/products')
  };
  if(loading) {
    return <Spinners loading={ loading }/>
  }
  return (
    <div className="container p-5 bg-light my-5">
      <div className="row">
        {/* <!-- Text and Button Column --> */}
        <div className="col-md-6">
          <h1 className="display-5 fw-bold mb-3 text-primary">
            Create a New Product
          </h1>
          <p className="lead mb-4">
            Easily add new products to your store with just a few clicks. Expand
            your inventory now and enhance your customers' shopping experience
            by offering them a wide range of products tailored to their needs.
            Stay ahead of the competition and grow your business today!
          </p>
          <div className=" mt-md-5">
            {/* <!-- Button to trigger the modal --> */}
            <button
              type="button"
              className="btn btn-primary btn-lg w-100"
              data-bs-toggle="modal"
              data-bs-target="#productModal"
            >
             <i className="fa-solid fa-circle-plus text-warning"></i> Create New Product
            </button>

            {/* <!-- Modal --> */}
            <div
              className="modal fade"
              id="productModal"
              tabIndex="-1"
              aria-labelledby="productModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="productModalLabel">
                      Add New Product
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>

                  {/* <!-- Modal Body with Form --> */}
                  <div className="modal-body">
                    <form id="productForm" onSubmit={ submitForm }>
                      {/* <!-- Product Name --> */}
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
                          value={productName}
                          onChange={(e) => setProductName(e.target.value)}
                        />
                      </div>

                      {/* <!-- Price --> */}
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
                          value={productPrice}
                          onChange={(e) => setProductPrice(e.target.value)}
                        />
                      </div>

                      {/* <!-- Category --> */}
                      <div className="mb-3">
                        <label htmlFor="productCategory" className="form-label">
                          Category
                        </label>
                        <select
                          className="form-select"
                          id="productCategory"
                          required
                          value={productCategory}
                          onChange={(e) => setProductCategory(e.target.value)}
                        >
                          <option value="">Choose category</option>
                          <option value="Electronics">Electronics</option>
                          <option value="Clothing">Clothing</option>
                          <option value="Furniture">Furniture</option>
                          <option value="Books">Books</option>
                        </select>
                      </div>

                      {/* <!-- Description --> */}
                      <div className="mb-3">
                        <label
                          htmlFor="productDescription"
                          className="form-label"
                        >
                          Description
                        </label>
                        <textarea
                          className="form-control"
                          id="productDescription"
                          rows="3"
                          placeholder="What Does The Product Do...?"
                          required
                          value={productDescription}
                          onChange={(e) =>
                            setProductDescription(e.target.value)
                          }
                        ></textarea>
                      </div>

                      {/* <!-- Product Date --> */}
                      <div className="mb-3">
                        <label htmlFor="productName" className="form-label">
                          Created At
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="productDate"
                          placeholder="Enter product name"
                          required
                          value={productDate}
                          onChange={(e) => setProductDate(e.target.value)}
                        />
                      </div>

                      {/* <!-- Image --> */}
                      
                      <div className="mb-3">
                        <label htmlFor="productImage" className="form-label">
                          Product Image
                        </label>
                        <input
                          type="file"
                          className="form-control"
                          id="productImage"
                          accept="image/*"
                          required
                          value={productImage}
                          onChange={(e) => setProductImage(e.target.files[''])}
                        />
                      </div>
                    </form>
                  </div>

                  {/* <!-- Modal Footer with Save and Cancel Buttons --> */}
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      form="productForm"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Image Column --> */}
        <div className="col-md-6">
          <img
            src={inventWoman}
            className="img-fluid rounded-md shadow-lg w-100 "
            alt="Product Creation Image"
          />
        </div>
      </div>
      <hr />

      <table className="table my-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Category</th>
            <th>Product Description</th>
            <th>Product Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productsData.data.map((product, index) => {
            return (
              <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td><img src={ product.productImage.formats.thumbnail.url } alt="..." width="100" /></td>
                <td>{product.createdAt.slice(0, 10)}</td>
                <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                  <Link
                    to={"/products/edit" + product.id}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => onDeleteClick(product.id)}
                    className="btn btn-danger btn-sm mx-1"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="row">
        <div className="col-md-10 offset-md-1 text-center align-items-center d-flex justify-content-center">
          <a href="" className="btn btn-outline-primary">
            <i className="fa-solid fa-arrow-left fs-4"></i>
          </a>
          <a href="" className="btn btn-outline-primary mx-3">
            <i className="fa-solid fa-arrow-right fs-4"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
