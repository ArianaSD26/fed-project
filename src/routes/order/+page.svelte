<script>
	import { enhance } from '$app/forms';
    let { form, data } = $props();
    let menu = data.menu;
</script>

<svelte:head>
	<title>Order | Workplace Lunch Deliveries</title>
</svelte:head>

<main>
    {#if data.isLoggedIn}
        <div class="flex flex-col justify-center items-center p-20 text-[#4a2f28]">
            <h2 class="text-3xl text-center">Order</h2>
            <div class="w-125 p-5">
                {#if form?.message}
                    <p class="text-center text-red-500">{form.message}</p>
                    <br>
                {/if}
                <form method="post" use:enhance>
                    <table class="w-full truncate rounded-lg shadow-md text-center">
                        <thead>
                            <tr>
                                <th class="p-5 bg-[#8bb393] text-[#28382b]">Food Item</th>
                                <th class="p-5 bg-[#8bb393] text-[#28382b]">Price</th>
                                <th class="p-5 bg-[#8bb393] text-[#28382b]">Quantity</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            {#each menu as food}
                                <tr class="odd:bg-white even:bg-gray-50">
                                    <td class="p-5">{food.name}</td>
                                    <td class="p-5">€{food.price}</td>
                                    <td class="p-5"><input type="number" name={food.id + '_quantity'} min="0" placeholder="0" class="max-w-25 shadow-md px-2 py-1" /></td>
                                </tr>
                            {/each}
                        </tbody>
                    </table>
                    
                    {#if data.user?.category === "Premium"}
                        <div class="flex flex-col justify-center items-center m-3 text-[#4a2f28]">
                            <label for="comment" class="font-bold">Dietary Preferences</label>
                            <textarea id="comment" name="comment" rows="4" cols="40" class="border-2 rounded-md p-2"></textarea>
                        </div>
				    {:else}
                        <div class="p-5 text-[#4a2f28]">
                            <p class="font-bold">Dietary Preferences</p>
                            <input type="checkbox" id="vegetarian" name="check" value="vegetarian">
                            <label for="vegetarian">Vegetarian</label><br>

                            <input type="checkbox" id="vegan" name="check" value="vegan">
                            <label for="vegan">Vegan</label><br>

                            <input type="checkbox" id="gluten" name="check" value="gluten-free">
                            <label for="gluten">Gluten-Free</label><br>

                            <input type="checkbox" id="dairy" name="check" value="dairy-free">
                            <label for="dairy">Dairy-Free</label><br>

                            <input type="checkbox" id="nut" name="check" value="nut-free">
                            <label for="nut">Nut-Free</label><br>
                        </div>
                    {/if}
                    
                    <button class="block w-full border rounded-sm my-5 p-2 hover:underline">Checkout</button>
                </form>
            </div>
        </div>
    {:else}
        <div class="flex flex-col justify-center items-center p-20 text-[#4a2f28]">
            <h2 class="text-3xl text-center pb-5">Register or Log in</h2>
            <p>Please <a href="/register" class="underline hover:text-[#bd8b7e]">register</a> or <a href="/login" class="underline hover:text-[#bd8b7e]">login</a> to place an order. Thank you!</p>
        </div>
    {/if}
</main>