<template>
    <div>
        <h1 class="h1">WHY YOU SHOULD CHOOSE ALLURE</h1>
        <div class="table-container">
            <table class="responsive-table">
                <tbody v-if="!isSmallScreen">
                    <tr>
                        <td>
                            <h2>SKIN HEALTH</h2>
                            <p>Our products contain only natural variants that are essential for your skin, oil and additives contained in natural skincare have anti-inflammatory effects.</p>
                        </td>
                        <td></td>
                        <td>
                            <h2>NATURAL INGREDIENTS</h2>
                            <p>Our skincare products are handmade in batches. They are made using only natural oils and they contain no chemicals.</p>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <h2>ORIGINALITY</h2>
                            <p>Our products are unique, original and made carefully with good attention to details.</p>
                        </td>
                        <td>Cell 7</td>
                        <td>
                            <h2>GENTLE CARE</h2>
                            <p>The products do not only cleanse the skin, but also protects it from the negative effects of other unwanted environmental factors.</p>
                        </td>
                    </tr>
                </tbody>
                <tbody v-else>
                    <tr>
                        <td>
                            <h2>SKIN HEALTH</h2>
                            <p>Our products contain only natural variants that are essential for your skin, oil and additives contained in natural skincare have anti-inflammatory effects.</p>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <h2>NATURAL INGREDIENTS</h2>
                            <p>Our skincare products are handmade in batches. They are made using only natural oils and they contain no chemicals.</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <h2>ORIGINALITY</h2>
                            <p>Our products are unique, original and made carefully with good attention to details.</p>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <h2>GENTLE CARE</h2>
                            <p>The products do not only cleanse the skin, but also protects it from the negative effects of other unwanted environmental factors.</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    setup() {
        const isSmallScreen = ref(window.innerWidth < 950);

        const handleResize = () => {
            isSmallScreen.value = window.innerWidth < 950;
        };

        onMounted(() => {
            window.addEventListener('resize', handleResize);
        });

        onUnmounted(() => {
            window.removeEventListener('resize', handleResize);
        });

        return { isSmallScreen };
    },
};
</script>

<style scoped>
.h1 {
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    color: #2f4333;
}

h2,p{
    color: #2F4333;
}
.table-container {
    overflow-x: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 60px);
}

.responsive-table {
    width: 100%;
    table-layout: fixed;
    height: auto;
}

table {
    border-collapse: collapse;
    border: 0.5px solid #000;
    width: 100%;
}

td {
    border: 0.5px solid #000;
    padding: 50px 10px;
}

/* @media (max-width: 600px) {
    tbody{
        height: 100%;
    }
    .responsive-table tr {
        width: 100%;
        height: auto;
    }

    .responsive-table td {
        display: inline-block;
        width: 50%;
        box-sizing: border-box;
        height: 100%;
    }
}

@media (max-width: 300px) {
    .responsive-table td {
        display: block;
        width: 100%;
    }

    table {
        border-collapse: collapse;
    }
} */
</style>
