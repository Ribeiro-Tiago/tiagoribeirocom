<script>
  import Navbar from "./components/Navbar.svelte";
  import IntroSection from "./components/Intro.svelte";
  import ProjectsSection from "./components/Projects.svelte";
  import ProccessSection from "./components/Process.svelte";
  import TestimonialsSection from "./components/Testimonials.svelte";
  import ServicesSection from "./components/Services.svelte";
  import ContactSection from "./components/Contact.svelte";
  import FooterSection from "./components/Footer.svelte";

  AOS.init({
    easing: "ease-out-back",
    duration: 1000
  });

  setTimeout(() => {
    jQuery(".loader").fadeOut("slow");
    jQuery(".overlayer").fadeOut("slow");
  }, 1000);
</script>

<style lang="scss" global>
  @import "./scss/mixins.scss";

  :root {
    --primary: rgb(53, 41, 97);
    --primary-hover: #261e46;
    --accent: rgb(220, 53, 69);
    --accent-hover: rgb(191, 46, 60);
    --text: #fff;
    --text-lighter: gray;
    --primary-outline: rgb(53, 41, 97, 0.3);
  }

  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
  }

  ::selection {
    background: #000;
    color: #fff;
  }

  h1,
  h2,
  h3 {
    @include oswald();
    text-transform: uppercase;
  }

  img {
    box-shadow: 0 0 10px 5px #d4d4d4;
  }

  .bg-light-gray {
    background-color: #f1f3f8;
  }

  .btn-primary {
    color: #fff;
    background-color: var(--primary);
    border-color: var(--primary);
    outline: none;
    box-shadow: none;

    &.disabled,
    &:active,
    &:focus {
      color: #fff;
      background-color: var(--primary);
      border-color: var(--primary);
      outline: none;
      box-shadow: none;
    }

    &.disabled {
      pointer-events: none;
      opacity: 0.5;
    }

    &:hover {
      background-color: var(--primary-hover);
      border-color: var(--primary-hover);
    }
  }

  .slider-item,
  .row {
    &:focus,
    &:active {
      outline: none !important;
    }
  }

  .section {
    padding-bottom: 10vh;
    position: relative;

    .section-title {
      font-size: 3rem;
      color: var(--primary);
      margin-bottom: 1.8rem;
      margin-top: 7vh;
      font-weight: 900;
      max-width: 450px;
    }

    .section-description {
      @include subtextColor();
    }
  }

  .card {
    i {
      color: var(--primary);
    }

    .card-title {
      color: var(--primary);
      font-weight: bold;
      margin-bottom: 1.5rem;
      margin-top: 1.5rem;
    }

    .card-body {
      padding: 2rem;
    }

    .card-text {
      @include subtextColor();
    }
  }

  a {
    &:hover,
    &:active,
    &:focus {
      text-decoration: none;
    }
  }

  .slick-slider {
    .slick-arrow {
      @include transition();
      z-index: 99999;
      width: 32px;
      height: 32px;

      &:hover {
        @include transition();
        width: 40px;
        height: 40px;
      }

      &:before {
        font-size: 2rem;
        color: var(--accent);
      }
    }

    .slick-next {
      right: 10px;
    }

    .slick-prev {
      left: 10px;
    }

    .slick-dots {
      bottom: -40px;

      button {
        &:before {
          font-size: 0.75rem;
          color: var(--accent) !important;
        }
      }
    }
  }

  .overlayer {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 7100;
    background: #fff;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .loader {
    z-index: 7700;
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    .spinner-border {
      color: var(--primary);
    }
  }
</style>

<main>
  <div class="overlayer" />
  <div class="loader">
    <div class="spinner-border">
      <span class="sr-only">Loading...</span>
    </div>
  </div>

  <Navbar />

  <IntroSection />

  <ProjectsSection />

  <ServicesSection />

  <TestimonialsSection />

  <ProccessSection />

  <ContactSection />

  <FooterSection />
</main>
