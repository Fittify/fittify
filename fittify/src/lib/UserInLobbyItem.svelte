<script>
    export let isAuthor;
    export let username;
</script>

{#if username}
<div class="block pt-2">
    <span class="icon-text is-size-1">
        <span class="icon">
            <i class="fas fa-duotone fa-circle"></i>
        </span>
        <span class="is-size-4">
            &nbsp;&nbsp;{username}
            {#if isAuthor}
                &nbsp;| Lobby creator
            {/if}
        </span>
    </span>
</div>
{/if}