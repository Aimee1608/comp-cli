import <%=componentName%> from './index.vue'

<%=componentName%>.install = function (Vue) {
Vue.component(<%=componentName%>.name, <%=componentName%>)
}

export default <%=componentName%>
