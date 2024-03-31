<template> 
    <div class="container">
        <div>
                <h2>Publishing</h2>
                <div class="search-container">
                    <div class="input-group search-container flex-end">
                        <div class="form-outline" data-mdb-input-init>
                            <input type="search" id="form1" class="form-control" />
                        </div>
                        <button type="button" class="button_in_search_container btn btn-primary" data-mdb-ripple-init>
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                    <button type="button" class=" button_in_search_container btn btn-primary"><i class="fas fa-plus" style="color: #ffffff;"></i></button>
                </div>
        </div>

    <table class="table caption-top">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Created</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td class="action_button"><button class="btn btn-primary " type="submit"><i class="fas fa-wrench" style="color: #ffffff;"></i></button>
            <button class="btn btn-primary " type="submit"><i class="fas fa-trash" style="color: #ffffff;"></i></button></td>
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td class="action_button"><button class="btn btn-primary " type="submit"><i class="fas fa-wrench" style="color: #ffffff;"></i></button>
            <button class="btn btn-primary " type="submit"><i class="fas fa-trash" style="color: #ffffff;"></i></button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td class="action_button"><button class="btn btn-primary " type="submit"><i class="fas fa-wrench" style="color: #ffffff;"></i></button>
            <button class="btn btn-primary " type="submit"><i class="fas fa-trash" style="color: #ffffff;"></i></button></td>
    </tr>
  </tbody>
</table>
    </div>
</template>
<style scoped>
    .button_in_search_container{
        scale: 100%;
        margin: 5px 10px 10px 3px  ;
    }
    .form-control{
        width: 500px;
        
    }
    .search-container{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        align-self: center;

    }
    
    .add_button{
        float: inline-end   ;
        width: 150px;
    }
    .action_button{
        width: 150px;

    }
    table{
        border: 1px solid #111111;
        border-radius: 5px;
    }
    button{
        align-items: center;
        justify-self: center;
        scale: 80%;
        margin-right: 1px;
        
    }
</style>
<script setup >
    
</script>
     
