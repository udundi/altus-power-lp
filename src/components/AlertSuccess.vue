
<script lang='jsx'>
export default {
  setup () {
    return () => {
      return <div class='desktop:flex'>
        <div class='flex w-full items-center'>
          <div class='grid w-full text-center'>
            <lottie-player class='mx-auto w-72' src='lottie/confetti.json' loop autoplay/>
            <h1 class='text-jw-linear-lg font-elza mb-2 whitespace-nowrap font-bold'>Thank you!</h1>
            <h5 class='px-24 text-xl'>We appreciate your submission and will get in touch shortly.</h5>
          </div>
        </div>
      </div>
    }
  }
}
</script>
