<template>
  <div id="app">
      <navbar></navbar>
      <div class="content-wrapper">
          <div class="container">
              <!-- Main content -->
              <section class="content">
                  <div class="row">
                      <div class="col-sm-8 col-sm-offset-2">
                          <div class="box">
                            <div class="box-header with-border">
                                  <div class="input-group">
                                      <input type="text" class="form-control input-lg" v-model="searchQuery" placeholder="Search for ISBN, Title or Author">
                                      <span class="input-group-btn">
                                          <button type="button" class="btn btn-primary btn-flat btn-lg" @click="search"><i class="fa fa-search"></i></button>
                                      </span>
                                  </div>
                              </div>
                              <div class="box-body">
                                  <div class="input-group col-sm-5">
                                      <span class="input-group-addon">Category:</span>
                                      <select class="form-control" v-model="selectedCategory" @change="filterBooks">
                                          <option value="0">ALL</option>
                                          <option v-for="category in categories" :value="category.id" :key="category.id">{{ category.name }}</option>
                                      </select>
                                  </div>
                                  <table class="table table-bordered table-striped">
                                      <thead>
                                          <th>ISBN</th>
                                          <th>Title</th>
                                          <th>Author</th>
                                          <th>Status</th>
                                      </thead>
                                      <tbody>
                                          <tr v-for="book in filteredBooks" :key="book.id">
                                              <td>{{ book.isbn }}</td>
                                              <td>{{ book.title }}</td>
                                              <td>{{ book.author }}</td>
                                              <td><span :class="book.status ? 'label label-danger' : 'label label-success'">{{ book.status ? 'not available' : 'available' }}</span></td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
      </div>
      <footer></footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const searchQuery = ref('');
const categories = ref([]);
const selectedCategory = ref(0);
const books = ref([]);

function fetchCategories() {
  // Implement AJAX request to fetch categories
  // Example using axios:
  // axios.get('api/categories')
  //     .then(response => {
  //         categories.value = response.data;
  //     })
  //     .catch(error => {
  //         console.error('Error fetching categories', error);
  //     });
}

function fetchBooks() {
  // Implement AJAX request to fetch books
  // Example using axios:
  // axios.get('api/books')
  //     .then(response => {
  //         books.value = response.data;
  //     })
  //     .catch(error => {
  //         console.error('Error fetching books', error);
  //     });
}

function filterBooks() {
  // Implement filtering logic if necessary
}

function search() {
  // Implement search logic if necessary
}

fetchCategories();
fetchBooks();
</script>
