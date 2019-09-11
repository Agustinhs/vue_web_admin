export default {
  data () {
    return {
      total: 0,
      page: {
        pageSize: 10,
        pageIndex: 1
      }
    }
  },
  methods: {
    handleSizeChange (size) {
      this.page.pageSize = size
      this.initData()
    },
    handleCurrentChange (index) {
      this.page.pageIndex = index
      this.initData()
    }
  }
}
