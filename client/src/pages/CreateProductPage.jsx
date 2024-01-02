import CreateProductForm from "../components/CreateProductForm";
import { useNavigate } from "react-router-dom";

function CreateProductPage() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Create Product Page</h1>
      <CreateProductForm />
      <Link onClick={() => navigate("/")}>Back to Home</Link>

    </div>
  );
}

export default CreateProductPage;
