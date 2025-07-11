<template>
    <div class="container">
        <div class="heading">
            <h1 class="h1">Allure's Blog</h1>
            <p class="container-p">A close look at the skin care life and routine of celebrities, customers’ reviews about products,and inside scoop from our aesthetic experts.</p>
        </div>
        <div class="posts">
            <div class="post">
                <img src="@/assets/Rectangle18.png">
                <div class="post-content">
                    <h2>The Absolute Best Skin Product for Men at Allure</h2>
                    <p id="post-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, volutpat nunc, amet laoreet odio dolor nec.
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
                    <p id="post-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, volutpat nunc, amet laoreet odio dolor nec.
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
                    <p id="post-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, volutpat nunc, amet laoreet odio dolor nec.
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

<script setup>
// No NavBar import here
</script>

<style scoped>
.h1 {
    text-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    text-align: center;
    color: #2f4333;
    font-weight: 700;
}
.heading{
    display: flex;
    align-items: center;
}

*{
    display: flex;
    flex-direction: column;
}
.container {
    color: #292929;
    font-family: Cardo;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    width: 100%;
    margin: 0;
}

.container-p {
    color: #292929;
    text-align: center;
    font-family: Rubik;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    padding: 0 15vw;
    margin: 0;
}
.posts{
    margin: 30px 0;
    position: relative;
    flex-direction: row;
    overflow-x:scroll;
    overflow-y: hidden;
    white-space: nowrap;
}
.post{
    display: flex;
    justify-content: center;
    max-width: 70%;
    margin: 0 20px;
}
.post h2{
    white-space: initial;
    text-align: left;
    margin: 0;
}
.post p{
    margin: 5px 0;
    color: #292929;
    text-align: left;
    font-family: Rubik;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    white-space: initial;
}
.read_more{
    display: flex;
    flex-direction: row;
    justify-self: start;
    align-items: center;
}
@media (max-width:450px) {
    .h1{
        font-size: 2.3rem;
    }
    .container-p{
        width: 80%;
        padding: 0;
    }
    .post {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 400px;
        margin-bottom: 20px;
    }
    .post img {
        max-width: 220px;
        width: 220px;
    }
    .post-content {
        width: 100%;
        max-width: 400px; /* Adjust the maximum width of the content as needed */
        text-align: center;
        margin-top: 10px;
    }

    .post-content h2{
        width: 100%;
        font-size: 18px;
    }
    .post-content p {
        width: 100%;
        box-sizing: border-box;
        font-size: 13px;
    }
    .read_more{
        margin: 0;
    }
}
</style> 