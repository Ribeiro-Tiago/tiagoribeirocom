<script>
  import { onMount } from "svelte";

  const projects = [
    {
      img: "debter.webp",
      title: "Debtr",
      category: "mobile",
      description:
        "A very simple assistant app to help one to keep on top of which monthly expenses were already paid and those that are still left, so you can better manage your spending money.",
      android: "https://play.google.com/store/apps/details?id=com.debtr"
    },
    {
      img: "work-clocker.webp",
      title: "Work Clocker",
      category: "mobile",
      description:
        'A "card punch" app to allow workers to better manage their time to avoid working more than the 8 hours they need to. <br/>Among other things, tells you when you can leave, taking into account the starting time, lunch duration and duration of a regular work day',
      android: "https://play.google.com/store/apps/details?id=com.workclocker"
    },
    {
      img: "last-minute.webp",
      title: "Last Minute",
      category: "web",
      description:
        "A platform that allows clients to reserve tour tickets last minute at a discounted price. This project also has a backoffice created from scratch that allows the company to manage everything. <br/> This platform was integrated with the pre-existing main website",
      web: "https://www.last.celina-tours.com/en"
    },
    {
      img: "quercus-man.webp",
      title: "Quercus Manager",
      category: "web",
      description:
        "A platform to to help Quercus manage they're domains and emails without accessing CPanel directly in order to avoid possible issues such as accidental deletes."
    },
    {
      img: "quercus-mailer.webp",
      title: "Quercus Mailer",
      category: "web",
      description:
        "A really simple mass-mailer system that integrates with uses CPanel with throttling to avoid being marked as spam. <br/> Quercus had the need to send emails to multiple people (200+) at the time and had problems in past with origin email getting flagged as spam."
    },
    {
      img: "quercustv.webp",
      title: "QuercusTV",
      category: "web",
      description:
        "Rebranding of QuercusTV, creating a new brand-focused interface that interacts with Vimeo, allowing Quercus to still have it's branding and off loading the heavy lifting to a dedicated video platform",
      web: "https://quercustv.pt/"
    }
  ];

  onMount(() => {
    const itemsPerSlide = window.innerWidth >= 1200 ? 2 : 1;

    jQuery("#projects-slider").slick({
      infinite: true,
      slidesToShow: itemsPerSlide,
      slidesToScroll: itemsPerSlide,
      dots: true,
      arrows: true,
      speed: 1000,
      mobileFirst: true,
      autoplay: true,
      autoplaySpeed: 2000
    });
  });
</script>

<style lang="scss">
  @import "../scss/mixins.scss";

  @media (max-width: 992px) {
    .slider-item {
      img {
        box-shadow: 0 0 4px 2px #d4d4d4;
        object-fit: cover;
      }
    }

    .white-bg {
      background-color: #fff;
    }
  }

  #projects-slider {
    width: 97%;
    margin: auto;

    .slider-item {
      @include transition();
      transform: scale(1);
      position: relative;
      min-width: 20vw;
      margin-left: 0.5vw;
      margin-right: 0.5vw;
      min-width: 576px;

      &:hover {
        @include transition();
        transform: scale(1.1);

        & .overlay {
          opacity: 1;
        }
      }

      img {
        height: 500px;
        width: auto;
        box-shadow: 0 0 6px 3px #d4d4d4;
        max-width: 100%;
      }

      .overlay {
        color: var(--text);
        position: absolute;
        display: block;
        top: 0;
        transition: 0.2s all ease-in-out;
        opacity: 0;
        background-color: rgba(53, 41, 97, 0.8);
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 9999;

        &:hover {
          & .text {
            transition-delay: 0.15s;
            opacity: 1;
            visibility: visible;
            margin-top: 0px;
          }
        }

        .text {
          position: absolute;
          text-align: center;
          top: 50%;
          left: 50%;
          z-index: 2;
          opacity: 0;
          visibility: hidden;
          transform: translate(-50%, -50%);
          transition: 0.3s all ease;
          margin-top: 20px;

          h3 {
            font-size: 1.5rem;
            font-weight: 900;
            color: var(--text);
            margin: 0;
            padding: 0;
          }

          .category {
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.7);
            text-transform: uppercase;
          }

          .description {
            margin-bottom: 1.5rem;
          }

          span {
            font-size: 0.75rem;
            font-style: italic;
          }

          a {
            @include transition();

            color: #ffffffcf;

            &:active,
            &:focus {
              outline: none;
              color: #fff;
            }

            &:hover {
              @include transition();

              color: #fff;
            }
          }
        }
      }
    }
  }
</style>

<div id="projects" class="section">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-xl-8 col mb-5">
        <h2 class="section-title">Projects</h2>
        <p class="section-description">
          I've on several different projects, convering all types of projects,
          fields, requirements and goals. From a simple web shop or mobile
          application or more complex like internal tools to manage email
          systems or a last minute ticket system. Although most of the career
          has been as an employee, I've also worked on some freelancing projects
        </p>
      </div>
    </div>
  </div>

  <div id="projects-slider">
    {#each projects as p}
      <div
        class={`slider-item d-flex justify-content-center ${p.category}`}
        style={window.innerWidth <= 992 ? `width: ${window.innerWidth}` : ''}>
        <div class="w-100 white-bg">
          <img
            class="m-auto"
            src={`assets/images/projects/${p.img}`}
            alt={p.title} />
          <div
            class="overlay d-flex justify-content-center flex-column
            align-items-center">
            <div class="text">
              <h3>{p.title}</h3>
              <p class="category">{p.category}</p>
              <p class="description">
                {@html p.description}
              </p>
              {#if p.category === 'web'}
                {#if !!p.web}
                  <a
                    href={p.web}
                    title="Link to platform"
                    target="_blank"
                    rel="noopener">
                    <i class="fa fa-2x fa-globe" />
                  </a>
                {:else}
                  <span>This project isn't available publicly</span>
                {/if}
              {:else}
                <div class="d-flex align-items-center justify-content-center">
                  <a
                    href={p.android}
                    title="Link to Google play listing"
                    target="_blank"
                    rel="noopener">
                    <i class="fab fa-2x fa-android" />
                  </a>
                  {#if !!p.ios}
                    <a
                      href={p.ios}
                      title="Link to Apple store listing"
                      target="_blank"
                      rel="noopener">
                      <i class="fab fa-2x fa-apple" />
                    </a>
                  {/if}
                </div>
              {/if}
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>
