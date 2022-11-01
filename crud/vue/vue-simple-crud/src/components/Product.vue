<template>

    <div>
        <div class='container'>
            <div class='row'>
                <div class='col-md-12 text-center mb-4'>
                    <h2>Product List</h2>
                </div>
            </div>
        </div>
        <div class='container'>
            <div class='row'>
                <ProductList :ProductData="ProductListData" />
            </div>
        </div>
    </div>
</template>

<script setup>
import ProductList from './ProductList.vue'
import Data from '../data/ProductData'

</script>
<script>

export default {

    data() {
        return {
            ProductListData: Data
        }
    },
}
</script>