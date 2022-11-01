
<script>
export default {
  props: {
    ProductDetail: Object,
    setData: Function
  },
  data() {
    return {
      LikedPostObj: []
    }
  },
  methods: {
    StoreToLikeList(data) {
      // console.log(data);

      this.LikedPostObj.push(data)

      // this.newItemEvent.emit(this.LikedPostObj);

      this.ProductDetail.forEach((element) => {

        if (data.PostID === element.PostID) {
          //element.push({ ...element, like: true })
          element.isLike = true
          //  console.log(element.isLike = true);
        }

      });
      this.setData(this.LikedPostObj)
      //console.log(this.LikedPostObj);
      // console.log(this.ProductDetail);


    },
    RemoveFromLikeList(data) {
      // console.log(data);



      // this.newItemEvent.emit(this.LikedPostObj);

      this.ProductDetail.forEach((element) => {

        if (data.PostID === element.PostID) {
          //element.push({ ...element, like: true })
          element.isLike = true
          //  console.log(element.isLike = true);
          this.LikedPostObj.splice(element, 1);
        }

      });

      this.setData(this.LikedPostObj)
      //console.log(this.LikedPostObj);
      // console.log(this.ProductDetail);


    }
  },
}
</script>

<template>
  <div class="">
    <div class="row">
      <div v-for="Item in  ProductDetail" class="col-md-4">
        <div>
          <div class="card mb-4">
            <img :src="Item.PostedImage" class="card-img-top" :alt="Item.PostName" />
            <div class="card-body">

              <h5 class="card-title">{{Item.PostName}}</h5>
              <p class="mb-1">{{Item.PostDescription}}</p>
              <p class="mb-1">{{Item.PostedDate}}</p>

              <h3 v-if="!Item.isLike" style="cursor: pointer;" @click="StoreToLikeList(Item)"><i
                  class="bi bi-hand-thumbs-up"></i>
              </h3>
              <h3 v-if="Item.isLike" style="cursor: pointer;" @click="RemoveFromLikeList(Item)"><i
                  class="bi bi-hand-thumbs-up-fill"></i>
              </h3>
              <!-- <h3 *ngIf="Item.isLike" style="cursor: pointer;" (click)="DisLikeFromLikeList(Item)"><i
                  class="bi bi-hand-thumbs-up-fill"></i>
              </h3>
              <h3 *ngIf="!Item.isLike" style="cursor: pointer;" (click)="StoreToLikeList(Item)"><i
                  class="bi bi-hand-thumbs-up"></i>
              </h3> -->

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

