# Currently setting up Redis on idempotency key branch -> 22:23

-> Adding Redis in the placeOrder component ! 
  -> Handles all order requrest 
  
  ORDER FLOW: 
    User places order with an idempotent key in order to ensure consistency
          -> First the req is check via the redis middleware in order to get the cache  
      
