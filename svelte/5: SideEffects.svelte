<script>
  let count;
  $: document.title = `count is ${count}`
</script>

<!-- svelte only recomputes when the count changes -->
<!-- these are called reactive declarations -->
<!-- more concise and reliable than React -->
<!-- easy to mess up dependency array and get unexpected results -->