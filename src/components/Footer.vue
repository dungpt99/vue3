<template>
  <div class="footer">
    <div>
      <p style="font-size: 3rem; color: white; font-weight: 700; margin: 0">
        Ready? Try it - Free!
      </p>
      <p style="color: rgb(181 186 201)">
        Sign up now and build your pages the way you envisioned. No credit cards
        required.
      </p>
      <div class="" style="margin: 50px 0">
        <button
          style="
            background-color: #557dff;
            border-radius: 12px;
            color: #fff;
            cursor: pointer;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 0.5px;
            line-height: 24px;
            padding: 16px 48px;
            text-align: center;
            text-transform: capitalize;
            margin-right: 30px;
          "
        >
          Start For Free
        </button>
        <button
          style="
            background-color: hsla(0, 0%, 100%, 0.1);
            border-radius: 12px;
            color: #fff;
            cursor: pointer;
            font-size: 14px;
            font-style: normal;
            font-weight: 600;
            letter-spacing: 0.5px;
            line-height: 24px;
            padding: 16px 48px;
            text-align: center;
            text-transform: capitalize;
            box-sizing: border-box;
            outline: none;
            border-color: none;
          "
        >
          See Pricing Plans
        </button>
      </div>
    </div>
    <div
      style="
        display: flex;
        justify-content: space-between;
        padding: 0 100px;
        margin-top: 130px;
        align-items: center;
      "
    >
      <div class="author" style="display: flex; align-items: center">
        <img src="../assets/logo.png" alt="" width="72" height="72" />
        <div style="color: white; font-size: 24px">GenLogin</div>
      </div>
      <div
        class="content"
        style="
          font-size: 16px;
          text-align: left;
          display: flex;
          justify-content: space-between;
          width: 80%;
        "
      >
        <div>
          <p style="color: white">Service</p>
          <p>Application</p>
          <p>Check Browser</p>
          <p>api</p>
        </div>
        <div>
          <p style="color: white">Products</p>
          <p>Affiliate Program</p>
          <p>Pricing</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div>
          <p style="color: white">Support</p>
          <p>FAQ</p>
          <p>Products</p>
          <p>Privacy and security policy</p>
          <p>Purchase and Sale Policy</p>
        </div>
        <div class="mail">
          <p style="color: white">Get Our Latest eCommerce Tips</p>
          <div>
            <input type="text" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer {
  background-color: rgb(12 15 37 / 1);
  padding: 100px 0;
}
</style>
