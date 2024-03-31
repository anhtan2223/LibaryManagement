<template>
    
    <div class="container">
        <table class="table caption-top">
  <caption>Category List
    <button type="button" class=" add_button btn btn-primary"><i class="fas fa-plus" style="color: #ffffff;"></i></button>
  </caption>  
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
    caption{
        width:auto;
    }
    .add_button{
        float: inline-end   ;
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
     
