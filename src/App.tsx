import { useEffect, useRef, useState } from "react";
import "./App.css"; 
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section from "./components/Section";

type Product = {
  id: number;
  productName: string;
  price: string | bigint | any;
  photo: string;
  descriptionShort: string;
  amount: number;
}

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

export default function App() {
  const myModal = useRef<any>();
  const [dataAPI, setDataAPI] = useState<Product[]>([]);
  const [phone, setPhone] = useState<Product | any>({
    id: 1,
    productName: '',
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

  const handleModal = (e: any) => {
    myModal.current.showModal()
    setPhone({
      ...e,
      amount: 1
    })
  }

  const handlePlus = () => {
    phone.amount += 1;
    setPhone({
      ...phone
    })
  }

  const handleMinus = () => {
    if (phone.amount - 1 === 0) return null
    phone.amount -= 1;
    setPhone({
      ...phone
    })
  }

  return (
    <>
      <Header />
      <Section />
      <main>

        <div className="grid">
          {dataAPI.map((e) => (
            <div key={e.id} className="card">
              <img src={e.photo} alt='not-found thumb' className="product-image" />
              <p>{e.productName}</p>
              <h2>{currency.format(e.price)}</h2>
              <p style={{ color: 'blue' }}>frete grátis</p>
              <button onClick={() => handleModal(e)}>COMPRAR</button>
            </div>
          ))}
        </div>

        <dialog ref={myModal}>
          <div className="modal-header">
            <button
              onClick={() => myModal.current.close()}
              className=""
            >
              X
            </button>
          </div>

          <div className="modal-body">
            <div>
              <img src={phone?.photo} alt='not-found thumb' className="product-image" />
            </div>
            <div>
              <p>{phone?.productName}</p>
              <p>{currency.format(phone?.price * phone?.amount)}</p>
            </div>
          </div>

          <div className="modal-footer">
            <button onClick={handleMinus} className="btn-minus">-</button>
            <p>{phone?.amount}</p>
            <button onClick={handlePlus} className="btn-plus">+</button>
            <button className="btn-buy">COMPRAR</button>
          </div>
        </dialog>
      </main>
      <Footer />
    </>
  );
}