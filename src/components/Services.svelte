<script>
  const services = [
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile development",
      description:
        "From a simple news or event app to a anything complex, anything you need running on a mobile device I can get it done."
    },
    {
      icon: "fas fa-laptop-code",
      title: "Web development",
      description:
        "Be it a regular informational website or a more hands-on website such as an online management tool. I got your back, always responsive so it fits all screens"
    },
    {
      icon: "fab fa-wordpress",
      title: "WordPress development",
      description:
        "Want a new theme on your WordPress website ? Or maybe migrating your website from another platform to WordPress ? Look no further."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Security counselling",
      description:
        "Not sure you're website or mobile app is at risk from malicious attacks ? I can evaluate it and give you a report of security breaches and risks you have and how it can fixed."
    }
  ];
</script>

<style lang="scss">
  @import "../scss/mixins.scss";

  @media (max-width: 992px) {
    .section-description {
      margin-bottom: 0;
    }

    .card {
      margin-bottom: 2rem;

      img {
        box-shadow: 0 0 4px 2px #d4d4d4;
      }
    }
  }

  .services-section {
    .card {
      @include transition();

      &:before,
      &:after {
        @include transition();
        content: "";
        height: 5px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        background-color: var(--primary);
      }

      &:after {
        background: var(--accent);
        width: 0;
        z-index: 2;
      }

      &:hover {
        @include transition();
        transform: translateY(-2vh);
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);

        &:after {
          @include transition();
          width: 100%;
        }

        & i {
          @include transition();
          background: rgba(220, 53, 69, 0.1) !important;
        }
      }

      i {
        @include transition();
        color: var(--accent);
        background-color: rgb(250, 250, 250);
        width: 64px;
        height: 64px;
        display: flex;
        opacity: 0.8;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
      }
    }
  }
</style>

<div id="services" class="services-section bg-light-gray section">
  <div class="container">
    <div class="row">
      <div class="col-lg-10 mb-5">
        <h2 class="section-title">Services</h2>
        <p class="section-description">
          So what exactly is it that I can do for you ?
        </p>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row">
      {#each services as s, i}
        <div
          class={`col-sm-10 offset-sm-1 offset-md-0 col-lg-5 col-xl-3 ${i % 2 === 0 ? 'offset-lg-1' : ''} offset-xl-0`}>
          <div class="card">
            <div class="card-body">
              <i class={`${s.icon} fa-2x`} />
              <h3 class="card-title">{s.title}</h3>
              <p class="card-text">{s.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
