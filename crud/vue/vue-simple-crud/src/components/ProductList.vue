<template>

    <!-- {{JSON.stringify(ProductData)}} -->
    <div class='col-md-4' v-for="itemDetail in ProductData">
        <div>
            <div class="card mb-4">
                <img src="https://picsum.photos/200" class="card-img-top" alt="Coffe" />
                <div class="card-body">
                    <h5 class="card-title"> {{itemDetail.ProductName}}</h5>
                    <p class="mb-1">Price :</p>
                    <p class="mb-1">
                        <span class="fs-5 fw-bold text-primary pe-2"> {{itemDetail.Price}}</span>
                        <span class='text-danger pe-1'>
                            <del> {{parseInt(itemDetail.Price / 100 * DiscountPercent) }} </del>
                        </span>
                        <span class='text-success'>
                            {{DiscountPercent}} %Off
                        </span>
                    </p>

                    <p class="mb-1">Qty : {{itemDetail.Qty}} </p>

                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<script>
export default {
    props: {
        ProductData: Object
    }
    ,
    data() {
        return {
            DiscountPercent: 5
        }
    }
}
</script>