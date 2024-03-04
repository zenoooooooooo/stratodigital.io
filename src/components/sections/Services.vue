<template>
  <footer class="flex bg-slate-900 h-auto">
    <div class="flex flex-col m-auto py-[50px] lg:w-[60%] sm:w-[70vw] h-auto">
      <div class="flex sm:flex-col lg:flex-row md:flex-row px-5 mx-auto mt-auto mb-5 w-full">
        <div class="flex flex-col lg:mr-auto sm:mr-auto sm:ml-auto mb-auto w-4/5 h-full sm:mb-[20px]">
          <div class="h-auto text-base text-white sm:text-center md:text-left lg:text-left">
            <h3><strong>Our Services</strong></h3>
          </div>
          <div class="flex sm:flex-col md:flex-col lg:flex-row">
            <ul class="flex flex-col lg:mr-[10%]">
              <li :class="liStyle">Performance Marketing</li>
              <li :class="liStyle">Content Marketing</li>
              <li :class="liStyle">Influencer Marketing</li>
              <li :class="liStyle">Performance Marketing</li>
            </ul>
            <ul class="flex flex-col lg:ml-[10%]">
              <li :class="liStyle">SEO/SEM</li>
              <li :class="liStyle">Website Development</li>
              <li :class="liStyle">Mobile App Development</li>
              <li :class="liStyle">Staff Augmentation</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col mb-auto lg:ml-auto w-auto h-auto sm:ml-auto sm:mr-auto">
          <div class="lg:mr-auto sm:mr-auto sm:ml-auto mb-3.5 w-auto h-auto">
            <p class="ml-auto w-auto h-auto text-sm lg:text-left  text-white"><strong>Follow Us</strong></p>
          </div>
          <div class="flex overflow-auto flex-row gap-5 ml-auto w-auto">
            <a href="https://www.facebook.com/StratoDigital" target="_blank"><img loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fd22a17f1093943ea9697e6a0e3520eee?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fd22a17f1093943ea9697e6a0e3520eee?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fd22a17f1093943ea9697e6a0e3520eee?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fd22a17f1093943ea9697e6a0e3520eee?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fd22a17f1093943ea9697e6a0e3520eee?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fd22a17f1093943ea9697e6a0e3520eee?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fd22a17f1093943ea9697e6a0e3520eee?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fd22a17f1093943ea9697e6a0e3520eee"
                class="object-contain overflow-hidden max-w-full aspect-square w-[30px]" /></a>
            <a href="https://www.linkedin.com/company/stratodigital/" target="_blank"><img loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fc5117a643b014d67b025d2058131a4e0?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fc5117a643b014d67b025d2058131a4e0?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fc5117a643b014d67b025d2058131a4e0?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fc5117a643b014d67b025d2058131a4e0?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fc5117a643b014d67b025d2058131a4e0?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fc5117a643b014d67b025d2058131a4e0?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fc5117a643b014d67b025d2058131a4e0?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fc5117a643b014d67b025d2058131a4e0"
                class="object-contain overflow-hidden max-w-full aspect-square w-[30px]" /></a>
            <a href="https://www.instagram.com/stratodigital.io/" target="_blank"><img loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fba3253b38d6d42e1a59ab91483ae6f3c?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fba3253b38d6d42e1a59ab91483ae6f3c?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fba3253b38d6d42e1a59ab91483ae6f3c?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fba3253b38d6d42e1a59ab91483ae6f3c?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fba3253b38d6d42e1a59ab91483ae6f3c?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fba3253b38d6d42e1a59ab91483ae6f3c?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fba3253b38d6d42e1a59ab91483ae6f3c?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2Fba3253b38d6d42e1a59ab91483ae6f3c"
                class="object-contain overflow-hidden max-w-full aspect-square w-[30px]" /></a>
          </div>
        </div>
      </div>
      <hr />
      <div class="mt-3.5 lg:ml-auto md:ml-auto sm:text-center h-auto text-sm text-white">
        <p><strong>Powered by Infoshift Inc.</strong></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Services",
  data() {
    return {
      liStyle: "mt-3 text-base text-white sm:text-center lg:text-left md:text-left min-w-200"
    }
  }
};
</script>
