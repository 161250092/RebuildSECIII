Vue.http.options.emulateJSON = true;//可以提交对象类型
//Vue实例
new Vue({
    el: '#app',
    data: {
        information:"This is a template",
        activeIndex: '1'
    },
    methods: {


    },


    //声明周期钩子函数-->在data和methods渲染结束后执行
    created() {

    }

});