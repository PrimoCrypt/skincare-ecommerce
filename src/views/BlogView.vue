<template>
    <div class="container">
        <h1>Allure's Blog</h1>
        <p>A close look at the skin care life and routine of celebrities, customers’ reviews about products,and inside scoop
            from our aesthetic experts.</p>
        <div class="posts">
            <div class="post">
                <img src="@/assets/Rectangle18.png">
                <div class="post-content">
                    <h2>The Absolute Best Skin Product for Men at Allure</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, volutpat nunc, amet laoreet odio dolor nec.
                        Penatibus nisi amet dolor mattis</p>
                    <h4 class="read_more">Read more
                        <span class="div">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path>
                            </svg>
                        </span>
                    </h4>
                </div>
            </div>
            <div class="post">
                <img src="@/assets/Rectangle19.png">
                <div class="post-content">
                    <h2>The Absolute Best Skin Product for Men at Allure</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, volutpat nunc, amet laoreet odio dolor nec.
                        Penatibus nisi amet dolor mattis</p>
                    <h4 class="read_more">Read more
                        <span class="div">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path>
                            </svg>
                        </span>
                    </h4>
                </div>
            </div>
            <div class="post">
                <img src="@/assets/Rectangle20.png">
                <div class="post-content">
                    <h2>The Absolute Best Skin Product for Men at Allure</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, volutpat nunc, amet laoreet odio dolor nec.
                        Penatibus nisi amet dolor mattis</p>
                    <h4 class="read_more">Read more
                        <span class="div">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em"
                                width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path>
                            </svg>
                        </span>
                    </h4>
                </div>
                
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Blog',
    setup() {


        return {}
    }


}
</script>


<style scoped>
.container {
    color: #292929;
    font-family: Cardo;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    width: 100%;
}

.container p {
    color: #292929;
    text-align: center;
    font-family: Rubik;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    padding: 0 15vw;
    margin: 40px 0 0 0;
}


@media (max-width:450px) {
    .posts{
        width: 100%;
        display: flex;
        flex-direction: row;
        overflow-x:scroll;
        overflow-y: hidden;
    }
    .post {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
        margin-bottom: 20px;
    }

    .post img {
        width: 100%;
        max-width: 400px; /* Adjust the maximum width of the image as needed */
    }
    /* .post h2{
        max-width: 100%;
    }

    .post p{
        max-width: 100%;
    } */

    .post-content {
        width: 100%;
        max-width: 400px; /* Adjust the maximum width of the content as needed */
        text-align: center;
        margin-top: 10px;
    }

    .post-content h2,
    .post-content p {
        width: 100%;
        box-sizing: border-box;
        padding: 0 20px;
    }
}
</style>