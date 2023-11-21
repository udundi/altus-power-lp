
<script lang='jsx'>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric, minLength, maxLength } from '@vuelidate/validators'
import { useForms } from '@/stores/Forms.js'

export default {
  name: 'EmailForm',
  props: {
    exclude: {
      type: Array,
      default: () => []
    },
    methodName: {
      type: String,
      default: 'contact'
    },
    formType: {
      type: String,
      default: 'hero'
    }
  },
  setup (props) {
    const forms = useForms()

    const data = reactive({
      formType: props.formType, // not reactive
      firstName: '',
      lastName: '',
      // email: '',
      phone: '',
      // zip: ''
      // receiveEmails: true
    })

    const rules = {
      firstName: { required },
      lastName: { required },
      email: { required, email, minLength: minLength(5) }
      // phone: { required }
      // zip: { required, numeric, minLength: minLength(5), maxLength: maxLength(5) }
      // receiveEmails: { required }
    }

    const v$ = useVuelidate(rules, data)

    function submit () {
      v$.value.$validate()
      console.log(v$.value)

      if (!v$.value.$error) {
        // Submit the form data
        forms[props.methodName]({ ...data })
        console.log('Form submitted:', data)
      } else {
        console.log('Form validation failed')
        console.log(v$.value.$error)
      }
    }

    // const render = fieldName => !props.exclude.includes(fieldName)

    return () => {
      const { data: error, loading, success } = forms.state['contact']

      const conditionalClass = (props.formType == 'hero') ? 'text-white' : ''

      return <div>
        {success && <AlertSuccess/>}
        {error && <AlertError/>}
        {loading && <AlertLoading/>}
        {!success && (
          <form onSubmit={event => { event.preventDefault(); submit(event) }} class={data.formType}>
            <div class='mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6'>

              {/* <div class='sm:col-span-3'>
                <label for='phone' class={`block text-sm font-regular leading-6 font-roboto ${conditionalClass}`}>Zip code*</label>
                <div class='mt-2'>
                  {data.formType == 'hero' ?
                  <input id='zip' name='zip' type='zip' autocomplete='postal-code' v-model={data.zip} onBlur={() => v$.value.zip.$touch()} class='block w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6' />
                  :
                  <input id="zip-alt" name="zip-alt" type="zip" autocomplete="postal-code" v-model={data.zip} onBlur={() => v$.value.zip.$touch()} class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-roboto" />
                  }
                  {v$.value.zip.$error && (
                    <div>
                      {v$.value.zip.required.$invalid && <span class='block text-xs italic text-red-500 mt-2'>Zip code is required</span>}
                      {v$.value.zip.$invalid && <span class='text-xs italic text-red-500'>Please enter a valid zip code</span>}
                    </div>
                  )}
                </div>
              </div> */}

              <div class='sm:col-span-3'>
                <label for='first-name' class={`block text-sm font-regular leading-6 font-roboto ${conditionalClass}`}>First Name*</label>
                <div class='mt-2'>
                  {data.formType == 'hero' ?
                  <input type='text' name='first-name' id='first-name' autocomplete='given-name' v-model={data.firstName} onBlur={() => v$.value.firstName.$touch()} class='block w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6' />
                  : 
                  <input type='text' name='first-name-alt' id='first-name-alt' autocomplete='given-name' v-model={data.firstName} onBlur={() => v$.value.firstName.$touch()} class='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-roboto' />
                  }
                  {v$.value.firstName.$error && <span class='text-xs italic text-red-500'>First name is required</span>}
                </div>
              </div>

              <div class='sm:col-span-3'>
                <label for='last-name' class={`block text-sm font-regular leading-6 font-roboto ${conditionalClass}`}>Last Name*</label>
                <div class='mt-2'>
                  {data.formType == 'hero' ?
                  <input type='text' name='last-name' id='last-name' autocomplete='family-name' v-model={data.lastName} class='block w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6' />
                  :
                  <input type='text' name='last-name-alt' id='last-name-alt' autocomplete='family-name' v-model={data.lastName} class='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-roboto' />
                  }
                  {v$.value.lastName.$error && <span class='text-xs italic text-red-500'>Last name is required</span>}
                </div>
              </div>

              <div class='sm:col-span-3'>
                <label for='email' class={`block text-sm font-regular leading-6 font-roboto ${conditionalClass}`}>Email Address*</label>
                <div class='mt-2'>
                  {data.formType == 'hero' ?
                  <input id='email' name='email' type='email' autocomplete='email' v-model={data.email} onBlur={() => v$.value.email.$touch()} class='block w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6' />
                  :
                  <input id="email-alt" name="email-alt" type="email" autocomplete="email" v-model={data.email} onBlur={() => v$.value.email.$touch()} class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-roboto" />
                  }
                  {v$.value.email.$error && (
                    <div>
                      {v$.value.email.required.$invalid && <span class='text-xs italic text-red-500'>Email address is required</span>}
                      {v$.value.email.email.$invalid && <span class='text-xs italic text-red-500'>Please enter a valid email address</span>}
                    </div>
                  )}
                </div>
              </div>

              <div class='sm:col-span-3'>
                <label for='email' class={`block text-sm font-regular leading-6 font-roboto ${conditionalClass}`}>Phone Number</label>
                <div class='mt-2'>
                  {data.formType == 'hero' ?
                  <input id='phone' name='phone' type='phone' autocomplete='phone' v-model={data.phone} onBlur={() => v$.value.phone.$touch()} class='block w-full rounded-md border-0 bg-white/5 py-1.5 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6' />
                  :
                  <input id="phone-alt" name="phone-alt" type="phone" autocomplete="phone" v-model={data.phone} onBlur={() => v$.value.phone.$touch()} class="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 font-roboto" />
                  }
                  {/* {v$.value.phone.$error && (
                    <div>
                      {v$.value.phone.required.$invalid && <span class='text-xs italic text-red-500'>Phone number is required</span>}
                    </div>
                  )} */}
                </div>
              </div>
            </div>

            <div class='grid gap-3'>
              <button type='submit' class='bg-altus-green text-white px-16 py-4 mt-8 mb-4 w-full sm:w-72 rounded-full tracking-wider uppercase font-roboto font-bold text-sm'>Join Today</button>
              <p class={`text-xs ${conditionalClass}`}>By submitting your contact information, you consent to receiving emails and text messages from Altus Power Inc. about our products and services. You may unsubscribe from these communications at any time. For information on how to unsubscribe, as well as our privacy practices and commitment to protecting your privacy, please review our <a class='underline' target='_blank' href='//www.altuspower.com/privacy-policy'>Privacy Policy</a>.</p>
            </div>
          </form>
        )}
      </div>
    }
  }
}
</script>
