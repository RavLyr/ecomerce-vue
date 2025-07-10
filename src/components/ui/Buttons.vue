<template>
    <button :type="type" :class="[
        baseClasses,
        variantClasses[variant] ?? '',
        sizeClasses[size] ?? '',
        extraClass
    ]" v-on="$attrs">
        <slot />
    </button>
</template>

<script setup>

const props = defineProps({
    variant: {
        type: String,
        default: 'default',
    },
    size: {
        type: String,
        default: 'md'
    },
    extraClass: {                
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'button'
    }
})

const baseClasses = 'inline-flex items-center justify-center rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

const variantClasses = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    outline: 'border border-blue-600 text-blue-600 bg-transparent hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'bg-transparent text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
}

const sizeClasses = {
    sm: 'text-sm px-2 py-1',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
}
</script>
