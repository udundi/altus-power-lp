<script lang='jsx'>
import Faq from '../components/Faq.vue'

function Faqs () {
  const items = [
    {
      question: 'How do I sign up?',
      answer: 'Signing up is easy and only takes 5 minutes.  Just fill out this form and submit a copy of your current utility bill, if you qualify you`ll start receiving credits on your bill starting next month. On average, our customers receive 10-20% off their bills.'
    },
    {
      question: 'How does Altus work?',
      answer: 'Altus allows you to save on your electricity bills by tapping into solar energy, without the need of installing solar panels on your own property. We partner with local businesses, building solar farms on unused fields and rooftops, like your local grocery store or favorite retailer. The electricity generated goes into the utility grid and you receive credits on your monthly bill. That`s it.'
    },
    {
      question: 'Why do you need my payment info?',
      answer: 'When you receive solar credits on your utility bill, we bill you for a portion of those credits. So you are paying a bill from Altus each month, but you are still paying less on your utility bill. No upfront costs. No hidden fees.'
    },
    {
      question: 'Do I need to switch my utility when I sign-up? How does Altus connect?',
      answer: 'No, there`s no need to change your utility provider. When you sign up, Altus will automatically apply credits to your utility bill each month.'
    },
    {
      question: 'I rent my home, do I qualify?',
      answer: 'Yes! Altus is the perfect option for those who rent their home or apartment, as there`s no panel installation required.  All you need is your utility bill for immediate on savings on your monthly bill.'
    }
  ]
  return <div class='bg-metalic-lighter'>
    <div class='mx-auto max-w-5xl px-6 py-12 sm:py-16 lg:px-8 lg:py-20'>
      <div class='mx-auto max-w-4xl'>
        <h1 class='hidden sm:block font-gt-walsheim font-medium text-4xl'>Frequently Asked Questions</h1>
        <h1 class='block sm:hidden font-gt-walsheim font-medium text-3xl'>FAQs</h1>
        <div class='sm:pt-4'>
          <Faq items={items} />
        </div>
      </div>
    </div>
  </div>
}

export default {
  setup () {
    return () => {
      return <Faqs />
    }
  }
}
</script>