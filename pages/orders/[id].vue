<script lang="ts" setup>
import dayJs from "dayjs";
const { data } = useAuth();
const { params } = useRoute();
const { id } = params;
const referenceId = ref(`${data.value?.user?.email}${data.value?.user?.name}`);
console.log(id);

const { data: payment } = await useAsyncData("getPayment", async () => {
  return await $fetch("/api/getPayment", {
    method: "POST",
    body: { orderId: id, referenceId: referenceId },
  });
});
console.log(payment.value?.payment);
</script>

<template>
  <div class="h-screen flex" v-if="typeof payment?.payment !== 'boolean'">
    <div class="flex flex-col">
      <span>{{ payment?.payment.id }}</span>
      <span>{{
        dayJs(payment?.payment.created * 1000).format("DD-MM-YYYY HH:mm")
      }}</span>
      <span>{{ payment?.payment.amount_subtotal / 100 }}</span>
      <span>{{ payment?.payment.customer_details?.address?.city }}</span>
      <span>{{ payment?.payment.customer_details?.address?.country }}</span>
      <span>{{ payment?.payment.customer_details?.address?.line1 }}</span>
      <span>{{ payment?.payment.customer_details?.address?.line2 }}</span>
      <span>{{ payment?.payment.customer_details?.address?.postal_code }}</span>
      <span>{{ payment?.payment.customer_details?.email }}</span>
      <span>{{ payment?.payment.customer_details?.name }}</span>
      <span>{{ payment?.payment.payment_status }}</span>
      <div
        :key="i"
        v-for="(item, i) in payment?.payment.line_items?.data"
      ></div>
    </div>
    <div></div>
  </div>
  <div v-else>You have no access</div>
</template>
