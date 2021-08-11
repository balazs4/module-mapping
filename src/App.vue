<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Ajv from "ajv";
import apply from "ajv-formats-draft2019"

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  created() {
    const ajv = new Ajv();
    apply(ajv); // returns ajv instance, allowing chaining

    let schema = {
      type: "string",
      format: "idn-email",
    };
    console.log(ajv.validate(schema, "квіточка@пошта.укр")); // returns true
  },
};
</script>
