<script>

</script>

<template>
  <section id="reviews-439">
    <div class="cs-container">
          <span class="cs-author mb-4">Does this sound familiar?</span>
        <div class="cs-content ">
            <p class="cs-review">
                <!--Placed inside p tag for more consistent positioning-->
                <img class="cs-quote" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/quote-left.svg" alt="quote icon" width="120" height="106" loading="lazy" decoding="async" aria-hidden="true">
                “I set up a website with <em>[ a major site builder ]</em>. &nbsp; It works, I guess, so I just don't touch it. But all it does is let people know I exist.”
            </p>
            <span class="cs-author">Shelton S. - Small business owner - Nashville, TN</span>
        </div>
        <!-- <picture class="cs-picture">
            <source media="(max-width: 600px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/man-m.jpg">
            <source media="(min-width: 601px)" srcset="https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/man.jpg">
            <img loading="lazy" decoding="async" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Reviews/man.jpg" alt="person looking left" width="328" height="540" aria-hidden="true">
          </picture> -->
    </div>
  </section>
</template>

<style scoped>
/*-- -------------------------- -->
<---          Reviews           -->
<--- -------------------------- -*/

/* Mobile - 360px */
@media only screen and (min-width: 0rem) {
    #reviews-439 {
        /* change width to make sure there is 16px gap left and right */
        width: 91.112%;
        /* changes at tablet */
        max-width: 34.375rem;
        /* using margin instead of padding so the green bar can rest at the true bottom of the section, without padding interrupting it */
        margin: var(--sectionPadding);
        margin-left: auto;
        margin-right: auto;
        box-sizing: border-box;
        border-radius: 1.5rem;
        /* clips corners of green border */
        overflow: hidden;
        position: relative;
    }
    #reviews-439:before {
        /* green bar */
        content: "";
        width: 100%;
        height: 0.5rem;
        /* background: var(--primaryLight); */
        opacity: 1;
        position: absolute;
        display: block;
        bottom: 0;
        left: 0;
        z-index: 10;
    }
    #reviews-439 .cs-container {
        width: 100%;
        margin: auto;
        /* pushes down the same amount as the picture is pulled up */
        margin-top: 5.8125rem;
        /* 20px - 108px left & right, clamp changes at desktop */
        /* 48px - 100px bottom */
        padding: 0 clamp(1.25rem, 6vw, 6.75rem) clamp(2.5rem, 8vw, 6.25rem);
        /* prevents padding and border from affecting height and width */
        box-sizing: border-box;
        background-color: var(darkest-blue);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;
        position: relative;
        gap: 10px;
    }
    #reviews-439 .cs-review {
        /* 16px - 25px */
        font-size: clamp(1rem, 2vw, 1.5625rem);
        line-height: 1.5em;
        /* 24px - 48px changes at tablet */
        margin: 0 0 clamp(1.5rem, 3vw, 3rem) 0;
        color: #dad9e3;
        position: relative;
        z-index: 1;
    }
    #reviews-439 .cs-quote {
        /* 40px - 120px , clamp changes at tablet */
        width: clamp(2.5rem, 11vw, 7.5rem);
        height: auto;
        display: block;
        position: absolute;
        left: 0;
        /* changes at tablet */
        top: -3.75rem;
        z-index: -1;
    }
    #reviews-439 .cs-author {
        /* 16px - 31px */
        font-size: clamp(1rem, 2.6vw, 1.9375rem);
        font-weight: 700;
        line-height: 1.2em;
        color: #fafbfc;
    }
    #reviews-439 .cs-picture {
        /* 116px - 328px */
        width: clamp(7.25rem, 24vw, 20.5rem);
        margin-top: -5.8125rem;
        margin-bottom: 2.25rem;
        border-radius: 8.75rem;
        border: clamp(8px, 1vw, 12px) solid #ffffff;
        background-color: #fff;
        box-sizing: content-box;
        /* clips the img tag corners */
        overflow: hidden;
        /* width divided by height */
        aspect-ratio: 0.65079365;
        display: block;
        /* sends it to the top of the flexbox */
        order: -1;
        position: relative;
    }
    #reviews-439 .cs-picture img {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        /* makes it act like a background image */
        object-fit: cover;
        /* makes the top of the image line up at the top of the container */
        object-position: top;
    }
}
/* Tablet - 768px */
@media only screen and (min-width: 48rem) {
    #reviews-439 {
        max-width: 90rem;
    }
    #reviews-439 .cs-container {
        padding-top: 6.75rem;
        flex-direction: row;
        justify-content: flex-end;
    }
    #reviews-439 .cs-content {
        width: 100%;
    }
    #reviews-439 .cs-review {
        /* 48px - 96px, clamp changes at desktop */
        margin-bottom: clamp(3rem, 7vw, 6rem);
    }
    #reviews-439 .cs-quote {
        /* 80px - 120px , clamp changes at tablet */
        width: clamp(5rem, 8vw, 7.5rem);
        top: -3.3125rem;
        /* 20px - 64px */
        left: calc(clamp(1.25rem, 2vw, 4rem) * -1);
    }
    #reviews-439 .cs-picture {
        margin: 0;
        /* reset its order */
        order: initial;
        position: absolute;
        /* 50px - 108px - wrapped in calc function turn multiple value by negative 1 and get a negative clamp value*/
        top: calc(clamp(3.125rem, 8vw, 6.75rem) * -1);
        /* 52px - 100px */
        left: clamp(3.25rem, 7vw, 6.25rem);
    }
}
/* Small Desktop - 1024px */
@media only screen and (min-width: 64rem) {
    #reviews-439 .cs-container {
        /* 60px - 108px left & right */
        /* 48px - 100px bottom */
        padding: 6.75rem clamp(3.75rem, 4.6vw + 2rem, 6.75rem)
            clamp(2.5rem, 8vw, 6.25rem);
    }
    #reviews-439 .cs-review {
        /* 48px - 96px changes at tablet */
        margin: 0 0 clamp(3rem, 4.2vw + 2rem, 6rem) 0;
    }
}

                                
</style>