
<script lang='jsx'>
export default {
  setup () {
    return () => {
      return <div class='mb-3 rounded-md border border-red-600 bg-red-200 p-3 text-red-600'>
        <div class='flex gap-2'>
          <AlertCircle class='h-6 w-6 stroke-red-600'/>
          <span>There was a problem processing your request.</span>
        </div>
      </div>
    }
  }
}
</script>
