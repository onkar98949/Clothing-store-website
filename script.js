function addToCart(Imagesrc,name,price){
    const cartItem= document.createElement("div");

    const productimg = document.createElement("img");
    productimg.src=Imagesrc;
    productimg.width=130;
    productimg.style.marginLeft="100px";
    productimg.style.borderRadius="10px";

    const productDetails = document.createElement("div");
    const productDetails1 = document.createElement("p");
    const productDetails2 = document.createElement("p");

    productDetails1.textContent= ` Product: ${name}`;
    productDetails2.textContent= ` Price: ${price}`;

    productDetails1.style.fontSize="25px";
    productDetails2.style.fontSize="25px";
    productDetails1.style.marginTop="40px";
    productDetails.style.marginLeft="20px";

    productDetails.appendChild(productDetails1);
    productDetails.appendChild(productDetails2);
    productDetails.style.width="400px";
   
  
    cartItem.appendChild(productimg);
    cartItem.appendChild(productDetails);
    cartItem.style.display="flex";
    cartItem.style.margin="10px";

    document.querySelector('.cart').appendChild(cartItem);
}