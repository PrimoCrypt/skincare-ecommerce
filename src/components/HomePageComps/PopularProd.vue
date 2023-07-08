<template>
    <div>
        <h1 class="h1">Popular Products</h1>
        <div class="p_productItems">
            <div class="item1 item">
                <img :src="alleyFaceCream.img" />
                <div class="ProdnPrice">
                    <h4>{{alleyFaceCream.name}}</h4>
                    <h4>${{ alleyFaceCream.price }}</h4>
                </div>
            </div>
            
            <div class="item2 item">
                <img :src="alley2xCleaner.img" />
                <div class="ProdnPrice">
                    <h4>{{alley2xCleaner.name}}</h4>
                    <h4>${{ alley2xCleaner.price }}</h4>
                </div>
            </div>
            <div class="item3 item">
                <img :src="allyBodyWash.img" />
                <div class="ProdnPrice">
                    <h4>{{allyBodyWash.name}}</h4>
                    <h4>${{ allyBodyWash.price }}</h4>
                </div>
            </div>
            <div class="item4 item">
                <img :src="philaeHairSerum.img" />
                <div class="ProdnPrice">
                    <h4>{{philaeHairSerum.name}}</h4>
                    <h4>${{ philaeHairSerum.price }}</h4>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import pageData from '../pageData.js'


export default {
    setup(){
        const { alleyFaceCream, philaeHairSerum ,  alley2xCleaner , allyBodyWash } = pageData()

        // console.log({alleyFaceCream})

        return{ alleyFaceCream, philaeHairSerum ,  alley2xCleaner , allyBodyWash}
    }
}
</script>

<style scoped>
*{
    display: flex;
    flex-direction: column;
}
.h1 {
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    color: #2f4333;
    font-weight:700;
}

.p_productItems{
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* Creates four equal-width columns */
    gap: 10px;
}

.item{
    padding: 0 10px;
    width: 100%;
}

.item img{
    max-width: 100%;
    height: auto;
}
/* .item1 {

}

.item2{

}

.item3{

}

.item4{

} */
.ProdnPrice{
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
    color: #292929;
    font-family: Rubik;
    font-size: 18px;
    font-style: normal;
    font-weight: 600
}
</style>