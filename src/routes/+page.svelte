<script type="module">
    import VerticalText from "$lib/VerticalText.svelte"
    import CoverImage from "$lib/CoverImage.svelte"
    import THREECIRCLE from "$lib/THREECIRCLE.svelte"

    import EmailForm from "$lib/EmailForm.svelte"
</script>

<div class="container">
    <div class="form">
        <EmailForm />
    </div>

    <h1 class="hero"> Nostalgia <br /> Box </h1>

    <THREECIRCLE />

    <p class="sub"> // Something's Cooking </p>

</div>


<style type="text/css">

    .container {
        height: 100%;
        width: 100%;
        position: relative;
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
        left: 50px;
        font-weight: normal;
        font-family: "Noto Sans";
        font-size: 1.2rem;
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
            background-color: rgba(255,255,255,0.3);
            backdrop-filter: blur(20px);
            border-radius: 20px;
            padding: 8px;
            height: 120px;
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
     }

    @font-face {
      font-family: 'Noto Sans';
      src: url('/NotoSans-Black.woff') format('woff');
      font-weight: 900;
      font-style: normal;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('/NotoSansBlackItalic.woff') format('woff');
      font-weight: 900;
      font-style: italic;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('/NotoSans-Bold.woff') format('woff');
      font-weight: 700;
      font-style: normal;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('/NotoSans-BoldItalic.woff') format('woff');
      font-weight: 700;
      font-style: italic;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('/NotoSans-ExtraBold.woff') format('woff');
      font-weight: 800;
      font-style: normal;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('/NotoSans-ExtraBoldItalic.woff') format('woff');
      font-weight: 800;
      font-style: italic;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('/NotoSans-MediumItalic.woff') format('woff');
      font-weight: 500;
      font-style: italic;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('/NotoSans-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('/NotoSans-SemiBold.woff') format('woff');
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('/NotoSans-SemiBoldItalic.woff') format('woff');
      font-weight: 600;
      font-style: italic;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('/NotoSans-Thin.woff') format('woff');
      font-weight: 100;
      font-style: normal;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('/NotoSans-ThinItalic.woff') format('woff');
      font-weight: 100;
      font-style: italic;
    }

    @font-face {
        font-family: "Pillow Lava";
        src: url('/Pilowlava-Regular.woff') format('woff');
        font-weight: 600;
        font-style: normal;
    }

</style>