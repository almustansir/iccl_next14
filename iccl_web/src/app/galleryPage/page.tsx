import React from "react";
import ProductCardComp from "../components/ProductCardComp";

const page = () => {
  return (
    <div>
      <h1 className=" mt-10 text-center text-xl font-bold md:text-4xl md:font-extrabold">
        Our products
      </h1>
      <div className=" mt-8 grid grid-cols-1 gap-4 md:grid-cols-4 place-items-center mx-16 md:mx-24 md:gap-5">
        <ProductCardComp
          imgSrc="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgAlt="Black tShirt"
          title="705 Black Men&aposs T-shirt"
          price={195}
          productId="001"
        />
        <ProductCardComp
          imgSrc="https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgAlt="Black tShirt"
          title="705 White Men&aposs T-shirt"
          price={195}
          productId="002"
        />
        <ProductCardComp
          imgSrc="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgAlt="Black tShirt"
          title="705 Black Men&aposs T-shirt"
          price={195}
          productId="003"
        />
        <ProductCardComp
          imgSrc="https://images.unsplash.com/photo-1565084888279-aca607ecce0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgAlt="Base Jeans"
          title="705 Black Men&aposs T-shirt"
          price={495}
          productId="004"
        />
        <ProductCardComp
          imgSrc="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgAlt="Black tShirt"
          title="705 Black Men&aposs T-shirt"
          price={195}
          productId="005"
        />
        <ProductCardComp
          imgSrc="https://images.unsplash.com/photo-1716541424893-734612ddcabb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgAlt="Black tShirt"
          title="Blook T-shirt"
          price={295}
          productId="006"
        />
        <ProductCardComp
          imgSrc="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgAlt="Black tShirt"
          title="705 Black Men&aposs T-shirt"
          price={195}
          productId="007"
        />
      </div>
    </div>
  );
};

export default page;
