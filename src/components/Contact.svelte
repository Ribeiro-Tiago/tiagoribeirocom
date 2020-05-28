<script>
  let showAlert = false;
  let alertMessage = "";
  let alertType = "success";
  let isSubmitting = false;
  let formErrs = {};
  let formInput = {
    firstName: "",
    lastName: "",
    subject: "",
    email: "",
    message: ""
  };

  const showMessage = (message, type) => {
    showAlert = true;
    alertMessage = message;
    alertType = type;

    setTimeout(() => {
      showAlert = false;
    }, 10000);
  };

  const onSubmit = ev => {
    ev.preventDefault();
    isSubmitting = true;
    formErrs = {};

    fetch(
      "https://europe-west1-tiagoribeirocom-ec4f5.cloudfunctions.net/sendMail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formInput)
      }
    )
      .then(result => result.json())
      .then(({ status, errs }) => {
        if (status === 201) {
          showMessage(
            "Message received, I'll get in contact as soon as possible!",
            "success"
          );

          formInput = {
            firstName: "",
            lastName: "",
            subject: "",
            email: "",
            message: ""
          };
          return;
        }

        if (status === 500) {
          throw 500;
        }

        formErrs = errs.reduce((accu, { key, msg }) => {
          accu[key] = msg;
          return accu;
        }, {});
      })
      .catch(() => {
        showMessage(
          "Something went wrong. If the issue persists please contact me directly at tiagoribeiro.1803@gmail.com!",
          "danger"
        );
      })
      .finally(() => (isSubmitting = false));
  };
</script>

<style lang="scss">
  @import "../scss/mixins.scss";

  .alert {
    position: fixed;
    z-index: 99999999;
    top: 0;
    margin: auto;
    left: 0;
    right: 0;
    text-align: center;
  }

  .contact-section {
    img {
      width: 455px;
      height: 445px;
      margin-left: 2vw;
      box-shadow: none;
    }

    input,
    textarea {
      &:not(:placeholder-shown) + label {
        @include inputAnimation();
      }
    }

    .form-group {
      position: relative;

      &.has-error {
        input,
        textarea {
          border-color: #dc3545;
        }

        small {
          display: block;
        }
      }

      small {
        display: none;
        color: #dc3545 !important;
      }

      input {
        height: calc(3rem + 2px);
      }

      textarea {
        padding: 1rem 0.75rem;
      }

      input,
      textarea {
        &:focus {
          box-shadow: none;
          border-color: var(--primary);
        }

        &::placeholder {
          color: transparent;
        }
      }

      &:focus-within {
        & > label {
          @include inputAnimation();
        }
      }

      label {
        @include transition();
        position: absolute;
        left: 14px;
        top: 0.8rem;
        opacity: 0.8;
        margin: 0;
      }
    }

    button {
      @include oswald();

      width: 50%;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
</style>

{#if showAlert}
  <div class={`alert alert-${alertType}`} role="alert">{alertMessage}</div>
{/if}

<div id="contact" class="contact-section section">
  <div class="container">
    <div class="row d-flex align-items-center">
      <div class="col-md-10 offset-md-1 offset-xl-1 col-xl-5">
        <h2 class="section-title">Get in contact</h2>
        <p class="section-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus
          distinctio ex.
        </p>

        <form action="">
          <div class="row">
            <div class="col">
              <div
                class={`form-group ${!!formErrs.firstName ? 'has-error' : ''}`}>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder="First Name"
                  bind:value={formInput.firstName} />
                <label for="firstName">First name</label>
                <small class="form-text text-muted">{formErrs.firstName}</small>
              </div>
            </div>
            <div class="col">
              <div
                class={`form-group ${!!formErrs.lastName ? 'has-error' : ''}`}>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  bind:value={formInput.lastName}
                  placeholder="Last Name" />
                <label for="lastName">Last Name</label>
                <small class="form-text text-muted">{formErrs.lastName}</small>
              </div>
            </div>
          </div>
          <div class={`form-group ${!!formErrs.subject ? 'has-error' : ''}`}>
            <input
              type="text"
              class="form-control"
              id="subject"
              bind:value={formInput.subject}
              placeholder="Subject" />
            <label for="subject">Subject</label>
            <small class="form-text text-muted">{formErrs.subject}</small>
          </div>
          <div class={`form-group ${!!formErrs.email ? 'has-error' : ''}`}>
            <input
              type="email"
              class="form-control"
              id="email"
              bind:value={formInput.email}
              placeholder="Email" />
            <label for="email">Email</label>
            <small class="form-text text-muted">{formErrs.email}</small>
          </div>
          <div class={`form-group ${!!formErrs.message ? 'has-error' : ''}`}>
            <textarea
              rows="10"
              class="form-control"
              id="message"
              bind:value={formInput.message}
              placeholder="Message" />
            <label for="message">Message</label>
            <small class="form-text text-muted">{formErrs.message}</small>
          </div>

          <button
            type="submit"
            on:click={onSubmit}
            class={`btn btn-primary ${isSubmitting ? 'disabled' : ''}`}>
            Contact
          </button>
        </form>
      </div>
      <div class="d-none d-xl-block col-lg-5">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/08/10/49/group-1962592_960_720.png"
          alt="Contact me"
          loading="lazy"
          width="455px"
          height="455px" />
      </div>
    </div>
  </div>
</div>
