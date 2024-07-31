<template>
  <b-card>
    <b-card-title>Latest Users</b-card-title>
    <hr>
    <b-col
      v-for="user in latestUsers"
      :key="user.id"
      cols="12"
      class="mb-1 p-0"
    ><router-link
      :to="{name: 'show-user-customer', params: { id: user.id }}"
    ><div class="d-flex justify-content-between">
      <div class="d-flex"> <div><b-avatar
                             :src="user.avatar_url"

                             size="40"
                             class="mr-1"
                           /></div>
        <div><div class="userName">
               {{ user.name }}
             </div>
          <div class="subTitle">
            {{ user.mobile }}
          </div>
        </div></div>

      <div><div class="status">
             {{ user.status }}
           </div>
        <div class="subTitle">
          Status
        </div>
      </div>
    </div>
    </router-link>
    </b-col>
  </b-card>
</template>

<script>

export default {
  props: {
    latestUsers: {
      type: Array,
      default: () => [],
    },
  },

}
</script>

  <style lang="scss" scoped>
  a{
    color: #6e6b7b !important;
  }
  .userName{
    color: #0665f1;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
  }
  .total,.status{
    color: #424049;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;

  }
  .subTitle{
    color: rgb(87, 84, 97);
    font-size: 12px;
  }
  </style>>
