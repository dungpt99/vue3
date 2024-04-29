<template>
  <div class="body">
    <div class="title">
      <p class="main">Price & Plan</p>
      <p>
        Discover Affordable Excellence with Genlogin's Pricing Plans. Elevate
        your efficiency, fit for every budget!
      </p>
    </div>
    <div class="select">
      <span
        class="month"
        :class="{ active: isMonthActive }"
        @click="changeValueMonth"
        >Billed Month</span
      >
      <span
        class="year"
        :class="{ active: isYearActive }"
        @click="changeValueYear"
        >Billed Year (-50%)</span
      >
    </div>
    <div class="option">
      <div class="package">
        <div class="card">
          <p style="color: rgb(85 125 255); font-size: 24px">Free</p>
          <p
            style="
              color: white;
              font-size: 48px;
              font-weight: 800;
              margin-bottom: 0;
              margin-top: 10px;
            "
          >
            Free
          </p>
          <p style="color: rgb(156 163 175)">Free with all features</p>
          <button
            style="
              border: 4.857px solid var(--Blue-2, #557dff);
              border-radius: 12px;
              padding: 16px 0px;
              width: 100%;
              background-color: transparent;
              color: white;
              font-size: 13px;
              font-weight: 500;
            "
          >
            Get Started
          </button>
          <div style="text-align: left">
            <p>5 profiles</p>
            <p>Synchronizer Action</p>
            <p>Cloud data sync</p>
            <p>Automation tasking</p>
            <p>Miniapp Interface</p>
            <p>Automation Academy</p>
          </div>
        </div>
        <div class="card">
          <p style="color: rgb(85 125 255); font-size: 24px">Free</p>
          <p
            style="
              color: white;
              font-size: 48px;
              font-weight: 800;
              margin-bottom: 0;
              margin-top: 10px;
            "
          >
            ${{ value.mini }} / <span style="font-size: 20px">month</span>
          </p>
          <p style="color: rgb(156 163 175)">For individuals or small teams</p>
          <button
            style="
              border: 4.857px solid var(--Blue-2, #557dff);
              border-radius: 12px;
              padding: 16px 0px;
              width: 100%;
              background-color: transparent;
              color: white;
              font-size: 13px;
              font-weight: 500;
            "
          >
            Get Started
          </button>
          <div style="text-align: left">
            <p>5 profiles</p>
            <p>Synchronizer Action</p>
            <p>Cloud data sync</p>
            <p>Automation tasking</p>
            <p>Miniapp Interface</p>
            <p>Automation Academy</p>
          </div>
        </div>
        <div class="card">
          <p style="color: rgb(85 125 255); font-size: 24px">Free</p>
          <p
            style="
              color: white;
              font-size: 48px;
              font-weight: 800;
              margin-bottom: 0;
              margin-top: 10px;
            "
          >
            ${{ value.solo }} / <span style="font-size: 20px">month</span>
          </p>
          <p style="color: rgb(156 163 175)">
            Optimizing costs with personal use
          </p>
          <button
            style="
              border: 4.857px solid #557dff;
              border-radius: 12px;
              padding: 16px 0px;
              width: 100%;
              background-color: transparent;
              color: white;
              font-size: 13px;
              font-weight: 500;
            "
          >
            Get Started
          </button>
          <div style="text-align: left">
            <p>5 profiles</p>
            <p>Synchronizer Action</p>
            <p>Cloud data sync</p>
            <p>Automation tasking</p>
            <p>Miniapp Interface</p>
            <p>Automation Academy</p>
          </div>
        </div>
      </div>
      <div class="vip">
        <div class="card">
          <div style="display: flex; justify-content: space-between">
            <p
              style="color: rgb(85 125 255); font-size: 24px; text-align: left"
            >
              Team <br /><span style="color: rgb(156 163 175); font-size: 18px"
                >Profitable for a small team</span
              >
            </p>
            <p
              style="
                color: white;
                font-size: 48px;
                font-weight: 800;
                margin-bottom: 0;
                margin-top: 10px;
              "
            >
              ${{ value.team }}
            </p>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div style="text-align: left">
              <p>300 profiles</p>
              <p>5 sub-accounts</p>
              <p>VIP Support</p>
              <p>Including all features of Solo Plan</p>
            </div>
            <button
              style="
                border: 4.857px solid #557dff;
                border-radius: 12px;
                padding: 16px 0px;
                background-color: transparent;
                color: white;
                font-size: 13px;
                font-weight: 500;
                width: 30%;
                height: 20%;
              "
            >
              Get started
            </button>
          </div>
        </div>
        <div class="card">
          <div style="display: flex; justify-content: space-between">
            <p
              style="color: rgb(85 125 255); font-size: 24px; text-align: left"
            >
              Company <br /><span
                style="color: rgb(156 163 175); font-size: 18px"
                >Best for organizations and get vip support
              </span>
            </p>
            <p
              style="
                color: white;
                font-size: 48px;
                font-weight: 800;
                margin-bottom: 0;
                margin-top: 10px;
              "
            >
              ${{ value.company }}
            </p>
          </div>
          <div
            style="
              display: flex;
              justify-content: space-between;
              align-items: center;
            "
          >
            <div style="text-align: left">
              <p>1000 profiles</p>
              <p>20 sub-accounts</p>
              <p>VIP Support</p>
              <p>Including all features of Solo Plan</p>
            </div>
            <button
              style="
                border: 4.857px solid #557dff;
                border-radius: 12px;
                padding: 16px 0px;
                background-color: transparent;
                color: white;
                font-size: 13px;
                font-weight: 500;
                width: 30%;
                height: 20%;
              "
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="contact"
      style="
        background-color: #557dff;
        color: white;
        padding: 20px;
        margin: 40px 100px 0 100px;
        border-radius: 5px;
        cursor: pointer;
      "
    >
      CONTACT SUPPORT
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      value: { mini: 20, solo: 39, team: 91, company: 189 },
      isMonthActive: true,
      isYearActive: false,
    };
  },
  methods: {
    changeValueMonth() {
      this.isMonthActive = true;
      this.isYearActive = false;
      this.value = { mini: 20, solo: 39, team: 91, company: 189 };
    },
    changeValueYear() {
      this.isMonthActive = false;
      this.isYearActive = true;
      this.value = { mini: 10, solo: 19.5, team: 45.5, company: 94.5 };
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  padding: 40px;
  background-color: rgb(12 15 37 / 1);
}

.title {
  .main {
    color: #056cfe;
    font-size: 2.25rem;
    font-weight: 700;
    text-align: center;
  }

  p {
    color: white;
    text-align: center;
  }
}

.select {
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.38);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.06) 100%
  );
  width: 410px;
  height: 88px;
  margin: 0 auto;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  span {
    padding: 16px 24px;
    color: white;
    background: transparent;
    font-size: 1.125rem;
    cursor: pointer;
  }
}

.active {
  background: rgb(85, 125, 255) !important;
  border-width: 1px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.38);
  border-radius: 24px;
}

.option {
  .package {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
    .card {
      color: white;
      width: 25%;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid white;
      border-radius: 1%;
      padding: 20px 40px;

      button {
        cursor: pointer;
        &:hover {
          background-color: #557dff !important;
        }
      }
    }
  }

  .vip {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
    .card {
      color: white;
      width: 42%;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid white;
      border-radius: 1%;
      padding: 20px 40px;

      button {
        cursor: pointer;
        &:hover {
          background-color: #557dff !important;
        }
      }
    }
  }
}
</style>
