Vue.http.options.emulateJSON = true;//可以提交对象类型
//Vue实例
new Vue({
    el: '#app',
    data: {
        information:"This is a worker",
        menuIndex: '0',
        subMenuIndex: '0',
        worker: {
            ID: 'A2GCPZ6HVH27EN',
            name: 'worker1',
            cash: 100,
            prestige: 100
        },
        taskList: [{
            requester: '发布者1',
            type: '整体标注',
            description: '任务1',
            price: '0.05'
        }, {
            requester: '发布者2',
            type: '标框标注',
            description: '任务2',
            price: '0.035'
        }]
    },
    methods: {


    },


    //声明周期钩子函数-->在data和methods渲染结束后执行
    created() {

    }

});