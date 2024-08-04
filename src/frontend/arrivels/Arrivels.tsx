import { ArrivelCart } from "./arrivel-cart";

export default function Arrivels() {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex items-stretch border border-[#e5e7eb]">
          <ArrivelCart />
          <ArrivelCart />
          <ArrivelCart />
          <ArrivelCart />
          <ArrivelCart />
        </div>
      </div>
    </div>
  )
}
