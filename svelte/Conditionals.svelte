<!-- Comparison 4: CONDITIONAL LOGIC -->
<script>
  let count = 0;
</script>

{#if count > 100}
  <p>big</p>
{:else if count > 50} 
  <p>medium</p>
{:else} 
  <p>small</p>
{/if}

<!-- more verbose but also more readable, especially with multiple conditions -->