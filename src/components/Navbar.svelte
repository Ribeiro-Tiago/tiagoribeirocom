<script>
  const menus = [
    { link: "#home", title: "Home" },
    { link: "#projects", title: "Projects" },
    { link: "#services", title: "Services" },
    { link: "#testimonials", title: "Testimonials" },
    { link: "#process", title: "Process" }
  ];
  let yPos = 0;
  let activeMenu = 0;
  let timer = null;
  let isScrolling = false;
  let isMenuVisible = false;

  $: navStickiness = updateSticky(yPos);

  const updateSticky = yPos => (yPos >= 40 ? "sticky" : "");

  const debounce = callback => {
    clearTimeout(timer);
    setTimeout(callback, 0);
  };

  const elemHeight = id => {
    const elem = document.getElementById(id);
    return elem.clientHeight + elem.offsetTop - 50;
  };

  const onScroll = ev => {
    if (isScrolling) {
      return;
    }

    debounce(() => {
      if (yPos < elemHeight("home")) {
        activeMenu = 0;
        return;
      }

      if (yPos < elemHeight("projects")) {
        activeMenu = 1;
        return;
      }

      if (yPos < elemHeight("services")) {
        activeMenu = 2;
        return;
      }

      if (yPos < elemHeight("testimonials")) {
        activeMenu = 3;
        return;
      }

      if (yPos < elemHeight("process")) {
        activeMenu = 4;
        return;
      }

      activeMenu = -1;
    });
  };

  const onClick = (ev, index) => {
    ev.preventDefault();
    isScrolling = true;

    const hash = ev.target.getAttribute("href");

    activeMenu = index;

    jQuery("html, body").animate(
      { scrollTop: jQuery(hash).offset().top - 45 },
      800,
      "swing",
      () => {
        window.location.hash = hash;
        isScrolling = false;
      }
    );
  };

  const toggleMenu = () => {
    isMenuVisible = !isMenuVisible;
  };
</script>

<style lang="scss">
  @import "../scss/mixins";

  @media (min-width: 1200px) {
    .sticky {
      padding-top: 0;
      padding-bottom: 0;
    }
  }

  @media (max-width: 768px) {
    nav {
      &:not(.sticky) {
        .fa-bars {
          color: var(--text);
        }
      }

      .menu {
        width: 40% !important;
      }
    }
  }

  @media (max-width: 576px) {
    nav {
      .menu {
        width: 50% !important;
      }
    }
  }

  nav {
    &.navbar {
      @include transition();
      position: absolute;
      z-index: 999;
      width: 100%;
      padding-left: 5vw;
      padding-right: 5vw;
    }

    &.sticky {
      @include transition();
      box-shadow: rgba(0, 0, 0, 0.7) 4px 0px 20px -5px;
      background: rgb(255, 255, 255);
      position: fixed;

      .desktop {
        a:not(.btn) {
          color: var(--primary);

          &:hover,
          &.active {
            color: var(--primary);

            &:after {
              background-color: var(--primary);
            }
          }

          &:after {
            background-color: var(--primary);
          }
        }
      }

      .mobile {
        h2 {
          @include transition();
          opacity: 1;
        }

        padding: 0.5rem 0;
      }
    }

    .desktop {
      a:not(.btn) {
        position: relative;
        color: var(--text);
        cursor: pointer;

        &:after {
          height: 2px;
          background: var(--text);
          content: "";
          position: absolute;
          bottom: 0;
          left: 20px;
          right: 20px;
          -webkit-transform: scale(0);
          -ms-transform: scale(0);
          transform: scale(0);
          -webkit-transition: 0.3s all ease;
          -o-transition: 0.3s all ease;
          transition: 0.3s all ease;
        }

        &.active,
        &:hover {
          color: var(--text);

          &:after {
            transform: scale(1);
          }
        }
      }
    }

    .btn {
      color: var(--text);
      background-color: var(--accent);

      &:hover {
        color: var(--text);
        background-color: var(--accent-hover);
      }
    }

    .mobile {
      padding: 2vh 0;

      h2 {
        @include transition();
        color: var(--primary);
        margin: 0;
        opacity: 0;
      }

      .menu-container {
        position: fixed;

        .overlay {
          @include transition();
          top: 0;
          right: 0;
          left: 0;
          opacity: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
        }
      }

      .menu {
        @include transition();
        right: 0;
        top: 0;
        background: #fff;
        bottom: 0;
        height: 100vh;
        position: fixed;
        overflow: hidden;
        width: 25%;
        padding: 2vh;
        padding-top: 0;
        z-index: 10;
        transform: translateX(100%);

        .nav {
          font-size: 1.5rem;

          a:not(.btn) {
            color: #212529;
            opacity: 0.8;
            font-weight: 300;

            &.active {
              color: var(--accent);
            }
          }

          .btn {
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
          }

          .nav-link {
            margin-bottom: 0.5rem;
          }
        }

        .close-wrapper {
          padding: 3vh 1vh;
        }
      }

      .visible {
        .overlay {
          @include transition();
          position: fixed;
          opacity: 1;
        }

        .menu {
          @include transition();
          transform: translateX(0);
        }
      }
    }
  }
</style>

<svelte:window bind:scrollY={yPos} on:scroll={onScroll} />

<nav class={`navbar d-flex ${navStickiness}`}>
  <div class="d-xl-none w-100">
    <div
      class="mobile align-items-center justify-content-between d-flex flex-row">
      <h2>Tiago Ribeiro</h2>

      <i class="fas fa-2x fa-bars" on:click={toggleMenu} />

      <div class={`menu-container ${isMenuVisible ? 'visible' : ''}`}>
        <div class="menu">
          <div class="close-wrapper">
            <i class="fas fa-2x fa-times close" on:click={toggleMenu} />
          </div>

          <ul class="nav flex-column">
            {#each menus as m, i}
              <li class="nav-item nav-link">
                <a
                  href={m.link}
                  class={`${activeMenu === i ? 'active' : ''}`}
                  on:click={ev => onClick(ev, i)}>
                  {m.title}
                </a>
              </li>
            {/each}

            <li class="nav-item nav-link">
              <a href="#contact" class="btn" on:click={ev => onClick(ev, -1)}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div class="overlay" on:click={toggleMenu} />
      </div>
    </div>
  </div>

  <div class="d-none d-xl-block w-100">
    <div class="desktop d-flex justify-content-between w-100">
      <ul class="nav">
        {#each menus as m, i}
          <li class="nav-item nav-link">
            <a
              href={m.link}
              class={`nav-link ${activeMenu === i ? 'active' : ''}`}
              on:click={ev => onClick(ev, i)}>
              {m.title}
            </a>
          </li>
        {/each}
      </ul>

      <ul class="nav">
        <li class="nav-item nav-link">
          <a href="#contact" class="btn" on:click={ev => onClick(ev, -1)}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
