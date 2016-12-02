<template>
<div>
  <el-button type="text" @click="dialogFormVisible = true">
    open a Form nested Dialog</el-button>

  <el-dialog title="Feedback" v-model="dialogFormVisible">
    <el-row>
      <el-progress :percentage="100" status="success"></el-progress>
    </el-row>
    <el-form :model="form">
      <el-form-item label="Reaction" :label-width="formLabelWidth">
        <el-rate v-model="reaction" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
      </el-form-item>
      <el-form-item label="Rating" :label-width="formLabelWidth">
        <el-rate v-model="rating" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
      </el-form-item>
      <el-button>Poor audio quality</el-button>
      <el-button>Watermark</el-button>
      <el-button>Incomplete video</el-button>
      <el-button>Hardcoded subtitles</el-button>
    </el-form>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">Cancel</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
  </span>
  </el-dialog>
</div>
</template>
<script>
export default {
  data() {
    return {
      reaction: null,
      rating: null,
      gridData: [{
        date: '2016-05-02',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-04',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-01',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }, {
        date: '2016-05-03',
        name: 'John Smith',
        address: 'No.1518,  Jinshajiang Road, Putuo District'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  }
}
</script>
