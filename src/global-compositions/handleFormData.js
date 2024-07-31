export default function handleFormData() {
  const formData = new FormData()

  const setFormData = data => {
    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach(ele => {
          if (ele !== null) {
            formData.append(`${key}[]`, ele)
          }
        })
      } else if (value !== null) {
        formData.append(key, value)
      }
    })
  }

  return {
    formData,
    setFormData,
  }
}
