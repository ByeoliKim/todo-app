<template>
    <div>
        <todo-item />
        <todo-creator />
    </div>
</template>

<script>
import lowdb from 'lowdb'
import LocalStorage from 'lowdb/adapters/LocalStorage'
import TodoCreator from './TodoCreator'
import TodoItem from './TodoItem'

export default {
  components: {
    TodoCreator,
    TodoItem
  },
  data () {
    return {
      db: null
    }
  },
  created () {
    this.initDB()
  },
  methods: {
    initDB () {
      const adapter = new LocalStorage('todo-app')  //DB
      this.db = lowdb(adapter)

      console.log(this.db)
      //local DB 초기화
      this.db
        .defaults({ todos: []
        })
        .write()
    }
  }
}
</script>
