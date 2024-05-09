import { MercadoPagoConfig } from "mercadopago";
import { Preference } from "mercadopago";

import { NextResponse } from "next/server";



export async function POST(req: Request, res: NextResponse) {
  const accessToken = process.env.ACCESS_TOKEN || ""; // ? Assign an empty string if ACCESS_TOKEN is undefined
  const client = new MercadoPagoConfig({ accessToken });

  const request = await req.json();
  const { title, quantity, price } = request;
  // ? console.log(request);
  const body = {
    items: [
      {
        id: "1",
        category_id: '1',
        currency_id: "ARS",
        description: "Comida Rapida",
        title,
        quantity: Number(quantity),
        unit_price: Number(price),
      }
    ],
    back_urls: {
      success: "http://localhost:3000/success",
      failure: "http://localhost:3000/failure",
      pending: "http://localhost:3000/pending",
    },
    auto_return: "approved"
  };

  try {
    const preference = await new Preference(client).create({ body });
    console.log("Preference created: ", preference);

    return NextResponse.json({ redirectUrl: preference.sandbox_init_point });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal server error" })
  }

}