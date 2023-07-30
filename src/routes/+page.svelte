<script type="module">
    import VerticalText from "$lib/VerticalText.svelte"
    import CoverImage from "$lib/CoverImage.svelte"

    import EmailForm from "$lib/EmailForm.svelte"
</script>

<div class="grid-container">
    <div class="column1">
        <!-- <VerticalText text={"Something's cooking"}/> -->
        <EmailForm />
        <h4> Something's cooking </h4>
    </div>

    <div class="stage">
        <h1 class="brand"> NostalgiaBox </h1>
        <CoverImage />
    </div>
</div>


<style type="text/css">
    .grid-container { 
        height: calc(100vh - 20px);
        margin: 0px;
        display: grid;
        grid-template-columns: minmax(300px, 1fr) 5fr;
        grid-template-rows: 1fr;
        overflow: hidden;
        background: #FFFCFC;
     }

    .column1 {
        padding-top: 4px;
        padding-left: 8px;
        position: relative;
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
/*        mix-blend-mode: darken;*/
        right: 12px;
        transform: translateY(-40%);
     }

    h4 {
        display: none;
        position: absolute;
        bottom: 24px;
        font-family: "Noto Sans";
        font-weight: 400;
        font-size: 14px;
        color: rgba(0,0,0,1);
        transform: translateY(-100%);
     }

     @media(max-width: 800px) {
        .brand {
            mix-blend-mode: difference;
            font-size: 36px;
        }
     }

    @font-face {
      font-family: 'Noto Sans';
      src: url('NotoSans-Black.woff') format('woff');
      font-weight: 900;
      font-style: normal;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('NotoSansBlackItalic.woff') format('woff');
      font-weight: 900;
      font-style: italic;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('NotoSans-Bold.woff') format('woff');
      font-weight: 700;
      font-style: normal;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('NotoSans-BoldItalic.woff') format('woff');
      font-weight: 700;
      font-style: italic;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('NotoSans-ExtraBold.woff') format('woff');
      font-weight: 800;
      font-style: normal;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('NotoSans-ExtraBoldItalic.woff') format('woff');
      font-weight: 800;
      font-style: italic;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('NotoSans-MediumItalic.woff') format('woff');
      font-weight: 500;
      font-style: italic;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('NotoSans-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('NotoSans-SemiBold.woff') format('woff');
      font-weight: 600;
      font-style: normal;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('NotoSans-SemiBoldItalic.woff') format('woff');
      font-weight: 600;
      font-style: italic;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('NotoSans-Thin.woff') format('woff');
      font-weight: 100;
      font-style: normal;
    }

    @font-face {
      font-family: 'Noto Sans';
      src: url('NotoSans-ThinItalic.woff') format('woff');
      font-weight: 100;
      font-style: italic;
    }

    @font-face {
        font-family: "Pillow Lava";
        src: url('Pilowlava-Regular.woff') format('woff');
        font-weight: 600;
        font-style: normal;
    }

</style>