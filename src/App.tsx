import { useEffect, useRef, useState } from "react";
import "./App.css";
import Footer from "./components/footer/footer";

type Product = {
  id: number;
  productName: string;
  price: string;
  photo: string;
  descriptionShort: string;
  amount: number;
};

export default function App() {
  const myModal = useRef<any>();
  const [dataAPI, setDataAPI] = useState<Product[]>([]);
  const [phone, setPhone] = useState<Product>({
    id: 1,
    productName: "",
    price: "",
    photo: "",
    descriptionShort: "",
    amount: 1,
  });

  useEffect(() => {
    async function fetchAPI() {
      const req = await fetch(
        "https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json"
      );
      const res = await req.json();
      setDataAPI(res.products);
    }
    fetchAPI();
  }, []);

  const handleModal = (e: Product) => {
    myModal.current?.showModal();
    setPhone({
      ...e,
      amount: 1,
    });
  };

  const handlePlus = () => {
    setPhone((prev) => ({ ...prev, amount: prev.amount + 1 }));
  };

  const handleMinus = () => {
    setPhone((prev) => (prev.amount > 1 ? { ...prev, amount: prev.amount - 1 } : prev));
  };

  return (
    <>
      <div className="grid">
        {dataAPI.map((e) => (
          <div key={e.id} className="card">
            <img src={e.photo} alt="not-found thumb" className="product-image" />
            <p>{e.productName}</p>
            <h2>{e.price}</h2>
            <p style={{ color: "blue" }}>frete grátis</p>
            <button onClick={() => handleModal(e)}>COMPRAR</button>
          </div>
        ))}
      </div>

      <dialog ref={myModal}>
        <div className="modal-header">
          <button onClick={() => myModal.current?.close()} className="">
            X
          </button>
        </div>

        <div className="modal-body">
          <div>
            <img src={phone?.photo} alt="not-found thumb" className="product-image" />
          </div>
          <div>
            <p>{phone?.productName}</p>
            <p>{parseFloat(phone?.price) * phone?.amount}</p>
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={handleMinus} className="btn-minus">
            -
          </button>
          <p>{phone?.amount}</p>
          <button onClick={handlePlus} className="btn-plus">
            +
          </button>
          <button className="btn-buy">COMPRAR</button>
        </div>
      </dialog>

      <Footer />
    </>
  );
}
