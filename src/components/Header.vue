<template>
  <div class="header">
    <div class="left">
      <div class="avatar">
        <img src="../assets/logo.png" />
      </div>
    </div>
    <div class="center">
      <div class="menu" style="position: relative">
        <ul>
          <li @click="handleClick">Solution</li>
          <li @click="handleClick">Resource</li>
          <li @click="handleClick">Guideline</li>
          <li @click="handleClick">Pricing</li>
          <li @click="handleClick">Contact</li>
        </ul>
        <Dropdown
          style="
            position: absolute;
            top: 40px;
            border-radius: 0.5rem;
            visibility: hidden;
          "
          :class="site"
          :content="content"
        />
      </div>
    </div>
    <div class="right">
      <div class="btn">
        <button class="signup">Sign up</button>
        <button class="download">Download</button>
      </div>
      <div class="language">
        <select name="" id="">
          <Option>EN</Option>
          <Option>VN</Option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "./Dropdown.vue";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      site: "",
      content: "",
    };
  },
  components: { Dropdown },
  methods: {
    handleClick(e) {
      if (e.target.textContent !== this.content) {
        this.content = e.target.textContent;
        this.site = e.target.textContent.toLowerCase();
      } else {
        this.content = "";
        this.site = "";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 140px;
  background-color: rgb(242 243 251);
  text-align: center;
}

.avatar {
  img {
    width: 4rem;
    height: 4rem;
  }
}

.center {
  display: flex;
  align-items: center;
}

.menu {
  ul {
    list-style: none;
    display: flex;
    margin: 0;

    li {
      margin: 0 10px;
      color: rgb(17 24 39);
      font-weight: 500;
      font-size: 18px;
      cursor: pointer;

      &:hover {
        color: rgb(85, 125, 255);
      }
    }
  }
}

.right {
  display: flex;
  align-items: center;

  .btn {
    margin-right: 10px;
    button {
      margin: 0 5px;
      cursor: pointer;
    }

    .signup {
      color: rgb(242 243 251);
      background-color: rgb(18 74 214);
      border-color: rgb(18 74 214);
      border-radius: 0.75rem;
      font-weight: 600;
      padding: 0.5rem 0.75rem;
      box-shadow: 0 0 #0000, 0 0 #0000, var(0 0 #0000, 0 0 #0000);
    }

    .download {
      box-shadow: #fff, #fff, var(0 0 #0000, 0 0 #0000);
      color: rgb(18 74 214);
      background-color: white;
      border-color: rgb(18 74 214);
      border-radius: 0.75rem;
      font-weight: 600;
      padding: 0.5rem 0.75rem;

      &:hover {
        background-color: rgb(209 227 255);
      }
    }
  }

  .language {
    select {
      border: none;
      background-color: rgb(242 243 251);

      &:focus-visible {
        border: none !important;
      }
    }
  }
}

.solution {
  left: 25px;
  visibility: visible !important;
}

.resource {
  left: 120px;
  visibility: visible !important;
}

.guideline {
  left: 215px;
  visibility: visible !important;
}
</style>
