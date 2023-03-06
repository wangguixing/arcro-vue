/*
 * @Author: guixing-wang 1163260785@qq.com
 * @Date: 2023-03-05 22:46:49
 * @LastEditors: guixing-wang 1163260785@qq.com
 * @LastEditTime: 2023-03-05 22:59:14
 * @FilePath: \myPages\src\views\demo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { onMounted } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name:'Demo',
  props:{},
  setup(){
    onMounted(()=>{
      console.log(111);
    })
    return ()=>{
     return(
      <>
      <div>121131</div>
      </>
     )
    }
  }
})