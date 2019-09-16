# topViewTest

This is a component enable multistep shopping experience .

## Functions

- enable Use to choose their product step by step
- calculation their total cost and enable interactions
- final submission will return as an object in formation

```
  {
      orderId:"6209d546-7a96-4621-af63-3846b2c298ec",
      customerInfo:{
          firstName:${firstName},
          lastNmae:${lastNmae},
          email:${email},
          phone:${phone},
          cardNumber:${cardNumber},
          name:${name},
          expiry:${expiry},
          cvc:${cvc}
      },
      rentalInfo:[
          {
              productId:${productId},
              productName:${productName},
              price:${price},
              type:${type},
              quantity:${quantity},
          },{
              productId:${productId},
              productName:${productName},
              price:${price},
              type:${type},
              quantity:${quantity},
          }
      ]
  }

```

## Install

1.  clone Repo

    ```
    git clone {github.address}
    ```

2.  Install Dependencies

    ```
    npm install

    npm clientinstall
    ```

## Run

1.  Run the project ( in main folder )

    ```
    npm run dev
    ```
