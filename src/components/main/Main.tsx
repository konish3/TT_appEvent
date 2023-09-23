import React from "react";
import './main.scss'
import { Catalog } from "./catalog/Catalog";

export const Main: React.FC = () => {
  return <main className="main">
    <Catalog />
  </main>
}