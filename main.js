const { createApp } = Vue

  createApp({
    data() {
      return {
        newTask: {
            text: " ",
            done: false
        },
        tasks: [
            {
                text: "Fare l'esercizio",
                done: false
            }
        ]
      }
    },
    methods: {
        addTask() {

            if(this.newTask.text !== " "){
                this.tasks.unshift(this.newTask)
            }

            this.newTask = {
                text: " ",
                done: false
            }
        },
        taskDone(index) {
            this.tasks[index].done = true
        },
        removeTask(index)  {
            this.tasks.splice(index, 1)
        }
    }
  }).mount('#app')