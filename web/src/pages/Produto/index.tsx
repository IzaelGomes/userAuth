import React, { useCallback, useState } from "react";
import { api } from "../../service/api";

const Product = () => {
  const [name, setName] = useState("");
  const [description, setDescriçao] = useState("");

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      const response = await api.post("/products", {
        name,
        description,
      });

      console.log(response.data);
    },
    [name, description]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor=""> Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label htmlFor=""> Descrição </label>
        <input type="text" onChange={(e) => setDescriçao(e.target.value)} />
      </div>

      <div>
        <button type="submit"> cadastrar </button>
      </div>
    </form>
  );
};

export default Product;
