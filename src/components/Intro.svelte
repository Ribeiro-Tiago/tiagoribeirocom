<script>
  const onClick = ev => {
    ev.preventDefault();
    const hash = ev.target.getAttribute("href");

    jQuery("html, body").animate(
      { scrollTop: jQuery(hash).offset().top - 45 },
      800,
      "swing",
      () => (window.location.hash = hash)
    );
  };
</script>

<style lang="scss">
  @media (min-width: 768px) and (max-width: 1200px) {
    .intro-section {
      &:before {
        width: 85% !important;
      }
    }
  }

  @media (max-width: 768px) {
    .intro-section {
      &:before {
        width: 100% !important;
      }
    }

    @media (max-width: 576px) {
      .content {
        > div {
          text-align: center !important;

          &:last-child {
            top: -5%;
          }
        }
      }

      .socials {
        justify-content: center !important;
      }
    }
  }

  .intro-section {
    height: 100vh;
    width: 100%;
    color: var(--text);

    &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 60%;
      background: var(--primary);
      border-bottom-right-radius: 200px;
    }

    .row {
      height: 100vh;
    }

    h1 {
      font-size: 3rem;
      font-weight: 900;
    }

    .description {
      opacity: 0.5;
    }

    .socials {
      a {
        margin-right: 1rem;
        color: var(--text);
        transition: 0.3s ease-in-out;
        opacity: 0.6;

        &:hover,
        &:active,
        &:focus {
          opacity: 1;
          transition: 0.3s ease-in-out;
        }
      }
    }

    img {
      border-top-left-radius: 20%;
      width: 250px;
      box-shadow: 0 0 10px 0px #000;
    }

    .btn {
      color: #f8f9fa;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 900;
      border-width: 2px;

      &:hover {
        color: #212529;
      }
    }
  }
</style>

<div class="intro-section" id="home">
  <div class="container">
    <div class="row content align-items-center">
      <div
        class="offset-md-1 col-md-6 col-xl-5 mr-auto aos-init aos-animate"
        data-aos="fade-up">
        <h1>Tiago Ribeiro</h1>
        <p class="description">
          I'm a web and mobile developer and cybersecurity enthusiast. I craft
          mobile or web application or services you might need with a focus on
          user experience and security.
        </p>
        <div class="socials d-flex mb-5">
          <a
            target="_blank"
            rel="noopener"
            title="linkedin.com/in/ribeiro-tiago"
            href="https://www.linkedin.com/in/ribeiro-tiago">
            <i class="fab fa-2x fa-linkedin" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            title="github.com/ribeiro-tiago"
            href="https://www.github.com/ribeiro-tiago">
            <i class="fab fa-2x fa-github" />
          </a>
          <a
            target="_blank"
            rel="noopener"
            title="medium.com/@ribeirotiago"
            href="https://www.medium.com/@ribeirotiago">
            <i class="fab fa-2x fa-medium" />
          </a>
        </div>
        <p>
          <a
            href="#projects"
            on:click={onClick}
            class="btn btn-outline-light py-3 px-5">
            Get Started
          </a>
        </p>
      </div>
      <div
        class="col-md-4 col-xl-6 ml-auto aos-init aos-animate"
        data-aos="fade-up"
        data-aos-delay="100">
        <img src="assets/images/profile.webp" alt="Profile" class="img-fluid" />
      </div>
    </div>
  </div>
</div>
