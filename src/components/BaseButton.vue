<template>
    <button 
        :class="buttonClasses" 
        :disabled="disabled || loading"
        @click="handleClick"
        :type="type"
    >
        <LoadingSkeleton v-if="loading" type="text" width="20px" />
        <span v-else>
            <slot />
        </span>
    </button>
</template>

<script setup>
import { computed } from 'vue'
import LoadingSkeleton from './LoadingSkeleton.vue'

const props = defineProps({
    variant: {
        type: String,
        default: 'primary',
        validator: (value) => ['primary', 'secondary', 'danger', 'outline', 'ghost'].includes(value)
    },
    size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    disabled: {
        type: Boolean,
        default: false
    },
    loading: {
        type: Boolean,
        default: false
    },
    type: {
        type: String,
        default: 'button',
        validator: (value) => ['button', 'submit', 'reset'].includes(value)
    },
    fullWidth: {
        type: Boolean,
        default: false
    }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => [
    'base-button',
    `base-button--${props.variant}`,
    `base-button--${props.size}`,
    {
        'base-button--full-width': props.fullWidth,
        'base-button--loading': props.loading
    }
])

const handleClick = (event) => {
    if (!props.disabled && !props.loading) {
        emit('click', event)
    }
}
</script>

<style scoped>
.base-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: none;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    font-family: inherit;
    position: relative;
    overflow: hidden;
}

.base-button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
}

.base-button--full-width {
    width: 100%;
}

/* Size variants */
.base-button--small {
    padding: 8px 16px;
    font-size: 14px;
    min-height: 36px;
}

.base-button--medium {
    padding: 12px 24px;
    font-size: 16px;
    min-height: 44px;
}

.base-button--large {
    padding: 16px 32px;
    font-size: 18px;
    min-height: 52px;
}

/* Color variants */
.base-button--primary {
    background: #2F4333;
    color: white;
}

.base-button--primary:hover:not(:disabled) {
    background: #1a2a1f;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(47, 67, 51, 0.3);
}

.base-button--secondary {
    background: #f0f0f0;
    color: #333;
}

.base-button--secondary:hover:not(:disabled) {
    background: #e0e0e0;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.base-button--danger {
    background: #ff4444;
    color: white;
}

.base-button--danger:hover:not(:disabled) {
    background: #cc0000;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(255, 68, 68, 0.3);
}

.base-button--outline {
    background: transparent;
    color: #2F4333;
    border: 2px solid #2F4333;
}

.base-button--outline:hover:not(:disabled) {
    background: #2F4333;
    color: white;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(47, 67, 51, 0.3);
}

.base-button--ghost {
    background: transparent;
    color: #2F4333;
}

.base-button--ghost:hover:not(:disabled) {
    background: rgba(47, 67, 51, 0.1);
    transform: translateY(-1px);
}

/* Loading state */
.base-button--loading {
    cursor: wait;
}

.base-button--loading span {
    opacity: 0;
}

/* Focus states */
.base-button:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(47, 67, 51, 0.3);
}

/* Active state */
.base-button:active:not(:disabled) {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

/* Responsive */
@media (max-width: 768px) {
    .base-button--large {
        padding: 14px 28px;
        font-size: 16px;
        min-height: 48px;
    }
    
    .base-button--medium {
        padding: 10px 20px;
        font-size: 15px;
        min-height: 40px;
    }
}
</style> 