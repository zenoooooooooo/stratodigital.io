<template>
    <div
        class="flex flex-col p-5 mx-auto mb-8 rounded-lg border-2 border-solid border-stone-300 lg:w-[820px] md:w-[600px]  sm:w-[90vw]">
        <div class=" flex  flex-row  mb-2.5 h-auto mt-[px]">
            <img loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2F753f674668ae439ea4db29b369dd361b?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2F753f674668ae439ea4db29b369dd361b?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2F753f674668ae439ea4db29b369dd361b?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2F753f674668ae439ea4db29b369dd361b?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2F753f674668ae439ea4db29b369dd361b?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2F753f674668ae439ea4db29b369dd361b?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2F753f674668ae439ea4db29b369dd361b?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8fe0e3a7f7e6446a9a5fc5b4afd219a9%2F753f674668ae439ea4db29b369dd361b"
                class=" object-contain overflow-hidden  w-full aspect-[1.1] h-[26px] max-w-[43px] min-h-[20px] min-w-[20px]" />
            <div class="   mr-auto ml-8 text-lg text-left">
                <p><strong>{{ title }}</strong></p>
            </div>
        </div>
        <div class="w-full font-thick text-stone-300">
            <hr class="border-t border-gray-300 mb-2" />
        </div>
        <div class="self-start mt-5 w-full text-lg font-light text-left">
            <p>
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script>

export default {
    name: "CustomCard",
    props: {
        title: String,
        description: String,
        id: String
    }
}
</script>