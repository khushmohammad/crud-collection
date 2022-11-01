<script setup>
import PostList from './components/PostList.vue'
import PostData from './data/PostData';
</script>

<template>
  <header>
    <div class="wrapper">
      <div>
        <header class='mb-5'>
          <nav class="navbar bg-light p-4">
            <div class="container">
              <h4>Header</h4>

            </div>
          </nav>
        </header>
        <div>
          <div>
            <div class="container">
              <h2 class='text-center mb-4'>Your Liked List</h2>
              <div class="row">
                <div class='col-sm-12'>
                  <button type="button" class="btn btn-primary mb-3 w-25">Button
                    {{LikedList?.length}}</button>

                </div>
                <div class='col-sm-12'>


                  <PostList :ProductDetail="LikedData[0]" />

                </div>
              </div>
            </div>

          </div>
          <div class="container">
            <h2 class='text-center mb-4'>Post Grid</h2>
            <div class="row">
              <!-- <PostList PostDetail={PostData} getData={StoreLikedObj} /> -->
              <!-- <app-product-list [ProductDetail]="ProductList" (newItemEvent)="addItem($event)"> </app-product-list>
               -->
              <PostList :ProductDetail="PostListData" :setData="getData" />
            </div>
          </div>
        </div>
      </div>

    </div>
  </header>


</template>
<script>


export default {
  data() {
    return {
      PostListData: PostData,
      LikedData: [],
    }
  },
  methods: {
    getData(value) {
     // console.log(value);
      this.LikedData.push(value)
      console.log(this.LikedData[0]);
    }
  },
}
</script>
