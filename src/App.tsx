
import { defineComponent,onMounted } from "vue";
import Demo from "./views/demo.tsx";
export default defineComponent({
  name:'App',
  props:{},
  setup(){
    onMounted(()=>{
        console.log(11111111);
        
    })
    return ()=>{
      return (
      <Demo></Demo>
      )
    }
  },

})