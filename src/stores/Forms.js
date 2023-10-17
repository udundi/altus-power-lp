
import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useForms = defineStore('forms', () => {
  const state = reactive({
    contact: {
      data: null,
      error: null,
      loading: null,
      success: null
    }
  })
  

  async function contact (data) {
    state.contact.loading = true

    try {
      const res = await fetch('https://bnjx3642fumzl5ose6akxhgwiq0rpjcy.lambda-url.us-east-1.on.aws/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          event_name: 'CompleteRegistration',
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone
        })
      })

      const result = await res.json()
      console.log('result >>', result)

      state.contact.success = true
      // + '&refCode=' + data.refCode
      // window.location = '//app.altuspower.com/communitysolar/onboarding/availability?f=' + data.firstName + '&l=' + data.lastName + '&e=' + data.email + '&p=' + data.phone
    } catch (error) {
      console.log('error >>', error)
      state.contact.error = error
    }

    state.contact.loading = false
  }

  return {
    state,
    contact
  }
})
