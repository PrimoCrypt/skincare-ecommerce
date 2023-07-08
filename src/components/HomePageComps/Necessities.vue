<template>
    <div>
        <h1 class="h1">LEARN ABOUT NECESSITIES</h1>
    </div>
    <div class="container">
        <div class="item1 item">
            <img src="@/assets/Rectangle14.png">
            <div class="itemText">
                <h2>Moisturizers</h2>
                <p>Some people may cringe when they hear the word moist, but when it comes to moisturizers,we’ve got nothing but love. We’ve tested countless formulas in our day-to-day activity as beauty editors,which is why you need to cop one.</p>
            </div>
        </div>
        <div class="item2 item">
            <img src="@/assets/Rectangle15.png">
            <div class="itemText">
                <h2>Cleansers</h2>
                <p>A facial cleanser is the first step in every at-home skin care regimen. In addition to removing dirt, dead skin cells, and other unwanted surface debris, a properly formulated facial cleanser can prime your skin for a daily skincare routine, acne treatment.</p>
            </div>
        </div>
        <div class="item3 item">
            <img src="@/assets/Rectangle16.png">
            <div class="itemText">
                <h2>Serums</h2>
                <p>Face serums help in rejuvenating your skin and provide deep nourishment. It plays a crucial part as it helps in retaining your skin's natural moisture and give it an instant boost. Face serums are available in a wide range, but it's important...</p>
            </div>
        </div>
        <div class="item4 item">
            <img src="@/assets/Rectangle17.png">
            <div class="itemText">
                <h2>Body & Face Oils</h2>
                <p>Facial oils are specially tailored to work with your natural skin oils. Our skin naturally produces oils and lipids, which help prevent water loss from to keep it hydrated and elastic. Face oils help to keep your skin balanced and add an extra level of protection</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup () {


        return {}
    }
}
</script>

<style scoped>
.h1 {
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    color: #2f4333;
    font-weight:700;
}

.container{
    width: 100%;
    display: grid;
    text-align: left;
    grid-template-columns: repeat(2,1fr);
    gap: 20px;

}
.item{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #292929;
    font-weight: 400;
}

.item img{
    max-width: 50%;
    height: auto;
}
.itemText{
    margin-left: 20px;
}
.item h2{
    font-family: Cardo;
    font-weight: 400;
    font-style: normal;
    font-size: 30px;

}

.item p{
    font-family: Rubik;
    font-weight: normal;
}
.item img{
    width: 295px;
}


</style>