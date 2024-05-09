'use client'
import Image from 'next/image';
import React from 'react'
import axios from 'axios';

// ? NOTA: Este es solo un ejemplo para ilustrar el objeto de datos del producto.
// ? En un entorno de producción real, los datos del producto provendrían de una base de datos o de un servidor.
let productData = {
  title: "Hamburguesa doble carne",
  quantity: 1,
  price: 5000,
};

type Props = {}

const createPreference = async () => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/create_preference",
      productData
    );
    console.log(response);
    const { redirectUrl } = response.data;
    return redirectUrl;
  } catch (error) {
    console.log(error);
  }
};

const handleBuy = async () => {
  console.log("Comprando...");
  const url = await createPreference();
  if (url) window.location.href = url;
};

function Products(props: Props) {

  return (
    <article className="p-8 bg-slate-800 rounded-xl text-white border border-slate-600">
      <div className="w-56 rounded-xl overflow-hidden">
        <Image
          width={300}
          height={300}
          src="https://d31npzejelj8v1.cloudfront.net/media/recipemanager/recipe/1687289598_doble-carne.jpg"
          alt="Hamburguesa deliciosa"
          priority
        />
      </div>
      <div className="space-y-2 mt-2">
        <h3 className="text-2xl font-bold text-red-300">{productData.title}</h3>
        <p className="text-xl font-semibold mb-2">${productData.price}</p>
        <button
          className="py-2 w-full bg-emerald-600 hover:bg-emerald-500 hover:font-bold rounded-xl"
          onClick={handleBuy}
        >
          Comprar
        </button>
      </div>
    </article>
  )
}

export default Products