// app/api/products/route.ts

import { NextResponse } from "next/server";

// Sample product data to be fetched by API
const products = [
  {
    id: 1,
    name: "Burger",
    price: 220,
    imageSrc: "/images/unsplash_dphM2U1xq0U (2).png",
  },
  {
    id: 2,
    name: "Juicy Burger",
    price: 25.0,
    imageSrc: "/images/unsplash_-GFCYhoRe48.png",
  },
  {
    id: 3,
    name: "Donuts",
    price: 20.0,
    imageSrc: "/images/unsplash_q54Oxq44MZs.png",
  },
  {
    id: 4,
    name: "Double burger",
    price: 15.0,
    imageSrc: "/images/unsplash_-GFCYhoRe48.png",
  },
  {
    id: 5,
    name: "Fruit Salad",
    price: 12.0,
    imageSrc: "/images/unsplash_MRHyv-hHxgk.png",
  },
  {
    id: 6,
    name: "Egg Salad",
    price: 8.0,
    imageSrc: "/images/unsplash_-lHZUkiWM74.png",
  },
  {
    id: 7,
    name: "Classic Tacos",
    price: 18.0,
    imageSrc: "/images/Rectangle 8874.png",
  },
  {
    id: 8,
    name: "Cup Cake",
    price: 123,
    imageSrc: "/images/unsplash_90HdOlGbjck.png",
  },
  {
    id: 9,
    name: "Juice",
    price: 28,
    imageSrc: "/images/unsplash_akwA-GPF710.png",
  },
];

export async function GET() {
  return NextResponse.json(products);
}
