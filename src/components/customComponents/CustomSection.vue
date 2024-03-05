<template>
    <component :is="tag" :class="CustomSectionClass" v-bind="$attrs" :id="id">
        <div :class="CustomTitleClass">
            {{ title }}
        </div>
        <slot></slot>
    </component>
</template>

<script>


export default {
    name: "CustomSection",
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        title: String,
        CustomSectionClass: null,
        id: String,
        CustomTitleClass: String
    }
}
</script>
