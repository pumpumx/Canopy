

This inventory management system is capable of creating multiple **menu's** for a single or multiple owner


# Each menu will have multiple Categories stored for a cafe owner 
  ## Each Category will have multiple Items (refrenced)
    ### Each item will be created independently and will be referenced to it's category sepereately

 
# API'S -> (Cafe admin can only access this)
  **Endpoint** ->  http://ip:port/api/v1/menu/items/{Add_From_Below}
    
    Admin Flow : 
      create a category , then perform operations for that item to that category
          1. addItem -> /addItem
          2. deleteItem -> /deleteItem
          3. editItem -> /editItem
          4. addcategory -> /addcategory
          5. removecategory -> /removecategory
          6. edit category -> /editcategory
