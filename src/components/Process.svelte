<script>
  const process = [
    {
      icon: "fa-handshake",
      title: "Get in contact",
      description:
        "First things first. Our partnership begins with you getting in contact with me and describing your problem"
    },
    {
      icon: "fa-clipboard-check",
      title: "Solution & budget",
      description:
        "After our chat I get to work to come up with a solution and budget. <br/>This is presented to you as detailed as possible"
    },
    {
      icon: "fa-code",
      title: "Development & Testing",
      description:
        "Once agreed upon, I start developing and and testing. <br/>It could be possible for you get access to developing product."
    },
    {
      icon: "fa-truck-loading",
      title: "Delivery",
      description:
        "Finallly when the agreed upon deadline arrives the solution shall be complete and ready to be used"
    }
  ];
</script>

<style lang="scss">
  @media (max-width: 992px) {
    .section-description {
      margin-bottom: 0;
    }

    .card {
      margin-bottom: 2rem;
    }
  }
</style>

<div id="process" class="process-section bg-light-gray section">
  <div class="container">
    <div class="row">
      <div class="col-lg-8 mb-5">
        <h2 class="section-title">Process</h2>
        <p class="section-description">
          So you're interested in working us working together, what can you
          expect ?
        </p>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row">
      {#each process as p, i}
        <div
          class={`col-sm-8 col-md-5 col-xl-3 mb-4 mb-lg-0 ${i % 2 === 0 ? 'offset-md-1 offset-xl-0' : ''}`}>
          <div class="card text-center">
            <div class="card-body">
              <i class={`fas ${p.icon} fa-3x`} />
              <h3 class="card-title">{p.title}</h3>
              <p class="card-text">
                {@html p.description}
              </p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
