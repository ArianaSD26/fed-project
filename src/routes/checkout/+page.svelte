<script>
    import { calculateSubtotal, calculateTax, calculateTotal } from '$lib/util/useful_functions.js';

	let { data } = $props();
    let items = data.orderItems;
    
    let subtotal = calculateSubtotal(items);
    let tax = calculateTax(subtotal);
    let total = calculateTotal(subtotal, tax);
</script>

<svelte:head>
	<title>Checkout | Workplace Lunch Deliveries</title>
</svelte:head>

<main>
	<div class="flex flex-col justify-center items-center p-20 text-[#4a2f28]">
        <h2 class="text-3xl text-center">Checkout</h2>
        <div class="w-125 p-5">
            <table class="w-full truncate rounded-lg shadow-md text-left">
                <thead>
                    <tr>
                        <th class="p-3 bg-[#8bb393] text-[#28382b]">Food Item</th>
                        <th class="p-3 bg-[#8bb393] text-[#28382b]">Price</th>
                        <th class="p-3 bg-[#8bb393] text-[#28382b]">Quantity</th>
                        <th class="p-3 bg-[#8bb393] text-[#28382b]"></th>
                    </tr>
                </thead>

                <tbody>
                    {#each items as item}
                        <tr class="odd:bg-white even:bg-gray-50 text-sm">
                            <td class="p-3">{item.name}</td>
                            <td class="p-3">€{item.price}</td>
                            <td class="p-3">{item.quantity}</td>
                            <td class="p-3">€{(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    {/each}
                    <tr class="odd:bg-white even:bg-gray-50 font-bold border-t text-sm">
                        <td colspan="3" class="p-3 text-left">Subtotal</td>
                        <td class="p-3">€{subtotal.toFixed(2)}</td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-50 font-bold text-sm">
                        <td colspan="3" class="p-3 text-left">Tax (10%)</td>
                        <td class="p-3">€{tax.toFixed(2)}</td>
                    </tr>
                    <tr class="odd:bg-white even:bg-gray-50 font-bold border-t text-sm">
                        <td colspan="3" class="p-3 text-left">Total</td>
                        <td class="p-3">€{total.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
            <form method="post" use:enhance class="pt-5">
                <label>Delivery Address</label>
                <input type="text" name="address" required class="w-full border rounded-sm my-1 p-2" /><br>
                <p>Payment Type</p>
                <input type="radio" name="payment" value="card" required />
                <label for="card">Card</label><br>
                <input type="radio" name="payment" value="cash" required />
                <label for="cash">Cash</label>
                <button class="block w-full border rounded-sm my-5 p-2 hover:underline">Place Order</button>
            </form> 
        </div>
    </div>
</main>