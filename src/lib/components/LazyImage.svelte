<script>
  import { onMount } from 'svelte';
  
  export let src;
  export let alt = '';
  export let width = undefined;
  export let height = undefined;
  export let loading = 'lazy';
  export let decoding = 'async';
  export let fetchpriority = undefined;
  export let sizes = undefined;
  export let srcset = undefined;
  export let aspectRatio = undefined;
  
  let imageRef;
  let loaded = false;
  let error = false;
  
  function handleLoad() {
    loaded = true;
  }
  
  function handleError() {
    error = true;
  }
  
  // Compute aspect ratio style if provided
  $: aspectRatioStyle = aspectRatio ? `aspect-ratio: ${aspectRatio};` : '';
</script>

<div 
  class="lazy-image-wrapper" 
  class:loaded 
  class:error
  style={aspectRatioStyle}
>
  <img
    bind:this={imageRef}
    {src}
    {alt}
    {width}
    {height}
    {loading}
    {decoding}
    {fetchpriority}
    {sizes}
    {srcset}
    on:load={handleLoad}
    on:error={handleError}
    class="lazy-image"
    class:visible={loaded}
  />
  
  {#if !loaded && !error}
    <div class="placeholder">
      <div class="pulse-loader"></div>
    </div>
  {/if}
  
  {#if error}
    <div class="error-placeholder">
      <slot name="fallback">
        <span class="fallback-icon">📷</span>
      </slot>
    </div>
  {/if}
</div>

<style>
  .lazy-image-wrapper {
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%);
    width: 100%;
    height: 100%;
  }
  
  .lazy-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
  
  .lazy-image.visible {
    opacity: 1;
  }
  
  .placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .pulse-loader {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--aqua-primary, #2DA9E1) 0%, var(--aqua-secondary, #1B6FAE) 100%);
    animation: pulse 1.5s ease-in-out infinite;
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 0.4;
      transform: scale(0.8);
    }
    50% {
      opacity: 0.8;
      transform: scale(1);
    }
  }
  
  .error-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%);
  }
  
  .fallback-icon {
    font-size: 2rem;
    opacity: 0.5;
  }
  
  .loaded .placeholder {
    display: none;
  }
</style>
