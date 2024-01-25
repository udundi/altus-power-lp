
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
      const res = await fetch('https://e99i3hntn7.execute-api.us-east-1.amazonaws.com/default/altusPowerAnalytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({
          event_name: 'Subscribe',
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
      window.location = '//join.altuspower.com/communitysolar/onboarding/availability?f=' + data.firstName + '&l=' + data.lastName + '&e=' + data.email + '&p=' + data.phone
    } catch (error) {
      console.log('error >>', error)
      console.log('error.message >>', error.message)
      console.log('error.status >>', error.status)
      state.contact.error = error
    }

    state.contact.loading = false
  }

  return {
    state,
    contact
  }
})
