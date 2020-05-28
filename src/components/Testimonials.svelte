<script>
  import { onMount } from "svelte";

  const testimonials = [
    {
      img: "lopo.webp",
      author: "Lopo Lencastre de Almeida, iPublicis!COM",
      quote:
        "Tiago is a savvy developer. He works fast and clean and is a really good team member. Worked with him in several projects and surely recommend him to anyone willing to have a great programmer on his/her team."
    },
    {
      img: "alexis.webp",
      author: "Alexis Eggermon, accountable.eu",
      quote:
        "I had the pleasure of working directly with Tiago at Accountable. He was a great addition to the team, delivering consistently and with a high level of quality. He is very responsive to feedback and able to adapt quickly to the specific standards of the company. Tiago is also a lot of fun to be around."
    }
  ];

  onMount(() => {
    jQuery("#testimonials-slider").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      mobileFirst: true
    });
  });
</script>

<style lang="scss">
  @import "../scss/mixins.scss";

  @media (max-width: 768px) {
    .section-description {
      margin: 0;
    }
  }

  .testimonials-section {
    img {
      border-radius: 10px;
      border-top-left-radius: 40%;
      width: 100%;
      height: auto;
    }

    .quote {
      margin: 0;
      line-height: 2.8rem;
      font-size: 1.8rem;
      font-weight: 200;
    }

    .author {
      @include oswald();

      margin: 0;
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }
  }
</style>

<div id="testimonials" class="testimonials-section section">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 mb-5">
        <h2 class="section-title">Testimonials</h2>
        <p class="section-description">
          Want to know what it would be like working with me ? Listen to what
          people that I've worked with have to say
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div id="testimonials-slider">
      {#each testimonials as t}
        <div class="slider-item">
          <div class="row">
            <div class="col-10 offset-1 offset-sm-0 col-sm-8 col-lg-8">
              <blockquote>
                <p class="quote">
                  <span>“</span>
                  {t.quote}
                  <span>”</span>
                </p>
                <p class="author">— {t.author}</p>
              </blockquote>
            </div>
            <div class="d-none d-xl-block col-sm-3 col-lg-3">
              <img
                src={`assets/images/quotes/${t.img}`}
                alt={t.author}
                loading="lazy"
                width="455px"
                height="455px" />
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
