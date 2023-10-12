
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
      // const res = await fetch(import.meta.env.VITE_EMAIL_URL, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({
      //     formType: data.formType,
      //     firstName: data.firstName,
      //     lastName: data.lastName,
      //     email: data.email,
      //     // receiveEmails: data.receiveEmails ? 'Yes' : 'No'
      //   })
      // })

      // const result = await res.json()
      // console.log('result >>', result)

      // state.contact.success = true
      window.location = '//qa.altuspower.com/communitysolar/onboarding/availability?f=' + data.firstName + '&l=' + data.lastName + '&e=' + data.email + '&z=' + data.zip
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
