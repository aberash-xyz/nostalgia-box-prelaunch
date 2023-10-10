<script type="module">
    import VerticalText from "$lib/VerticalText.svelte"
    import CoverImage from "$lib/CoverImage.svelte"
    import THREECIRCLE from "$lib/THREECIRCLE.svelte"
</script>

<div class="container">
    <!-- <div class="form">
        <EmailForm />
    </div> -->

    <h1 class="hero"> Nostalgia <br /> Box </h1>

    <THREECIRCLE />

    <p class="sub">© Aberash. 2023</p>

</div>


<style type="text/css">

    .container {
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
    }
    .grid-container { 
        height: calc(100vh - 20px);
        margin: 0px;
        display: grid;
        grid-template-columns-: repeat(12, 1fr);
        gap: 10px;
        overflow: hidden;
        background: #FFFCFC;
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0px;
        left: 0px;
        background: gray;
     }

    .column1 {
        padding-top: 4px;
        padding-left: 8px;
        position: relative;
     }

     .form {
        position: absolute;
        top: 50px;
        right: 50px;
        z-index: 2;
     }

    .stage {
        position: relative;
     }

    .brand {
        position: absolute;
        font-family: "Pillow Lava";
        font-size: 48px;
        filter: invert(1);
        mix-blend-mode: hard-light;
        right: 12px;
        transform: translateY(-40%);
     }

     .hero {
        width: 100%;
        font-family: "Pillow Lava";
        font-size: 20rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -70%);
        align-self: center;
        text-align: center;
        color: #F5F5F5;
        z-index: 1;
        mix-blend-mode: exclusion;
        pointer-events: none;
     }

     .sub {
        position: absolute;
        bottom: 50px;
        left: 50%;
        font-weight: normal;
        font-family: "Ostrich Sans";
        font-size: 1.6rem;
        transform: translateX(-50%);
        color: rgba(0,0,0,0.6);
     }

    h4 {
        display: none;
        position: absolute;
        bottom: 24px;
        font-family: "Noto Sans";
        font-weight: 400;
        font-size: 1.4rem;
        color: rgba(0,0,0,1);
        transform: translateY(-100%);
     }

     @media(max-width: 800px) {
        .container {
            height: 92.5%;
            top: 50%;
            transform: translateY(-50%);
        }
        .brand {
            mix-blend-mode: difference;
            font-size: 36px;
        }

        .hero {
            height: auto;
            width: 90%;
            left: 50%;
            font-family: "Pillow Lava";
            font-size: 7rem;
            transform: translate(-50%, -50%);
            align-self: center;
            text-align: center;
            overflow-wrap: anywhere;
        }

         .form {
            position: absolute;
            top: 30px;
            align-self: center;
/*            background-color: rgba(255,255,255,0.3);*/
            right: 50%;
            transform: translateX(50%);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 8px;
            height: auto;
            overflow: hidden;
            display: flex;
        }

        .sub {
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
        }
     }

     @media(max-width: 370px) {
        .hero {
            font-size: 7rem;
        }

        .form {
            right: 50%;
            transform: translateX(50%);
        }
     }
</style>