<template>
  <div class="todoapp">
    <Header @add="addFn"></Header>
    <Main :list="showList" @del="delFn"></Main>
    <Footer :count="count" @changeDate="changeDate" @del="del"></Footer>
  </div>
</template>

<script>
import Header from '@/components/TodoHeader.vue'
import Main from '@/components/TodoMain.vue'
import Footer from '@/components/TodoFooter.vue'
export default {
  data() {
    return {
      list: (localStorage.getItem('todoList')) && JSON.parse(localStorage.getItem('todoList')) || [],
      getSel: 'all'
    }
  },
  components: { Header, Main, Footer },

  methods: {
    addFn(val) {
      this.list.push({
        name: val,
        isDone: false,
        id: this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1
      })

    },
    delFn(id) {
      let index = this.list.findIndex(ele => ele.id = id)
      this.list.splice(index, 1)
    },

    changeDate(val) {
      this.getSel = val
    },
    del() {
      this.list = this.list.filter(ele => ele.isDone == false)
    }
  },

  computed: {
    count() {
      return this.list.filter(ele => !ele.isDone).length
    },

    showList() {
      if (this.getSel == 'no') {
        return this.list.filter(ele => !ele.isDone)
      } else if (this.getSel == 'yes') {
        return this.list.filter(ele => ele.isDone)
      } else {
        return this.list
      }
    },

  },

  watch: {
    list: {
      deep: true,
      handler(val) {
        // console.log(val);
        localStorage.setItem('todoList', JSON.stringify(val || []))
      }
    }
  },
}
</script>

<style>
</style>