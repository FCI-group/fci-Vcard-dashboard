/* eslint-disable prefer-destructuring */
export default {
  data() {
    return {
      preview: null,
      image: null,
    }
  },
  methods: {
    onChange(e) {
      this.userForm.profile_picture = e.target.files[0]
      if (this.userForm.logo) {
        this.userForm.logo = e.target?.files[0]
      }
      if (this.userForm.photo) {
        this.userForm.photo = e.target.files[0]
      }
      // console.log(e)
      const input = e.target
      if (input.files) {
        const reader = new FileReader()
        reader.onload = er => {
          this.preview = er.target.result
        }
        this.image = input.files[0]
        reader.readAsDataURL(input.files[0])
      }
    },
  },
}
