<!-- Comparison 5: SHARED STATE -->
<script>
    import { countStore } from "../store.js";
</script>

<button on:click={() => countStore.update(c => c + 1)}>
  count is {$countStore}
</button>

<!-- can reference this from store.js -->
<!-- eliminates so much complexity -->
<!-- use reactive data with surgical precision throughout app -->
<!-- zero boilerplate -->
<!-- knows when to automatically unsubscribe from data when there are no listeners -->