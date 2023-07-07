<template>
    <main>
        <h1>Allure's Blog</h1>
        <p>A close look at the skin care life and routine of celebrities, customers’ reviews about products,and inside scoop from our aesthetic experts.</p>
        <div class="posts">
            <div class="post">
                <img src="@/assets/Rectangle18.png">
                <h2>The Absolute Best Skin Product for Men at Allure</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, volutpat nunc, amet laoreet odio dolor nec. Penatibus nisi amet dolor mattis</p>
                <h4 class="read_more">Read more 
                    <span class="div">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path></svg>
                    </span>
                </h4>
            </div>
            <div class="post">
                <img src="@/assets/Rectangle19.png">
                <h2>The Absolute Best Skin Product for Men at Allure</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, volutpat nunc, amet laoreet odio dolor nec. Penatibus nisi amet dolor mattis</p>
                <h4 class="read_more">Read more 
                    <span class="div">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path></svg>
                    </span>
                </h4>
            </div>
            <div class="post">
                <img src="@/assets/Rectangle20.png">
                <h2>The Absolute Best Skin Product for Men at Allure</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non, volutpat nunc, amet laoreet odio dolor nec. Penatibus nisi amet dolor mattis</p>
                <h4 class="read_more">Read more 
                    <span class="div">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M15 5l-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path></svg>
                    </span>
                </h4>
            </div>
        </div>
    </main>
</template>


<script>
export default {
    name: 'Blog',
    setup(){


        return{}
    }

    
}
</script>


<style>
main{
    color: #292929;
    font-family: Cardo;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
}

main p{
    color: #292929;
    text-align: center;
    font-family: Rubik;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    padding: 0 15vw;
    margin: 40px 0 0 0;
}

.posts{
    display: flex;
    flex-direction: row;
    margin: 30px 0;
}

.post{
    text-align: left;
    margin: 0 20px;
}

h4{
    margin: 0;
    font-family: Rubik;
    font-size: 22px;
    font-weight: 400;
}

.post p{
    padding: 0 ;
    margin: 0;
    text-align: left;
}

.read_more{
    color: #292929;
    font-family: Rubik;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;
    margin-bottom: 20px;
    margin-top: 20px;
}

span.div{
    display: flex;
    /* align-self: center; */
    margin: auto auto auto 0;
}
</style>