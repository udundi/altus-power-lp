
<script lang='jsx'>
export default {
  setup () {
    return () => {
      return <div class='border-primary bg-primary/20 text-primary mb-3 rounded-md border p-3'>
        <div class='flex gap-2'>
          <Loader class='stroke-primary h-6 w-6 animate-spin' style='animation-duration: 1.5s'/>
          <span>Sending your request...</span>
        </div>
      </div>
    }
  }
}
</script>
