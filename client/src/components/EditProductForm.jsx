import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditProductForm() {
  const [nameInput, setNameinput] = useState("");
  const [imgUrlInput, setImgUrlinput] = useState("");
  const [priceInput, setPriceinput] = useState("");
  const [descriptionInput, setDescriptioninput] = useState("");
  const params = useParams();

  const navigate = useNavigate();

  const getProducts = async () => {
    const res = await axios.get(
      `http://localhost:4001/products/${params.productId}`
    );
    setNameinput(res.data.data.name);
    setImgUrlinput(res.data.data.image);
    setPriceinput(res.data.data.price);
    setDescriptioninput(res.data.data.description);
  };

  const editPost = async () => {
    await axios.put(`http://localhost:4001/products/${params.productId}`, {
      name: nameInput,
      price: priceInput,
      image: imgUrlInput,
      description: descriptionInput,
    });
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editPost();
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            onChange={(event) => {
              setNameinput(event.target.value);
            }}
            value={nameInput}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            onChange={(event) => {
              setImgUrlinput(event.target.value);
            }}
            value={imgUrlInput}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            onChange={(event) => {
              setPriceinput(event.target.value);
            }}
            value={priceInput}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            onChange={(event) => {
              setDescriptioninput(event.target.value);
            }}
            value={descriptionInput}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
