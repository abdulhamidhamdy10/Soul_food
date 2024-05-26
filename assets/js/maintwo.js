const product = [
    {
        id: 1,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Roast chicken',
        price: 67,
      },
      {
        id: 2,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'BBQ ribs',
        price: 108,
      },
      {
        id: 3,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Pulled pork',
        price: 82,
      },
      {
        id: 4,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Meatloaf',
        price: 145,
      },
      {
        id: 5,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Beef brisket',
        price: 51,
      },
      {
        id: 6,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Lamb chops',
        price: 98,
      },
      {
        id: 7,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Baja Fish Tacos',
        price: 72,
      },
      {
        id: 8,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Mahi Mahi',
        price: 121,
      },
      {
        id: 9,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Bagli',
        price: 94,
      },
      {
        id: 10,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Halibut Fillet',
        price: 62,
      },
      {
        id: 11,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Calamari',
        price: 179,
      },
      {
        id: 12,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Bouillabaisse',
        price: 105,
      },
      {
        id: 13,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Roast beef',
        price: 87,
      },
      {
        id: 14,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Pastrami',
        price: 129,
      },
      {
        id: 15,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Meatball sub',
        price: 73,
      },
      {
        id: 16,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Steak',
        price: 145,
      },
      {
        id: 17,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Pulled pork',
        price: 90,
      },
      {
        id: 18,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Corned beef',
        price: 61,
      },
      {
        id: 19,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Beef burger',
        price: 105,
      },
      {
        id: 20,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Ham sandwich',
        price: 87,
      },
      {
        id: 21,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Turkey club sandwich',
        price: 113,
      },
      {
        id: 22,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'BLT sandwich',
        price: 69,
      },
      {
        id: 23,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Grilled cheese sandwich',
        price: 84,
      },
      {
        id: 24,
        image: 'image/sea/sushi-png-sushi-png-image-2432.png',
        title: 'Chicken salad sandwich',
        price: 98,
      }
  
    
  ];
  const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
  
  document.getElementById('roottwo').innerHTML = categories.map((item, index)=>
  {
    var {image, title, price} = item;
    return(
        `
        
              <div class='box'>
                  <div class='img-box'>
                      <img class='images' src=${image}></img>
                  </div>
                  <p>${title}</p>
                  <div class='bottom '>
                  
                  <h2>$ ${price}.00</h2>`+
                  "<button onclick='addtocart("+(i++)+")'><i class='fa-solid fa-plus'></i></button>"+
                  `</div>
                  
        
        </div>
       
        
        `
        
    )
  }).join('')
  function clearCart() {
    cart = []; // تفريغ المصفوفة
    displaycart(); // إعادة عرض السلة بعد المسح
  }
  var cart =[];
  
  function addtocart(a) {
    let index = cart.findIndex(item => item.id === categories[a].id);
    if (index !== -1) {
        cart[index].quantity++; // زيادة العدد إذا كان العنصر موجودًا بالفعل
    } else {
        cart.push({...categories[a], quantity: 1}); // إضافة العنصر إلى السلة مع العدد الجديد
    }
    displaycart();
  }
  
  function increaseQuantity(index) {
    cart[index].quantity++;
    displaycart();
  }
  
  function decreaseQuantity(index) {
    if (cart[index].quantity > 0) {
        cart[index].quantity--;
        displaycart();
    }
  }
  
  function delElement(a){
    cart.splice(a, 1);
    displaycart();
  }
  
  
  function displaycart() {
    let total = 0;
    document.getElementById("count").innerHTML = cart.reduce((acc, item) => acc + item.quantity, 0); // حساب إجمالي العناصر في السلة
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ " + 0 + ".00";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((item, index) => {
            var {image, title, price, quantity} = item;
            total += price * quantity;
            document.getElementById("total").innerHTML = "$ " + total + ".00";
            return (
                `<div class='cart-item'>
                    <div class='row-img'>
                        <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>$ ${price}.00</h2>
                    <p>Quantity: ${quantity}</p>
                    <i class='fa-solid fa-trash' onclick='delElement(${index})'></i>
                    <div class="inc_dec">
                      <button class="increase" onclick='decreaseQuantity(${index})'>-</button>
                      <button class="decrease" onclick='increaseQuantity(${index})'>+</button>
                    </div>
                </div>`
            );
        }).join('');
    }
  }