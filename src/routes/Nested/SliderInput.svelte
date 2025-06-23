<script>
    export let id;
    export let min;
    export let max;
    export let step;
    export let inputVar;
    export let modalMessage;
    export let callback = null;
    export let sliderLabel = null;
    export let disabled = false;

    import Modal from './Modal.svelte';

    let showModal = false;

</script>

<div class="w-72 m-2">
    <div class="flex flex-row flex-wrap justify-end mr-[70px] -mt-[16px]">
        <button class="mt-4" on:click={() => (showModal = true)}> 
          <span class="sr-only">Show information for {id}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class=" size-5 -mt-px">
            <path fill-rule="evenodd"
              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
              clip-rule="evenodd">
            </path>
          </svg> 
        </button>
    
        <Modal bind:showModal>
          <h2 
            class="m-top-5 mt-3 text-blue-gray-500" 
            slot="header">
            {id}
          </h2>
          <div class="flex ms-auto inline-flex m-8">
            <p class="font-sans text-sm font-normal text-blue-gray-500">
              {modalMessage}
            </p>
          </div>
        </Modal>
    </div>
    <div class="relative w-full min-w-[200px] h-10">
        <!-- Slider-->
        <input
            {id}
            type="range"
            {min}
            {max}
            {step}
            class="peer w-3/4 h-full font-sans bg-transparent text-sm appearance-none -mt-2 {disabled ? 'disable' : ''} "
            bind:value={inputVar}
            on:input={callback}
        />

        <!-- Input Box -->
        <input
            {id}
            type="number"
            {min}
            {max}
            {step}
            class="peer w-1/4 h-3/4 bg-transparent text-blue-gray-700 font-sans font-normal outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200
            border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 focus:border-purple-500 placeholder:text-blue-gray-100 absolute text-[11px] -mr-1 bottom-0 right-0 -top-0.5 -mt-2 {disabled ? 'disable' : ''}"
            bind:value={inputVar}
            on:input={callback}
        />

        <!-- Variable Label -->
        <label
            for={id} 
            class="flex absolute left-0 font-normal truncate leading-tight -top-1.5 text-[11px] -mt-2"
            >{sliderLabel || id}
        </label>

        <!-- Slider Value -->
        <!--
        <span class="absolute text-[11px] -mr-1 bottom-0  right-0 -top-1.5 -mb-6">{inputVar}</span>
        -->
    </div>
</div>


<style>
  input[type=range]::-webkit-slider-thumb {
      appearance: none;
      height: 20px;
      width: 20px;
      border-radius: 9999px;
      background-color: rgb(168 85 247);
    }
  
    input[type=range]::-webkit-slider-runnable-track {
        background-color: rgb(243 244 246);
        border-radius: 9999px;
    }


    input[type=range]::-moz-range-thumb {
        width: 20px;
        height: 20px;
        border-radius: 9999px;
        background-color: rgb(168 85 247);
        border-style: none;
        outline: 2px solid transparent;
        outline-offset: 2px;
		--tw-shadow: 0 0 #0000;
    	--tw-shadow-colored: 0 0 #0000;
    	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

	input[type=range]::-moz-range-track {
        background-color: rgb(243 244 246);
        border-radius: 9999px;
		height: 20px;
    }
</style>