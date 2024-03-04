<template>
    <CustomSection CustomSectionClass="lp-20 h-auto md:p-10 w-auto mb-10" title="Get updates from our team, follow us on Instagram!" tag="section" CustomTitleClass="pt-0 mx-auto h-auto text-4xl font-semibold text-sky-500 text-center m-[50px]">
        <div class="sm:w-full">
            <div class="html-embed w-embed lg:max-w-[50vw] sm:max-w-[80vw] sm:w-full mx-auto">
                <div class="embedsocial-hashtag" data-ref="0290e736d9a1fa5a5451ab4dcca84ed40db34599">
                    <iframe
                        src="https://embedsocial.com/api/pro_hashtag/0290e736d9a1fa5a5451ab4dcca84ed40db34599/?origin=https%3A%2F%2Fstratodigital.io%2F"
                        id="embedIFrame_0290e736d9a1fa5a5451ab4dcca84ed40db34599wkh349"
                        class="embedsocial-hashtag-iframe" title="EmbedSocial Universal Widget"
                        style="width: 100%; height: 452px; border: 0px; overflow: hidden" scrolling="no"
                        webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true"></iframe>
                    <a class="feed-powered-by-es feed-powered-by-es-slider-new"
                        href="https://embedsocial.com/social-media-aggregator/" target="_blank"
                        title="Widget by EmbedSocial" style="display: block">
                        Widget by EmbedSocial <span>→</span>
                    </a>
                </div>
            </div>
        </div>
    </CustomSection>
</template>

<script>

import CustomSection from "../customComponents/CustomSection.vue"

(function (d, s, id) {
    var js;
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://embedsocial.com/cdn/ht.js";
    d.getElementsByTagName("head")[0].appendChild(js);
})(document, "script", "EmbedSocialHashtagScript");

export default {
    name: "EmbedSocial",
    components: {
        CustomSection
    }
}
</script>
