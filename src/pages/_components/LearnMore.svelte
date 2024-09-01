<script lang="ts">
  import { typewriterFinished } from "@data/client/stores";
  import lambdinox from "@assets/images/lambdinox.svg"
</script>

{#if $typewriterFinished}
  <div class="flex flex-col items-center justify-center text-white">
    <a href="https://anemo.ai" target="_blank" class="relative inline-flex h-32 w-32 overflow-hidden rounded-full p-[2px] hover:outline-none hover:ring-2 hover:ring-slate-400 hover:ring-offset-2 hover:ring-offset-slate-50">
      <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />


      <span class="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl">
        <img src={lambdinox} alt="lambdinox" class="rounded-full h-fit w-fit" />
      </span>
    </a>

  </div>
  <br />
{/if}

<style>

  a {
    /* Underline */
    text-decoration: underline;

    /* Underline offset */
    text-underline-offset: 3px;
  }
</style>
