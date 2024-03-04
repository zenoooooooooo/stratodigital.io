<template>
    <section :class="customClass">
        <ul id="scene" class="relative h-full list-none perspective-1200">
            <li class="absolute top-0 left-0 w-full h-full  hl" data-depth="0.50">
                <img
                    src="../../images/meteor/m01.png" />
            </li>
            <li class="absolute top-0 left-0 w-full h-full  hl" data-depth="0.75">
                <img
                    src="../../images/meteor/m02.png" />
            </li>
            <li class="absolute top-0 left-0 w-full h-full  hl" data-depth="1.00">
                <img
                    src="../../images/meteor/m03.png" />
            </li>
            <li class="absolute top-0 left-0 w-full h-full  hl" data-depth="2.50">
                <img
                    src="../../images/meteor/m04.png" />
            </li>
            <li class="absolute top-0 left-0 w-full h-full  hl" data-depth="2.00">
                <img
                    src="../../images/meteor/m05.png" />
            </li>
        </ul>
    </section>
</template>

<script>
export default {
  name: "Meteor",
  mounted() {
    var scene = document.getElementById("scene");
    new Parallax(scene);
  },
  props: {
    customClass: String
  }
};
</script>
