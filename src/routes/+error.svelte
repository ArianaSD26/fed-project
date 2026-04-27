<script>
    import { page } from '$app/state';
    const statusCode = page.status;
</script>

{#if page.error}
    {#if statusCode == 404}
        <div class="error-container flex flex-col justify-center items-center p-20 text-[#4a2f28]">
            <h1 class="text-3xl text-center pb-5">Page Not Found (Error 404)</h1>
            <p>The page you’re looking for doesn’t exist or has been moved.</p>
            <a href="/" class="home-link hover:underline">Go back to homepage</a>
        </div>
    {:else}
        <div class="error-container flex flex-col justify-center items-center p-20 text-[#4a2f28]">
        <h1 class="text-3xl text-center pb-5">Oops! Something went wrong</h1>
        <p>Status Code: {statusCode}</p>
        <p>Message: {page.error.message}</p>
        </div>
    {/if}
{/if}