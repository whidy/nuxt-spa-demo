<template>
  <section class="container">
    <div class="demo-wrap">
      <app-logo/>
      <h1 class="title">
        nuxt-spa-demo
      </h1>
      <h2 class="subtitle">
        Nuxt & ElementUI form has file submit with axios
      </h2>
      <div class="content">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="身份证正面">
            <el-upload 
              action="" 
              :http-request="handleFile" 
              :multiple="false" 
              :limit="1" 
              :on-exceed="handleExceed" 
              :file-list="fileList">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
export default {
  components: {
    AppLogo
  },
  data() {
    return {
      form: {
        name: '',
        region: ''
      },
      fileList: []
    }
  },
  methods: {
    handleFile(response) {
      this.fileList.push(response.file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`最多上传 ${files.length} 个文件`)
    },
    onSubmit() {
      let form = this.$refs['form'].$el
      let formData = new FormData(form)
      formData.append('name', this.form.name)
      formData.append('region', this.form.region)
      formData.append('file', this.fileList[0])
      this.$axios
        .$post('/api/active', formData)
        .then(response => {
          if (response.code === 200) {
            // 提交成功将要执行的代码
          }
        })
        .catch(function(error) {
          // console.log(error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.demo-wrap {
  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system,
      BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      sans-serif;
    display: block;
    font-weight: 300;
    font-size: 28px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 20px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
}
.content {
  text-align: left;
}
</style>